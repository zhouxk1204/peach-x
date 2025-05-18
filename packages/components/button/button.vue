<template>
  <button :class="`p-button p-button--${type}`" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ButtonProps } from './button.types';

defineOptions({
  name: 'PButton',
})
withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  disabled: false,
});
</script>