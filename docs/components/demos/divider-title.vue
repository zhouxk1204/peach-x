<docs>
您可以通过 `placement`、`contentBgColor` 和 `textColor` 等属性来控制分割线标题的样式。其中：

- `placement` 用于设置标题位置，
  - 可选值为 `left`（左对齐）
  - `center`（居中，默认值）
  - `right`（右对齐）
- `contentBgColor` 用于设置标题背景色（支持所有合法 CSS 颜色值）
- `textColor` 用于设置标题文字颜色（支持所有合法 CSS 颜色值）
</docs>
<template>
  <div>
    <p>
      The only way to do great work is to love what you do.
    </p>
    <p-divider placement="left">Left Title</p-divider>
    <p>
      Be yourself; everyone else is already taken.
    </p>
    <p-divider contentBgColor="#E5D0FF">🌟</p-divider>
    <p>
      Success is not final, failure is not fatal: 
      It is the courage to continue that counts.
    </p>
    <p-divider 
      placement="right"
      textColor="#c03797"
      contentBgColor="#ccc">Right Title
    </p-divider>
    <p>
      Happiness is not something ready-made. It comes from your own actions.
    </p>
  </div>
</template>