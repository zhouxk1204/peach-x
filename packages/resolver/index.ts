import type { ComponentResolver } from 'unplugin-vue-components/types'

export const PeachXResolver: ComponentResolver = {
  type: 'component' as const,
  resolve(name: string) {
    if (!name.startsWith('P')) return

    const componentName = name.slice(1)
    const kebabCaseName = componentName
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()

    return {
      name: name,
      from: `peach-x/components/${kebabCaseName}`,
      sideEffects: `peach-x/theme/${kebabCaseName}.css`,
    }
  },
}
