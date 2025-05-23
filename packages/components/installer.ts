import * as components from './index';

import type { App, Component } from 'vue';

// 自动收集所有组件（假设每个组件文件默认导出的是命名组件）
const install = (app: App): void => {
  Object.values(components).forEach((comp) => {
    // 排除非组件对象（比如 utils 导出）
    if (typeof comp === 'object' && 'name' in comp) {
      app.component((comp as Component).name!, comp as Component);
    }
  });
};

export default {
  install,
};
