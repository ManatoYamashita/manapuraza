import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
          manualChunks(id) {
              if (id.includes('node_modules')) {
                  if (id.includes('three')) {
                      return 'vendor_three';
                  }
                  return 'vendor';
              }
          },
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
