// Quadratic ease-out function - smooth acceleration/deceleration
const easeOutQuad = (t: number): number => {
  return t * (2 - t);
};

// Cubic ease-out function - stronger acceleration than quadratic
const easeOutCubic = (t: number): number => 1 - (1 - t) ** 3;

// Quartic ease-out function - even stronger acceleration
const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4);
};

// Exponential ease-out function - very strong initial acceleration
// Returns 1 when t = 1 to avoid floating point precision issues
export const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

/**
 * Selects an appropriate easing function based on the value range
 * @param start - Starting value
 * @param end - Ending value
 * @returns Easing function that matches the value range
 */
export const getEasingFunction = (start: number, end: number) => {
  const delta = Math.abs(end - start);
  // Small changes use gentle easing
  if (delta < 10) {
    return easeOutQuad;
  }
  // Medium changes use moderate easing
  else if (delta < 100) {
    return easeOutCubic;
  }
  // Large changes use strong easing
  else if (delta < 1000) {
    return easeOutQuart;
  }
  // Very large changes use exponential easing
  else {
    return easeOutExpo;
  }
};

/**
 * Calculates animation duration based on the value magnitude
 * @param value - The numeric value being animated
 * @param baseDuration - Base duration in milliseconds (default: 2000)
 * @returns Calculated duration in milliseconds
 */
export const getDuration = (value: number, baseDuration = 2000): number => {
  const absValue = Math.abs(value);
  if (absValue < 10) {
    return baseDuration * 0.5; // Short duration for small numbers
  } else if (absValue < 100) {
    return baseDuration * 0.8;
  } else if (absValue < 1000) {
    return baseDuration;
  } else {
    // Logarithmic scaling for very large numbers
    return baseDuration * (1 + Math.log10(absValue / 1000));
  }
};

/**
 * Animation tweening function that handles numeric transitions
 * @param data - Animation configuration object
 * @param data.from - Starting value
 * @param data.to - Target value
 * @param data.duration - Animation duration in ms
 * @param data.onUpdate - Callback for each animation frame
 * @param data.onFinish - Callback when animation completes
 */
export const tween = (data: {
  from: number;
  to: number;
  duration: number;
  onUpdate: (value: number) => void;
  onFinish: () => void;
}) => {
  const { from, to, duration, onUpdate, onFinish } = data;
  const startTime = performance.now();

  const animate = () => {
    const current = performance.now();
    const elapsedTime = Math.min(current - startTime, duration);

    if (elapsedTime === duration) {
      onFinish();
      return;
    }

    const easingFunction = getEasingFunction(from, to);
    const value = from + (to - from) * easingFunction(elapsedTime / duration);
    onUpdate(value);
    requestAnimationFrame(animate);
  };

  animate();
};
