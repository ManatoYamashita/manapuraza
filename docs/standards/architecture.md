# アーキテクチャと構成

## エントリと初期化
- エントリは `index.html`、アプリ初期化は `src/main.js`。
- `#app` に `App.vue`、`#navbar` に `Navbar` をマウント。
- Three.js を使う `MetaBall` は `requestIdleCallback` で遅延ロードし `#back` に別マウント。
- ルーティングは `src/router/index.js` の `createWebHistory()`。
- i18n は `ja` 同期、`en` を遅延ロード。

## ディレクトリ方針
- `src/components`: UI部品。重い描画処理（`MetaBall.vue`）は遅延前提。
- `src/views`: ルート直下のページ。全て動的 import でチャンク化。
- `src/assets`: WebP を基本とし、用途別にディレクトリ分割。

## 責務分離
- `App.vue` はルーティング枠とヒーローロゴの LCP 最適化に専念。
- 既存の最小限 DOM 直接操作は許容。新規はリアクティブ制御へ寄せる。
- データ取得はローカル JSON/JS のみ（静的サイト前提）。

## SPA フォールバック
- 開発: `server.historyApiFallback: true`。
- 本番: サーバ設定で `index.html` にフォールバックする。

## 変更原則
- 低コストの改善（遅延/分割/キャッシュ）を優先。
- 依存追加は最後の手段。まず標準 API と既存依存で解決する。***
