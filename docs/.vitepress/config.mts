import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  lang: 'zh-CN',
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
  title: "Peach X",
  description: "轻量、现代、美观的 Vue 3 UI 组件库",
  themeConfig: {
    siteTitle: '🍑 Peach X',
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/zhouxk1204/peach-x/tree/dev/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      level: [2, 4],
      label: '页面导航'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present zhouxk'
    },
    // outlineTitle: '页面导航',
    lastUpdatedText: '最后更新于',
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
            { text: "快速开始", link: "/guides/quickstart" },
            { text: "主题", link: "/guides/theme" },
            { text: "暗黑模式", link: "/guides/dark-mode" },
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
