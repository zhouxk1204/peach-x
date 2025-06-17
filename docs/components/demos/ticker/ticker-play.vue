<template>
  <div class="row">
    <p>今日下载量：</p>
    <p-ticker ref="tickerElementRef" :to="45641219851.99" separator="," :size="24" :precision="2" />
    <p-button @click="play()">播放</p-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { TickerExposes } from 'peach-x/components/ticker';

const tickerElementRef = ref<TickerExposes>();
const play = () => {
  tickerElementRef.value && tickerElementRef.value.start();
};
</script>
<style lang="scss">
.row {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
