# MANAPURAZA.COM - Nuxt 3 + TypeScript

山下マナト（山下真和都）の公式Webポートフォリオサイト - Nuxt 3 + TypeScript移行版

## プロジェクト概要

Vue 3 SPAから**Nuxt 3 + TypeScript + SSR**へ完全移行したポートフォリオサイトです。

### 主な特徴

- ✅ **TypeScript Strict Mode**: 完全な型安全性
- ✅ **SSR (Server-Side Rendering)**: SEO最適化とパフォーマンス向上
- ✅ **Nuxt 4.2.2**: 最新のNuxtフレームワーク
- ✅ **Three.js 3D背景**: MetaBallアニメーション（SSR対応）
- ✅ **国際化対応**: 日本語/英語（@nuxtjs/i18n v10）
- ✅ **動的ルーティング**: `/creatives/:category/:id`
- ✅ **パフォーマンス最適化**: Terser圧縮、Code Splitting

## 技術スタック

### コア
- **Framework**: Nuxt 4.2.2
- **Language**: TypeScript 5.9.3 (Strict Mode)
- **Runtime**: Node.js 22.13.1
- **Package Manager**: npm

### 主要ライブラリ
- **Vue**: 3.5.25
- **Vue Router**: 4.6.3
- **i18n**: @nuxtjs/i18n 10.2.1
- **3D Graphics**: Three.js 0.182.0
- **Animation**: GSAP 3.14.2
- **Icons**: Font Awesome 7.1.0
- **Markdown**: marked 17.0.1

### ビルドツール
- **Vite**: 7.2.7
- **Nitro**: 2.12.9
- **Terser**: 5.39.0

## セットアップ

### 前提条件

- Node.js 22.13.1以上
- npm 10以上

### インストール

```bash
npm install
```

## 開発コマンド

### 開発サーバー起動

```bash
npm run dev
```

開発サーバーが `http://localhost:3000` で起動します。

### TypeScript型チェック

```bash
npm run typecheck
```

全ファイルの型チェックを実行します（Strict Mode）。

### ビルド（本番用）

```bash
npm run build
```

本番用にビルドします。出力先: `.output/`

### 静的サイト生成

```bash
npm run generate
```

完全静的なHTMLサイトを生成します。出力先: `.output/public/`

### プレビュー

```bash
npm run preview
```

本番ビルドをローカルでプレビューします。

### バンドル分析

```bash
npm run analyze
```

バンドルサイズを分析します（`stats.html`が生成されます）。

## プロジェクト構造

```
nuxt3/
├── app.vue                 # ルートコンポーネント
├── nuxt.config.ts          # Nuxt設定
├── tsconfig.json           # TypeScript設定
├── types/
│   └── index.ts            # 型定義（Creative, CreativeDetail, etc.）
├── components/
│   ├── Menu.vue            # 統合ナビゲーション（レスポンシブ）
│   ├── CreativeItem.vue    # ポートフォリオカード
│   ├── MetaBall.vue        # Three.js背景（SSR対応）
│   ├── Btn.vue             # ボタンコンポーネント
│   ├── Sns.vue             # SNSリンク
│   └── ...
├── pages/
│   ├── index.vue           # ホーム
│   ├── about.vue           # About
│   ├── creatives/
│   │   ├── index.vue       # Creatives一覧
│   │   └── [category]/
│   │       └── [id].vue    # 作品詳細ページ
│   └── contact.vue         # Contact
├── composables/
│   └── useCreatives.ts     # Creativesデータ管理
├── layouts/
│   └── default.vue         # デフォルトレイアウト
├── i18n/
│   └── locales/
│       ├── ja.json         # 日本語翻訳
│       └── en.json         # 英語翻訳
├── assets/
│   ├── main.css            # グローバルCSS
│   └── creatives-thumb/    # ポートフォリオ画像
└── public/
    ├── robots.txt
    ├── sitemap.xml
    └── ...
```

## デプロイ

### オプション1: Vercel（推奨 - SSRフル活用）

```bash
# Vercel CLIでデプロイ
vercel --prod
```

または、GitHub Actionsワークフロー（`.github/workflows/deploy-vercel.yml`）を使用。

### オプション2: 静的ホスティング（FTP等）

```bash
# 静的サイト生成
npm run generate

# .output/public/ の内容をアップロード
```

GitHub Actionsワークフロー（`.github/workflows/deploy-ftp.yml`）でFTP自動デプロイに対応。

## 移行メモ（Vue 3 → Nuxt 3）

### 主な変更点

1. **ディレクトリ構造**
   - `src/views/` → `pages/`
   - `src/components/` → `components/`
   - `src/data/` → `composables/`

2. **i18n設定**
   - ロケールファイル: `locales/` → `i18n/locales/`
   - `@nuxtjs/i18n` v10では`i18n/locales/`が必須

3. **Three.js SSR対応**
   - `<ClientOnly>`でラップ
   - 型定義を静的インポート、ランタイムを動的インポート

4. **Auto-imports**
   - `useRoute`, `useI18n`, `useHead`などNuxtが自動インポート

5. **TypeScript Strict Mode**
   - 全ファイルで厳格な型チェック
   - Null安全性、型注釈の徹底

## パフォーマンス

### ビルドサイズ

- **Total**: 4.63 MB (gzip: 1.29 MB)
- **Client**: 251 modules
- **Server**: 180 modules

### 最適化機能

- Code Splitting（Vendor chunks: Three.js, FontAwesome, GSAP, Marked）
- Terser圧縮
- 画像最適化（WebP）
- Lazy loading

## ライセンス

Copyright © 2024-2025 Manato Yamashita (山下真和都)

## 開発者

**Manato Yamashita** (山下真和都)
- Website: https://manapuraza.com
- GitHub: https://github.com/ManatoYamashita

---

**🤖 Generated with [Claude Code](https://claude.com/claude-code)**
