import installer from './installer';

export default installer;

// 全量注册支持
export const install = installer.install;

import pkg from '../package.json' assert { type: 'json' };
export const version = pkg.version; 

export * from './components'
export * from './theme'
export * from './utils'
export * from './constants'
// export * from './locale' // 如果有国际化模块