/**
 * microCMS データ移行スクリプト
 *
 * 既存の静的データ（creatives.ts）を microCMS に一括登録するスクリプト
 *
 * 実行方法:
 *   tsx scripts/migrate-to-microcms.ts [--dry-run]
 *
 * オプション:
 *   --dry-run  : 実際のAPIコールを行わず、動作確認のみ実行
 */

import * as dotenv from 'dotenv';
import * as fs from 'fs/promises';
import { creativesData } from '../src/data/creatives';
import type { Creative, CreativeCategory } from '../src/types/index';

// 環境変数読み込み
dotenv.config();

const API_ENDPOINT = process.env.VITE_MICROCMS_API_ENDPOINT;
const API_KEY = process.env.VITE_MICROCMS_API_KEY;
const WRITE_API_KEY = process.env.VITE_MICROCMS_WRITE_API_KEY; // 書き込み用APIキー

// ドライランモードの場合は環境変数チェックをスキップ
const isDryRunMode = process.argv.includes('--dry-run');

if (!isDryRunMode && (!API_ENDPOINT || !API_KEY || !WRITE_API_KEY)) {
  console.error('エラー: 環境変数が設定されていません');
  console.error('必要な環境変数: VITE_MICROCMS_API_ENDPOINT, VITE_MICROCMS_API_KEY, VITE_MICROCMS_WRITE_API_KEY');
  console.error('\nドライランモードで実行する場合は --dry-run フラグを使用してください');
  process.exit(1);
}

// i18n翻訳データを読み込む
async function loadTranslations(locale: 'ja' | 'en'): Promise<Record<string, unknown>> {
  const filePath = path.join(process.cwd(), 'locales', `${locale}.json`);
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

// 翻訳キーから値を取得
function getTranslation(translations: Record<string, unknown>, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations;

  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // キーが見つからない場合はキー自体を返す
    }
  }

  return typeof value === 'string' ? value : key;
}

