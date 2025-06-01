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
    <PButton type="primary">Primary</PButton>
    <PButton type="info">Info</PButton>
    <PButton type="success">Success</PButton>
    <PButton type="warning">Warning</PButton>
    <PButton type="danger">Danger</PButton>
  </div>
  <div class="row">
    <PButton type="primary" plain>Primary</PButton>
    <PButton type="info" plain>Info</PButton>
    <PButton type="success" plain>Success</PButton>
    <PButton type="warning" plain>Warning</PButton>
    <PButton type="danger" plain>Danger</PButton>
  </div>
  <div class="row">
    <PButton type="primary" round>Primary</PButton>
    <PButton type="info" round>Info</PButton>
    <PButton type="success" round>Success</PButton>
    <PButton type="warning" round>Warning</PButton>
    <PButton type="danger" round>Danger</PButton>
  </div>
</template>