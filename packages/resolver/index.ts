import type { ComponentResolver } from 'unplugin-vue-components/types'

export const PeachXResolver: ComponentResolver = {
  type: 'component',
  resolve(name: string) {
    if (name.startsWith('P')) {
      const componentName = name.slice(1)
      return {
        name: componentName,
        // 精确到组件目录
        from: `peach-x/es/components/${componentName.toLowerCase()}`,
        // 样式文件
        // sideEffects: 'peach-x/dist/theme/style.css'
      }
    }
  }
}
