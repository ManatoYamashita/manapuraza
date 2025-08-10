# MANAPURAZA.COM 🍌（山下マナト Webポートフォリオ）

<div align="center">
  <img src="./public/ogp.jpg" alt="OGP image" width="520" style="border-radius: 12px; box-shadow: 0 4px 15px rgba(255, 152, 79, 0.5);">
  
  <br/>
  <a href="https://vuejs.org/" target="_blank"><img alt="Vue.js" src="https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js"></a>
  <a href="https://vitejs.dev/" target="_blank"><img alt="Vite" src="https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite"></a>
  <a href="https://threejs.org/" target="_blank"><img alt="Three.js" src="https://img.shields.io/badge/Three.js-latest-000000?style=flat-square&logo=three.js"></a>
  <a href="https://vue-i18n.intlify.dev/" target="_blank"><img alt="i18n" src="https://img.shields.io/badge/i18n-vue--i18n%209-green?style=flat-square"></a>
</div>

## About

山下マナト（山下真和都）のWebポートフォリオです。2021–2024に制作したクリエイティブを整理し、現在も継続改善しています。

### Deployment
- 最新版: [manapuraza.com](https://manapuraza.com)
- 初期版: [ver1.0](https://manapuraza-s0y8f8i94-manatoyamashita.vercel.app)

## Stack

- フロントエンド
  - Vue 3 (Composition API)
  - Vite 6
  - Vue Router 4（HTML5 History）
  - Vue I18n 9
  - Three.js / GSAP
  - Font Awesome（必要アイコンのみツリーシェイク）
- ビルド/最適化
  - 手動コード分割（`vendor`, `vendor_three`, `vendor_fontawesome`, `vendor_gsap`）
  - Terser 最適化（`drop_console`, `drop_debugger`）
  - Source Map 出力
- デプロイ
  - 本番: 静的ホスティング（FTP 配信）
  - デモ: Vercel

Node.js 要件（Vite準拠）: Node 20.19+ または 22.12+。参考: [Vite Getting Started](https://vitejs.dev/guide/)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # プロダクションビルド（/dist）
npm run preview  # ローカルで/prodを確認
npm run analyze  # バンドル可視化（rollup-plugin-visualizer）
```

## アーキテクチャ概要

- エントリ: `index.html`（クリティカルCSSをインライン化、重要画像`icon.webp`をpreload）
- アプリ初期化: `src/main.js`
  - `createApp(App)` を `#app` に、`createApp(Navbar)` を `#navbar` にマウント
  - Three.js を使う `MetaBall` は `requestIdleCallback` で遅延読み込みし `#back` にマウント
  - メインCSS（`/src/assets/main.css`）は初回描画後に遅延読み込み
- ルーティング: `src/router/index.js`
  - `/`（Home）, `/about`, `/creatives`, `/:pathMatch(.*)*`（404）
  - すべてのサブページは遅延インポート
- 国際化: `vue-i18n`
  - 初期は日本語のみ同期ロード（`/locales/ja.json`）
  - 英語はアイドル時に遅延ロード（`/locales/en.json`）
  - `fallbackLocale: 'en'`, `legacy: false`, `globalInjection: true`
  - 参考: [Vue I18n Lazy Loading](https://vue-i18n.intlify.dev/guide/advanced/lazy.html)

## パフォーマンス最適化

- 遅延読み込み
  - Three.js / `MetaBall` をアイドル時に動的インポート
  - 英語ロケールをアイドル時にロード
  - メインCSSを初期描画後に追加ロード
- コード分割
  - Vite Rollup `manualChunks` により依存を論理分割
- 画像最適化
  - WebP採用、`index.html` で `icon.webp` を preload
- ビルド最適化
  - Terser圧縮（`drop_console`, `drop_debugger`）

## SEO / アナリティクス

- `index.html` に SEOメタ、OG/Twitterカード、構造化データ（JSON-LD）を実装
- Google Analytics はユーザー操作/アイドル時に超遅延ロード（ビーコン送信、IP匿名化、有効最小設定）
- `public/robots.txt`, `public/sitemap.xml` を配置

## ルーティングとSPAフォールバック

- `createWebHistory()` を使用
- 開発サーバは SPA フォールバック有効
- 本番静的配信では、サーバ側で `index.html` へのフォールバック設定を推奨
  - 例（Nginx）:
    ```
    location / {
      try_files $uri $uri/ /index.html;
    }
    ```

## 国際化（i18n）

- リソース
  - `locales/ja.json`, `locales/en.json`
- 実装要点
  - 初期レンダリングは `ja` のみロード、`en` は非同期追加
  - `fallbackLocale: 'en'` によりキー欠損時に英語へフォールバック
- 翻訳の追加手順
  1. `locales/ja.json` と `locales/en.json` に新規キーを追加
  2. 再読み込み不要（英語は遅延読込後に `setLocaleMessage` 済み）

## コンテンツ/データ

- クリエイティブ一覧: `src/data/creatives.js`
- 運用ガイド: `src/data/creatives-guide.md`

## デザイン方針

- Grassmorphism / モバイルファースト / 軽量なトランジション
- カラー
  - メイン: イエロー/オレンジ（バナナモチーフ）
  - アクセント: 水色

## バンドル分析

- `npm run analyze` → `rollup-plugin-visualizer` により依存とチャンクを可視化

## セキュリティとアクセシビリティ

- 主要対策
  - 不要なスクリプトの排除、遅延読込で攻撃面縮小
  - 画像の `alt`、適切な `aria` 属性の付与
- 補足（推奨事項）
  - 本番配信での適切な CSP 設定
  - 依存の継続アップデート

## スクリプト一覧

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "analyze": "vite build --mode=analyze"
}
```

## ライセンス

© 2022– Manato Yamashita. All Rights Reserved.

---
最終更新: 2025-08-10
