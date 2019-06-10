const webpack = require('webpack');
const Webpackbar = require('webpackbar');

module.exports = function(inOptions) {
  return new Webpackbar(inOptions);
};
