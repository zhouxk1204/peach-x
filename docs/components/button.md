# Button 按钮

## 基础用法
使用 type、plain、round 和 circle 来定义按钮的样式。
<demo src="./demos/basic.vue" title="标题" desc="描述"></demo>

## 禁用状态
你可以使用`disabled`属性来定义按钮是否被禁用。
使用`disabled`属性来控制按钮是否为禁用状态。 该属性接受一个`Boolean`类型的值。

## 调整尺寸
除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。
使用 size 属性额外配置尺寸，可使用 large和small两种值。

# Button API
Button Attributes


| 属性名 | 说明 | 类型 | 默认值 |
|:-------|:------------:|:------:|:-------|
| size | 按钮尺寸 | `small` \| `medium` \| `large` | `medium` |
| type | 按钮类型 | `default` \| `primary` \| `success` \| `warning` \| `danger` \| `info` | `default` |
| plain | 是否朴素按钮 | `boolean` | `false` |
| round | 是否圆角按钮 | `boolean` | `false` |
| disabled | 是否禁用状态 | `boolean` | `false` |