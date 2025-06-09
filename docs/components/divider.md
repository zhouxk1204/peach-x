# Divider 分割线
分割线将内容分隔开，形成清晰的层次结构。
## 何时使用
- 对不同章节的内容进行分割。
- 对重点内容与次要内容进行分割。

## 基础使用
默认居中、实线、1px 高度的分割线。

## 分割线的类型
可以通过 `type` 来设置分割线的类型，支持 `solid`、`dashed`、`dotted` 和 `double`。

## 设置分割线的粗细
可以通过 `height` 来设置分割线的高度，支持 `string` 和 `number` 类型。如果是string类型，目前只支持 `px` 单位。

## 设置分割线的颜色
可以通过 `color` 来设置分割线的颜色，支持 `string` 类型。

## 设置分割线标题
可以设置分割线的标题，标题的位置和标题的背景色和样式
可以通过 `placement`、`contentBgColor` 和 `textColor` 来控制。

## Divider API
`Divider Props`

| 属性名 | 说明 | 类型 | 默认值 |
|:-------|:------------:|:------:|:-------:|
| size | 文字尺寸 | `small` \| `medium` \| `large` | `medium` |
| type | 分割线类型 | `solid` \| `dashed` \| `dotted` \| `double` | `solid` |
| placement | 是否朴素按钮 | `left` \| `center` \| `right` | `center` |
| color | 分割线颜色 | `string` | `#e0e0e0` |
| height | 分割线的高度 | `string` \| `number` | `1px` |
| contentBgColor | 分割线内容背景色 | `string`  | `#ffffff`（暗黑模式为`#121212`) |
| textColor | 分割线内容颜色 | `string`  | `#333`（暗黑模式为`#f0f0f0`) |
