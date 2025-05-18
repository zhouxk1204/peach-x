<template>
  <div>
    <PButton @click="onclick" type="info">click me!</PButton>
  </div>
</template>

<script setup lang="ts">
import { PButton } from 'peach-x/components/button';


const onclick= () => {
  console.log('PButton onclick');
}
</script>