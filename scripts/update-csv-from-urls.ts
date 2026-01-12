#!/usr/bin/env tsx

/**
 * microCMS CSV画像URL更新スクリプト（ユーザー提供URLリスト版）
 *
 * ユーザーがmicroCMS管理画面から手動で取得したURLリストを使用して、
 * creatives.csvのthumbnailとimages列のファイル名を完全URLに置き換えます。
 *
 * 実行方法:
 *   npm run update-csv-from-urls
 *
 * 前提条件:
 *   - プロジェクトルートに image-urls.txt が存在すること
 *   - image-urls.txt に microCMS画像URLが1行に1URLずつ記載されていること
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// 1. URLリストファイルを読み込み
function loadImageUrls(): Map<string, string> {
  const urlsFilePath = path.join(projectRoot, 'image-urls.txt');

  if (!fs.existsSync(urlsFilePath)) {
    console.error('❌ エラー: image-urls.txt が見つかりません');
    console.error('   プロジェクトルートに image-urls.txt を作成してください');
    process.exit(1);
  }

  const urlsContent = fs.readFileSync(urlsFilePath, 'utf-8');
  const urls = urlsContent.split('\n').filter(line => line.trim() !== '');

  console.log(`📡 URLリスト読み込み: ${urls.length}件\n`);

  // ファイル名→URLマッピング作成
  const imageUrlMap = new Map<string, string>();

  urls.forEach((url, index) => {
    const filename = url.split('/').pop();
    if (filename) {
      // デコードされたファイル名も登録（日本語ファイル名対応）
      const decodedFilename = decodeURIComponent(filename);
      imageUrlMap.set(filename, url);
      imageUrlMap.set(decodedFilename, url);

      // ダブルクォートで囲まれたバージョンもマッピング
      imageUrlMap.set(`"${filename}"`, `"${url}"`);
      imageUrlMap.set(`"${decodedFilename}"`, `"${url}"`);

      console.log(`${index + 1}. ${decodedFilename} → ${url.substring(0, 60)}...`);
    }
  });

  console.log(`\n📋 ファイル名→URLマッピング作成完了: ${imageUrlMap.size / 4}件\n`);
  return imageUrlMap;
}

// 2. CSVパース（ダブルクォート考慮）
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

// 3. CSVを読み込んでURL置き換え
function updateCSVImageURLs(imageUrlMap: Map<string, string>): void {
  const csvPath = path.join(projectRoot, 'microcms-schemas/creatives.csv');

  if (!fs.existsSync(csvPath)) {
    console.error('❌ エラー: microcms-schemas/creatives.csv が見つかりません');
    process.exit(1);
  }

  const csv = fs.readFileSync(csvPath, 'utf-8');
  const rows = csv.split('\n');

  console.log(`📝 CSV更新中: ${rows.length}行\n`);

  let updatedCount = 0;
  let notFoundCount = 0;

  const updatedRows = rows.map((row, index) => {
    if (index === 0) {
      // ヘッダー行はそのまま
      console.log(`✅ ヘッダー行: ${row.substring(0, 100)}...\n`);
      return row;
    }

    if (row.trim() === '') {
      // 空行はスキップ
      return row;
    }

    const columns = parseCSVRow(row);

    // コンテンツID列（0列目）は空欄のまま（microCMSが自動生成）
    columns[0] = '';
    console.log(`   🆔 行${index}: コンテンツID → 空欄（microCMS自動生成）`);

    // majorCategory列（1列目、0-indexed）をカテゴリIDに置き換え
    if (columns[1]) {
      const categoryName = columns[1].replace(/^"/, '').replace(/"$/, '');
      const categoryIdMap: { [key: string]: string } = {
        'animation': 'animation',
        'development': 'devvelopment',  // microCMSに登録されているID
        'illustration': 'illustration',
        'video': 'video'
      };

      const categoryId = categoryIdMap[categoryName];
      if (categoryId) {
        columns[1] = categoryId;
        console.log(`   📁 行${index}: majorCategory更新 ${categoryName} → ${categoryId}`);
      } else {
        console.warn(`   ⚠️  行${index}: majorCategoryが見つかりません: ${categoryName}`);
      }
    }

    // thumbnail列（9列目、0-indexed）を置き換え
    if (columns[9]) {
      const originalThumbnail = columns[9];
      const cleanFilename = originalThumbnail.replace(/^"/, '').replace(/"$/, '');
      const mapped = imageUrlMap.get(originalThumbnail) || imageUrlMap.get(cleanFilename);

      if (mapped) {
        columns[9] = `"${mapped.replace(/^"/, '').replace(/"$/, '')}"`;
        console.log(`   ✅ 行${index}: thumbnail更新`);
        console.log(`      ${cleanFilename} → ${mapped.substring(0, 80)}...`);
        updatedCount++;
      } else {
        console.warn(`   ⚠️  行${index}: thumbnail画像が見つかりません: ${cleanFilename}`);
        notFoundCount++;
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
        const decodedFilename = decodeURIComponent(filename);
        const mapped = imageUrlMap.get(filename) ||
                      imageUrlMap.get(decodedFilename) ||
                      imageUrlMap.get(`"${filename}"`) ||
                      imageUrlMap.get(`"${decodedFilename}"`);

        if (mapped) {
          return mapped.replace(/^"/, '').replace(/"$/, ''); // ダブルクォート除去
        } else {
          console.warn(`   ⚠️  行${index}: images画像が見つかりません: ${decodedFilename}`);
          notFoundCount++;
          return filename;
        }
      });

      columns[10] = `"${updatedImageUrls.join(',')}"`;
    }

    return columns.join(',');
  });

  // 4. 更新済みCSV保存
  const outputPath = path.join(projectRoot, 'microcms-schemas/creatives-updated.csv');
  fs.writeFileSync(outputPath, updatedRows.join('\n'), 'utf-8');

  console.log(`\n✅ 更新済みCSV保存完了: ${outputPath}`);
  console.log(`\n📊 処理結果:`);
  console.log(`   - 更新成功: ${updatedCount}件`);
  console.log(`   - 画像未発見: ${notFoundCount}件`);

  if (notFoundCount === 0) {
    console.log(`\n🎉 全ての画像URLが正常に置き換えられました！`);
  } else {
    console.log(`\n⚠️  一部の画像が見つかりませんでした。CSVを確認してください。`);
  }

  console.log(`\n📋 次のステップ:`);
  console.log(`1. ${outputPath} を確認`);
  console.log(`2. microCMS管理画面でインポート`);
  console.log(`3. インポート成功を確認`);
}

// メイン処理
function main() {
  console.log('🚀 microCMS CSV画像URL更新スクリプト開始\n');
  console.log('============================================\n');

  try {
    // 1. URLリスト読み込み
    const imageUrlMap = loadImageUrls();

    // 2. CSV更新
    updateCSVImageURLs(imageUrlMap);

    console.log('\n============================================');
    console.log('🎉 処理完了！');
  } catch (error) {
    console.error('\n❌ エラーが発生しました:', error);
    process.exit(1);
  }
}

main();
