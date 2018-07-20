const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = function (inOptions) {
  return [
    new webpack.DllReferencePlugin({
      manifest: resolve('dist/vendors/manifest.json')
    }),
    new AddAssetHtmlPlugin([
      {
        includeSourcemap: false,
        hash: true,
        filepath: resolve(dirname, 'dist/vendors/vendors.*.js'),
        outputPath: 'vendors',
        publicPath: `${inOptions.publicPath}vendors`
      }
    ]),
  ];
};
