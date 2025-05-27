import { inject, provide, reactive, readonly } from 'vue'
import type { ConfigProviderProps, ThemeType, SizeType, Locale } from './types'

export const CONFIG_PROVIDER_KEY = Symbol('p-config-provider')

export function useConfigProvider() {
  const config = inject(CONFIG_PROVIDER_KEY, () => ({
    theme: 'light' as ThemeType,
    size: 'medium' as SizeType,
    locale: {} as Locale
  }), true)

  return {
    config: readonly(config),
    setTheme: (theme: ThemeType) => { config.theme = theme },
    setSize: (size: SizeType) => { config.size = size },
    setLocale: (locale: Locale) => { config.locale = locale }
  }
}

export function provideConfig(config: ConfigProviderProps) {
  const reactiveConfig = reactive({
    theme: config.theme || 'light',
    size: config.size || 'medium',
    locale: config.locale || {}
  })

  provide(CONFIG_PROVIDER_KEY, reactiveConfig)
  return reactiveConfig
}
