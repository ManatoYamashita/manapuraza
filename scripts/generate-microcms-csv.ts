#!/usr/bin/env tsx

/**
 * microCMS手動インポート用CSV生成スクリプト
 *
 * 実行方法:
 *   npm run generate-csv
 *
 * 生成されるファイル:
 *   - microcms-schemas/categories.csv
 *   - microcms-schemas/creatives.csv
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { marked } from 'marked';

// ESM用の__dirname取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// プロジェクトルート
const projectRoot = path.join(__dirname, '..');

// i18nファイルの読み込み
const jaJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'locales/ja.json'), 'utf-8'));
const enJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'locales/en.json'), 'utf-8'));

// CSV出力ディレクトリ
const outputDir = path.join(projectRoot, 'microcms-schemas');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// CSV エスケープ関数
function escapeCSV(value: string | undefined | null): string {
  if (!value) return '';
  // 改行文字を削除し、ダブルクォートをエスケープし、フィールド全体をダブルクォートで囲む
  const withoutNewlines = value.replace(/\r?\n/g, '');
  const escaped = withoutNewlines.replace(/"/g, '""');
  return `"${escaped}"`;
}

// i18nキーから翻訳テキストを取得
function getTranslation(key: string, locale: 'ja' | 'en'): string {
  const json = locale === 'ja' ? jaJson : enJson;
  const keys = key.split('.');
  let value: any = json;

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) return '';
  }

  return typeof value === 'string' ? value : '';
}

// Markdown → HTML 変換
function convertMarkdownToHTML(markdown: string): string {
  if (!markdown) return '';
  // markedでHTMLに変換（richEditorV2形式に近づける）
  const html = marked.parse(markdown, { breaks: true });
  return typeof html === 'string' ? html.trim() : '';
}

// 既存の作品データ（creatives.tsから手動で抽出）
const creativesData = {
  animation: [
    {
      id: 'tcu-animation',
      title: 'creatives.animation.tcuAnimation.title',
      description: 'creatives.animation.paragraph',
      url: 'https://tcu-animation.jp',
      tags: ['Animation', 'Director', 'Setagaya Ward', 'Official'],
      detail: {
        descriptionMarkdown: 'creatives.animation.tcuAnimation.detailDescription',
        youtube: {
          mobile: 'https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M',
          desktop: 'https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M'
        },
        productionYear: '2024~2025',
        images: ['tcu-animation.webp']
      }
    }
  ],
  development: [
    {
      id: 'manapuraza',
      title: 'creatives.dev.manapuraza.title',
      description: 'creatives.dev.manapuraza.description',
      url: 'https://github.com/ManatoYamashita/manapuraza',
      tags: ['Vue.js', 'Vite', 'Three.js', 'Portfolio'],
      detail: {
        descriptionMarkdown: 'creatives.dev.manapuraza.detailDescription',
        images: ['manapuraza.webp']
      }
    },
    {
      id: 'dcchan-net',
      title: 'creatives.dev.dcchanAi.title',
      description: 'creatives.dev.dcchanAi.description',
      url: 'https://でじこんちゃん.net/',
      tags: ['Next.js', 'AI', 'Vercel', 'Chatbot']
    },
    {
      id: 'numeron-game',
      title: 'creatives.dev.numeron.title',
      description: 'creatives.dev.numeron.description',
      url: 'https://tmana.sub.jp/numeron/dirs/src/numeron.html',
      tags: ['Vanilla JS', 'Game', 'Logic']
    },
    {
      id: 'officeTsuyuki',
      title: 'creatives.dev.officeTsuyuki.title',
      description: 'creatives.dev.officeTsuyuki.description',
      url: 'https://office-tsuyuki.pom.jp',
      tags: ['HTML', 'CSS', 'JavaScript', 'Corporate']
    },
    {
      id: 'tcudc-bot',
      title: 'creatives.dev.dcchanBot.title',
      description: 'creatives.dev.dcchanBot.description',
      url: 'https://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html',
      tags: ['Python', 'Twitter API', 'Bot']
    },
    {
      id: 'seki-ken',
      title: 'creatives.dev.sekiLab.title',
      description: 'creatives.dev.sekiLab.description',
      url: 'https://www.comm.tcu.ac.jp/seki-ken',
      tags: ['WordPress', 'Security', 'Research']
    },
    {
      id: 'sysb-wtm',
      title: 'creatives.dev.wtmApp.title',
      description: 'creatives.dev.wtmApp.description',
      url: 'https://github.com/ManatoYamashita/SysB_wtm',
      tags: ['HTML', 'CSS', 'JavaScript', 'Weather API']
    },
    {
      id: 'dum-manapuraza',
      title: 'creatives.dev.downUnder.title',
      description: 'creatives.dev.downUnder.description',
      url: 'https://dum.manapuraza.com',
      tags: ['WordPress', 'Blog', 'TAP']
    },
    {
      id: 'flickgame',
      title: 'creatives.dev.wagiri.title',
      description: 'creatives.dev.wagiri.description',
      url: 'https://flickgame.tcu-dc.net/',
      tags: ['Vanilla JS', 'Game', 'Mobile']
    },
    {
      id: 'tcu-animation',
      title: 'creatives.dev.tcuAnimation.title',
      description: 'creatives.dev.tcuAnimation.description',
      url: 'https://tcu-animation.jp/',
      tags: ['Next.js', 'SEO', 'Animation Site']
    },
    {
      id: 'text-layout',
      title: 'creatives.dev.textLayout.title',
      description: 'creatives.dev.textLayout.description',
      url: 'https://text-layout.manapuraza.com/',
      tags: ['Vanilla JS', 'Tool', 'Typography']
    },
    {
      id: 'k-kamiya',
      title: 'creatives.dev.k-kamiya.title',
      description: 'creatives.dev.k-kamiya.description',
      url: 'https://www.k-kamiya.net',
      tags: ['HTML', 'CSS', 'JavaScript', 'Restaurant']
    }
  ],
  illustration: [
    {
      id: 'pixiv-gallery',
      title: 'creatives.illustration.pixiv.title',
      description: 'creatives.illustration.pixiv.description',
      url: 'https://www.pixiv.net/users/87914659',
      tags: ['Digital Art', 'Illustration', 'Pixiv']
    }
  ],
  video: [
    {
      id: 'tcu-dc-youtube',
      title: 'creatives.video.tcuDcChannel.title',
      description: 'creatives.video.tcuDcChannel.description',
      url: 'https://www.youtube.com/@tcu_dc',
      tags: ['YouTube', 'Animation', 'Club']
    },
    {
      id: 'manapuraza-youtube',
      title: 'creatives.video.personalChannel.title',
      description: 'creatives.video.personalChannel.description',
      url: 'https://www.youtube.com/@manapuraza',
      tags: ['YouTube', 'Vlog', 'Personal']
    }
  ]
};

// 全タグを集約
function collectAllTags(): Set<string> {
  const allTags = new Set<string>();

  Object.values(creativesData).forEach(categoryItems => {
    categoryItems.forEach(item => {
      item.tags?.forEach(tag => allTags.add(tag));
    });
  });

  return allTags;
}

// categories.csv 生成
function generateCategoriesCSV(): string {
  const header = 'コンテンツID,name,nameEn,type,description,descriptionEn';

  const rows: string[] = [header];

  // 大カテゴリ
  const majorCategories = [
    { name: 'Animation', nameEn: 'Animation', description: 'アニメーション作品カテゴリ', descriptionEn: 'Animation works category' },
    { name: 'Development', nameEn: 'Development', description: 'プログラミング・Web作品カテゴリ', descriptionEn: 'Programming and Web works category' },
    { name: 'Illustration', nameEn: 'Illustration', description: 'イラスト・グラフィック作品カテゴリ', descriptionEn: 'Illustration and graphic works category' },
    { name: 'Video', nameEn: 'Video', description: '動画・映像作品カテゴリ', descriptionEn: 'Video and film works category' },
    { name: 'Graphic', nameEn: 'Graphic', description: 'グラフィックデザイン作品カテゴリ', descriptionEn: 'Graphic design works category' }
  ];

  majorCategories.forEach(cat => {
    rows.push(
      `,${escapeCSV(cat.name)},${escapeCSV(cat.nameEn)},major,${escapeCSV(cat.description)},${escapeCSV(cat.descriptionEn)}`
    );
  });

  // 小カテゴリ（タグ）
  const allTags = Array.from(collectAllTags()).sort();
  allTags.forEach(tag => {
    rows.push(
      `,${escapeCSV(tag)},${escapeCSV(tag)},minor,${escapeCSV(tag + 'タグ')},${escapeCSV(tag + ' tag')}`
    );
  });

  return rows.join('\n');
}

// creatives.csv 生成
function generateCreativesCSV(): string {
  const header = 'コンテンツID,majorCategory,minorCategory,title,titleEn,description,descriptionEn,detail,detailEn,thumbnail,images,youtubeUrl,year,url';

  const rows: string[] = [header];

  Object.entries(creativesData).forEach(([category, items]) => {
    items.forEach(item => {
      const titleJa = getTranslation(item.title, 'ja');
      const titleEn = getTranslation(item.title, 'en');
      const descJa = getTranslation(item.description, 'ja');
      const descEn = getTranslation(item.description, 'en');

      // detailのMarkdown→HTML変換
      let detailJa = '';
      let detailEn = '';
      if (item.detail?.descriptionMarkdown) {
        const markdownJa = getTranslation(item.detail.descriptionMarkdown, 'ja');
        const markdownEn = getTranslation(item.detail.descriptionMarkdown, 'en');
        detailJa = convertMarkdownToHTML(markdownJa);
        detailEn = convertMarkdownToHTML(markdownEn);
      }

      // タグ（カンマ区切り）
      const minorCategories = item.tags?.join(',') || '';

      // 画像（カンマ区切り）
      const images = item.detail?.images?.join(',') || item.id + '.webp';
      const thumbnail = item.id.includes('animation') ? 'tcu-animation.webp' :
                        item.id.includes('dcchan') && category === 'development' ? 'dcchan-ai.webp' :
                        item.id.includes('numeron') ? 'numeron.webp' :
                        item.id.includes('office') ? 'office-tsuyuki.webp' :
                        item.id.includes('bot') ? 'dcchan-twitterbot.webp' :
                        item.id.includes('seki') ? 'sekilab.webp' :
                        item.id.includes('wtm') ? 'wtm.webp' :
                        item.id.includes('dum') ? 'dum.webp' :
                        item.id.includes('flick') ? 'flickgame-wagiri.webp' :
                        item.id.includes('text') ? 'textlayout.webp' :
                        item.id.includes('kamiya') ? 'k-kamiya.webp' :
                        item.id.includes('pixiv') ? 'pixiv.webp' :
                        item.id.includes('youtube') && category === 'video' && item.id.includes('tcu') ? 'youtube-tcudc.webp' :
                        item.id.includes('youtube') && category === 'video' ? 'youtube-manapuraza.webp' :
                        item.id + '.webp';

      // YouTube URL（mobile/desktopのどちらか）
      const youtubeUrl = item.detail?.youtube?.mobile || '';

      // 制作年
      const year = item.detail?.productionYear || '';

      // カテゴリ名（後でIDに置き換える）
      const majorCategory = category;

      rows.push([
        '',  // コンテンツID（空欄）
        escapeCSV(majorCategory),
        escapeCSV(minorCategories),
        escapeCSV(titleJa),
        escapeCSV(titleEn),
        escapeCSV(descJa),
        escapeCSV(descEn),
        escapeCSV(detailJa),
        escapeCSV(detailEn),
        escapeCSV(thumbnail),
        escapeCSV(images),
        escapeCSV(youtubeUrl),
        escapeCSV(year),
        escapeCSV(item.url)
      ].join(','));
    });
  });

  return rows.join('\n');
}

// メイン処理
function main() {
  console.log('🚀 microCMS CSV生成スクリプト開始...\n');

  // categories.csv生成
  console.log('📝 categories.csv を生成中...');
  const categoriesCSV = generateCategoriesCSV();
  const categoriesPath = path.join(outputDir, 'categories.csv');
  fs.writeFileSync(categoriesPath, categoriesCSV, 'utf-8');
  console.log(`✅ categories.csv 生成完了: ${categoriesPath}\n`);

  // creatives.csv生成
  console.log('📝 creatives.csv を生成中...');
  const creativesCSV = generateCreativesCSV();
  const creativesPath = path.join(outputDir, 'creatives.csv');
  fs.writeFileSync(creativesPath, creativesCSV, 'utf-8');
  console.log(`✅ creatives.csv 生成完了: ${creativesPath}\n`);

  console.log('🎉 CSV生成完了！\n');
  console.log('📋 次のステップ:');
  console.log('1. microCMS管理画面にログイン');
  console.log('2. categories APIで「CSVインポート」を選択し、categories.csvをインポート');
  console.log('3. 画像ファイルをmicroCMS Media APIに手動アップロード');
  console.log('4. creatives.csvの以下を手動編集:');
  console.log('   - majorCategory列: カテゴリ名 → microCMSカテゴリID');
  console.log('   - minorCategory列: タグ名 → microCMSカテゴリID（カンマ区切り）');
  console.log('   - thumbnail列: ファイル名 → microCMS画像ID');
  console.log('   - images列: ファイル名 → microCMS画像ID（カンマ区切り）');
  console.log('5. 編集済みcreatives.csvをcreatives APIにインポート\n');
}

main();
