const path = require('path');
const webpackMpaEntries = require('webpack-mpa-entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('../utils/merge');

module.exports = function (inOptions) {
  const mpaEntries = webpackMpaEntries(inOptions.entries);
  const dirname = inOptions.dirname;
  const resolve = function (inPath) {
    return path.resolve(dirname, inPath);
  };

  return nx.map(mpaEntries, function (key, value) {
    const template = value.require('.js', '.ejs');
    const filename = `dist/${key}/index.html`;

    return new HtmlWebpackPlugin(
      merge(
        {
          hash: 6,
          inject: true,
          template: resolve(template),
          filename: resolve(filename),
          chunks: ['vendors', 'commons', key]
        },
        inOptions
      )
    );
  });
};
