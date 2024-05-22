/*
 * This file runs whenever running prod compiler.
 * It converts the vite-compressed `main.js` into
 * a webflow-compatible `.txt`.
 */

const fs = require('fs');
const path = require('path');

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8')
);
const fileLabel = `${packageJson.name}-${packageJson.version}.txt`;
const fileContents = fs.readFileSync(
  path.resolve(__dirname, 'dist', 'main.js'),
  'utf8'
);
fs.writeFileSync(path.resolve(__dirname, 'dist', fileLabel), fileContents);
