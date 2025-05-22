export type ThemeConfig = {
  /** 主色调 */
  primary: string;

  /** 主色 hover 状态颜色，若无则自动生成 */
  primaryHover?: string;

  /** 主色 active 状态颜色，若无则自动生成 */
  primaryActive?: string;

  /** 主色背景色，通常同主色 */
  primaryBg?: string;

  /** 主色文字颜色，通常用于按钮文字 */
  primaryText?: string;

  /** 页面或组件主背景色 */
  bg?: string;

  /** 辅助背景色，通常用于次要区域或分割 */
  bgMuted?: string;

  /** 表面层背景色，如卡片、弹窗背景 */
  surface?: string;

  /** 提升表面层的背景色，更高层级的卡片等 */
  surfaceElevated?: string;

  /** 主要文本颜色 */
  text?: string;

  /** 辅助文本颜色，如说明文字、次要信息 */
  textMuted?: string;

  /** 成功状态颜色 */
  success?: string;

  /** 成功状态 hover 颜色 */
  successHover?: string;

  /** 成功状态 active 颜色 */
  successActive?: string;

  /** 成功状态背景色 */
  successBg?: string;

  /** 成功状态文字颜色 */
  successText?: string;

  /** 信息状态颜色 */
  info?: string;

  /** 信息状态 hover 颜色 */
  infoHover?: string;

  /** 信息状态 active 颜色 */
  infoActive?: string;

  /** 信息状态背景色 */
  infoBg?: string;

  /** 信息状态文字颜色 */
  infoText?: string;

  /** 警告状态颜色 */
  warning?: string;

  /** 警告状态 hover 颜色 */
  warningHover?: string;

  /** 警告状态 active 颜色 */
  warningActive?: string;

  /** 警告状态背景色 */
  warningBg?: string;

  /** 警告状态文字颜色 */
  warningText?: string;

  /** 危险状态颜色 */
  danger?: string;

  /** 危险状态 hover 颜色 */
  dangerHover?: string;

  /** 危险状态 active 颜色 */
  dangerActive?: string;

  /** 危险状态背景色 */
  dangerBg?: string;

  /** 危险状态文字颜色 */
  dangerText?: string;

  /** 主色背景上的文字颜色 */
  textOnPrimary?: string;

  /** 成功背景上的文字颜色 */
  textOnSuccess?: string;

  /** 信息背景上的文字颜色 */
  textOnInfo?: string;

  /** 警告背景上的文字颜色 */
  textOnWarning?: string;

  /** 危险背景上的文字颜色 */
  textOnDanger?: string;

  /** 禁用状态背景色 */
  disabledBg?: string;

  /** 禁用状态文字颜色 */
  disabledText?: string;

  /** 默认圆角大小 */
  borderRadius?: string;

  /** 默认边框样式 */
  border?: string;

  /** 阴影效果 */
  shadow?: string;
};

export type ThemeMode = 'light' | 'dark';
export type SwitchMode = 'class' | 'media';

export interface UseThemeOptions {
  mode?: SwitchMode;        // 'class' | 'media'
  className?: string;       // 主题class名称，默认'dark'
  storageKey?: string;      // 本地存储key，默认'theme'
}