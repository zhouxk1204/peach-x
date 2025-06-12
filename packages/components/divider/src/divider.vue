<template>
  <!-- Main divider container with dynamic classes based on direction and placement -->
  <div
    role="separator"
    :class="[
      'p-divider',
      direction === 'horizontal' ? `p-divider--${placement}` : '',
      `p-divider--${direction}`,
      `p-divider--${actualSize}`,
    ]"
    :style="dividerStyle"
  >
    <!-- Horizontal divider specific markup -->
    <template v-if="direction === 'horizontal'">
      <!-- Visual divider line with dynamic styling -->
      <div class="p-divider__line" :style="lineStyle"></div>
      <!-- Optional content slot with styling -->
      <div v-if="$slots.default" :class="['p-divider__content']" :style="contentStyle">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { CONFIG_PROVIDER_KEY } from '@peach-x/components/config-provider/src/context';
import { computed, inject } from 'vue';
import type { PropType } from 'vue';

defineOptions({
  name: 'PDivider',
});

// Configuration context with default values
const config = inject(CONFIG_PROVIDER_KEY, {
  size: 'medium',
  theme: 'light',
  locale: {},
});

const props = defineProps({
  // Divider orientation (horizontal or vertical)
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value),
  },

  // Content alignment for horizontal dividers
  placement: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center',
    validator: (value: string) => ['left', 'center', 'right'].includes(value),
  },

  // Line style type
  type: {
    type: String as PropType<'solid' | 'dashed' | 'dotted' | 'double'>,
    default: 'solid',
    validator: (value: string) => ['solid', 'dashed', 'dotted', 'double'].includes(value),
  },

  // Size variant
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    required: false,
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },

  // Line color
  color: {
    type: String,
    default: 'currentColor',
  },

  // Line thickness
  height: {
    type: [String, Number],
    default: '1px',
    validator: (value) => {
      if (typeof value === 'number') return value > 0;
      if (typeof value === 'string') {
        // Check for valid CSS length values (e.g. 10px, 1em, 50%, etc.)
        const cssLengthRegex = /^\d+(\.\d+)?(px|em|rem|%|vh|vw|vmin|vmax|cm|mm|in|pt|pc)$/;
        return cssLengthRegex.test(value);
      }
      return false;
    },
  },

  // Content background color
  contentBgColor: {
    type: String,
    default: 'inherit',
  },

  // Text color
  textColor: {
    type: String,
    default: 'inherit',
  },
});

/**
 * Computes main divider container styles based on direction
 * @returns {Object} CSS styles object
 */
const dividerStyle = computed(() => {
  if (props.direction === 'horizontal') {
    return { width: '100%' };
  } else {
    const heightValue = getHeightValue();
    if (props.type === 'double') {
      return {
        borderLeft: `${heightValue} solid ${props.color}`,
        borderRight: `${heightValue} solid ${props.color}`,
        width: `calc(${heightValue} * 2)`,
      };
    }
    return {
      borderLeft: `${heightValue} ${props.type} ${props.color}`,
    };
  }
});

/**
 * Computes line styles for horizontal divider
 * @returns {Object} CSS styles object
 */
const lineStyle = computed(() => {
  const style: any = {};
  const heightValue = getHeightValue();

  if (props.type === 'double') {
    style.borderTop = `${heightValue} solid ${props.color}`;
    style.borderBottom = `${heightValue} solid ${props.color}`;
    style.height = `calc(${heightValue} * 2)`;
  } else {
    style.borderTop = `${heightValue} ${props.type} ${props.color}`;
  }

  return style;
});

/**
 * Computes content area styles
 * @returns {Object} CSS styles object
 */
const contentStyle = computed(() => ({
  backgroundColor: props.contentBgColor,
  color: props.textColor,
}));

/**
 * Gets the effective size (props.size or config default)
 * @returns {string} Size value
 */
const actualSize = computed(() => props.size || config.size);

/**
 * Converts the height prop value to a numeric string in pixels
 * @returns {string} Height value (valid CSS string)
 */
const getHeightValue = (): string => {
  if (typeof props.height === 'number') return `${props.height}px`;
  if (typeof props.height === 'string') return props.height;
  return '1px'; // Default value for invalid inputs
};
</script>
