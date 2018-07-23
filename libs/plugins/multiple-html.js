const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const webpackMpaEntries = require('webpack-mpa-entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (inOptions) {
  const { entries, mode, ...options } = inOptions;
  const mpaEntries = webpackMpaEntries(entries);

  return nx.map(mpaEntries, function (key, value) {
    const template = mode ? value.replace('.js', `_${mode}.ejs`): value.replace('.js', '.ejs');
    const filename = `dist/${key}/index.html`;

    return new HtmlWebpackPlugin(
      Object.assign(
        {
          hash: 6,
          inject: true,
          template: resolve(dirname, template),
          filename: resolve(dirname, filename),
          chunks: ['vendors', 'commons', key]
        },
        options
      )
    );
  });
};
