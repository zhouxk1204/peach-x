<template>
  <!-- Main ticker element with dynamic styling and classes -->
  <span ref="_ref" :style="tickerStyle" :class="['p-ticker', sizeClass]">
    <!-- Display formatted numeric value -->
    {{ formattedValue }}
  </span>
</template>

<script setup lang="ts">
// Import dependencies
import { CONFIG_PROVIDER_KEY } from '@peach-x/components/config-provider';
import { ref, computed, toRefs, onMounted, inject } from 'vue';
import { TickerInstance, TickerProps } from './types';
import { tween } from './utils';

// Component configuration
// Sets the component name for dev tools and recursive references
defineOptions({
  name: 'PTicker',
});

// Get global configuration from config provider
const config = inject(CONFIG_PROVIDER_KEY, {
  size: 'medium', // Default size if no config provider
  theme: 'light', // Default theme
  locale: {}, // Empty locale object
});

// Reference to the root span element
const _ref = ref<HTMLSpanElement>();

// Animation state flag
// Tracks whether animation is currently running
const isAnimating = ref(false);

// Component props with TypeScript interface and defaults
const props = withDefaults(defineProps<TickerProps>(), {
  from: 0, // Starting value (default 0)
  duration: 2000, // Animation duration in ms (default 2s)
  precision: 0, // Decimal places (default 0)
  separator: '', // Thousands separator (default none)
  autoplay: true, // Auto-start animation (default true)
});

// Destructure props into reactive references
const { from, to, duration, precision, separator, size, autoplay } = toRefs(props);

// Current displayed value (reactively updates during animation)
const currentValue = ref(from.value);

// Computed size value - falls back to config size if not specified
const tickerSize = computed(() => {
  return size.value ?? config.size;
});

// Computed CSS class based on size
// Returns empty string for custom size values
const sizeClass = computed(() => {
  if (['small', 'medium', 'large'].includes(`${tickerSize.value}`)) {
    return 'p-ticker--' + tickerSize.value;
  }
  return '';
});

// Computed style object for the ticker element
const tickerStyle = computed(() => {
  // Get integer part of target value
  const intPart = to.value.toString().split('.')[0];

  // Calculate base digit count (without separators)
  let digitCount = intPart.length;

  // Adjust count if separator is present
  if (separator.value.length > 0) {
    const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator.value);
    const separatorCount = (formatted.match(new RegExp(separator.value, 'g')) || []).length / 2;
    digitCount += separatorCount;
  }

  // Add space for decimals if needed
  if (precision.value > 0) {
    digitCount += precision.value + 0.5; // +0.5 for decimal point
  }

  // Handle custom font size values
  let fontSize = '';
  if (typeof tickerSize.value === 'number') {
    fontSize = tickerSize.value + 'px';
  } else if (typeof tickerSize.value === 'string' && /^\d+(px|rem|em|%)$/.test(tickerSize.value)) {
    fontSize = tickerSize.value;
  }

  return {
    minWidth: `${digitCount}ch`, // Use ch units for character-based width
    fontSize, // Custom font size if specified
  };
});

// Lifecycle hook - start animation when component mounts if autoplay is enabled
onMounted(() => {
  if (autoplay.value) {
    startAnimation();
  }
});

// Component events definition
const emits = defineEmits<{
  // Emitted when animation completes
  (e: 'finish'): void;
}>();

// Computed formatted display value with separators and decimals
const formattedValue = computed(() => {
  // Format to specified precision
  const val = currentValue.value.toFixed(precision.value);

  // Apply thousands separator if needed
  if (currentValue.value >= 1000 && separator.value.length > 0) {
    const parts = val.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator.value);
    const decimalPart = parts[1] ? `.${parts[1]}` : '';
    return `${integerPart}${decimalPart}`;
  }
  return val;
});

/**
 * Starts the number ticker animation
 * Uses tween function to smoothly transition between values
 * Updates currentValue reactively during animation
 * Sets isAnimating flag and emits finish event
 */
const startAnimation = () => {
  // Reset to start value if needed
  if (currentValue.value !== from.value) {
    currentValue.value = from.value;
  }

  isAnimating.value = true;

  tween({
    from: from.value,
    to: to.value,
    duration: duration.value,
    onUpdate: (val) => {
      currentValue.value = val;
    },
    onFinish: () => {
      currentValue.value = to.value;
      isAnimating.value = false;
      emits('finish');
    },
  });
};

// Expose public component API
// These methods can be called via component ref
defineExpose<TickerInstance>({
  /** @description Reference to the root HTML element */
  ref: _ref,
  /** @description Method to manually start the animation */
  start: startAnimation,
  /** @description Current animation state (readonly) */
  isAnimating: isAnimating.value,
});
</script>
