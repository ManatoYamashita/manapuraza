# MANAPURAZA.COM 🍌
山下マナト Webポートフォリオ

<div align="center">
  <img src="./public/ogp.jpg" alt="OGP image" width="520" style="border-radius: 12px; box-shadow: 0 4px 15px rgba(255, 152, 79, 0.5);">

  <br/>

  ### Current Stack (Vue 3)
  <a href="https://vuejs.org/" target="_blank"><img alt="Vue.js" src="https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js"></a>
  <a href="https://vitejs.dev/" target="_blank"><img alt="Vite" src="https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite"></a>
  <a href="https://threejs.org/" target="_blank"><img alt="Three.js" src="https://img.shields.io/badge/Three.js-latest-000000?style=flat-square&logo=three.js"></a>
  <a href="https://vue-i18n.intlify.dev/" target="_blank"><img alt="i18n" src="https://img.shields.io/badge/i18n-vue--i18n%209-green?style=flat-square"></a>

  ### Migration Target (Nuxt 3 + TypeScript)
  <a href="https://nuxt.com/" target="_blank"><img alt="Nuxt" src="https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat-square&logo=nuxt.js"></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript"></a>
  <img alt="SSR" src="https://img.shields.io/badge/SSR-Universal%20Rendering-brightgreen?style=flat-square">
  <a href="https://nitro.unjs.io/" target="_blank"><img alt="Nitro" src="https://img.shields.io/badge/Nitro-Server-yellow?style=flat-square"></a>
</div>

---

## ⚠️ Migration Notice

**Status**: 🚧 Vue 3 → Nuxt 3 + TypeScript migration is planned.

**Migration Plan**: See [Migration Plan](./.claude/plans/sunny-snacking-blum.md)

**Key Changes**:
- Framework: Vue 3 (SPA) → **Nuxt 3 (SSR/Universal Rendering)**
- Language: JavaScript → **TypeScript (Strict Mode)**
- Build: Vite → **Nitro Server**
- Deployment: FTP → **Vercel/Netlify**

**Documentation**:
- [Nuxt 3 Migration Guide](./docs/migration-nuxt3.md)
- [TypeScript Guide](./docs/typescript-guide.md)

---

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

### Current (Vue 3)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # プロダクションビルド（/dist）
npm run preview  # ローカルで/prodを確認
npm run analyze  # バンドル可視化（rollup-plugin-visualizer）
```

### After Migration (Nuxt 3)

```bash
npm install
npm run dev        # http://localhost:3000 (SSR enabled)
npm run build      # プロダクションビルド（Nitro server）
npm run generate   # 静的サイト生成（SSG mode）
npm run preview    # ローカルで本番環境確認
npm run typecheck  # TypeScript型チェック
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

## プロジェクト構成

```
manapuraza/
├── public/                     # 静的ファイル
│   ├── ogp.jpg                # OGPイメージ
│   ├── robots.txt             # SEO設定
│   └── sitemap.xml            # サイトマップ
├── src/
│   ├── components/            # Vueコンポーネント
│   │   ├── MetaBall.vue      # Three.js背景アニメーション（遅延ロード）
│   │   ├── Navbar.vue        # デスクトップナビゲーション
│   │   ├── SpNav.vue         # モバイル円形メニュー
│   │   ├── CreativeItem.vue  # ポートフォリオアイテム表示
│   │   ├── Btn.vue           # 再利用可能ボタンコンポーネント
│   │   └── Sns.vue           # SNSリンクコンポーネント
│   ├── views/                # ページレベルコンポーネント
│   │   ├── Home.vue          # トップページ
│   │   ├── About.vue         # 自己紹介ページ
│   │   ├── Creatives.vue     # ポートフォリオページ
│   │   ├── Contact.vue       # お問い合わせページ
│   │   └── 404.vue           # 404エラーページ
│   ├── data/                 # 静的データ
│   │   ├── creatives.js      # ポートフォリオデータ
│   │   └── creatives-guide.md # データ管理ガイド
│   ├── assets/               # アセット
│   │   ├── main.css          # メインスタイルシート（遅延ロード）
│   │   ├── logo.webp         # 高画質ロゴ
│   │   ├── logo-low.webp     # 低画質ロゴ（初期表示）
│   │   └── creatives-thumb/  # ポートフォリオサムネイル
│   │       ├── programming/  # プログラミング作品
│   │       ├── graphics/     # グラフィックデザイン
│   │       └── video/        # 映像作品
│   ├── router/
│   │   └── index.js          # Vue Routerセットアップ
│   ├── App.vue               # ルートコンポーネント
│   └── main.js               # アプリケーションエントリ
├── locales/                  # 国際化リソース
│   ├── ja.json              # 日本語翻訳（初期ロード）
│   └── en.json              # 英語翻訳（遅延ロード）
├── .cursor/                 # Cursor IDEルール設定
│   └── rules/               # 開発ルール定義
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions デプロイ設定
├── index.html               # HTMLエントリ（クリティカルCSS含む）
├── vite.config.js          # Vite設定（コード分割・最適化）
├── CLAUDE.md               # Claude Code開発ガイド
└── README.md               # プロジェクト説明書
```

