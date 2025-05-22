import { ThemeConfig } from "../types/types";

/**
 * 将驼峰命名的属性名转换为 CSS 变量格式
 * 
 * @param {string} prop - 驼峰风格的属性名，例如 "primaryHover"
 * @returns {string} 返回转换后的 CSS 变量名，例如 "--p-primary-hover"
 */
function toCssVarName(prop: string): string {
  // 把大写字母变成 -小写
  return "--p-" + prop.replace(/([A-Z])/g, "-$1").toLowerCase();
}

/**
 * 应用主题配置到指定的 HTML 元素，设置对应的 CSS 变量
 *
 * @param {Partial<ThemeConfig>} theme - 主题配置对象，只需提供要覆盖的变量
 * @param {HTMLElement} [element=document.documentElement] - 目标元素，默认是根元素
 *
 * @returns {void}
 *
 * @author zhouxk
 * @description 根据传入的主题配置，动态设置 CSS 变量，支持部分配置自动覆盖默认主题变量
 */
export function applyTheme(
  theme: ThemeConfig,
  element: HTMLElement = document.documentElement
): void {
  for (const key in theme) {
    if (theme.hasOwnProperty(key)) {
      const cssVarName = toCssVarName(key);
      const value = theme[key as keyof ThemeConfig];
      if (value !== undefined) {
        element.style.setProperty(cssVarName, value);
      }
    }
  }
}
