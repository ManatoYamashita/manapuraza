# Creatives データ管理手順

対象: `src/data/creatives.ts`（Animation / Development / Illustration / Video の作品データ - TypeScript）

## データ構造

### カテゴリ
- `animation`: アニメーション作品
- `development`: Web開発/プログラミング作品
- `illustration`: イラスト/グラフィック作品
- `video`: 動画作品

### 必須フィールド
各作品オブジェクトは以下のフィールドを持つ：

- `id`: 一意な `kebab-case` 識別子
- `title`: i18n キー（例: `creatives.dev.manapuraza.title`）
- `description`: i18n キー（例: `creatives.dev.manapuraza.description`）
- `url`: 作品の外部 URL（`https://` 推奨）
- `thumbnail`: 静的 import したサムネイル変数
- `tags`: タグの配列（例: `['Vue.js', 'Vite', 'Three.js']`）

### オプション: detail オブジェクト
詳細ページ（`/creatives/:category/:id`）用の追加情報：

```typescript
// TypeScript型定義 (src/types/creatives.ts)
export interface CreativeDetail {
  images: string[];                         // 作品画像配列（1枚以上）
  descriptionMarkdown: string;              // Markdown形式の詳細説明（i18nキー）
  youtube?: {                               // Animation専用: YouTube動画URL
    mobile: string;
    desktop: string;
  };
  productionYear?: string;                  // 制作年
  credits?: string[];                       // クレジット情報（i18nキー配列）
  cta?: CtaButton[];                        // CTAボタン配列
}

export interface CtaButton {
  href: string;
  target: string;
  icon?: string[];
  text: string;                             // i18nキー
  subText: string;                          // i18nキー
  variant: '' | 'primary' | 'secondary' | 'simple';
}

// 実装例
detail: {
  images: [image1, image2],
  descriptionMarkdown: 'creatives.dev.myWork.detailDescription',
  youtube: {
    mobile: 'https://youtube.com/embed/...',
    desktop: 'https://youtube.com/embed/...'
  },
  productionYear: '2024~2026',
  credits: ['creatives.common.credits.director', 'creatives.common.credits.developer'],
  cta: [
    {
      href: 'https://...',
      target: '_blank',
      icon: ['fas', 'arrow-up-right-from-square'],
      text: 'creatives.cta.viewSite',
      subText: 'creatives.cta.viewSiteSub',
      variant: 'primary'
    }
  ]
}
```

### Fallback動作
`detail` オブジェクトが存在しない場合、`detailDefaults` により以下の fallback が適用される：

- `images`: `[thumbnail]` を使用
- `descriptionMarkdown`: `description` を使用
- `youtube`: `null`（表示されない）
- `productionYear`: 空文字列
- `credits`: 空配列
- `cta`: `url` への単一のプライマリボタン

## 追加手順

### 基本的な作品追加（詳細ページなし）

1. **画像追加**: `src/assets/creatives-thumb/{category}/` に WebP を配置（`kebab-case.webp`）
   - カテゴリ: `animation`, `development`, `illustration`, `video`

2. **画像 import**: `creatives.ts` 先頭で静的 import
   ```typescript
   import myWorkImg from '@/assets/creatives-thumb/development/my-work.webp';
   ```

3. **データ追記**: 該当カテゴリ配列へオブジェクトを追加（型安全性のため `satisfies Creative` を使用）
   ```typescript
   import type { Creative } from '@/types';

   {
     id: 'my-work',
     title: 'creatives.dev.myWork.title',
     description: 'creatives.dev.myWork.description',
     url: 'https://example.com',
     thumbnail: myWorkImg,
     tags: ['Next.js', 'TypeScript']
   } satisfies Creative,
   ```

4. **翻訳追加**: `locales/ja.json` と `locales/en.json` に追加
   ```json
   {
     "creatives": {
       "dev": {
         "myWork": {
           "title": "作品タイトル",
           "description": "作品の説明文"
         }
       }
     }
   }
   ```

5. **動作確認**: `/creatives` で表示を確認

### 詳細ページ付き作品追加

上記1-4に加えて：

6. **detail オブジェクト追加**:
   ```javascript
   {
     id: 'my-work',
     // ... 基本フィールド ...
     detail: {
       images: [myWorkImg, myWorkImg2],
       descriptionMarkdown: 'creatives.dev.myWork.detailDescription',
       productionYear: '2026',
       credits: [
         'creatives.dev.myWork.credits.production',
         'creatives.dev.myWork.credits.director'
       ],
       cta: [
         {
           href: 'https://github.com/...',
           target: '_blank',
           icon: ['fas', 'arrow-up-right-from-square'],
           text: 'creatives.common.viewProject',
           subText: 'creatives.common.github',
           variant: 'primary'
         }
       ]
     }
   }
   ```

