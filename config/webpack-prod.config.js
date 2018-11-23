const path = require('path');
const mainWebpack = require('./webpack-main.config');

const outputPath = path.resolve(__dirname, '../', 'dist');

module.exports = {
  output: {
    path: outputPath,
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  ...mainWebpack,
};
