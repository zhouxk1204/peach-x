# Divider 分割线
Divider（分割线）是UI设计中的基础视觉元素，主要用于在界面中建立清晰的内容边界和层次结构。

## 代码演示
### 基础使用  
<p></p>

<demo src="./demos/divider-base.vue"></demo>

### 设置分割线样式
<p></p>

<demo src="./demos/divider-type.vue"></demo>

### 设置分割线粗细
<p></p>

<demo src="./demos/divider-height.vue"></demo>

### 设置颜色
<p></p>

<demo src="./demos/divider-color.vue"></demo>

### 设置分割线文案
<p></p>

<demo src="./demos/divider-title.vue"></demo>

### 使用垂直分隔线
垂直分割线用于在视觉上分隔内容，通常用于菜单、列表、布局等场景。
<demo src="./demos/divider-direction.vue"></demo>

## API
### 属性

| 属性名 | 说明 | 类型 | 默认值 |
|:-------|:------------:|:------:|:-------:|
| `size` | 分割线文字边距尺寸 | `small` \| `medium` \| `large` | `medium` |
| `type` | 分割线类型 | `solid` \| `dashed` \| `dotted` \| `double` | `solid` |
| `placement` | 是否朴素按钮 | `left` \| `center` \| `right` | `center` |
| `color` | 分割线颜色 | `string` | `#e0e0e0` |
| `height` | 分割线的高度 | `string` \| `number` | `1px` |
| `contentBgColor` | 分割线内容背景色 | `string`  | `#fff` / `#121212` |
| `textColor` | 分割线内容颜色 | `string`  | `#333` / `#f0f0f0` |
| `direction` | 分割线方向 | `vertical` \| `horizontal`  | `horizontal` |

### 插槽
| 插槽名 | 说明 |
|:-------|:------------:|
| `default` | 设置分割线的文案内容 | 
