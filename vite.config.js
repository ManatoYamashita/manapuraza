import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer(),
  ],
  define: {
    __VUE_I18N_FULL_INSTALL__: false,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  build: {
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // コンソール完全削除を無効化
        drop_debugger: true, // debugger文は削除
        pure_funcs: ['console.debug', 'console.trace'], // 詳細ログのみ削除
        dead_code: true,
        unused: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        // 重要ログのコメント保持
        comments: /^!|@preserve|@license|@cc_on|MetaBall:/i,
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'vue',
            'vue-router',
            'vue-i18n',
          ],
          'vendor_three': ['three'],
          'vendor_fontawesome': [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/vue-fontawesome'
          ],
          'vendor_gsap': ['gsap'],
        }
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
  assetsInclude: ["robots.txt"],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
