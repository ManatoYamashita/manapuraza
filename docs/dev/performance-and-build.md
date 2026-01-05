# パフォーマンス最適化とビルド

## 遅延と分割
- `MetaBall.vue` は `requestIdleCallback` で遅延ロードし、専用マウント（`#back`）。
- 英語ロケールはアイドル時に遅延追加。
- ルート/ページは動的 import でチャンク化。

## アセットと画像
- 画像は WebP を基本。大サイズはサムネイルを別用意（例: `assets/creatives-thumb/`）。
- ロゴは low→high の段階的切替。`<link rel=\"preload\" as=\"image\" fetchpriority=\"high\">` で LCP を最適化。
- 参照は `new URL('@/assets/foo.webp', import.meta.url).href` を使用。命名は用途別ディレクトリ + ハイフン区切り。
- `public/favicon.ico` と `public/ogp.webp` はキャッシュ更新時にバージョン付けを検討。

## Three.js / MetaBall
- 動的 import 失敗時は `console.error` に詳細を残し、他 UI を阻害しない。
- Three.js は `vendor_three` チャンクへ分割。OrbitControls 等は必要時のみ読み込み。

## ログと圧縮
- 本番でも `console.error` は保持。`console.debug`/`console.trace` は Terser で除去。
- 例: `pure_funcs: ['console.debug','console.trace']`, `format.comments` で `MetaBall:` を保持。

## ビルド（Vite/Rollup/Terser）
- `minify: 'terser'`, `sourcemap: true`。
- 手動チャンク例: `vendor`（vue系）, `vendor_three`, `vendor_fontawesome`, `vendor_gsap`。
- `define` で i18n フラグを最小化。`server.historyApiFallback: true`。
- 解析: `npm run analyze` で可視化。Node 20.19+ / 22.12+ を推奨。

## 計測目標（参考）
- JS 合計 < 800KB (gzip)、初期描画 < 2s。
- 高優先画像に preload を付与し LCP を安定させる。***
