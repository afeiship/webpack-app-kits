const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(inOptions) {
  const { isEnvTemplate, ...options } = inOptions;
  const NODE_ENV = process.env.NODE_ENV;
  const filename = isEnvTemplate ? ['index', NODE_ENV].join('_') : 'index';

  return new HtmlWebpackPlugin(
    Object.assign(
      {
        preload: false,
        prefetch: false,
        template: `./src/${filename}.ejs`
      },
      options
    )
  );
};
