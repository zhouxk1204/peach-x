<template>
  <!-- Button component with dynamic classes and attributes -->
  <button 
   @click="handleClick"
    ref="_ref" 
    :class="buttonClasses" 
    :disabled="disabled" 
    :type="nativeType"
  >
    <!-- Loading indicator -->
    <div class="p-icon--loading" v-if="loading"></div>
    <!-- Default slot for button content -->
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
// Import required Vue composables and types
import { inject, ref, computed } from 'vue'
import { ButtonProps } from './types'
import { CONFIG_PROVIDER_KEY } from '@peach-x/components/config-provider/src/context'

// Define component name
defineOptions({
  name: 'PButton',
})

// Inject global configuration with default values
const config = inject(CONFIG_PROVIDER_KEY, {
  size: 'medium',
  theme: 'light',
  locale: {}
})

// Define props with default values
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  disabled: false,
  size: 'medium',
  nativeType: 'button',
  round: false,
  circle: false,
  plain: false,
  block: false,
  loading: false,
})

// Compute button classes based on props and config
const buttonClasses = computed(() => [
  'p-button',
  `p-button--${props.type}`,
  `p-button--${props.size || config.size || 'medium'}`,
  { 
    'p-button--round': props.round,
    'p-button--circle': props.circle,
    'p-button--plain': props.plain,
    'p-button--block': props.block,
    'p-button--loading-active': props.loading
  }
])

// Handle the click event of the button.
const handleClick = (e: any) => {
  if (props.loading) {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    return false;
  }
}

// Reference to the button element
const _ref = ref<HTMLButtonElement | null>(null)

// Expose public properties
defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button type */
  type: props.type,
  /** @description button disabled */
  disabled: props.disabled,
  /** @description native button type */
  nativeType: props.nativeType,
})
</script>
