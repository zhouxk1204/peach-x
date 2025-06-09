<template>
  <!-- Role as a separator, apply different classes based on the placement -->
  <div role="separator" :class="['p-divider', `p-divider--${placement}`]">
    <!-- The line element of the divider, apply dynamic styles -->
    <div class="p-divider__line" :style="lineStyle"></div>
    <!-- If there is default slot content, render it with specific classes and styles -->
    <div
      v-if="$slots.default"
      :class="['p-divider__content', `p-divider__content--${actualSize}`]"
      :style="contentStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import the context key from the config provider
import { CONFIG_PROVIDER_KEY } from '@peach-x/components/config-provider/src/context';
// Import computed and inject functions from Vue
import { computed, inject } from 'vue';
// Import PropType type from Vue
import type { PropType } from 'vue';

/**
 * Set the component name to 'PDivider'
 */
defineOptions({
  name: 'PDivider',
});

// Inject the configuration from the config provider, set default values if not provided
const config = inject(CONFIG_PROVIDER_KEY, {
  size: 'medium',
  theme: 'light',
  locale: {},
});

/**
 * Define the props for the PDivider component
 */
const props = defineProps({
  /**
   * The placement of the divider content, can be 'left', 'center' or 'right'
   * @default 'center'
   */
  placement: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center',
    /**
     * Validate if the provided value is a valid placement
     * @param value - The value to be validated
     * @returns {boolean} - Whether the value is valid
     */
    validator: (value: string) => ['left', 'center', 'right'].includes(value),
  },
  /**
   * The type of the divider line, can be 'solid', 'dashed', 'dotted' or 'double'
   * @default 'solid'
   */
  type: {
    type: String as PropType<'solid' | 'dashed' | 'dotted' | 'double'>,
    default: 'solid',
    /**
     * Validate if the provided value is a valid type
     * @param value - The value to be validated
     * @returns {boolean} - Whether the value is valid
     */
    validator: (value: string) => ['solid', 'dashed', 'dotted', 'double'].includes(value),
  },
  /**
   * The size of the divider content, can be 'small', 'medium' or 'large'
   */
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    required: false,
    /**
     * Validate if the provided value is a valid size
     * @param value - The value to be validated
     * @returns {boolean} - Whether the value is valid
     */
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },
  /**
   * The color of the divider line
   * @default 'currentColor'
   */
  color: {
    type: String,
    default: 'currentColor',
  },
  /**
   * The height of the divider line, can be a number or a string ending with 'px'
   * @default '1px'
   */
  height: {
    type: [String, Number],
    default: '1px',
    /**
     * Validate if the provided value is a valid height
     * @param value - The value to be validated
     * @returns {boolean} - Whether the value is valid
     */
    validator: (value) => {
      if (typeof value === 'number') {
        return value > 0;
      } else if (typeof value === 'string') {
        return value.endsWith('px');
      } else {
        return false;
      }
    },
  },
  /**
   * The background color of the divider content
   * @default 'inherit'
   */
  contentBgColor: {
    type: String,
    default: 'inherit',
  },
  /**
   * The text color of the divider content
   * @default 'inherit'
   */
  textColor: {
    type: String,
    default: 'inherit',
  },
});

/**
 * Computed property to generate the style for the divider line
 */
const lineStyle = computed(() => {
  const style: {
    borderTop?: string;
    borderBottom?: string;
    height?: string;
  } = {};

  // If the divider type is 'double', apply double border styles
  if (props.type === 'double') {
    style.borderTop = `${getHeightValue()}px double ${props.color}`;
    style.borderBottom = `${getHeightValue()}px double ${props.color}`;
    style.height = `${getHeightValue() * 3}px`;
  } else {
    style.borderTop = `${getHeightValue()}px ${props.type} ${props.color}`;
  }

  return style;
});

/**
 * Computed property to generate the style for the divider content
 */
const contentStyle = computed(() => ({
  backgroundColor: props.contentBgColor,
  color: props.textColor,
}));

/**
 * Computed property to determine the actual size of the divider content
 */
const actualSize = computed(() => props.size || config.size);

/**
 * Get the numeric value of the height prop
 * @returns {number} - The numeric value of the height
 */
const getHeightValue = () => {
  if (typeof props.height === 'number') return props.height;
  if (props.height.endsWith('px')) return parseFloat(props.height);
  return 1; // Default value
};
</script>
