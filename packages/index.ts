export { PeachXResolver } from './resolver'

import installer from './components/installer';
export default installer;

// 全量注册支持
export const install = installer.install;

export * from './components'
export * from './theme'