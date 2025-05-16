<h1 align="center">Peach X</h1>
<p align="center">
  <a href="https://github.com/zhouxk1204/peach-ui">
    <img src="https://img.shields.io/badge/node-%3E%3D18-47c219" alt="Node version" />
    <img src="https://img.shields.io/npm/v/peach-ui" alt="npm version" />
    <img src="https://img.shields.io/bundlephobia/min/peach-ui" alt="minified size" />
    <img src="https://img.shields.io/npm/l/peach-ui" alt="license" />
  </a>
</p>

<p align="center">
  A Simple, Fast Vue 3 Component Library built with TypeScript
</p>

## Features

- 🚀 Built with Vue 3 Composition API
- ⚡ TypeScript support out of the box
- 🌈 Modern, clean design
- 📦 Lightweight and fast
- 🔧 Fully tree-shakable
- 🎨 Customizable theme

## Installation

```bash
# Using npm
npm install peach-ui

# Using yarn
yarn add peach-ui

# Using pnpm
pnpm add peach-ui
```

## Usage

```javascript
// main.js
import { createApp } from 'vue'
import PeachUI from 'peach-ui'
import 'peach-ui/dist/style.css'

const app = createApp(App)
app.use(PeachUI)
app.mount('#app')
```

Then use components in your Vue files:

```vue
<template>
  <PButton>Click me</PButton>
</template>
```

## Documentation

For full documentation, examples and API reference, visit our [documentation site](https://peach-ui-docs.example.com).

## Browser Support

Peach X supports modern browsers and IE11+ (requires additional polyfills).

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

Peach X is open source software licensed as [MIT](https://opensource.org/licenses/MIT).

---

<p align="center">
Made with ❤️ by <a href="https://github.com/zhouxk1204">zhouxk1204</a>
</p>
