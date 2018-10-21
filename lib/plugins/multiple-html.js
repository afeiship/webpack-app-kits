const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const webpackMpaEntries = require('webpack-mpa-entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(inOptions) {
  const { entries, isEnvTemplate,  ...options } = inOptions;
  const mpaEntries = webpackMpaEntries(entries);

  return nx.map(mpaEntries, function(key, value) {
    const template = isEnvTemplate ? value.replace('.js', `_${mode}.ejs`) : value.replace('.js', '.ejs');
    const filename = `dist/${key}/index.html`;

    return new HtmlWebpackPlugin(
      Object.assign(
        {
          hash: 6,
          inject: true,
          preload: false,
          prefetch: false,
          template: resolve(dirname, template),
          filename: resolve(dirname, filename),
          chunks: ['vendors', 'commons', key]
        },
        options
      )
    );
  });
};
