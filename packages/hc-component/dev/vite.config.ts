import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: { silenceDeprecations: ['legacy-js-api'] },
      sass: { silenceDeprecations: ['legacy-js-api'] },
    },
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src/vuetify-src')
    }
  },
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: ['vue', 'vuetify'],
    force: true
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})