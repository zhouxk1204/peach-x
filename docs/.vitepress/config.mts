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
      groupIconVitePlugin(),
    ],
  },
  title: "Peach X: 轻量、现代、美观的 Vue 3 UI 组件库",
  description: "轻量、现代、美观的 Vue 3 UI 组件库",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    siteTitle: 'Peach X',
    logo: '/logo.avif',
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
          ],
        },
        {
          text: "基础",
          items: [
            { text: "安装", link: "/guides/installation" },
            { text: "快速开始", link: "/guides/quickstart" },
            // { text: "主题", link: "/guides/theme" },
            { text: "暗黑模式", link: "/guides/dark-mode" },
          ],
        },
      ],

      "/components/": [
        {
          text: "基础组件",
          items: [{ text: "Button 按钮", link: "/components/button" },
            { text: "Divider 分割线", link: "/components/divider" }
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/zhouxk1204/peach-x", ariaLabel: "GitHub" },
      { icon: {
          svg: `<svg t="1741408990097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1514" width="200" height="200"><path d="M64 960V128h832v832z" fill="#CB3837" p-id="1515"></path><path d="M192 320h576v512h-128V448H448v384H192z" fill="#FFFFFF" p-id="1516"></path></svg>`
        }, link: "https://www.npmjs.com/package/peach-x", ariaLabel: "npm" },
    ],
  },
});
