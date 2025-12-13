# Nuxt 3 + TypeScript 完全移行ガイド

最終更新日: 2025/12/14

---

## 目次

1. [概要](#概要)
2. [移行の目的と期待効果](#移行の目的と期待効果)
3. [前提条件](#前提条件)
4. [移行戦略](#移行戦略)
5. [フェーズ1: プロジェクトセットアップ](#フェーズ1-プロジェクトセットアップ)
6. [フェーズ2: TypeScript型定義の設計](#フェーズ2-typescript型定義の設計)
7. [フェーズ3: nuxt.config.ts の設計](#フェーズ3-nuxtconfigts-の設計)
8. [フェーズ4: コンポーネント移行](#フェーズ4-コンポーネント移行)
9. [フェーズ5: ルーティングとデータ管理](#フェーズ5-ルーティングとデータ管理)
10. [フェーズ6: SSR対応とクライアントサイド処理](#フェーズ6-ssr対応とクライアントサイド処理)
11. [フェーズ7: デプロイ設定](#フェーズ7-デプロイ設定)
12. [トラブルシューティング](#トラブルシューティング)
13. [参考資料](#参考資料)

---

## 概要

本ドキュメントは、既存のVue 3 (JavaScript) SPAプロジェクトを、Nuxt 3 (TypeScript) + SSR (Universal Rendering) 環境に完全移行するための実践的なガイドです。

### 移行の規模

- **Framework**: Vue 3 (SPA) → Nuxt 3 (SSR/Universal Rendering)
- **Language**: JavaScript → TypeScript (Strict Mode)
- **Build Tool**: Vite → Nitro Server
- **Deployment**: FTP (静的ホスティング) → Vercel/Netlify (Node.js環境)
- **Optimization**: 手動最適化 → Nuxt 3標準機能

### 推定工数

**合計: 約28時間**（詳細は各フェーズ参照）

---

## 移行の目的と期待効果

### 目的

1. **型安全性の向上**: TypeScript Strict Modeによる完全型付けで、ランタイムエラーを事前に防止
2. **SEO強化**: SSRによる初回HTML生成で、検索エンジン最適化とOGP対応強化
3. **パフォーマンス向上**: Nuxt 3の自動最適化（コード分割、プリフェッチ等）によるUX改善
4. **保守性向上**: ファイルベースルーティング、Composables、Pluginsによる構造的なコード管理
5. **開発体験向上**: Nuxt DevToolsによるデバッグ効率化、TypeScriptサポートによるエディタ補完強化

### 期待効果

| 指標 | 現在 (Vue 3) | 目標 (Nuxt 3) |
|-----|-------------|--------------|
| Lighthouse Performance | 95+ | 98+ |
| First Contentful Paint (FCP) | ~1.2s | ~0.8s |
| Time to Interactive (TTI) | ~2.5s | ~1.8s |
| Type Coverage | 0% | 100% |
| SEO Score | 90+ | 100 |

---

## 前提条件

### 環境要件

- **Node.js**: 20.19+ または 22.12+
- **npm**: 10.0+
- **Git**: 作業用ブランチ `feature/nuxt3-typescript-migration` の作成が必要
- **開発環境**: VS Code (推奨) + Volar拡張機能

### 必要な知識

- Vue 3 Composition API の理解
- TypeScript基礎知識
- SSRとCSRの違いの理解
- Git操作の基本（ブランチ、マージ、コンフリクト解決）

---

## 移行戦略

### アプローチ

**Big Bang方式** (一括移行)

既存プロジェクトと並行して新規Nuxt 3プロジェクトを構築し、機能を段階的に移植。完了後、一括でデプロイを切り替え。

**理由**:
- Vue 3とNuxt 3のアーキテクチャが根本的に異なる
- ファイル構造の大幅な変更が必要
- SSR対応による実装パターンの変更
- TypeScript導入による全ファイルの書き換え

### リスク管理

| リスク | 対策 |
|-------|------|
| Three.js SSR非互換 | `<ClientOnly>`ラッパー + `process.client`ガード |
| 画像パス解決エラー | 静的インポートの維持 + `~/assets/`パス使用 |
| i18n動作変更 | `@nuxtjs/i18n`のlazy loading設定で対応 |
| デプロイ環境移行コスト | Vercel無料枠活用 or `nuxt generate`でFTP維持 |
| 型定義の複雑化 | 段階的な型付け + `any`の一時的使用許可 |

---

## フェーズ1: プロジェクトセットアップ

**見積もり工数**: 2時間

### 1.1 新規ブランチ作成

```bash
git checkout main
git pull origin main
git checkout -b feature/nuxt3-typescript-migration
```

### 1.2 Nuxt 3プロジェクト初期化

```bash
# 新しいディレクトリで初期化（既存プロジェクトと並行作業）
cd /Users/manatoy_mba/Desktop/dev/
npx nuxi@latest init manapuraza-nuxt3

cd manapuraza-nuxt3
npm install
```

### 1.3 TypeScript依存関係追加

```bash
npm install --save-dev typescript vue-tsc @nuxt/types
```

### 1.4 必須モジュールのインストール

```bash
# i18n
npm install @nuxtjs/i18n

# Font Awesome
npm install @fortawesome/fontawesome-svg-core \
  @fortawesome/free-solid-svg-icons \
  @fortawesome/free-brands-svg-icons \
  @fortawesome/vue-fontawesome

# Three.js
npm install three
npm install --save-dev @types/three

# GSAP
npm install gsap

# Markdown
npm install marked
npm install --save-dev @types/marked
```

### 1.5 .gitignore 設定

Nuxt 3のビルド出力を無視する設定を追加:

```
# Nuxt build outputs
.output
.nuxt
dist

# TypeScript
*.tsbuildinfo
```

---

## フェーズ2: TypeScript型定義の設計

**見積もり工数**: 3時間

### 2.1 型定義ファイル作成

```bash
mkdir types
touch types/index.ts
touch types/router.ts
```

### 2.2 主要データモデルの型定義

**`types/index.ts`**:

```typescript
/**
 * Creative作品の基本型定義
 */
export interface Creative {
  id: string;
  title: string;              // i18n key
  description: string;        // i18n key
  url: string;
  thumbnail: string;          // WebP image path
  tags: string[];
  detail?: CreativeDetail;
}

/**
 * 作品詳細ページのデータ型
 */
export interface CreativeDetail {
  images: string[];                           // 1枚以上の画像パス配列
  descriptionMarkdown: string;                // i18n key (Markdown formatted)
  youtube?: YoutubeEmbed;
  productionYear?: string;                    // 例: "2024~2025"
  credits?: string[];                         // i18n key array
  cta?: CtaButton[];
}

/**
 * YouTube埋め込み情報
 */
export interface YoutubeEmbed {
  mobile: string;    // Mobile URL
  desktop: string;   // Desktop URL
}

/**
 * CTAボタンの型定義
 */
export interface CtaButton {
  href: string;
  target?: '_blank' | '_self';
  icon?: [string, string];      // Font Awesome icon tuple ['fas', 'icon-name']
  text: string;                 // i18n key
  subText?: string;             // i18n key (tooltip)
  variant?: 'primary' | 'secondary' | 'simple';
}

/**
 * Creatives全体のデータ構造
 */
export interface CreativesData {
  animation: Creative[];
  development: Creative[];
  illustration: Creative[];
  video: Creative[];
}

/**
 * カテゴリー型（Union Type）
 */
export type CreativeCategory = 'animation' | 'development' | 'illustration' | 'video';

/**
 * Fallback defaults for CreativeDetail
 */
export interface DetailDefaults {
  images: string[];
  descriptionMarkdown: string;
  youtube: YoutubeEmbed | null;
  productionYear: string;
  credits: string[];
  cta: CtaButton[];
}
```

**`types/router.ts`**:

```typescript
import type { CreativeCategory } from './index';

/**
 * /creatives/:category/:id のパラメータ型
 */
export interface CreativeDetailParams {
  category: CreativeCategory;
  id: string;
}
```

### 2.3 tsconfig.json 設定

```json
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true
  }
}
```

---

## フェーズ3: nuxt.config.ts の設計

**見積もり工数**: 2時間

### 3.1 基本設定

**`nuxt.config.ts`**:

```typescript
export default defineNuxtConfig({
  // TypeScript設定
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        strict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noImplicitReturns: true,
      }
    }
  },

  // SSR有効化
  ssr: true,

  // アプリケーション設定
  app: {
    head: {
      title: 'MANAPURAZA.COM',
      htmlAttrs: { lang: 'ja' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/webp', href: '/icon.webp' }
      ]
    }
  },

  // CSS
  css: ['~/assets/main.css'],

  // モジュール
  modules: [
    '@nuxtjs/i18n',
  ],

  // i18n設定
  i18n: {
    locales: [
      { code: 'ja', iso: 'ja-JP', file: 'ja.json', name: '日本語' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    defaultLocale: 'ja',
    strategy: 'no_prefix',              // URL に locale を含めない
    langDir: 'locales/',
    lazy: true,                         // 遅延読み込み有効
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    },
    vueI18n: './i18n.config.ts'        // i18n設定ファイル
  },

  // Vite設定
  vite: {
    build: {
      sourcemap: true,
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: false,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_variables.scss" as *;'
        }
      }
    }
  },

  // Nitro設定（デプロイ用）
  nitro: {
    preset: 'vercel',                   // または 'netlify', 'node-server'
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/creatives', '/contact']
    }
  },

  // ランタイム設定
  runtimeConfig: {
    public: {
      siteUrl: 'https://manapuraza.com',
      gtmId: process.env.GTM_ID || 'GTM-WPNRVS6Q'
    }
  },

  // デバッグツール
  devtools: { enabled: true }
});
```

### 3.2 i18n.config.ts 作成

```typescript
export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  warnHtmlMessage: false,
  escapeParameter: false
}));
```

---

## フェーズ4: コンポーネント移行

**見積もり工数**: 8時間

### 4.1 app.vue の実装

**`app.vue`**:

```vue
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#ffd700" :height="3" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// グローバルなメタ設定
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | MANAPURAZA.COM` : 'MANAPURAZA.COM';
  }
});
</script>
```

### 4.2 layouts/default.vue の実装

```vue
<template>
  <div id="main">
    <!-- Three.js Background (Client-side only) -->
    <ClientOnly>
      <MetaBall />
    </ClientOnly>

    <!-- Navigation -->
    <Menu />

    <!-- Page Content -->
    <div class="app glass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// ロゴのプログレッシブ読み込みロジックをここに実装（必要に応じて）
</script>

<style scoped>
/* 既存のApp.vueスタイルをここに移行 */
</style>
```

### 4.3 MetaBall.vue のSSR対応

**重要**: Three.jsはブラウザ専用のため、SSR時に実行されないように対策が必要。

```vue
<script setup lang="ts">
import { ref, shallowRef, onMounted, onUnmounted } from 'vue';

// SSRガード: クライアントサイドのみで実行
if (process.client) {
  // Three.js dynamic import
  const THREE = await import('three');
  const { MarchingCubes } = await import('three/examples/jsm/objects/MarchingCubes.js');

  // 既存のロジックをここに実装
  // (camera, scene, renderer, effect等の初期化)

  onMounted(async () => {
    await nextTick();
    const updateCanvasSize = await init();
    animate();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    cleanupThreeJS();
  });
}
</script>

<template>
  <div id="back"></div>
</template>
```

### 4.4 Menu.vue の移行

Nuxt 3では`<router-link>`の代わりに`<NuxtLink>`を使用:

```vue
<template>
  <header class="desktop-nav" v-if="!isMobile">
    <div class="logo">
      <NuxtLink to="/">
        <img src="~/assets/logo.webp" alt="MANAPURAZA Logo" @error="handleLogoError" />
      </NuxtLink>
    </div>

    <nav class="nav-links">
      <NuxtLink to="/about">{{ $t('navbar.menu.about') }}</NuxtLink>
      <NuxtLink to="/creatives">{{ $t('navbar.menu.creatives') }}</NuxtLink>
      <NuxtLink to="/contact">{{ $t('navbar.menu.contact') }}</NuxtLink>
    </nav>

    <!-- 言語切り替え -->
    <div class="lang-dropdown">
      <button @click="switchLocale">
        {{ locale === 'ja' ? 'Eng' : '日本語' }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
const route = useRoute();

const switchLocale = () => {
  setLocale(locale.value === 'ja' ? 'en' : 'ja');
};
</script>
```

---

## フェーズ5: ルーティングとデータ管理

**見積もり工数**: 3時間

### 5.1 pages/ ディレクトリ構造

```
pages/
├── index.vue                    # Home
├── about.vue                    # About
├── creatives/
│   ├── index.vue                # Creatives List
│   └── [category]/
│       └── [id].vue             # Creative Detail (動的ルート)
├── contact.vue                  # Contact
└── underconstraction.vue        # Under Construction
```

### 5.2 動的ルート実装例

**`pages/creatives/[category]/[id].vue`**:

```vue
<script setup lang="ts">
import type { CreativeDetailParams } from '~/types/router';
import type { Creative } from '~/types';

const route = useRoute();
const { t, locale } = useI18n();

// パラメータの型アサーション
const params = route.params as CreativeDetailParams;
const category = params.category;
const id = params.id;

// ページバリデーション
definePageMeta({
  validate: async (route): Promise<boolean> => {
    const validCategories: CreativeCategory[] = ['animation', 'development', 'illustration', 'video'];
    return validCategories.includes(route.params.category as CreativeCategory);
  }
});

// データ取得
const { data: creative, error } = await useAsyncData<Creative>(
  `creative-${category}-${id}`,
  () => {
    const { getCreativeById } = useCreatives();
    const result = getCreativeById(category, id);

    if (!result) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Creative not found'
      });
    }

    return result;
  }
);

// エラーハンドリング
if (error.value) {
  throw error.value;
}

// SEO設定
useHead({
  title: computed(() => t(creative.value!.title)),
  meta: [
    {
      name: 'description',
      content: computed(() => t(creative.value!.description))
    },
    {
      property: 'og:title',
      content: computed(() => t(creative.value!.title))
    },
    {
      property: 'og:description',
      content: computed(() => t(creative.value!.description))
    }
  ]
});
</script>

<template>
  <div class="creative-detail">
    <!-- 既存のテンプレートをここに移行 -->
  </div>
</template>
```

### 5.3 Composables: useCreatives.ts

**`composables/useCreatives.ts`**:

```typescript
import type { CreativesData, Creative, CreativeCategory, DetailDefaults } from '~/types';

// 画像の静的インポート
import tcuAnimationImg from '~/assets/creatives-thumb/animation/tcu-animation.webp';
import manapurazaImg from '~/assets/creatives-thumb/dev/manapuraza.webp';
// ... 他の画像インポート

export const useCreatives = () => {
  const creativesData: CreativesData = {
    animation: [
      {
        id: 'tcu-animation',
        title: 'creatives.animation.tcuAnimation.title',
        description: 'creatives.animation.paragraph',
        url: 'https://tcu-animation.jp',
        thumbnail: tcuAnimationImg,
        tags: ['Animation', 'Director', 'Setagaya Ward', 'Official'],
        detail: {
          images: [tcuAnimationImg],
          descriptionMarkdown: 'creatives.animation.tcuAnimation.detailDescription',
          youtube: {
            mobile: 'https://www.youtube.com/embed/...',
            desktop: 'https://www.youtube.com/embed/...'
          },
          productionYear: '2024~2025',
          credits: [
            'creatives.animation.tcuAnimation.description.production',
          ],
          cta: [
            {
              href: 'https://youtu.be/...',
              target: '_blank',
              icon: ['fas', 'play'],
              text: 'creatives.animation.tcuAnimation.watchMain',
              subText: 'creatives.animation.tcuAnimation.watchSub',
              variant: 'primary'
            }
          ]
        }
      }
      // ... 他のアニメーション作品
    ],
    development: [
      // ...
    ],
    illustration: [
      // ...
    ],
    video: [
      // ...
    ]
  };

  const detailDefaults: DetailDefaults = {
    images: [],
    descriptionMarkdown: '',
    youtube: null,
    productionYear: '',
    credits: [],
    cta: [
      {
        href: '',
        target: '_blank',
        icon: ['fas', 'arrow-up-right-from-square'],
        text: 'creatives.common.viewProject',
        subText: '',
        variant: 'primary'
      }
    ]
  };

  const getCreativeById = (category: CreativeCategory, id: string): Creative | null => {
    return creativesData[category]?.find(item => item.id === id) || null;
  };

  const getAllCreatives = (category: CreativeCategory): Creative[] => {
    return creativesData[category] || [];
  };

  const getAllCategories = (): CreativeCategory[] => {
    return ['animation', 'development', 'illustration', 'video'];
  };

  return {
    creativesData,
    detailDefaults,
    getCreativeById,
    getAllCreatives,
    getAllCategories
  };
};
```

---

## フェーズ6: SSR対応とクライアントサイド処理

**見積もり工数**: 3時間

### 6.1 `<ClientOnly>`の使用

ブラウザAPIに依存するコンポーネントは必ず`<ClientOnly>`でラップ:

```vue
<ClientOnly>
  <MetaBall />
</ClientOnly>
```

### 6.2 `process.client`ガード

コンポーネント内でのブラウザAPI使用時:

```typescript
if (process.client) {
  // window, document, localStorage等のブラウザAPI
  window.scrollTo(0, 0);
  localStorage.setItem('key', 'value');
}
```

### 6.3 Lifecycle Hooks の使い分け

| Hook | SSR | CSR | 用途 |
|------|-----|-----|------|
| `setup()` / `<script setup>` | ✓ | ✓ | データ取得、computed、ref定義 |
| `onMounted()` | ✗ | ✓ | DOM操作、ブラウザAPI、イベントリスナー |
| `onServerPrefetch()` | ✓ | ✗ | サーバーサイドでのデータ取得 |

### 6.4 requestIdleCallback の扱い

Nuxt 3では不要（自動コード分割で代替）。ただし、カスタムロジックがある場合:

```typescript
if (process.client) {
  const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 100));

  schedule(() => {
    // 遅延実行したい処理
  });
}
```

---

## フェーズ7: デプロイ設定

**見積もり工数**: 2時間

### 7.1 GitHub Actions更新

**`.github/workflows/deploy.yml`**:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22.13.1'

      - name: Install dependencies
        run: npm ci

      - name: Build Nuxt 3
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 7.2 Vercel設定

**`vercel.json`**:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".output/public",
  "framework": "nuxtjs",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### 7.3 環境変数設定

Vercelダッシュボードで以下を設定:

- `GTM_ID`: Google Tag Manager ID
- その他の機密情報

---

## トラブルシューティング

### Issue 1: Three.js が SSR でエラー

**症状**: `ReferenceError: window is not defined`

**解決策**:
1. `<ClientOnly>`でラップ
2. `process.client`ガードを追加
3. Dynamic import使用

```vue
<script setup lang="ts">
if (process.client) {
  const THREE = await import('three');
  // Three.js処理
}
</script>
```

### Issue 2: 画像パスが解決されない

**症状**: 画像が404エラー

**解決策**:
- `~/assets/`パスを使用
- 静的インポートを維持
- `public/`ディレクトリに配置（動的参照の場合）

```typescript
// ✓ 正しい
import imgSrc from '~/assets/image.webp';

// ✗ 間違い
const imgSrc = '~/assets/image.webp';
```

### Issue 3: i18n翻訳が反映されない

**症状**: `$t()`が空文字を返す

**解決策**:
- `@nuxtjs/i18n`のlazy loading設定を確認
- `i18n.config.ts`の設定を確認
- ファイルパスが正しいか確認

### Issue 4: TypeScript型エラー

**症状**: `npm run typecheck`でエラー多発

**解決策**:
- 段階的に型付け（まず`any`で動作確認、後で厳格化）
- `@ts-ignore`を一時的に使用（ただし、コメントで理由を明記）
- `tsconfig.json`の`strict`オプションを段階的に有効化

---

## 参考資料

### 公式ドキュメント

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt 3 日本語ガイド](https://nuxt.com/docs/getting-started/introduction)
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [@nuxtjs/i18n Documentation](https://i18n.nuxtjs.org/)
- [Nitro Documentation](https://nitro.unjs.io/)

### 内部ドキュメント

- [移行プラン詳細](../../.claude/plans/sunny-snacking-blum.md)
- [TypeScript導入ガイド](./typescript-guide.md)
- [CLAUDE.md](../../CLAUDE.md)

### コミュニティリソース

- [Nuxt Discord](https://discord.com/invite/ps2h6QT)
- [Vue.js Japan User Group](https://vuejs-jp.org/)
- [Stack Overflow - nuxt3 tag](https://stackoverflow.com/questions/tagged/nuxt3)

---

**最終更新**: 2025/12/14
**執筆者**: Claude AI (フリーザ様モード)
**レビュー**: 未実施
