declare module 'vue' {
  export interface GlobalComponents {
    PButton: typeof import('peach-x/components/button')['PButton']
  }
}

export {}
