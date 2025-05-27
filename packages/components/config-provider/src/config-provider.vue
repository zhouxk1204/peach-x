<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, watchEffect } from 'vue'
import type { ConfigProviderProps } from './types'
import { CONFIG_PROVIDER_KEY } from './context'

defineOptions({
  name: 'PConfigProvider',
})

const props = defineProps<ConfigProviderProps>()

const config = reactive({
  theme: props.theme || 'light',
  size: props.size || 'medium',
  locale: props.locale || {}
})

provide(CONFIG_PROVIDER_KEY, config)

watchEffect(() => {
  config.theme = props.theme || 'light'
  config.size = props.size || 'medium'
  config.locale = props.locale || {}

  document.documentElement.classList.toggle('dark', config.theme === 'dark')
})
</script>
