# Button 按钮

## 基础用法
按钮组件提供多种样式组合，通过 `type` 定义主色调，`plain` 控制简约风格，`round` 调整圆角效果，满足不同场景的视觉需求。
<demo src="./demos/basic.vue"></demo>

## 禁用状态
按钮组件支持禁用状态，禁用时自动应用 `cursor: not-allowed` 样式，直观提示用户不可点击。
<demo src="./demos/disabled.vue"></demo>

## 调整尺寸
按钮组件提供多种预设尺寸，方便适配不同场景的布局需求。
<demo src="./demos/size.vue"></demo>

## 加载状态
加载状态按钮组件，用于显示加载中的状态。
<demo src="./demos/loading.vue"></demo>

## Button API
`Button Props`

| 属性名 | 说明 | 类型 | 默认值 |
|:-------|:------------:|:------:|:-------:|
| size | 按钮尺寸 | `small` \| `medium` \| `large` | `medium` |
| type | 按钮类型 | `primary` \| `success` \| `warning` \| `danger` \| `info` | `primary` |
| plain | 是否朴素按钮 | `boolean` | `false` |
| round | 是否圆角按钮 | `boolean` | `false` |
| disabled | 是否禁用状态 | `boolean` | `false` |