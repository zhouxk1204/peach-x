/**
 * 按钮类型枚举，定义了按钮的不同风格类型
 */
export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

/**
 * 按钮尺寸枚举，定义了按钮的不同大小规格
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * 原生按钮类型枚举，对应 HTML 原生按钮的 type 属性值
 */
export type ButtonNativeType = 'button' | 'submit' | 'reset';

/**
 * 按钮组件的属性接口，定义了按钮组件可接受的所有属性
 */
export interface ButtonProps {
  /**
   * 按钮风格类型，不同类型对应不同的视觉样式
   * @default 'primary'
   */
  type?: ButtonType;

  /**
   * 是否禁用按钮，禁用状态下按钮不可点击
   * @default false
   */
  disabled?: boolean;

  /**
   * 按钮尺寸，不同尺寸对应不同的大小规格
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * 原生按钮的 type 属性，用于控制按钮在表单中的行为
   * @default 'button'
   */
  nativeType?: ButtonNativeType;

  /**
   * 是否为圆角按钮
   */
  round?: boolean;

  /**
   * 是否为圆形按钮
   */
  circle?: boolean;

  /**
   * 是否为朴素按钮，朴素按钮通常具有较淡的背景和边框
   */
  plain?: boolean;
}
