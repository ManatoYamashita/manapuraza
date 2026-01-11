#!/usr/bin/env tsx

/**
 * microCMS CSV画像URL更新スクリプト
 *
 * Management API v2を使用してmicroCMSにアップロード済みの画像一覧を取得し、
 * creatives.csvのthumbnailとimages列のファイル名を完全URLに置き換えます。
 *
 * 実行方法:
 *   npm run update-csv-images
 *
 * 環境変数要件:
 *   VITE_MICROCMS_SERVICE_ID - microCMSサービスID
 *   MICROCMS_MANAGEMENT_API_KEY - Management API Key（「メディアの取得」権限有効）
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// 環境変数チェック
const SERVICE_ID = process.env.VITE_MICROCMS_SERVICE_ID;
const MANAGEMENT_API_KEY = process.env.MICROCMS_MANAGEMENT_API_KEY;

if (!SERVICE_ID || !MANAGEMENT_API_KEY) {
  console.error('❌ エラー: 環境変数が設定されていません');
  console.error('   VITE_MICROCMS_SERVICE_ID と MICROCMS_MANAGEMENT_API_KEY を .env に設定してください');
  console.error('');
  console.error('   例:');
  console.error('   VITE_MICROCMS_SERVICE_ID=your-service-id');
  console.error('   MICROCMS_MANAGEMENT_API_KEY=your-management-api-key');
  console.error('');
  console.error('   Management API Keyの取得方法:');
  console.error('   1. microCMS管理画面 → 設定 → APIキー');
  console.error('   2. 新規作成またはManagement API用のキーを選択');
  console.error('   3. 権限: 「メディアの取得」を有効化');
  process.exit(1);
}

// 1. Management API v2で画像一覧を取得（ページネーション対応）
async function fetchAllImages(): Promise<Array<{ id: string; url: string }>> {
  const allImages: Array<{ id: string; url: string }> = [];
  let token: string | undefined = undefined;
  let isFirstRequest = true;

  while (true) {
    const url = new URL(`https://${SERVICE_ID}.microcms-management.io/api/v2/media`);

    if (isFirstRequest) {
      url.searchParams.set('imageOnly', 'true');
      url.searchParams.set('limit', '100');
      isFirstRequest = false;
    }

    if (token) {
      url.searchParams.set('token', token);
    }

    console.log(`📡 画像一覧取得中... ${allImages.length}件取得済み`);

    const response = await fetch(url.toString(), {
      headers: {
        'X-MICROCMS-API-KEY': MANAGEMENT_API_KEY
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Management API エラー: ${response.status} ${response.statusText}\n${errorText}`);
    }

    const data = await response.json();
    allImages.push(...data.media);

    console.log(`   → ${data.media.length}件取得、合計${allImages.length}/${data.totalCount}件`);

    // 次のページがあるか確認
    if (data.token) {
      token = data.token;
    } else {
      break; // 全件取得完了
    }
  }

  return allImages;
}

// 2. ファイル名→URLマッピング作成
function createImageUrlMap(images: Array<{ id: string; url: string }>): Map<string, string> {
  const imageUrlMap = new Map<string, string>();

  images.forEach(img => {
    const filename = img.url.split('/').pop();
    if (filename) {
      imageUrlMap.set(filename, img.url);
      // ダブルクォートで囲まれたバージョンもマッピング
      imageUrlMap.set(`"${filename}"`, `"${img.url}"`);
    }
  });

  console.log(`\n📋 ファイル名→URLマッピング作成完了: ${imageUrlMap.size / 2}件`);
  return imageUrlMap;
}

// 3. CSVパース（ダブルクォート考慮）
function parseCSVRow(row: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    const nextChar = row[i + 1];

    if (char === '"' && nextChar === '"') {
      current += '"';
      i++; // Skip next quote
    } else if (char === '"') {
      inQuotes = !inQuotes;
      current += char;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

// 4. CSVを読み込んでURL置き換え
async function updateCSVImageURLs(imageUrlMap: Map<string, string>): Promise<void> {
  const csvPath = path.join(projectRoot, 'microcms-schemas/creatives.csv');
  const csv = fs.readFileSync(csvPath, 'utf-8');
  const rows = csv.split('\n');

  console.log(`\n📝 CSV更新中: ${rows.length}行`);

  const updatedRows = rows.map((row, index) => {
    if (index === 0) {
      // ヘッダー行はそのまま
      return row;
    }

    if (row.trim() === '') {
      // 空行はスキップ
      return row;
    }

    const columns = parseCSVRow(row);

    // thumbnail列（9列目、0-indexed）を置き換え
    if (columns[9]) {
      const originalThumbnail = columns[9];
      const mappedThumbnail = imageUrlMap.get(originalThumbnail);
      if (mappedThumbnail) {
        columns[9] = mappedThumbnail;
        console.log(`   行${index + 1}: thumbnail更新 ${originalThumbnail} → ${mappedThumbnail.substring(0, 50)}...`);
      } else {
        console.warn(`   ⚠️ 行${index + 1}: thumbnail画像が見つかりません: ${originalThumbnail}`);
      }
    }

    // images列（10列目、0-indexed）を置き換え（カンマ区切りの複数画像）
    if (columns[10]) {
      const originalImages = columns[10];
      // ダブルクォート内のカンマを保護
      const imageFilenames = originalImages
        .replace(/^"/, '')
        .replace(/"$/, '')
        .split(',')
        .map(f => f.trim());

      const updatedImageUrls = imageFilenames.map(filename => {
        const mapped = imageUrlMap.get(filename) || imageUrlMap.get(`"${filename}"`);
        if (mapped) {
          return mapped.replace(/^"/, '').replace(/"$/, ''); // ダブルクォート除去
        } else {
          console.warn(`   ⚠️ 行${index + 1}: images画像が見つかりません: ${filename}`);
          return filename;
        }
      });

      columns[10] = `"${updatedImageUrls.join(',')}"`;
    }

    return columns.join(',');
  });

  // 5. 更新済みCSV保存
  const outputPath = path.join(projectRoot, 'microcms-schemas/creatives-updated.csv');
  fs.writeFileSync(outputPath, updatedRows.join('\n'), 'utf-8');
  console.log(`\n✅ 更新済みCSV保存完了: ${outputPath}`);
  console.log(`\n📋 次のステップ:`);
  console.log(`1. ${outputPath} をmicroCMS管理画面でインポート`);
  console.log(`2. インポート成功を確認`);
}

// メイン処理
async function main() {
  console.log('🚀 microCMS CSV画像URL更新スクリプト開始\n');

  try {
    // 1. 画像一覧取得
    const images = await fetchAllImages();
    console.log(`\n✅ 画像一覧取得完了: ${images.length}件`);

    // 2. マッピング作成
    const imageUrlMap = createImageUrlMap(images);

    // 3. CSV更新
    await updateCSVImageURLs(imageUrlMap);

    console.log('\n🎉 処理完了！');
  } catch (error) {
    console.error('\n❌ エラーが発生しました:', error);
    process.exit(1);
  }
}

main();
