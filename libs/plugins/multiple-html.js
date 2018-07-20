const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const webpackMpaEntries = require('webpack-mpa-entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('../utils/merge');

module.exports = function (inOptions) {
  const mpaEntries = webpackMpaEntries(inOptions.entries);

  return nx.map(mpaEntries, function (key, value) {
    const template = value.replace('.js', '.ejs');
    const filename = `dist/${key}/index.html`;

    return new HtmlWebpackPlugin(
      merge(
        {
          hash: 6,
          inject: true,
          template: resolve(dirname, template),
          filename: resolve(dirname, filename),
          chunks: ['vendors', 'commons', key]
        },
        inOptions
      )
    );
  });
};
