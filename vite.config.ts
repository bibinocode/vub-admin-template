import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCss from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCss(),
    VueRouter(),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
