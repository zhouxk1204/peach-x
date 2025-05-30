<template>
  <button 
    ref="_ref" 
    :class="[
      'p-button',
      `p-button--${type}`,
      `p-button--${size}`,
      { 'p-button--round': round },
      { 'p-button--circle': circle },
      { 'p-button--plain': plain }
    ]" 
    :disabled="disabled" 
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { inject, ref, toRefs } from 'vue'
import { ButtonProps } from './types'
import { CONFIG_PROVIDER_KEY } from '@peach-x/components/config-provider/src/context';
import { computed } from 'vue';

defineOptions({
  name: 'PButton',
})

const config = inject(CONFIG_PROVIDER_KEY, {
  size: 'medium',
  theme: 'light',
  locale: {}
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  disabled: false,
  size: 'medium',
  nativeType: 'button',
  round: false,
  circle: false,
  plain: false,
})

const { type, disabled, nativeType, round, circle, plain } = toRefs(props)

const size = computed(() => {
  return config.size || props.size || 'medium'
})

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
  /** @description whether the button is rounded */
  round,
  /** @description whether the button is circular */
  circle,
  /** @description whether the button is plain */
  plain,
})
</script>
