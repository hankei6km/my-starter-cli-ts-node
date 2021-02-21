// sandbox.config.json で Node Version 12 を指定する場合.
// tsconfig.json の "module" を "CommonJS".
// package.json から "type" フィールド削除.
import * as fs from 'fs';
fs.readFile('README.md', (_err, data) =>
  console.log(`README.md legnth: ${data.toString('utf-8').length}`)
);

// sandbox.config.json で Node Version 14 でも
//  import と require を利用する場合.
// tsconfig.json の "module" を "CommonJS".
// package.json から "type" フィールド削除.
// import * as path from 'path';
// const fs = require('fs');
// fs.readFile(path.join('./', 'README.md'), (_err: Error, data: Buffer) =>
//   console.log(`README.md legnth: ${data.toString('utf-8').length}`)
// );

// fs/promises は sandbox.config.json で Node Version 14 が必要
// import * as fs from 'fs/promises';
// fs.readFile('README.md').then((result) =>
//   console.log(`README.md legnth: ${result.toString('utf-8').length}`)
// );

export {};
