const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('../utils/merge');

require('next-join');

module.exports = function (inOptions) {
  const { mode, ...options } = inOptions;

  return new HtmlWebpackPlugin(
    Object.assign(
      {
        template: mode ? `./src/index_${mode}.ejs` : './src/index.ejs'
      },
      options
    )
  );
};
