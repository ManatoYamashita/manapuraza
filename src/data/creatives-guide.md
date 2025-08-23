# Creatives データ管理ガイド

対象ファイル: `src/data/creatives.js`

このドキュメントは、ポートフォリオ作品（Programming / Graphics / Video）を `creatives.js` で一元管理するための手順とルールをまとめたものです。

## 構成
- `programming`: Web/アプリなどプログラミング作品の配列
- `graphics`: イラスト/グラフィック作品の配列
- `video`: 動画/アニメーション作品の配列

各要素は以下の形を取ります。

```ts
{
  id: string,               // 作品の識別子（kebab-case, 一意）
  title: string,            // i18nキー（例: 'creatives.prog.manapuraza.title'）
  description: string,      // i18nキー（例: 'creatives.prog.manapuraza.description'）
  url: string,              // 作品のURL（https推奨）
  thumbnail: string | any   // サムネイル。基本は静的importした変数を渡す
}
```

> 注意: 画像はビルド時静的解析の都合上、動的パスではなく「静的import」を原則とします。

## 追加手順（必須）

1) 画像ファイルを追加
- 画像を `src/assets/creatives-thumb/[category]/` に配置
  - Programming: `src/assets/creatives-thumb/prog/`
  - Graphics: `src/assets/creatives-thumb/graphics/`
  - Video: `src/assets/creatives-thumb/video/`
- 推奨形式: WebP（軽量で高品質）
- ファイル名は `kebab-case.webp` とし、重複しないようにします

2) `creatives.js` の先頭で画像を静的import

```js
// 例: Programmingに追加する場合
import exampleWorkImg from '@/assets/creatives-thumb/prog/example-work.webp';
```

3) データ本体を該当カテゴリ配列に追加

```js
// programming への追加例
{
  id: 'example-work',
  title: 'creatives.prog.exampleWork.title',
  description: 'creatives.prog.exampleWork.description',
  url: 'https://example.com',
  thumbnail: exampleWorkImg
}
```

- `id`: kebab-case。URLやアンカーに使える簡潔な識別子。
- `title` / `description`: i18nキー。既存命名に倣い、`creatives.[category].[key].(title|description)` 形式を厳守。
  - category: `prog` | `graphics` | `video`
  - key: 既存に合わせて命名（`id`と揃えることを推奨）

4) 翻訳ファイルの更新（必須）
- `locales/ja.json` と `locales/en.json` に、上記キーを追加

```json
// ja.json の例
{
  "creatives": {
    "prog": {
      "exampleWork": {
        "title": "例の作品タイトル",
        "description": "例の作品説明"
      }
    }
  }
}
```

```json
// en.json の例
{
  "creatives": {
    "prog": {
      "exampleWork": {
        "title": "Example Work Title",
        "description": "Example Work Description"
      }
    }
  }
}
```

## 命名規約・品質基準
- **id**: `kebab-case`、重複禁止。意味が推測できる語を使用
- **画像**: WebP推奨。横長16:9を基本（リストでの見切れ防止のため）
- **URL**: `https://` を推奨。外部先の信頼性を確認
- **i18n**: すべての言語でキーが存在すること。ダングリングキー禁止
- **配列位置**: Programmingは表示時にランダム化されます（`Creatives.vue`）

## 動作確認チェックリスト
- 画像が表示される（404/ブロックされていない）
- タイトル・説明が選択言語で表示される
- クリックで正しい外部URLに遷移する（新規タブ）
- コンソールエラーが発生していない

## よくある不具合と対策
- サムネイルが出ない: 動的パスにしていないか確認。必ず静的importし、オブジェクトにはその変数を渡す
- 翻訳が表示されない: i18nキーのタイプミス、`ja.json` / `en.json` 追加漏れを確認
- 画像トリミングが合わない: 16:9の中心クロップを意識してサムネイルを用意

## コード参照
- 一覧表示: `src/views/Creatives.vue`
- 各アイテムの描画: `src/components/CreativeItem.vue`
- データソース: `src/data/creatives.js`

## 変更の流れ（サンプル）
1. `src/assets/creatives-thumb/prog/example-work.webp` を追加
2. `src/data/creatives.js` に `import exampleWorkImg ...` を追加
3. `programming` 配列末尾にオブジェクトを追加
4. `locales/ja.json` / `locales/en.json` にキーを追加
5. ローカルで起動して画面とコンソールを確認

