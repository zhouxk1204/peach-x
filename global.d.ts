declare module 'vue' {
  export interface GlobalComponents {
    PButton: typeof import('peach-x')['PButton']
  }
}

export {}
