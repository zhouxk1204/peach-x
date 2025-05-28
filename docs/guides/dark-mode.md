# 暗黑模式
## 使用方法
### 基本使用
在 `main.ts` 文件中引入暗黑模式的样式文件（需在在默认主题样式之后导入）：
:::code-group
```ts [main.ts]
import 'peach-x/theme/style.css' // 默认主题样式
import 'peach-x/theme/dark.css'
```
:::

如果您只需要暗黑模式，那么只需在在 `HTML` 根元素上添加 `dark` 类：
:::code-group
```html [index.html]
<html class="dark">
  <head></head>
  <body></body>
</html>
```
:::
### 动态切换
使用 [`VueUse`](https://vueuse.org/) 的 [`useDark`](https://vueuse.org/core/useDark/) 组合式 API 实现动态切换：
:::code-group
```vue [App.vue]
<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    切换模式 {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>
```
:::

## 推荐用法
使用`Config Provider`全局配置
`Peach X`提供了更便捷的全局配置方式
:::code-group
```vue [App.vue]
<script setup>
import { reactive } from 'vue'

const config = reactive({
  // 启用暗黑模式
  dark: true,
  // 其他全局配置...
})
</script>

<template>
  <el-config-provider :dark="config.dark">
    <!-- 应用内容 -->
  </el-config-provider>
</template>
```
:::
优点
- 统一管理主题配置
- 支持动态切换
- 可与其他全局配置一起管理
- 组件级别的细粒度控制

## 自定义暗黑主题
您可以通过覆盖 `CSS` 变量的方式自定义暗黑模式的样式。
### 具体步骤
1. 创建自定义变量文件
建议在项目中创建 `styles/dark/css-vars.css` 文件：
:::code-group
```css [css-vars.css]
/* styles/dark/css-vars.css */
html.dark {
  /* 暗色主色调 */
  --p-primary: #c46a96;
  --p-primary-hover: #a9507c;
  --p-primary-active: #8e3963;
  --p-primary-bg: var(--p-primary);
  --p-primary-text: #fff;

  /* 背景 */
  --p-bg: #1e1e1e;
  --p-bg-muted: #2a2a2a;
  --p-surface: #2c2c2c;
  --p-surface-elevated: #3a3a3a;

  /* 文字 */
  --p-text: #e5e5e5;
  --p-text-muted: #a0a0a0;

  /* ... */
}
```
:::
2. 在 `main.ts` 中引入您的自定义变量文件
:::code-group
```ts [main.ts]
import 'peach-x/theme/style.css' // 默认主题样式
import 'peach-x/theme/dark.css' // 默认暗黑主题
import '@/styles/dark/css-vars.css'
```
:::
### 最佳实践
- 按模块组织：大型项目可以按模块拆分变量文件
- 文档记录：维护一个变量文档说明各变量的用途
- 适度覆盖：只覆盖必要的变量，保持与主题的整体一致性