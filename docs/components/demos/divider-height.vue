<docs>
`height` 属性用于设置分割线的高度，支持以下两种参数类型：

- `number` 类型：表示像素值（等同于 `px` 单位）
- `string` 类型：目前仅支持以 `px` 为单位的字符串值

例如：`10`` 和 `"10px"` 都表示 `10` 像素高的分割线。
</docs>
<template>
  <div>
    <p>
      You don’t have to love your job. Jobs are a way to make money. Many people live fine lives in okay jobs by using
      the money they make on things they care about.
    </p>
    <PDivider :height="3" />
    <p>
      Sturgeon’s law states that 90% of everything is crap. If you dislike poetry, or fine art, or anything, it’s
      possible you’ve only ever seen the crap. Go looking!
    </p>
    <PDivider height="5px" />
    <p>
      People don’t realize how much they hate commuting. A nice house farther from work is not worth the fraction of
      your life you are giving to boredom and fatigue.
    </p>
  </div>
</template>