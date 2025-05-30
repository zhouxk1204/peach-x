# Peach X
一个轻量优雅的 `Vue 3` 组件库

## 技术架构

### 轻量化设计
- **零依赖**：不捆绑任何第三方库
- **现代浏览器优先**：基于原生 `ES Modules` 构建

### TypeScript 支持
- 完整的类型推导
- `100%` `TypeScript` 编写，和你的 `TypeScript` 项目无缝衔接。

## 组件生态
### 基础组件
- Button 按钮
### 高级组件
- Barrage 弹幕组件
- EmojiKeyboard 表情键盘

## 开源许可
本项目采用 MIT 开源协议，允许自由使用、修改和分发。我们欢迎社区贡献，共同打造更完善的 `Vue 3` 组件生态。

## 开发者
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/avatar.avif',
    name: 'zhouxk',
    title: 'Creator & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/zhouxk1204' },
      { icon: 'x', link: 'https://x.com/zhouxk1204' }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members />
