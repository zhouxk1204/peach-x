<!--
 * @Author: zhouxk
 * @Date: 2025-05-27 16:40:25
 * @LastEditors: zhouxk
 * @LastEditTime: 2025-05-30 13:38:44
 * @Description: 
-->
<template>
  <div>
    <PConfigProvider size="medium" theme="light">
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary">Primary</PButton>
        <PButton @click="onclick" type="info">Info</PButton>
        <PButton @click="onclick" type="success">Success</PButton>
        <PButton @click="onclick" type="warning">Warning</PButton>
        <PButton @click="onclick" type="danger">Danger</PButton>
      </div>
      <div>&nbsp;</div>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary" plain>Primary</PButton>
        <PButton @click="onclick" type="info" plain>Info</PButton>
        <PButton @click="onclick" type="success" plain>Success</PButton>
        <PButton @click="onclick" type="warning" plain>Warning</PButton>
        <PButton @click="onclick" type="danger" plain>Danger</PButton>
      </div>
      <div>&nbsp;</div>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary" round>Primary</PButton>
        <PButton @click="onclick" type="info" round>Info</PButton>
        <PButton @click="onclick" type="success" round>Success</PButton>
        <PButton @click="onclick" type="warning" round>Warning</PButton>
        <PButton @click="onclick" type="danger" round>Danger</PButton>
      </div>
      <div>&nbsp;</div>
      <div style="gap: 10px; display: flex;">
        <PButton @click="onclick" type="primary" disabled>Primary</PButton>
        <PButton @click="onclick" type="info" disabled>Info</PButton>
        <PButton @click="onclick" type="success" disabled>Success</PButton>
        <PButton @click="onclick" type="warning" disabled>Warning</PButton>
        <PButton @click="onclick" type="danger" disabled>Danger</PButton>
      </div>
    </PConfigProvider>
  </div>
</template>

<script setup lang="ts">

const onclick = () => {
  console.log('PButton onclick');
}
</script>