7. **Markdown 説明文追加**: `locales/ja.json` と `locales/en.json`
   ```json
   {
     "creatives": {
       "dev": {
         "myWork": {
           "detailDescription": "## 概要\n\n詳細な説明...\n\n## 技術スタック\n\n- Vue.js 3\n- Vite"
         }
       }
     }
   }
   ```

8. **クレジット翻訳追加**: コロン区切りで「ラベル: 値」形式
   ```json
   {
     "creatives": {
       "dev": {
         "myWork": {
           "credits": {
             "production": "制作: 会社名",
             "director": "ディレクター: 山田太郎"
           }
         }
       }
     }
   }
   ```

9. **動作確認**: `/creatives/development/my-work` で詳細ページを確認

### Animation 作品の YouTube 追加

Animation カテゴリの作品は、`detail.youtube` で動画を埋め込める：

```javascript
detail: {
  youtube: {
    mobile: 'https://www.youtube.com/embed/VIDEO_ID?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=VIDEO_ID',
    desktop: 'https://www.youtube.com/embed/VIDEO_ID?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=VIDEO_ID'
  },
  // ... その他のフィールド ...
}
```

## 命名・品質チェック

- `id` は推測可能な語で `kebab-case`、カテゴリ内で重複禁止
- サムネイルは 16:9 推奨。動的パス禁止、必ず静的 import
- URL は信頼できる外部先か確認し、原則 `https`
- すべての言語でキーが存在すること（ダングリングキー禁止）
- Markdown 説明文は `##` で見出しを使用、改行は `\n\n` で段落分け
- クレジットは「ラベル: 値」形式（コロンで区切る）
- CTA の `variant` は `'primary'` または `'secondary'` のみ

## よくある不具合

- **画像が出ない**: 動的パスになっていないか、静的 import を確認
- **翻訳が出ない**: i18n キーのタイプミスや `ja/en` 追加漏れを確認
- **トリミング崩れ**: サムネイルを中心クロップの 16:9 で用意する
- **詳細ページが 404**: `id` が URL と一致しているか、カテゴリが正しいか確認
- **Markdown が表示されない**: `detailDescription` キーが存在するか、`marked` がインストールされているか確認
- **YouTube が表示されない**: `detail.youtube` が null でないか、iframe URL が正しいか確認

## ルーティング

- 一覧ページ: `/creatives`
- 詳細ページ: `/creatives/:category/:id`
  - 例: `/creatives/animation/tcu-animation`
  - 例: `/creatives/development/manapuraza`

## 参照コード

- **データ**: `src/data/creatives.js`
- **一覧表示**: `src/views/Creatives.vue`
- **詳細ページ**: `src/views/CreativeDetail.vue`
- **カード描画**: `src/components/CreativeItem.vue`
- **ルーティング**: `src/router/index.js` (動的ルート `/creatives/:category/:id`)

## CreativeDetail ページレイアウト

### デスクトップ表示（≥769px）
- **2カラムGrid構造**:
  - 左カラム: 画像ギャラリー（単一列）、YouTube動画（Animation専用）
  - 右カラム: 説明文（Markdown）、制作年、クレジット情報
- **ページ構造**:
  1. 戻るリンク（`arrow-left`アイコン + テキスト）
  2. タイトル
  3. タグ（タイトル直下、ラベルなし）
  4. 2カラムコンテンツ（`.content-wrapper`）
  5. 固定CTAフッター（画面下部）

### タブレット・モバイル表示（≤768px）
- 単一カラムレイアウトに切り替え
- 表示順: 戻るリンク → タイトル → タグ → 画像 → 動画 → 説明 → 制作年 → クレジット → CTA

### CSS構造
```css
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 50:50配分 */
  gap: 2.5rem;
}

.image-gallery {
  grid-template-columns: 1fr; /* 左カラム用単一列 */
}

@media screen and (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr; /* 単一カラム */
  }
}
```

## 依存ライブラリ

- **marked**: Markdown レンダリング（詳細ページの説明文用）
  - インストール: `npm install marked`
  - 使用箇所: `src/views/CreativeDetail.vue`
