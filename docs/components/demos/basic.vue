<docs>
---
title: 使用方法
---
`type` 设置按钮类型，可选值：`primary`（主按钮）、`success`（成功）、`warning`（警告）、`danger`（危险）、`info`（信息）

`plain` 启用简约样式（无背景色，仅边框和文字着色）

`round` 启用圆角样式（默认直角）
</docs>
<template>
  <div class="row">
    <p-button type="primary">Primary</p-button>
    <p-button type="info">Info</p-button>
    <p-button type="success">Success</p-button>
    <p-button type="warning">Warning</p-button>
    <p-button type="danger">Danger</p-button>
  </div>
  <div class="row">
    <p-button type="primary" plain>Primary</p-button>
    <p-button type="info" plain>Info</p-button>
    <p-button type="success" plain>Success</p-button>
    <p-button type="warning" plain>Warning</p-button>
    <p-button type="danger" plain>Danger</p-button>
  </div>
  <div class="row">
    <p-button type="primary" round>Primary</p-button>
    <p-button type="info" round>Info</p-button>
    <p-button type="success" round>Success</p-button>
    <p-button type="warning" round>Warning</p-button>
    <p-button type="danger" round>Danger</p-button>
  </div>
</template>