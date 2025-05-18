import './default.css'

import { DEFAULT_COLORS } from "../constants";
import { ThemeConfig } from "./types";
import { shadeColor } from "../utils/color";

// 默认主题全局样式
/**
 * 更新主题的函数，通过修改 CSS 变量实现动态主题。
 * @param config 自定义的主题配置
 */
export const updateTheme = (config: ThemeConfig) => {
  // 提取配置
  const {
    primaryColor = DEFAULT_COLORS.primaryColor, 
    successColor = DEFAULT_COLORS.successColor,
    infoColor = DEFAULT_COLORS.infoColor,
    warningColor = DEFAULT_COLORS.warningColor,
    dangerColor = DEFAULT_COLORS.dangerColor,
    textColor = DEFAULT_COLORS.textColor,
    backgroundColor = DEFAULT_COLORS.backgroundColor,
    mutedBackgroundColor = DEFAULT_COLORS.mutedBackgroundColor,
    borderRadius = DEFAULT_COLORS.borderRadius,
    borderColor = DEFAULT_COLORS.borderColor,
    disabledBackgroundColor = DEFAULT_COLORS.disabledBackgroundColor,
    disabledTextColor = DEFAULT_COLORS.disabledTextColor,
  } = config;

  // 生成主色的 hover 和 active 状态
  const primaryHover = shadeColor(primaryColor, -15);
  const primaryActive = shadeColor(primaryColor, -25);

  // 生成其他颜色的 hover 和 active 状态
  const successHover = shadeColor(successColor, -15);
  const successActive = shadeColor(successColor, -25);

  const infoHover = shadeColor(infoColor, -15);
  const infoActive = shadeColor(infoColor, -25);

  const warningHover = shadeColor(warningColor, -15);
  const warningActive = shadeColor(warningColor, -25);

  const dangerHover = shadeColor(dangerColor, -15);
  const dangerActive = shadeColor(dangerColor, -25);

  // 更新 CSS 变量
  document.documentElement.style.setProperty('--p-primary', primaryColor);
  document.documentElement.style.setProperty('--p-primary-hover', primaryHover);
  document.documentElement.style.setProperty('--p-primary-active', primaryActive);

  document.documentElement.style.setProperty('--p-success', successColor);
  document.documentElement.style.setProperty('--p-success-hover', successHover);
  document.documentElement.style.setProperty('--p-success-active', successActive);

  document.documentElement.style.setProperty('--p-info', infoColor);
  document.documentElement.style.setProperty('--p-info-hover', infoHover);
  document.documentElement.style.setProperty('--p-info-active', infoActive);

  document.documentElement.style.setProperty('--p-warning', warningColor);
  document.documentElement.style.setProperty('--p-warning-hover', warningHover);
  document.documentElement.style.setProperty('--p-warning-active', warningActive);

  document.documentElement.style.setProperty('--p-danger', dangerColor);
  document.documentElement.style.setProperty('--p-danger-hover', dangerHover);
  document.documentElement.style.setProperty('--p-danger-active', dangerActive);

  // 更新其他状态色
  document.documentElement.style.setProperty('--p-text', textColor);
  document.documentElement.style.setProperty('--p-bg', backgroundColor);
  document.documentElement.style.setProperty('--p-bg-muted', mutedBackgroundColor);

  // 更新禁用状态颜色
  document.documentElement.style.setProperty('--p-disabled-bg', disabledBackgroundColor);
  document.documentElement.style.setProperty('--p-disabled-text', disabledTextColor);

  // 更新边框、圆角等
  document.documentElement.style.setProperty('--p-border-radius', borderRadius);
  document.documentElement.style.setProperty('--p-border', borderColor);
}
