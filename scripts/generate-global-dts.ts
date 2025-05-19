import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.resolve(__dirname, '../dist')

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir)
}

const componentsDir = path.resolve(__dirname, '../packages/components')

const excludeDirs = ['node_modules', '.git', 'tests']

const entries = fs.readdirSync(componentsDir).filter(name => {
  const fullPath = path.join(componentsDir, name)
  return fs.statSync(fullPath).isDirectory() && !excludeDirs.includes(name)
})

const imports = entries
  .map((dir: string) => `    ${pascal(`P-${dir}`)}: typeof import('peach-x')['P${pascal(dir)}']`)
  .join('\n')

const content = `declare module 'vue' {
  export interface GlobalComponents {
${imports}
  }
}

export {}
`

const outputPath = path.resolve(distDir, '../global.d.ts')
fs.writeFileSync(outputPath, content)

function pascal(str: string) {
  return str
    .replace(/(^\w|-\w)/g, (m) => m.replace('-', '').toUpperCase())
}
