import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const { default: VitePluginVitepressDemo } = await import('vite-plugin-vitepress-demo')
  
  return {
    plugins: [
      VitePluginVitepressDemo(),
    ],
  }
})