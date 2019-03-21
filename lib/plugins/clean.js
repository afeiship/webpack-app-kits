const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(inOptions) {
  const { dirs, NODE_ENV } = inOptions;
  return new CleanWebpackPlugin(dirs || ['dist'], inOptions);
};
