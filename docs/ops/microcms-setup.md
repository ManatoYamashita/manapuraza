# microCMS セットアップガイド

このドキュメントでは、manapuraza.comプロジェクトでのmicroCMS統合のセットアップ手順を説明します。

## 前提条件

- Node.js 18以上
- microCMSアカウント（無料プランで開始可能）
- プロジェクトのリポジトリへのアクセス権限

## 1. microCMSアカウントとサービス作成

### 1.1. アカウント登録

1. https://microcms.io/ にアクセス
2. 「無料で始める」をクリック
3. メールアドレスとパスワードを入力して登録
4. メール認証を完了

### 1.2. サービス作成

1. microCMS管理画面にログイン
2. 「新しいサービスを作成」をクリック
3. サービス名: `manapuraza`（任意）
4. サービスID: `manapuraza`（URLに使用される、変更不可）
5. 作成をクリック

## 2. API作成とスキーマ設定

### 2.1. categories API作成

**目的**: 作品のカテゴリ情報を管理

1. サービスダッシュボード → 「APIを作成」
2. API名: `categories`
3. エンドポイント: `categories`
4. API の型: `リスト形式`
5. 作成をクリック

**スキーマ設定:**

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|------------|-------|-----|-----|------|
| name | カテゴリ名（日本語） | テキストフィールド | ✓ | 日本語表示名 |
| nameEn | カテゴリ名（英語） | テキストフィールド |  | 英語表示名 |
| type | カテゴリ種別 | セレクトフィールド（複数選択） | ✓ | major / minor |
| description | 説明（日本語） | テキストエリア |  | カテゴリの説明 |
| descriptionEn | 説明（英語） | テキストエリア |  | カテゴリの説明（英語） |

**type フィールド設定:**
- 選択肢1: `major`（表示名: 大カテゴリ）
- 選択肢2: `minor`（表示名: 小カテゴリ）
- 複数選択: 有効

### 2.2. creatives API作成

**目的**: ポートフォリオ作品情報を管理

1. サービスダッシュボード → 「APIを作成」
2. API名: `creatives`
3. エンドポイント: `creatives`
4. API の型: `リスト形式`
5. 作成をクリック

**スキーマ設定:**

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|------------|-------|-----|-----|------|
| majorCategory | 大カテゴリ | コンテンツ参照 | ✓ | categories APIへの参照（単一） |
| minorCategory | 小カテゴリ（タグ） | 複数コンテンツ参照 |  | categories APIへの参照（複数） |
| title | タイトル（日本語） | テキストフィールド | ✓ | 作品タイトル |
| titleEn | タイトル（英語） | テキストフィールド |  | 作品タイトル（英語） |
| description | 概要（日本語） | テキストエリア |  | SEO用概要文 |
| descriptionEn | 概要（英語） | テキストエリア |  | SEO用概要文（英語） |
| detail | 詳細説明（日本語） | リッチエディタ V2 |  | Markdown対応の詳細説明 |
| detailEn | 詳細説明（英語） | リッチエディタ V2 |  | Markdown対応の詳細説明（英語） |
| thumbnail | サムネイル画像 | 画像 | ✓ | 作品サムネイル（16:9推奨） |
| images | 詳細画像 | 画像（複数） |  | 詳細ページ用画像ギャラリー |
| youtubeUrl | YouTube URL | テキストフィールド |  | YouTube embed URL |
| year | 制作年 | テキストフィールド |  | 制作年（例: 2025, 2024~2025） |
| url | 外部URL | テキストフィールド |  | 作品の外部URL |

**コンテンツ参照設定:**
- majorCategory: categories API → 単一選択 → typeフィールドで「major」をフィルタ（手動）
- minorCategory: categories API → 複数選択 → typeフィールドで「minor」をフィルタ（手動）

## 3. APIキー取得

### 3.1. 読み取り専用APIキー（フロントエンド用）

1. サービス設定 → APIキー
2. 「新しいAPIキーを作成」
3. 名前: `Frontend Read-Only`
4. 権限: `読み取り`
5. 作成をクリック
6. 表示されたAPIキーをコピー（後で使用）

### 3.2. 書き込み可能APIキー（データ移行用、オプション）

**注意**: セキュリティリスクがあるため、本番環境では使用しないでください。

1. サービス設定 → APIキー
2. 「新しいAPIキーを作成」
3. 名前: `Data Migration (Temporary)`
4. 権限: `読み取り` + `書き込み`
5. 作成をクリック
6. 表示されたAPIキーをコピー

**重要**: データ移行完了後は削除してください。

## 4. 環境変数設定

### 4.1. .envファイル作成

プロジェクトルートに `.env` ファイルを作成:

```env
# microCMS API設定
VITE_MICROCMS_API_ENDPOINT=https://manapuraza.microcms.io/api/v1
VITE_MICROCMS_API_KEY=your-read-only-api-key-here

# データ移行用（一時的、オプション）
VITE_MICROCMS_WRITE_API_KEY=your-write-api-key-here
```

**設定値:**
- `VITE_MICROCMS_API_ENDPOINT`: サービスIDを含むエンドポイント（例: `https://manapuraza.microcms.io/api/v1`）
- `VITE_MICROCMS_API_KEY`: 手順3.1で取得した読み取り専用APIキー
- `VITE_MICROCMS_WRITE_API_KEY`: （オプション）手順3.2で取得した書き込み可能APIキー

### 4.2. .gitignore確認

`.env` ファイルが `.gitignore` に含まれていることを確認:

