/**
 * 调整颜色的明暗度
 * @param color 十六进制颜色值 (如 "#f8c8d1" 或 "f8c8d1")
 * @param percent 调整百分比 (-100 到 100)
 *               正数表示调亮，负数表示调暗
 * @returns 调整后的十六进制颜色值
 */
export function shadeColor(color: string, percent: number): string {
  // 去除可能的 # 前缀
  const hex = color.replace(/^#/, '');
  
  // 验证输入格式
  if (!/^[0-9a-f]{6}$/i.test(hex)) {
    throw new Error('Invalid HEX color format');
  }
  
  // 限制百分比范围
  const boundedPercent = Math.max(-100, Math.min(100, percent));
  
  // 将颜色分解为 R, G, B 分量
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // 计算调整后的颜色分量
  const adjust = (component: number) => {
    const amount = component * boundedPercent / 100;
    return Math.round(boundedPercent > 0 
      ? component + (255 - component) * amount / 100
      : component * (100 + boundedPercent) / 100);
  };
  
  // 应用调整并确保在 0-255 范围内
  const adjustedR = Math.max(0, Math.min(255, adjust(r)));
  const adjustedG = Math.max(0, Math.min(255, adjust(g)));
  const adjustedB = Math.max(0, Math.min(255, adjust(b)));
  
  // 将调整后的分量转换回 HEX 格式
  const toHex = (c: number) => c.toString(16).padStart(2, '0');
  return `#${toHex(adjustedR)}${toHex(adjustedG)}${toHex(adjustedB)}`;
}