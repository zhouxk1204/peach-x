<template>
  <div>
    <PConfigProvider size="large" theme="dark">
      <PButton @click="onclick">click me!</PButton>
    </PConfigProvider>
  </div>
</template>

<script setup lang="ts">

const onclick = () => {
  console.log('PButton onclick');
}
</script>