### 主要ディレクトリの詳細

#### `src/components/`
- **MetaBall.vue**: Three.js使用の3D背景。`requestIdleCallback`で遅延読み込み
- **Navbar.vue**: デスクトップ用ナビゲーション。初回アニメーション対応
- **SpNav.vue**: モバイル用円形メニュー。CSS transform使用
- **CreativeItem.vue**: 統合ポートフォリオコンポーネント。4モード対応（Animation/Development/Illustration/Video）

#### `src/views/`
- **Home.vue**: ランディングページ。MetaBallとの連携
- **Creatives.vue**: ポートフォリオ一覧。CreativeItemコンポーネント使用
- **Contact.vue**: お問い合わせフォーム。GSAP animations対応

#### `src/data/`
- **creatives.js**: ポートフォリオデータの中央管理。静的インポート必須
- **creatives-guide.md**: データ追加・変更手順の詳細ガイド

#### アセット管理
- **WebP形式**: 全画像をWebPで最適化
- **プログレッシブローディング**: logo-low.webp → logo.webpの段階読み込み
- **静的インポート**: Viteバンドリング対応のため、動的パスは使用不可

### 技術仕様とアーキテクチャ

#### Vue.js アーキテクチャ
- **複数Vueインスタンス**: Main App, Navbar, MetaBall（各々独立にマウント）
- **Composition API**: 新規コンポーネントは`<script setup>`記法使用
- **Options API**: 既存コンポーネント（Navbar, SpNav）で継続使用
- **共有リソース**: Vue Router, Vue I18nを全インスタンス間で共有

#### 状態管理とデータフロー
- **Props-based**: 親子間通信はProps/Emitsパターン
- **中央データ**: `src/data/creatives.js`でポートフォリオ情報を一元管理
- **リアクティブ**: `computed`, `ref`, `watch`でリアクティブ状態管理

#### パフォーマンス戦略
- **Code Splitting**: Vite `manualChunks`で依存を論理分割
- **Lazy Loading**: ルート、コンポーネント、翻訳の段階的読み込み
- **Critical Resource Priority**: 初期描画に必要な最小リソースを優先
- **Idle Time Utilization**: `requestIdleCallback`でバックグラウンド処理

#### エラーハンドリング
- **コンポーネントレベル**: `errorCaptured`でエラー境界設定
- **ルーターレベル**: `router.onError`でナビゲーションエラー処理  
- **Promise/Async**: try-catch + フォールバック値で堅牢性確保

## パフォーマンス最適化

<img width="1920" height="1080" alt="manapuraza-lighthouse-scores" src="https://github.com/user-attachments/assets/6c98a726-7aa3-4957-a58b-6a92b645c4af" />


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

<img width="540" height="675" alt="manapuraza-is-supported-responsive-design" src="https://github.com/user-attachments/assets/d3d7c754-d2c9-4822-b589-2276f4b46f11" />

[Figma link](https://www.figma.com/design/XW4k9FCVkEjovbucl4XtWx/manapuraza.com?node-id=0-1&t=EJ28mq4TUObSEY9m-1)

- Grassmorphism / 軽量なトランジション
- モバイルファースト（レスポンシブデザイン完全対応）
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

© 2023– Manato Yamashita. All Rights Reserved.

---
最終更新: 2025-08-10
