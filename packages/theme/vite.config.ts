import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './index.css',  // 入口 CSS 文件
      output: {
        assetFileNames: 'style.css', // 输出文件名
      },
    },
    cssCodeSplit: false,  // 打包成单个 css 文件
  },
});
