import type { App, Component } from 'vue'

import type { Plugin } from 'vue'

export function withInstall<T extends Component>(component: T) {
  const comp = component as T & { install(app: App): void }
  comp.install = app => {
    const name = (component as any).name
    if (name) {
      app.component(name, component)
    } else {
      console.warn('Component missing name property.')
    }
  }
  return comp
}

export type SFCWithInstall<T> = T & Plugin
