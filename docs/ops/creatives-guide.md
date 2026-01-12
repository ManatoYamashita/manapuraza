# Creatives データ管理手順（microCMS運用版）

対象: microCMS管理画面（creatives API / categories API）

## 概要

ポートフォリオ作品（Animation / Development / Illustration / Video / Design）のデータは、microCMS APIで管理されています。静的データファイル（`src/data/creatives.ts`）は削除され、全てのデータはCMSから動的に取得されます。

## microCMS APIスキーマ

### categories API（リスト形式）

カテゴリ情報を管理します：

| フィールドID | 種類 | 必須 | 説明 |
|------------|-----|-----|------|
| `name` | テキスト | ✓ | 日本語表示名 |
| `nameEn` | テキスト |  | 英語表示名 |
| `type` | セレクト（複数選択可） | ✓ | `major`（大カテゴリ）/ `minor`（小カテゴリ） |
| `description` | テキストエリア |  | カテゴリの説明（日本語） |
| `descriptionEn` | テキストエリア |  | カテゴリの説明（英語） |

**大カテゴリ（5件）:**
- `animation`: アニメーション作品
- `development`: Web開発/プログラミング作品
- `illustration`: イラスト/グラフィック作品
- `video`: 動画作品
- `design`: グラフィックデザイン作品

**小カテゴリ:**
タグとして使用されます（例: Vue.js, Next.js, Animation, AIなど）

### creatives API（リスト形式）

作品情報を管理します：

| フィールドID | 種類 | 必須 | 説明 |
|------------|-----|-----|------|
| `majorCategory` | コンテンツ参照（categories） | ✓ | 大カテゴリ選択 |
| `minorCategory` | 複数コンテンツ参照（categories） |  | 小カテゴリ複数選択（タグ） |
| `title` | テキスト | ✓ | 日本語タイトル |
| `titleEn` | テキスト |  | 英語タイトル |
| `description` | テキストエリア |  | SEO用の概要（日本語） |
| `descriptionEn` | テキスト |  | SEO用の概要（英語） |
| `detail` | リッチエディタV2 |  | 作品の詳細説明（日本語、Markdown対応） |
| `detailEn` | リッチエディタV2 |  | 作品の詳細説明（英語、Markdown対応） |
| `thumbnail` | 画像 | ✓ | サムネイル画像（WebP推奨） |
| `images` | 画像（複数） |  | 詳細ページ用の画像ギャラリー |
| `youtubeUrl` | テキスト |  | YouTube動画のURL |
| `year` | テキスト |  | 制作年 |
| `url` | テキスト |  | 作品の外部URL |

## 作品追加手順

### 1. サムネイル画像の準備

1. WebP形式に変換（推奨アスペクト比: 16:9）
2. ファイル名は `kebab-case` で意味のある名前（例: `manapuraza-website.webp`）

### 2. microCMS管理画面での作成

**Step 1: メディア管理で画像をアップロード**
1. microCMS管理画面 → メディア
2. サムネイル画像をアップロード
3. 詳細ページ用の画像がある場合も同様にアップロード

**Step 2: creatives APIで新規作成**
1. microCMS管理画面 → creatives API → 新規追加
2. 各フィールドを入力:

   - **majorCategory**: プルダウンから選択（animation/development/illustration/video/design）
   - **minorCategory**: タグとして使う小カテゴリを複数選択（例: Vue.js, Vite, Three.js）
   - **title**: 日本語タイトル
   - **titleEn**: 英語タイトル（省略可）
   - **description**: 日本語の概要文（1-2文）
   - **descriptionEn**: 英語の概要文（省略可）
   - **thumbnail**: アップロードした画像を選択
   - **url**: 作品の外部URL（例: `https://manapuraza.com`）
   - **year**: 制作年（例: `2025`, `2024~2025`）

3. 保存して公開

### 3. 詳細ページ付き作品の追加

上記に加えて以下のフィールドを入力:

- **detail**: 日本語の詳細説明（Markdown記法可）
  ```markdown
  ## 概要

  作品の詳細説明...

  ## 技術スタック

  - Vue.js 3
  - Vite 6
  - TypeScript

  ## 特徴

  - パフォーマンス最適化
  - SEO対策
  ```

- **detailEn**: 英語の詳細説明（Markdown記法可）

- **images**: 詳細ページ用の画像を複数選択（1枚以上）

- **youtubeUrl**: Animation作品の場合、YouTube embed URL
  ```
  https://www.youtube.com/embed/VIDEO_ID?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=VIDEO_ID
  ```

