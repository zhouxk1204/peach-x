<docs>
---
title: 使用方法
---
通过 `disabled` 属性控制按钮禁用状态，禁用时按钮不可交互并显示禁用样式。
</docs>
<template>
  <div class="row">
    <PButton type="primary" disabled>Primary 禁用</PButton>
    <PButton type="info" disabled>Info 禁用</PButton>
    <PButton type="success" disabled>Success 禁用</PButton>
    <PButton type="warning" disabled>Warning 禁用</PButton>
    <PButton type="danger" disabled>Danger 禁用</PButton>
  </div>
  <div class="row">
    <PButton type="primary" disabled plain>Primary 禁用</PButton>
    <PButton type="info" disabled plain> Info 禁用</PButton>
    <PButton type="success" disabled plain>Success 禁用</PButton>
    <PButton type="warning" disabled plain>Warning 禁用</PButton>
    <PButton type="danger" disabled plain>Danger 禁用</PButton>
  </div>
</template>