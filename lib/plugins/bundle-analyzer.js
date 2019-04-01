const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function(inOptions) {
  const options = Object.assign({}, inOptions);
  return [new BundleAnalyzerPlugin(options)];
};
