/**
 * 主题配置类型，用于定义 UI 组件库中的各种主题样式。
 * 每个字段的配置项都可以用来动态更改页面的主题。
 */
export interface ThemeConfig {
  /**
   * 主色，通常用于按钮、链接等重要元素的背景色。
   * @example '#f8c8d1' (淡粉色)
   */
  primaryColor: string;

  /**
   * 成功状态色，通常用于表示成功的操作，如成功的提示或按钮。
   * 默认值: '#22c55e' (绿色)
   * @example '#16a34a' (深绿色)
   */
  successColor?: string;

  /**
   * 信息状态色，通常用于表示信息类操作，如信息提示或按钮。
   * 默认值: '#3b82f6' (蓝色)
   * @example '#2563eb' (深蓝色)
   */
  infoColor?: string;

  /**
   * 警告状态色，通常用于表示警告类操作，如警告提示或按钮。
   * 默认值: '#f59e0b' (黄色)
   * @example '#d97706' (橙色)
   */
  warningColor?: string;

  /**
   * 危险状态色，通常用于表示危险或失败类操作，如删除、失败提示等。
   * 默认值: '#ef4444' (红色)
   * @example '#e11d48' (深红色)
   */
  dangerColor?: string;

  /**
   * 主要文本颜色，通常用于普通文本的颜色。
   * 默认值: '#333' (深灰色)
   * @example '#000000' (黑色)
   */
  textColor?: string;

  /**
   * 页面背景颜色，通常用于页面的整体背景色。
   * 默认值: '#ffffff' (白色)
   * @example '#181818' (黑色背景)
   */
  backgroundColor?: string;

  /**
   * 辅助背景颜色，通常用于面板、卡片等辅助性背景的颜色。
   * 默认值: '#f3f4f6' (浅灰色)
   * @example '#2a2a2a' (暗灰色)
   */
  mutedBackgroundColor?: string;

  /**
   * 圆角大小，通常用于按钮、输入框等元素的圆角。
   * 默认值: '4px'
   * @example '8px' (大圆角)
   */
  borderRadius?: string;

  /**
   * 边框颜色，通常用于按钮、输入框等元素的边框。
   * 默认值: '#e0e0e0' (灰色)
   * @example '#333' (深灰色)
   */
  borderColor?: string;

  /**
   * 禁用状态的背景颜色，通常用于禁用按钮、输入框等元素的背景色。
   * 默认值: '#e5e7eb' (浅灰色)
   * @example '#d1d5db' (暗灰色)
   */
  disabledBackgroundColor?: string;

  /**
   * 禁用状态的文本颜色，通常用于禁用按钮、输入框等元素的文本颜色。
   * 默认值: '#9ca3af' (灰色)
   * @example '#6b7280' (暗灰色)
   */
  disabledTextColor?: string;
}
