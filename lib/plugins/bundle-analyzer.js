const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function(inOptions) {
  const enabled = process.env.npm_config_report;
  return enabled ? [new BundleAnalyzerPlugin(inOptions)] : [];
};
