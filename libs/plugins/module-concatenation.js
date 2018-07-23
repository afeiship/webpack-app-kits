const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const webpack = require('webpack');

module.exports = function (inOptions) {
  return [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ];
};
