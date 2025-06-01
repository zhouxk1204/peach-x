import 'peach-x/theme/style.css'
import 'virtual:group-icons.css'
import './custom.css'

import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import Theme from 'vitepress/theme'
import PeachX from 'peach-x'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Demo', AntdTheme)
    app.use(PeachX)
  }
} 