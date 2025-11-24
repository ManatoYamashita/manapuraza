# Creatives データ管理手順

対象: `src/data/creatives.js`（Programming / Graphics / Video の作品データ）

## データ構造
- `programming` / `graphics` / `video` の各配列を持つ。
- 各要素:
  - `id`: 一意な `kebab-case`
  - `title`: i18nキー（例: `creatives.prog.foo.title`）
  - `description`: i18nキー（例: `creatives.prog.foo.description`）
  - `url`: 作品URL（`https://` 推奨）
  - `thumbnail`: 静的 import したサムネイル変数

## 追加手順
1. 画像追加: `src/assets/creatives-thumb/{prog|graphics|video}/` に WebP を配置（`kebab-case.webp`）。
2. 画像 import: `creatives.js` 先頭で静的 import する。
3. データ追記: 該当カテゴリ配列へオブジェクトを追加。`id` と i18nキーは揃える。
4. 翻訳追加: `locales/ja.json` と `locales/en.json` に `title` / `description` を追加。
5. 動作確認: 画面で表示・リンク・コンソールエラーを確認。

## 命名・品質チェック
- `id` は推測可能な語で `kebab-case`、重複禁止。
- サムネイルは 16:9 推奨。動的パス禁止、必ず静的 import。
- URL は信頼できる外部先か確認し、原則 `https`。
- すべての言語でキーが存在すること（ダングリングキー禁止）。

## よくある不具合
- 画像が出ない: 動的パスになっていないか、静的 import を確認。
- 翻訳が出ない: i18nキーのタイプミスや `ja/en` 追加漏れを確認。
- トリミング崩れ: サムネイルを中心クロップの16:9で用意する。

## 参照コード
- データ: `src/data/creatives.js`
- 表示: `src/views/Creatives.vue`
- アイテム描画: `src/components/CreativeItem.vue`
