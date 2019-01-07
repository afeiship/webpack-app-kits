const resolve = require('path').resolve;
const dirname = require('app-root-path').path;

module.exports = function(inOptions) {
  return Object.assign(
    {
      favicon: './src/assets/images/favicon.ico',
      filename: '[name]/[name]-[hash:6].js',
      chunkFilename: 'chunks/[name]-[hash:8].js'
    },
    inOptions
  );
};
