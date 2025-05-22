/*
 * @Author: zhouxk
 * @Date: 2025-05-22 11:03:27
 * @LastEditors: zhouxk
 * @LastEditTime: 2025-05-22 11:32:07
 * @Description: 
 */
import { ThemeMode, UseThemeOptions } from '../types/types';
import { onMounted, ref, watch } from 'vue';

export function useTheme(options: UseThemeOptions = {}) {
  const {
    mode = 'class',
    className = 'dark',
    storageKey = 'theme',
  } = options;

  // 响应式主题状态
  const theme = ref<ThemeMode>('light');

  // 读取本地存储，或者根据 media 初始化
  function initTheme() {
    const saved = localStorage.getItem(storageKey) || '';
    if (saved === 'light' || saved === 'dark') {
      theme.value = saved;
    } else if (mode === 'media' && window.matchMedia) {
      theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      theme.value = 'light';
    }
    applyTheme(theme.value);
  }

  // 根据主题应用 class 或 media 不用操作（media 只监听）
  function applyTheme(t: ThemeMode) {
    if (mode === 'class') {
      document.documentElement.classList.toggle(className, t === 'dark');
    }
    // media模式下不需要操作DOM类
  }

  // 切换主题，只有class模式有效
  function toggleTheme() {
    if (mode !== 'class') return;
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  }

  // 监听theme变化，应用主题，保存本地存储
  watch(theme, (newVal) => {
    applyTheme(newVal);
    localStorage.setItem(storageKey, newVal);
  });

  // media模式监听系统主题变化
  function setupMediaListener() {
    if (mode !== 'media' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const mediaListener = (e: MediaQueryListEvent) => {
      theme.value = e.matches ? 'dark' : 'light';
    };
    mediaQuery.addEventListener('change', mediaListener);

    // 组件卸载时移除监听（如果在setup中用，或者暴露函数）
    return () => {
      mediaQuery.removeEventListener('change', mediaListener);
    };
  }

  // 初始化调用
  onMounted(() => {
    initTheme();
    if (mode === 'media') {
      setupMediaListener();
    }
  });

  // 公开接口
  return {
    theme,
    toggleTheme,
    setTheme: (t: ThemeMode) => { theme.value = t; },
  };
}
