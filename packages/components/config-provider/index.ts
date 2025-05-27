import { withInstall, SFCWithInstall } from '../withInstall'
import ConfigProvider from './src/config-provider.vue'

// 包装为带 install 的组件
export const PConfigProvider: SFCWithInstall<typeof ConfigProvider> = withInstall(ConfigProvider)

// 类型导出
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>
export * from './src/types'
export * from './src/context'

// 默认导出
export default PConfigProvider
