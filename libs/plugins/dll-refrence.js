var path = require('path');

module.exports = function (inOptions) {
  var resolve = function (inPath) {
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
}
