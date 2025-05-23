import type { ThemeConfig } from "../src/types";

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
 * @param {ThemeConfig} theme - 主题配置对象，只需提供要覆盖的变量
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
  const generatedTheme = { ...theme };

  // 自动生成 hover / active 状态颜色
  const colorKeys = [
    "primary",
    "success",
    "info",
    "warning",
    "danger",
  ] as const;

  for (const key of colorKeys) {
    const base = theme[key];
    if (base) {
      if (!theme[`${key}Hover` as keyof ThemeConfig]) {
        generatedTheme[`${key}Hover` as keyof ThemeConfig] = shadeColor(
          base,
          25
        ); // hover 提亮
      }
      if (!theme[`${key}Active` as keyof ThemeConfig]) {
        generatedTheme[`${key}Active` as keyof ThemeConfig] = shadeColor(
          base,
          -25
        ); // active 变暗
      }
    }
  }

  // 应用所有变量
  for (const key in generatedTheme) {
    if (Object.prototype.hasOwnProperty.call(generatedTheme, key)) {
      const cssVarName = toCssVarName(key);
      const value = generatedTheme[key as keyof ThemeConfig];
      if (value !== undefined) {
        element.style.setProperty(cssVarName, value);
      }
    }
  }
}
/**
 * 调整颜色的明暗度
 * @param color 十六进制颜色值 (如 "#f8c8d1" 或 "f8c8d1")
 * @param percent 调整百分比 (-100 到 100)
 *               正数表示调亮，负数表示调暗
 * @returns 调整后的十六进制颜色值
 */
function shadeColor(color: string, percent: number): string {
  const hex = color.replace(/^#/, "");
  if (!/^[0-9a-f]{6}$/i.test(hex)) {
    throw new Error("Invalid HEX color format");
  }

  const boundedPercent = Math.max(-100, Math.min(100, percent));

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const adjust = (component: number) =>
    Math.round(
      boundedPercent > 0
        ? component + (255 - component) * (boundedPercent / 100)
        : component * (1 + boundedPercent / 100)
    );

  const adjustedR = Math.max(0, Math.min(255, adjust(r)));
  const adjustedG = Math.max(0, Math.min(255, adjust(g)));
  const adjustedB = Math.max(0, Math.min(255, adjust(b)));

  const toHex = (c: number) => c.toString(16).padStart(2, "0");
  return `#${toHex(adjustedR)}${toHex(adjustedG)}${toHex(adjustedB)}`;
}
