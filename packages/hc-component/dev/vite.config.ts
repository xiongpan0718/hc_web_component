import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/hc_web_component/' : '/',
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