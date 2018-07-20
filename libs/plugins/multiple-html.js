var path = require('path');
var webpackMpaEntries = require('webpack-mpa-entries');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('../utils/merge');

module.exports = function (inOptions) {
  var mpaEntries = webpackMpaEntries(inOptions.entries);
  var dirname = inOptions.dirname;
  var resolve = function (inPath) {
    return path.resolve(dirname, inPath);
  };

  return nx.map(mpaEntries, function (key, value) {
    var template = value.require('.js', '.ejs');
    var filename = `dist/${key}/index.html`;

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
}
