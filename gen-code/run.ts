import nunjucks from 'nunjucks';
import { config } from './config';
import fs from 'fs';
import path from 'path';

nunjucks.configure('template', { autoescape: true });


const TEMPLATE_DIR = path.join(__dirname, 'template');
const OUTPUT_DIR = path.join(__dirname, config.entityname+'s');



// 递归遍历目录
function traverseDir(dir, callback) {
  const files = fs.readdirSync(dir);

  files.forEach(filename => {
    const fullPath = path.join(dir, filename);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

// 创建目标目录
function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 开始遍历 template 目录
traverseDir(TEMPLATE_DIR, (filePath) => {
  if (!filePath.endsWith('.njk')) return;

  const relativePath = path.relative(TEMPLATE_DIR, filePath);
  const outputPath = path.join(OUTPUT_DIR, relativePath.replace('user', config.entityname).replace('.njk', ''));

  // 渲染 nunjucks 模板
  const rendered = nunjucks.render(relativePath, config);

  // 创建输出目录
  ensureDirExists(path.dirname(outputPath));

  // 写入文件
  fs.writeFileSync(outputPath, rendered, 'utf8');

  console.log(`生成：${outputPath}`);
});
