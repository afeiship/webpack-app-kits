const webpack = require('webpack');

module.exports = function (inOptions) {
  return new webpack.HashedModuleIdsPlugin();
};
