// Strict regex to match CSS units: numbers (integer or decimal) followed by px, rem, em, or %.
export const CSS_UNIT_REGEX_STRICT = /^(\d+\.\d+|\d+)(px|rem|em|%)$/;

// Regex to match positions for thousands separator (e.g., 1,000,000).
export const THOUSANDS_SEPARATOR_REGEX = /\B(?=(\d{3})+(?!\d))/g;
