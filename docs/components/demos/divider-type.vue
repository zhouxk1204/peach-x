<docs>
你可以通过 `type` 属性 来设置分割线的样式类型，支持以下四种样式：

- `solid`：实线（默认样式）
- `dashed`：虚线
- `dotted`：点线
- `double`：双实线
</docs>
<template>
  <div>
    <p>
      Until I feared I would lose it, I never loved to read. One does not love breathing.
    </p>
    <PDivider />
    <p>
      It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a
      wife.
    </p>
    <PDivider type="dashed" />
    <p>
      Call me Ishmael. Some years ago—never mind how long precisely—I thought I would sail about a little.
    </p>
    <PDivider type="dotted" />
    <p>
      It was a bright cold day in April, and the clocks were striking thirteen.
    </p>
    <PDivider type="double" />
    <p>
      So we beat on, boats against the current, borne back ceaselessly into the past.
    </p>
  </div>
</template>