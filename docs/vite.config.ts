import { defineConfig } from 'vite';
import { PeachXResolver } from 'peach-x';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig(async () => {
  const { default: VitePluginVitepressDemo } = await import('vite-plugin-vitepress-demo');

  return {
    plugins: [
      VitePluginVitepressDemo(),
      AutoImport({
        resolvers: [PeachXResolver]
      }),
      Components({
        resolvers: [PeachXResolver],
        dts: './auto-imports.d.ts'
      })
    ]
  };
});
