// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

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
        { name: 'description', content: '山下マナト（山下真和都）のWebポートフォリオ' },
        { property: 'og:title', content: 'MANAPURAZA.COM' },
        { property: 'og:description', content: '山下マナト（山下真和都）のWebポートフォリオ' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://manapuraza.com' },
        { property: 'og:image', content: 'https://manapuraza.com/ogp.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/webp', href: '/icon.webp' }
      ]
    }
  },

  // CSS
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/main.css'
  ],

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
    strategy: 'no_prefix',
    langDir: 'locales/',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
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
    }
  },

  // Nitro設定（デプロイ用）
  nitro: {
    preset: 'node-server',  // または 'vercel', 'netlify'
    compressPublicAssets: true,
  },

  // ランタイム設定
  runtimeConfig: {
    public: {
      siteUrl: 'https://manapuraza.com'
    }
  },

  // DevToolsの有効化
  devtools: { enabled: true }
});
