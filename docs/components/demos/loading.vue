<docs>
---
title: 使用方法
---
可以通过将 `loading` 属性设为 `true` 来激活加载状态提示。
</docs>
<template>
  <div class="row">
    <PButton :loading="loading" @click="handleClick">{{ loading ? '加载中...' : '点我' }}</PButton>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false);

const handleClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
}
</script>
