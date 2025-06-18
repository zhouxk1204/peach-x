# Ticker 数值动画
Ticker（数值动画）是一种用于展示数值变化的视觉效果，通常用于显示动态的计数器、进度条、数据展示等场景。

## 代码演示
### 基础使用
<p></p>
<demo src="./demos/ticker/ticker-basic.vue"></demo>

### 缓动函数与动画时长动态调节机制
<p></p>
<demo src="./demos/ticker/ticker-adv.vue"></demo>

### 自定义尺寸
<p></p>
<demo src="./demos/ticker/ticker-size.vue"></demo>

### 自定义分隔符
<p></p>
<demo src="./demos/ticker/ticker-separator.vue"></demo>

### 设置精度
<p></p>
<demo src="./demos/ticker/ticker-precision.vue"></demo>

### 手动控制动画
<p></p>
<demo src="./demos/ticker/ticker-play.vue"></demo>

## API
### 属性
| 属性名 | 说明 | 类型 | 默认值 |
|:-------|:------------:|:------:|:-------:|
| `from` | 数值动画起始值 | `number` | `0` |
| `to` | 数值动画的目标值（必填） | `number` | `-` |
| `duration` | 动画持续时间（毫秒） | `number` | `-` |
| `precision` | 数值精度（保留小数点后几位） | `number` | `0` |
| `separator` | 数值分隔符（支持 `,` `.` 空格或空字符串） | `,` \| `.` \| `' '` \| `''` | `''` |
| `autoplay` | 是否自动播放动画 | `boolean` | `true` |
| `size` | 尺寸 | `small` \| `medium` \| `large` \| `string` \| `number` | `medium` |

### 事件
| 事件名 | 说明 | 回调参数 | 
|:---------------|:-------------:|:-----------------:|
| `finish`      | 数值动画播放完成时触发 | 无 (`undefined`) |


### 显式暴露
| 名称 |  类型 | 说明 |
|:----- |:----:|:----:|
| `ref` | `Ref<HTMLSpanElement \| undefined, HTMLSpanElement  \| undefined>` | 获取组件根元素的引用（span 标签），可用于直接操作 DOM 或绑定外部逻辑。 | 
| `start` | `() => void` | 手动触发动画开始的函数（当 autoplay=false 时需主动调用）。 | 
| `isAnimating` | `boolean` | 动画状态（true 表示正在播放，false 表示已结束或未开始）。 | 
