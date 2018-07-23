const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function (inOptions) {
  return [
    new BundleAnalyzerPlugin(inOptions)
  ];
};
