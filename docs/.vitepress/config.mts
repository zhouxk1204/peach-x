import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },
  title: "🍑 Peach X",
  description: "轻量、现代、美观的 Vue 3 UI 组件库",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guides/" },
      { text: "组件", link: "/components/button" },
    ],

    sidebar: {
      "/guides/": [
        {
          text: "介绍",
          items: [
            { text: "Peach X", link: "/guides/" },
            // { text: "快速上手", link: "/guides/quickstart" },
            // { text: "安装指南", link: "/guides/installation" },
            // { text: "版本迁移", link: "/guides/migration" },
          ],
        },
        {
          text: "基础",
          items: [
            { text: "安装", link: "/guides/installation" },
            { text: "快速上手", link: "/guides/quickstart" },
            // { text: "安装指南", link: "/guides/installation" },
            // { text: "版本迁移", link: "/guides/migration" },
          ],
        },
        // {
        //   text: '高级指南',
        //   items: [
        //     { text: '国际化', link: '/guides/i18n' },
        //     { text: '性能优化', link: '/guides/optimization' }
        //   ]
        // }
      ],

      "/components/": [
        {
          text: "基础组件",
          items: [{ text: "Button 按钮", link: "/components/button" }],
        },
        // {
        //   text: '表单组件',
        //   collapsible: true,
        //   items: [
        //     { text: 'Form 表单', link: '/components/form' },
        //     { text: 'Select 选择器', link: '/components/select' }
        //   ]
        // },
        // {
        //   text: '数据展示',
        //   collapsible: true,
        //   items: [
        //     { text: 'Table 表格', link: '/components/table' },
        //     { text: 'Card 卡片', link: '/components/card' }
        //   ]
        // }
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/zhouxk1204/peach-x" },
    ],
  },
});
