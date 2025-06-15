import type { Ref } from 'vue';

export interface TickerProps {
  /** Starting value (optional, default: 0) */
  from?: number;
  /** Target value (required) */
  to: number;
  /** Animation duration in milliseconds (optional, default: 1000) */
  duration?: number;
  /** Decimal precision (optional, default: 0) */
  precision?: number;
  /** Thousands separator (optional, default: empty string) */
  separator?: ',' | '.' | ' ' | ''; // Literal union type restricts possible values
  /**
   * Autoplay setting (default: true)
   * - true: Starts animation immediately after mount
   * - false: Requires manual start() call
   */
  autoplay?: boolean;
  /** Font size (optional, default: 'medium') */
  size?: 'small' | 'medium' | 'large' | string | number;
}

export interface TickerEmits {
  /** Emitted when animation completes */
  (e: 'finish'): void;
}

export interface TickerInstance {
  /** Reference to the ticker element */
  ref: Ref<HTMLSpanElement | undefined, HTMLSpanElement | undefined>;
  /** Starts the ticker animation */
  start: () => void;
  /** Indicates if animation is currently running */
  isAnimating: boolean;
}
