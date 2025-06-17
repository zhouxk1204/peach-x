<docs>
  在数值动画中，`precision` 参数用于控制数值显示的小数位数精度。一旦设置了精度值，动画过程中显示的数字将始终按照指定的小数位数进行格式化呈现。
</docs>
<template>
  <div class="row">
    <p>今日营业额：</p>
    <p-ticker ref="tickerElementRef" :to="684518.54" separator="," :size="24" :precision="2" />
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
<style>
.row {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
