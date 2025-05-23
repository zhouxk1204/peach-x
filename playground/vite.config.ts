import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PeachXResolver } from 'peach-x/resolver'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [PeachXResolver],
    }),
    Components({
      resolvers: [PeachXResolver],
    }),
  ],
  server: {
    port: 5173,
    open: true
  }
})