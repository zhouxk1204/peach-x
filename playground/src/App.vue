<template>
  <div>
    <PButton @click="onclick">click me!</PButton>
  </div>
</template>

<script setup lang="ts">

const onclick= () => {
  console.log('PButton onclick');
}
</script>