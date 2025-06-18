<p align="center">
  <img width="200px" src="./docs/public/logo.avif">
</p>
<h1 align="center">Peach X</h1>
<p align="center">
  <a href="https://www.npmjs.org/package/peach-x">
    <img src="https://img.shields.io/npm/v/peach-x.svg" />
  </a>
  <a href="https://github.com/zhouxk1204/peach-x">
    <img src="https://img.shields.io/badge/node-%3E%3D18-47c219" alt="Node version" />
  </a>
  <a href="https://npmcharts.com/compare/peach-x?minimal=true">
    <img src="https://img.shields.io/npm/dm/peach-x.svg" />
  </a>
</p>

<p align="center">
  轻量、现代、美观的 Vue 3 UI 组件库
</p>

## ✨ 特性

- 🌸 默认车厘子色主题，清新优雅
- ⚙️ 支持按需引入与全局注册
- 🎨 自定义主题支持，可通过 `CSS` 覆盖默认样式
- 📦 支持 `Vite` / `Vue CLI` 项目
- 🧩 组件灵活扩展，适合二次封装
- 🌍 内置国际化支持（可选）

## 📦 安装

使用 `pnpm` / `yarn` / `npm` 安装：
```bash
# Using npm
npm install peach-x

# Using yarn
yarn add peach-x

# Using pnpm
pnpm add peach-x
```

## 🛠 使用方式

```javascript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import PeachX from 'peach-x'
import 'peach-x/theme/style.css' // 引入默认主题样式

const app = createApp(App)
app.use(PeachX)
app.mount('#app')
```

然后你可以在 `Vue` 文件中使用组件：

```vue
<template>
  <p-button>Click me</p-button>
</template>
```
## 🧩 `Volar` 支持
如果您使用 `Volar`，请在 `tsconfig.json` 中通过 `compilerOptions.types` 指定全局组件类型。
```tsconfig.json
"compilerOptions": {
  "types": ["peach-x/global"]
}
```
使用组件时会自动识别出组件的类型并提供 IDE 提示。

## 📚 文档

完整文档请访问：https://www.peach-x.com

## 🚀 推荐插件
强烈推荐安装 [`Peach X Snippets`](https://marketplace.visualstudio.com/items?itemName=zhouxk.peach-x-snippets) 插件，让您的开发效率飞升！

1. 在 VS Code 中安装上述插件。
2. 搭配本组件库开发时，即可获得组件名称、属性等智能提示和代码片段补全功能。

这样可以让你更高效地使用本组件库进行开发。

## 🌐 浏览器支持

Peach X 支持现代浏览器以及 IE11 及以上版本（需额外引入 polyfill）。

## 💖 贡献指南

我们欢迎任何形式的贡献！

## 📄 License

Peach X is open source software licensed as [MIT](https://opensource.org/licenses/MIT).

---

<p align="center">
Made with ❤️ by <a href="https://github.com/zhouxk1204">zhouxk1204</a>
</p>
