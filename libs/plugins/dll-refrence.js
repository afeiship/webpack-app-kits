const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = function (inOptions) {
  const resolve = function (inPath) {
    return path.resolve(inOptions.dirname, inPath);
  };
  return [
    new webpack.DllReferencePlugin({
      manifest: resolve('dist/vendors/manifest.json')
    }),
    new AddAssetHtmlPlugin([
      {
        includeSourcemap: false,
        hash: true,
        filepath: resolve('dist/vendors/vendors.*.js'),
        outputPath: 'vendors',
        publicPath: `${inOptions.publicPath}vendors`
      }
    ]),
  ];
};
