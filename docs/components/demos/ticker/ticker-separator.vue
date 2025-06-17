<docs>
在数值动画中，数字分隔符( `separator` )用于格式化显示的数字，使其更易读。

- 可用分隔符选项

|分隔符 |	示例输入|	格式化结果|	适用场景|
|:-------:|:------------:|:------:|:-------:|
|`,` (逗号)	|1234567	|1,234,567	|国际通用数字格式|
|`.` (点号)	|1234567	|1.234.567	|部分欧洲国家格式|
|` ` (空格)	|1234567	|1 234 567	|ISO标准格式|
| 无（空字符串， 默认）	|1234567	|1234567	|不需要分隔符|
</docs>
<template>
  <div class="row">
    <p>今日下载量：</p>
    <p-ticker ref="tickerElementRef" :to="12546386" separator="," size="24" />
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
