<template>
  <div class="row">
    <div>今日下载量：</div>
    <p-ticker :to="999" />
  </div>
</template>
<style>
.row {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
