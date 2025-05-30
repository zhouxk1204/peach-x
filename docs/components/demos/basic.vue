<docs>
  1. 这是一个基本的demo
</docs>
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('Hello World')
</script>
