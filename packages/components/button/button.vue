<template>
  <button ref="_ref" :class="`p-button p-button--${type} p-button--${size}`" :disabled="disabled" :type="nativeType">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import { ButtonProps } from './button.types'

defineOptions({
  name: 'PButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  disabled: false,
  size: 'medium',
  nativeType: 'button',
})

const { type, disabled, size, nativeType } = toRefs(props)

const _ref = ref<HTMLButtonElement | null>(null)

defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button type */
  type,
  /** @description button disabled */
  disabled,
  /** @description button size */
  size,
  /** @description native button type */
  nativeType,
})
</script>
