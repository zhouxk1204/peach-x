import 'virtual:group-icons.css'
import './custom.css'

import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import Theme from 'vitepress/theme'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Demo', AntdTheme)
  }
} 