import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "packages",
      outDir: "dist/types",
      copyDtsFiles: true,
    }),
    // 在 rollup 里用 copy 插件拷贝 dark.css
    copy({
      targets: [{ src: "packages/theme/dark.css", dest: "dist/theme" }],
      hook: "writeBundle", // 打包完成后执行
    }),
  ],
  build: {
    sourcemap: true, // 开启 Source Map 生成
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      name: "PeachX",
      formats: ["es"],
      fileName: () => "index.js"
    },
    rollupOptions: {
      external: ["vue"],
      input: path.resolve(__dirname, "packages/index.ts"),
      output: {
        format: "es",
        preserveModules: true, // 保留模块结构
        preserveModulesRoot: "packages", // 以 packages 作为根目录开始保留
        entryFileNames: "[name].js",
        assetFileNames: (chunkInfo) => {
          const name = chunkInfo.names[0]
          if (name && name.endsWith(".css")) {
            // 保留 theme 目录结构
            return "theme/style.css";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
});