### 4. 動作確認

1. ブラウザで `/creatives` にアクセス
2. 追加した作品が正しく表示されることを確認
3. 詳細ページがある場合、`/creatives/:category/:id` にアクセスして確認
   - 例: `/creatives/development/{microCMS-ID}`

## データ取得の仕組み

### フロントエンド実装

**Composable**: `src/composables/useCreativesAPI.ts`
- microCMS APIクライアント
- LocalStorageキャッシュ（30分間）
- データ変換アダプター（`CreativeData` → `CMSCreative`）

**主要メソッド:**
```typescript
const {
  fetchCreatives,                    // 全作品取得
  getCreativesByCategory,            // カテゴリ別取得
  getCreativeById,                   // 個別作品取得
  isLoading,                         // ローディング状態
  error                              // エラー状態
} = useCreativesAPI();
```

**TypeScript型定義** (`src/types/creatives.ts`):
```typescript
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
```

**実装例**:
```typescript
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

**使用箇所:**
- `src/views/Creatives.vue`: 一覧ページ
- `src/views/CreativeDetail.vue`: 詳細ページ

### フォールバック動作

`adaptCreativeData()` が以下のフォールバックを提供:
- **画像がない場合**: `thumbnail` を使用
- **説明文がない場合**: 空文字列
- **YouTube URLがない場合**: 表示しない
- **制作年がない場合**: 空文字列
- **タグがない場合**: 空配列

## 命名・品質チェック

- **majorCategory**: 必ず大カテゴリ（animation/development/illustration/video/design）を選択
- **minorCategory**: タグとして適切な小カテゴリを選択（最大5個推奨）
- **サムネイル**: 16:9推奨、WebP形式、最適サイズ（幅1000px程度）
- **URL**: 信頼できる外部先か確認し、原則 `https`
- **多言語対応**: 英語版を提供する場合、全てのEnフィールドを入力
- **Markdown**: `##` で見出し使用、段落は改行2つで分ける
- **YouTube**: Animation専用、embed URLを使用（watch URLは不可）

## よくある不具合

- **画像が表示されない**: メディア管理で画像が正しくアップロードされているか確認
- **タイトルが表示されない**: `title` フィールドが必須、入力漏れを確認
- **カテゴリフィルタが機能しない**: `majorCategory` が正しく設定されているか確認
- **詳細ページが404**: microCMSのコンテンツIDを確認、URLは `/creatives/:category/:microCMS-ID` 形式
- **Markdownが表示されない**: `detail` フィールドに内容が入力されているか確認
- **YouTube動画が表示されない**: `youtubeUrl` にembed URLを使用しているか確認

## ルーティング

- 一覧ページ: `/creatives`
- 詳細ページ: `/creatives/:category/:microCMS-ID`
  - 例: `/creatives/animation/abc123def`（microCMS自動生成ID）
  - 例: `/creatives/development/xyz456ghi`

**重要**: URLのIDはmicroCMSが自動生成するランダム文字列です。kebab-case IDではありません。

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

## データ更新・削除

### 作品の更新
1. microCMS管理画面 → creatives API
2. 対象の作品を選択
3. フィールドを編集
4. 保存して公開
5. フロントエンドのキャッシュは30分後に自動更新

### 作品の削除
1. microCMS管理画面 → creatives API
2. 対象の作品を選択
3. 削除ボタンをクリック
4. 確認ダイアログでOK
5. フロントエンドのキャッシュは30分後に自動更新

**注意**: 削除した作品は復元できません。重要な作品は事前にバックアップを推奨。

## 依存ライブラリ

- **marked**: Markdown レンダリング（詳細ページの説明文用）
  - インストール: `npm install marked`
  - 使用箇所: `src/views/CreativeDetail.vue`

## セットアップ詳細

microCMSのセットアップ方法については `docs/ops/microcms-setup.md` を参照してください。

## トラブルシューティング

### APIエラーが発生する
- `.env` ファイルに `VITE_MICROCMS_API_ENDPOINT` と `VITE_MICROCMS_API_KEY` が設定されているか確認
- microCMS管理画面でAPIキーが有効か確認
- ブラウザコンソールでエラーメッセージを確認

### キャッシュが更新されない
- LocalStorageを手動でクリア: DevTools → Application → Local Storage
- または、ページをハードリフレッシュ: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### 画像が表示されない
- microCMSのメディア管理で画像URLが取得できるか確認
- ブラウザのネットワークタブで画像リクエストが成功しているか確認
- CORSエラーが出ていないか確認（microCMSは自動でCORS許可）
