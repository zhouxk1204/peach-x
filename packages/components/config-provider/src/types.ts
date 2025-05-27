export type ThemeType = 'light' | 'dark'
export type SizeType = 'small' | 'medium' | 'large'

export interface Locale {
  [key: string]: string | Record<string, any>
}

export interface ConfigProviderProps {
  theme?: ThemeType
  size?: SizeType
  locale?: Locale
}
