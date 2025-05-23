import path, { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "packages",
      outDir: "dist/types",
      copyDtsFiles: true,
    }),
  ],
  resolve: {
    alias: {
      "@peach-x": path.resolve(__dirname, "packages"),
    },
  },
  build: {
    sourcemap: true, // 开启 Source Map 生成
    lib: {
      entry: {
        index: path.resolve(__dirname, "packages/index.ts"),
        "theme/index": path.resolve(__dirname, "packages/theme/index.ts"),
      },
      name: "PeachX",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "packages",
          dir: resolve(__dirname, "dist/es"),
          entryFileNames: "[name].mjs",
        },
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "packages",
          dir: resolve(__dirname, "dist/lib"),
          entryFileNames: "[name].cjs",
          exports: "named",
        },
      ],
    },
  },
});
