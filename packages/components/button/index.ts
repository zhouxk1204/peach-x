import { SFCWithInstall, withInstall } from '../../utils/withInstall'

import Button from './src/button.vue'

// 通过 withInstall 包装组件，使其支持全局注册和按需引入
export const PButton: SFCWithInstall<typeof Button> = withInstall(Button)

// 导出组件实例类型，方便外部使用 ref 时获取类型提示
export type ButtonInstance = InstanceType<typeof Button>

// 导出组件的 props 类型等，供用户扩展或引用
export * from './src/types'

// 默认导出组件
export default PButton
