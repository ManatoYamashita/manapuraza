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
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,  // console.logは保持（デバッグ用）
          drop_debugger: true,  // debugger文は削除
          pure_funcs: ['console.debug', 'console.trace'],  // 詳細ログのみ削除
          dead_code: true,
          unused: true,
        },
        mangle: {
          safari10: true,  // Safari 10互換性
        },
        format: {
          comments: /^!|@preserve|@license|@cc_on|MetaBall:/i,
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            // Vue/Nuxt関連（Nuxtが自動最適化するため最小限）
            'vendor-three': ['three'],
            'vendor-fontawesome': [
              '@fortawesome/fontawesome-svg-core',
              '@fortawesome/free-solid-svg-icons',
              '@fortawesome/free-brands-svg-icons',
              '@fortawesome/vue-fontawesome'
            ],
            'vendor-gsap': ['gsap'],
            'vendor-markdown': ['marked'],
          }
        }
      }
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
