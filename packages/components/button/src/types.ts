/** 按钮类型 */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

/** 按钮尺寸 */
export type ButtonSize = 'small' | 'medium' | 'large'

/** 原生按钮类型 */
export type ButtonNativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  /** 按钮风格类型，默认 'primary' */
  type?: ButtonType

  /** 是否禁用按钮，默认 false */
  disabled?: boolean

  /** 按钮尺寸，默认 'medium' */
  size?: ButtonSize

  /** 原生按钮 type 属性，默认 'button' */
  nativeType?: ButtonNativeType
}