// microCMS API クライアント（GET）
async function fetchMicroCMS<T>(endpoint: string): Promise<T> {
  const url = `${API_ENDPOINT}/${endpoint}`;

  const response = await fetch(url, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY as string,
    },
  });

  if (!response.ok) {
    throw new Error(`microCMS API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// microCMS API クライアント（POST）
async function postMicroCMS<T>(endpoint: string, data: unknown): Promise<T> {
  const url = `${API_ENDPOINT}/${endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-MICROCMS-API-KEY': WRITE_API_KEY as string,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`microCMS API POST Error: ${response.status} ${response.statusText}\n${errorText}`);
  }

  return response.json();
}

// 大カテゴリ一覧を取得
async function fetchMajorCategories(): Promise<Array<{ id: string; name: string; nameEn?: string }>> {
  interface CategoryResponse {
    contents: Array<{
      id: string;
      name: string;
      nameEn?: string;
      type: string[];
    }>;
  }

  const response = await fetchMicroCMS<CategoryResponse>('categories?limit=100');

  return response.contents
    .filter((cat) => cat.type.includes('major'))
    .map((cat) => ({ id: cat.id, name: cat.name, nameEn: cat.nameEn }));
}

// 小カテゴリを生成・登録
async function createMinorCategory(
  name: string,
  nameEn: string,
  isDryRun: boolean
): Promise<string> {
  interface CreateCategoryResponse {
    id: string;
  }

  const data = {
    name,
    nameEn,
    type: ['minor'],
  };

  if (isDryRun) {
    const mockId = `mock-category-${Date.now()}`;
    console.log(`  [DRY-RUN] 小カテゴリ作成: ${name} (${nameEn}) - Mock ID: ${mockId}`);
    return mockId;
  }

  const response = await postMicroCMS<CreateCategoryResponse>('categories', data);
  console.log(`  ✓ 小カテゴリ作成: ${name} (${nameEn}) - ID: ${response.id}`);
  return response.id;
}

// タグから小カテゴリIDマップを作成
async function createMinorCategoriesFromTags(
  allTags: Set<string>,
  isDryRun: boolean
): Promise<Map<string, string>> {
  const minorCategoryMap = new Map<string, string>();

  console.log('\n小カテゴリを作成中...');

  for (const tag of allTags) {
    try {
      const categoryId = await createMinorCategory(tag, tag, isDryRun); // 英語名も同じタグ名を使用
      minorCategoryMap.set(tag, categoryId);
    } catch (err) {
      console.error(`  ✗ 小カテゴリ作成失敗: ${tag}`, err);
    }
  }

  return minorCategoryMap;
}

// 作品データを変換して投稿
async function migrateCreative(
  creative: Creative,
  category: CreativeCategory,
  majorCategories: Array<{ id: string; name: string; nameEn?: string }>,
  minorCategoryMap: Map<string, string>,
  jaTranslations: Record<string, unknown>,
  enTranslations: Record<string, unknown>,
  isDryRun: boolean
): Promise<void> {
  // 大カテゴリIDを取得
  const majorCategory = majorCategories.find(
    (cat) => cat.name === category || cat.nameEn === category
  );

  if (!majorCategory) {
    throw new Error(`大カテゴリが見つかりません: ${category}`);
  }

  // 小カテゴリIDの配列を取得
  const minorCategoryIds = creative.tags
    ?.map((tag) => minorCategoryMap.get(tag))
    .filter((id): id is string => id !== undefined) || [];

  // タイトルと説明文を翻訳キーから取得
  const title = getTranslation(jaTranslations, creative.title);
  const titleEn = getTranslation(enTranslations, creative.title);
  const description = getTranslation(jaTranslations, creative.description);
  const descriptionEn = getTranslation(enTranslations, creative.description);

  // 詳細説明を取得（存在する場合）
  const detail = creative.detail?.descriptionMarkdown
    ? getTranslation(jaTranslations, creative.detail.descriptionMarkdown)
    : undefined;
  const detailEn = creative.detail?.descriptionMarkdown
    ? getTranslation(enTranslations, creative.detail.descriptionMarkdown)
    : undefined;

  // NOTE: 画像アップロードは手動で行うため、ここではスキップ
  // microCMS管理画面で画像をアップロードし、URLを取得してください
  const thumbnailUrl = 'https://placeholder.example.com/image.webp'; // プレースホルダーURL

  // YouTube URLを取得
  const youtubeUrl = creative.detail?.youtube?.desktop || creative.detail?.youtube?.mobile;

  // 作品データを構築
  const creativeData = {
    majorCategory: majorCategory.id,
    minorCategory: minorCategoryIds,
    title,
    titleEn,
    description,
    descriptionEn,
    detail,
    detailEn,
    thumbnail: { url: thumbnailUrl },
    youtubeUrl,
    year: creative.detail?.productionYear,
    url: creative.url,
  };

  if (isDryRun) {
    console.log(`  [DRY-RUN] 作品登録: ${title}`);
    console.log(`    - カテゴリ: ${category}`);
    console.log(`    - タグ数: ${minorCategoryIds.length}`);
    console.log(`    - URL: ${creative.url}`);
    return;
  }

  // microCMSに投稿
  interface CreateCreativeResponse {
    id: string;
  }

  const response = await postMicroCMS<CreateCreativeResponse>('creatives', creativeData);
  console.log(`  ✓ 作品登録完了: ${title} - ID: ${response.id}`);
}

// メイン実行関数
async function main(): Promise<void> {
  // ドライランモードの確認
  const isDryRun = process.argv.includes('--dry-run');

  console.log('=== microCMS データ移行開始 ===');
  if (isDryRun) {
    console.log('【ドライランモード】実際のAPIコールは行いません\n');
  } else {
    console.log('【本番モード】実際にmicroCMSへデータを投稿します\n');
  }

  try {
    // 1. 翻訳データを読み込む
    console.log('1. 翻訳データを読み込み中...');
    const jaTranslations = await loadTranslations('ja');
    const enTranslations = await loadTranslations('en');
    console.log('  ✓ 翻訳データ読み込み完了\n');

    // 2. 大カテゴリを取得
    console.log('2. 大カテゴリを取得中...');
    
    let majorCategories: Array<{ id: string; name: string; nameEn?: string }> = [];
    
    if (isDryRun) {
      // ドライランモードではモックデータを使用
      majorCategories = [
        { id: 'mock-animation', name: 'animation', nameEn: 'animation' },
        { id: 'mock-development', name: 'development', nameEn: 'development' },
        { id: 'mock-illustration', name: 'illustration', nameEn: 'illustration' },
        { id: 'mock-video', name: 'video', nameEn: 'video' },
        { id: 'mock-graphic', name: 'graphic', nameEn: 'graphic' },
      ];
      console.log(`  [DRY-RUN] モック大カテゴリ使用: ${majorCategories.length}件\n`);
    } else {
      majorCategories = await fetchMajorCategories();
      console.log(`  ✓ 大カテゴリ取得完了: ${majorCategories.length}件\n`);
    }

    // 3. 全タグを収集
    console.log('3. 全タグを収集中...');
    const allTags = new Set<string>();
    Object.values(creativesData).forEach((categoryItems) => {
      categoryItems.forEach((item) => {
        item.tags?.forEach((tag) => allTags.add(tag));
      });
    });
    console.log(`  ✓ タグ収集完了: ${allTags.size}件\n`);

    // 4. 小カテゴリを作成
    const minorCategoryMap = await createMinorCategoriesFromTags(allTags, isDryRun);
    console.log(`  ✓ 小カテゴリ作成完了: ${minorCategoryMap.size}件\n`);

    // 5. 作品データを移行
    console.log('5. 作品データを移行中...');
    let totalCount = 0;
    let successCount = 0;

    for (const [category, items] of Object.entries(creativesData) as Array<[CreativeCategory, Creative[]]>) {
      console.log(`\n  カテゴリ: ${category}`);

      for (const item of items) {
        totalCount++;
        try {
          await migrateCreative(
            item,
            category,
            majorCategories,
            minorCategoryMap,
            jaTranslations,
            enTranslations,
            isDryRun
          );
          successCount++;
        } catch (err) {
          console.error(`  ✗ 作品登録失敗: ${item.id}`, err);
        }
      }
    }

    console.log(`\n=== 移行完了 ===`);
    console.log(`成功: ${successCount}件 / 合計: ${totalCount}件`);

    // 6. ID対応表を生成
    console.log('\nID対応表の生成は手動で行ってください。');
    console.log('microCMS管理画面で各作品のIDを確認し、id-mapping.jsonを作成してください。');

  } catch (err) {
    console.error('\n移行エラー:', err);
    process.exit(1);
  }
}

// スクリプト実行
main();
