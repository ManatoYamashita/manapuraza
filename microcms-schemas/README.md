# microCMS APIスキーマインポート手順

このディレクトリには、microCMS APIのスキーマ定義ファイルが含まれています。

## ファイル一覧

- `categories-schema.json` - カテゴリ管理API（大カテゴリ・小カテゴリ）
- `creatives-schema.json` - 作品データAPI

## インポート手順

### 1. microCMS管理画面にログイン

[https://app.microcms.io/](https://app.microcms.io/)

### 2. サービスを作成

1. 「サービスを作成」ボタンをクリック
2. サービス名を入力（例: `manapuraza-portfolio`）
3. サービスIDを入力（例: `manapuraza`）
4. 「作成する」をクリック

### 3. APIを作成（categories）

1. 「API作成」ボタンをクリック
2. 「リスト形式」を選択
3. API情報を入力:
   - **API名**: カテゴリ
   - **エンドポイント**: `categories`
4. 「作成」をクリック
5. API画面の右上にある「⚙️（設定）」→「スキーマ」タブを開く
6. 「インポート」ボタンをクリック
7. `categories-schema.json` ファイルをアップロードまたは内容をコピー＆ペースト
8. 「インポート」をクリック

### 4. APIを作成（creatives）

1. 「API作成」ボタンをクリック
2. 「リスト形式」を選択
3. API情報を入力:
   - **API名**: 作品
   - **エンドポイント**: `creatives`
4. 「作成」をクリック
5. API画面の右上にある「⚙️（設定）」→「スキーマ」タブを開く
6. 「インポート」ボタンをクリック
7. `creatives-schema.json` ファイルをアップロードまたは内容をコピー＆ペースト
8. 「インポート」をクリック

### 5. APIキーを取得

1. サービス画面の「API設定」→「APIキー」タブを開く
2. 以下の2つのAPIキーを確認:
   - **GET専用APIキー**: 読み取り専用（フロントエンド用）
   - **APIキー**: 読み書き両用（管理・移行スクリプト用）
3. APIキーをコピー

### 6. 環境変数を設定

プロジェクトルートに `.env` ファイルを作成し、以下の環境変数を追加:

```env
VITE_MICROCMS_API_ENDPOINT=https://あなたのサービスID.microcms.io/api/v1
VITE_MICROCMS_API_KEY=あなたのGET専用APIキー
```

移行スクリプト用に読み書き両用APIキーも追加:

```env
MICROCMS_WRITE_API_KEY=あなたの読み書き両用APIキー
```

### 7. 初期データ登録（大カテゴリ5件）

categoriesAPIに以下の5件を手動登録:

#### 1. Animation
```
categoryId: animation
displayName: アニメーション
displayNameEn: Animation
type: major
parentCategory: （空欄）
slug: animation
sortOrder: 1
```

#### 2. Development
```
categoryId: development
displayName: Web開発
displayNameEn: Web Development
type: major
parentCategory: （空欄）
slug: development
sortOrder: 2
```

#### 3. Illustration
```
categoryId: illustration
displayName: イラスト
displayNameEn: Illustration
type: major
parentCategory: （空欄）
slug: illustration
sortOrder: 3
```

#### 4. Video
```
categoryId: video
displayName: 動画制作
displayNameEn: Video Production
type: major
parentCategory: （空欄）
slug: video
sortOrder: 4
```

#### 5. Graphic
```
categoryId: graphic
displayName: グラフィックデザイン
displayNameEn: Graphic Design
type: major
parentCategory: （空欄）
slug: graphic
sortOrder: 5
```

## 注意事項

### スキーマインポート時の既知の制限

microCMSのインポート機能では、以下の項目が正しくインポートされない場合があります：

1. **セレクトフィールドの選択肢**: 手動で設定が必要
   - `categories.type`: `major` と `minor` を追加
   - `creatives.ctaButtons.target`: `_blank` と `_self` を追加
   - `creatives.ctaButtons.variant`: `primary`, `secondary`, `simple` を追加

2. **コンテンツ参照の参照先**: インポート後に確認
   - `categories.parentCategory` → `categories` を参照
   - `creatives.majorCategory` → `categories` を参照
   - `creatives.minorCategories` → `categories` を参照

3. **繰り返しフィールドの内部構造**: インポート後に確認
   - `creatives.credits` の4つのサブフィールド
   - `creatives.ctaButtons` の8つのサブフィールド

インポート後、各フィールドの設定を確認し、必要に応じて手動で修正してください。

## 次のステップ

スキーマ作成が完了したら：

1. ✅ 大カテゴリ5件を登録
2. ✅ `.env`ファイルに環境変数を追加
3. ➡️ データ移行スクリプトを実行（Phase 5）

---

最終更新日: 2026/01/04
