# 快速开始
Peach X 是一套基于 `Vue 3` 的现代化 UI 组件库，提供了丰富的预设组件和主题样式，帮助开发者快速构建美观、一致的应用程序界面。

## 完整引入方式
推荐在中小型项目中使用完整引入方式，这种方式简单直接，可以立即使用所有组件。
### 配置步骤
1. 在项目入口文件（通常是`main.ts` 或 `main.js`）中导入 Peach X 及其样式：
::: code-group
```ts [main.ts]
import { createApp } from 'vue'
import App from './App.vue'
import PeachX from 'peach-x'
import 'peach-x/dist/theme/style.css' // 引入默认主题样式

const app = createApp(App)
app.use(PeachX)
app.mount('#app')
```
::: 
2. 在 Vue 单文件组件中直接使用组件：
::: code-group
```vue [App.vue]
<template>
  <PButton>Click me</PButton>
</template>
```
:::

## 按需引入方式
对于大型项目或对包体积敏感的项目，推荐使用自动导入方案来优化打包体积和开发体验。
### 自动导入 <Badge type="tip" text="推荐" />
#### 安装插件
首先你需要安装`unplugin-vue-components`和`unplugin-auto-import`这两款插件
:::code-group
```shell [npm]
npm install -D unplugin-vue-components unplugin-auto-import
```
```shell [yarn]
yarn add -D unplugin-vue-components unplugin-auto-import
```
```shell [pnpm]
pnpm add -D unplugin-vue-components unplugin-auto-import
```
:::
#### Vite 配置
在`vite.config.ts`中进行如下配置：
:::code-group
```ts [vite.config.ts]
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PeachXResolver } from 'peach-x/resolver'
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [PeachXResolver],
    }),
    Components({
      resolvers: [PeachXResolver],
      dts: 'src/components.d.ts', // 自动生成类型声明文件
    }),
  ],
})
```
:::
#### 使用说明
配置完成后：
- Peach X 组件库的组件可以直接使用，无需手动导入
- 类型声明文件会自动生成，完美支持 `Volar` 和 `TypeScript`
::: tip
**这种配置方式既能保持代码简洁，又能实现最优的打包体积，是现代化Vue项目的推荐实践。**
:::


### 手动导入
Peach X 的所有组件都支持基于 `ES Module` 的 `Tree Shaking`，您可以通过手动导入的方式精确控制项目打包内容。
::: code-group
```vue [App.vue]
<template>
  <PButton>Click me</PButton>
</template>
<script setup lang="ts">
import { PButton } from 'peach-x';
import 'peach-x/theme/button.css';
</script>
```
:::

## Volar 类型支持
如果您使用 **完整引入方式** ，为了获得更好的开发体验，建议配置 `TypeScript` 以获得完整的类型提示：
1. 在`tsconfig.json`中添加类型声明：
::: code-group
```json [tsconfig.json]
"compilerOptions": {
  "types": ["peach-x/global"]
}
```
::: 
2. 配置完成后，在模板中使用组件时将获得：
- 组件名称自动补全
- 属性类型检查
- 事件类型提示
- 插槽使用提示

