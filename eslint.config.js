/**
 * ESLint 配置文件（Flat Config 格式）
 * 支持 Vue、TypeScript、JavaScript 和 Prettier 集成
 */

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import eslintConfigPrettier from 'eslint-config-prettier'; // 关闭与 Prettier 冲突的规则
import prettierPlugin from 'eslint-plugin-prettier'; // 将 Prettier 作为 ESLint 规则运行
import tsParser from '@typescript-eslint/parser'; // TypeScript 解析器
import tsPlugin from '@typescript-eslint/eslint-plugin'; // TypeScript 规则插件
import vuePlugin from 'eslint-plugin-vue'; // Vue 语法规则插件
import vueParser from 'vue-eslint-parser'; // Vue 单文件解析器

// 获取当前文件路径（ESM 模块下替代 __dirname）
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * 配置说明：
 * 1. 配置项按从特殊到一般的顺序排列
 * 2. 每个配置对象只处理特定文件类型
 * 3. Prettier 配置必须放在最后
 */

export default [
  // ==================== 全局忽略配置 ====================
  {
    // 忽略不需要 lint 的文件和目录
    ignores: [
      'docs/**/*.vue',
      'docs/.vitepress/cache/**', // 忽略整个缓存目录
      '**/dist/**', // 构建输出目录
      '**/node_modules/**', // 依赖目录
      '**/*.min.js', // 压缩后的 JS 文件
      '**/coverage/**', // 测试覆盖率报告
      '**/.output/**', // Nuxt 输出目录
      '**/.nuxt/**', // Nuxt 构建目录
      '**/.history/**', // VS Code 插件历史版本
      '**/components.d.ts', // 自动生成的类型声明
      '**/auto-imports.d.ts', // 自动导入声明
      '**/*.d.ts', // 类型声明文件（单独配置规则）
    ],
  },

  // ==================== Vue 文件配置 ====================
  {
    // 只处理 .vue 文件
    files: ['**/*.vue'],

    // 启用的插件
    plugins: {
      vue: vuePlugin, // Vue 官方插件
      '@typescript-eslint': tsPlugin, // TypeScript 支持
    },

    // 语言选项
    languageOptions: {
      // 使用 vue-eslint-parser 解析模板部分
      parser: vueParser,
      parserOptions: {
        // 在 <script> 块中使用 TypeScript 解析器
        parser: tsParser,
        ecmaVersion: 'latest', // 使用最新 ECMAScript 特性
        sourceType: 'module', // 强制使用 ES 模块
        extraFileExtensions: ['.vue'], // 声明额外文件扩展名
        // TypeScript 相关配置
        tsconfigRootDir: __dirname, // TS 配置根目录
        project: './tsconfig.eslint.json', // 关联的 tsconfig 文件
        // Vue 相关配置
        vueFeatures: {
          filter: true, // 启用 Vue 2 的过滤器语法支持
          interpolationAsNonHTML: false, // 插值内容视为 HTML
        },
      },
    },

    // 自定义规则
    rules: {
      // Vue 相关规则
      'vue/comment-directive': 'off', // 关闭模板注释指令格式
      // 'vue/comment-directive': 'error', // 强制模板注释指令格式
      'vue/jsx-uses-vars': 'error', // 防止 JSX 中未使用的变量
      'vue/no-unused-vars': 'warn', // Vue 模板中未使用的变量警告
      'vue/no-multiple-template-root': 'off', // Vue 3 允许多根节点

      // 变量使用规则
      'no-unused-vars': 'off', // 关闭 ESLint 默认规则
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // 忽略以 _ 开头的参数
          varsIgnorePattern: '^_', // 忽略以 _ 开头的变量
          caughtErrorsIgnorePattern: '^_', // 忽略以 _ 开头的错误变量
        },
      ],

      // 其他推荐规则
      'vue/multi-word-component-names': 'off', // 允许单单词组件名
      'vue/require-default-prop': 'off', // 不要求必须设置默认 prop
    },
  },

  // ==================== TypeScript 文件配置 ====================
  {
    // 处理 .ts 和 .tsx 文件
    files: ['**/*.{ts,tsx}'],

    // 启用的插件
    plugins: {
      '@typescript-eslint': tsPlugin, // TypeScript 规则
    },

    // 语言选项
    languageOptions: {
      parser: tsParser, // 使用 TypeScript 解析器
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // 需要类型信息（启用严格规则）
        warnOnUnsupportedTypeScriptVersion: true, // TS 版本不兼容时警告
      },
    },

    // 自定义规则
    rules: {
      // TypeScript 核心规则
      '@typescript-eslint/ban-ts-comment': 'warn', // 慎用 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'warn', // 避免使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'warn', // 慎用非空断言

      // 变量规则
      'no-unused-vars': 'off', // 关闭 ESLint 默认规则
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // 其他推荐规则
      '@typescript-eslint/consistent-type-imports': 'warn', // 强制一致的类型导入
    },
  },

  // ==================== JavaScript 文件配置 ====================
  {
    // 处理 .js 和 .jsx 文件
    files: ['**/*.{js,jsx}'],

    // 语言选项
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    // 自定义规则
    rules: {
      // 变量规则
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // 其他推荐规则
      'no-var': 'error', // 禁止使用 var
      'prefer-const': 'warn', // 推荐使用 const
    },
  },

  // ==================== 声明文件配置 ====================
  {
    // 只处理 .d.ts 文件
    files: ['**/*.d.ts'],

    // 自定义规则
    rules: {
      // 放宽声明文件的规则
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }, // 仅检查参数
      ],
      '@typescript-eslint/no-namespace': 'off', // 允许使用 namespace
    },
  },

  // ==================== Prettier 集成（必须放在最后） ====================
  {
    // 处理所有文件
    files: ['**/*.{js,jsx,ts,tsx,vue}'],

    // 启用的插件
    plugins: {
      prettier: prettierPlugin, // 将 Prettier 作为 ESLint 插件
    },

    // 自定义规则
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 100, // 每行最大字符数
          tabWidth: 2, // 缩进空格数
          useTabs: false, // 使用空格缩进
          semi: true, // 句尾分号
          singleQuote: true, // 使用单引号
          trailingComma: 'all', // 多行时尽可能打印尾随逗号
          bracketSpacing: true, // 对象字面量括号空格
          arrowParens: 'always', // 箭头函数参数括号
          endOfLine: 'auto', // 自动检测换行符
        },
      ],
      // 覆盖所有与 Prettier 冲突的 ESLint 规则
      ...eslintConfigPrettier.rules,
    },
  },
];