```
# .gitignore
.env
.env.local
.env.*.local
```

**重要**: APIキーをGitリポジトリにコミットしないでください。

## 5. 初期データ登録

### 5.1. カテゴリの手動登録

microCMS管理画面 → categories API → 新規追加

**大カテゴリ（5件）:**
1. ID: `animation`, name: Animation, nameEn: Animation, type: [major]
2. ID: `development`, name: Development, nameEn: Development, type: [major]
3. ID: `illustration`, name: Illustration, nameEn: Illustration, type: [major]
4. ID: `video`, name: Video, nameEn: Video, type: [major]
5. ID: `design`, name: Design, nameEn: Design, type: [major]

**注意**: コンテンツIDは手動で指定してください（例: `animation`）。自動生成されると kebab-case ではなくランダム文字列になります。

**小カテゴリ（タグ）:**
作品で使用するタグを小カテゴリとして登録します。例:
- Vue.js, Next.js, Nuxt.js, Vite, TypeScript, JavaScript, Python, Go, Java
- Animation, AI, Chatbot, Game, Corporate, Portfolio, Security, Research
- Three.js, GSAP, Highcharts, BudouX, shadcn-ui
- Vercel, microCMS, WordPress, GitHub

### 5.2. 作品データの登録

**方法1: 手動登録（推奨、少数の場合）**
1. microCMS管理画面 → creatives API → 新規追加
2. 各フィールドを入力
3. 保存して公開

詳細手順は `docs/ops/creatives-guide.md` を参照

**方法2: CSVインポート（大量データの場合）**
1. `scripts/generate-microcms-csv.ts` でCSVを生成
2. 画像URLを実際のmicroCMS URLに置き換え（`scripts/update-csv-from-urls.ts`使用）
3. microCMS管理画面でCSVインポート

詳細手順はプランファイル `/Users/manatoy_mba/.claude/plans/functional-questing-ladybug.md` Phase 5を参照

## 6. フロントエンド動作確認

### 6.1. 開発サーバー起動

```bash
npm run dev
```

### 6.2. 動作確認

1. ブラウザで `http://localhost:5173/creatives` にアクセス
2. カテゴリフィルタが正しく動作するか確認
3. 作品カードが表示されるか確認
4. 作品をクリックして詳細ページに遷移できるか確認
5. ブラウザのコンソールにエラーが出ていないか確認

### 6.3. キャッシュ確認

1. DevTools → Application → Local Storage
2. `microcms-*` キーが保存されていることを確認
3. ページをリロードしても、キャッシュから高速に表示されることを確認

## 7. トラブルシューティング

### APIエラー: 401 Unauthorized
- APIキーが正しく設定されているか確認
- microCMS管理画面でAPIキーが有効か確認
- `.env` ファイルが正しくロードされているか確認（サーバー再起動が必要）

### APIエラー: 404 Not Found
- エンドポイントURLが正しいか確認
- サービスIDが正しいか確認
- APIが公開されているか確認

### データが表示されない
- microCMS管理画面でコンテンツが公開されているか確認
- ブラウザコンソールでネットワークタブを確認
- LocalStorageをクリアして再度アクセス

### 画像が表示されない
- microCMSメディア管理で画像が正しくアップロードされているか確認
- 画像URLがHTTPSで始まっているか確認
- CORSエラーが出ていないか確認

### TypeScriptエラー
- `npm run typecheck` でエラーを確認
- 型定義が正しいか確認（`src/types/microcms.ts`）
- `tsconfig.json` でStrictモードが有効か確認

## 8. 本番環境デプロイ

### 8.1. 環境変数設定（Vercel/Netlify/GitHub Actions）

デプロイサービスの環境変数設定で以下を追加:

```
VITE_MICROCMS_API_ENDPOINT=https://manapuraza.microcms.io/api/v1
VITE_MICROCMS_API_KEY=your-read-only-api-key-here
```

### 8.2. ビルド確認

```bash
npm run build
npm run preview
```

### 8.3. デプロイ

```bash
# GitHub Actionsの場合（自動）
git push origin main

# 手動デプロイの場合
npm run deploy
```

## 9. セキュリティ考慮事項

### 9.1. APIキーの管理

- **読み取り専用APIキー**: フロントエンドで使用（公開OK）
- **書き込み可能APIキー**: サーバーサイドのみ使用、GitHubリポジトリにコミット禁止
- APIキーが漏洩した場合は即座に無効化し、新しいキーを発行

### 9.2. CORS設定

microCMSはデフォルトでCORSを許可しているため、追加設定は不要です。

### 9.3. レート制限

無料プランの制限:
- 10,000 API リクエスト/月
- 10 GB 転送量/月

キャッシュ戦略により、通常の使用ではこれらの制限内に収まります。

## 10. メンテナンス

### 10.1. 定期的なバックアップ

- microCMS管理画面でコンテンツをエクスポート
- 重要な作品データはローカルにバックアップ

### 10.2. APIキーの定期更新

- セキュリティ強化のため、半年に1回程度APIキーを更新
- 更新時は環境変数も忘れずに更新

### 10.3. microCMSプランの見直し

- 月間APIリクエスト数を確認
- 必要に応じて有料プランへのアップグレードを検討

## 参考資料

- [microCMS公式ドキュメント](https://document.microcms.io/)
- [microCMS API リファレンス](https://document.microcms.io/content-api/get-list-contents)
- プロジェクト内ドキュメント: `docs/ops/creatives-guide.md`
