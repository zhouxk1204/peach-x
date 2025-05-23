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

// 读取所有 .css 文件（不含子目录）
const files = fs
  .readdirSync(srcDir)
  .filter((file) => path.extname(file) === '.css');

Promise.all(
  files.map(async (file) => {
    const filePath = path.join(srcDir, file);
    const css = fs.readFileSync(filePath, 'utf-8');
    const result = await postcss([autoprefixer, cssnano]).process(css, {
      from: filePath,
      to: path.join(distDir, file),
    });
    fs.writeFileSync(path.join(distDir, file), result.css);
    console.log(`✔ ${file} written to dist/theme/`);
  })
).catch((err) => {
  console.error('❌ Build failed:', err);
});
