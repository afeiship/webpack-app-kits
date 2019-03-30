const webpack = require('webpack');
const ArchiverWebpackPlugin = require('archiver-webpack-plugin');

module.exports = function(inOptions) {
  return new ArchiverWebpackPlugin(inOptions);
};
