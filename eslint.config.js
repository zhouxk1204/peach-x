import { dirname } from 'path';
import eslintConfigPrettier from 'eslint-config-prettier';
import { fileURLToPath } from 'url';
import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  // 全局忽略配置
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'playground/src/components.d.ts',
      'playground/auto-imports.d.ts',
    ],
  },

  // Vue 文件配置
  {
    files: ['**/*.vue'],
    plugins: {
      vue,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },
    rules: {
      'vue/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // TypeScript 文件配置
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // JavaScript 文件配置
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },

  // 声明文件配置
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // Prettier 配置（必须放在最后）
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      ...eslintConfigPrettier.rules,
    },
  },
];
