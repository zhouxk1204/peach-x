import * as sass from 'sass'; // 引入 sass 库

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';

// __dirname 替代
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../packages/theme');
const distDir = path.resolve(__dirname, '../dist/theme');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 读取所有 .scss 和 .css 文件（不含子目录）
const files = fs
  .readdirSync(srcDir)
  .filter((file) => ['.css', '.scss'].includes(path.extname(file)));

Promise.all(
  files.map(async (file) => {
    const filePath = path.join(srcDir, file);
    let css;
    if (path.extname(file) === '.scss') {
      // 编译 SCSS 文件为 CSS
      const result = sass.compile(filePath);
      css = result.css.toString();
    } else {
      css = fs.readFileSync(filePath, 'utf-8');
    }
    const processedResult = await postcss([autoprefixer, cssnano]).process(css, {
      from: filePath,
      to: path.join(distDir, path.basename(file, path.extname(file)) + '.css'),
    });
    fs.writeFileSync(path.join(distDir, path.basename(file, path.extname(file)) + '.css'), processedResult.css);
    console.log(`✔ ${path.basename(file, path.extname(file)) + '.css'} written to dist/theme/`);
  })
).catch((err) => {
  console.error('❌ Build failed:', err);
});
