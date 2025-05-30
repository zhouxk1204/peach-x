/**
 * Button type variants
 */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

/**
 * Button size variants
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Native button type attribute
 */
export type ButtonNativeType = 'button' | 'submit' | 'reset';

/**
 * Button component props
 */
export interface ButtonProps {
  /**
   * Button type
   * @default 'primary'
   */
  type?: ButtonType;

  /**
   * Disable button state
   * @default false
   */
  disabled?: boolean;

  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Native button type
   * @default 'button'
   */
  nativeType?: ButtonNativeType;

  /**
   * Apply rounded corners
   */
  round?: boolean;

  /**
   * Apply circular shape
   */
  circle?: boolean;

  /**
   * Apply plain style
   */
  plain?: boolean;

  /**
   * Make button full width
   */
  block?: boolean;

  /**
   * Show loading state
   */
  loading?: boolean;
}
