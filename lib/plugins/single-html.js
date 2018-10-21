const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('next-join');

module.exports = function (inOptions) {
  const { mode, ...options } = inOptions;
  const filename = nx.join([ 'index', mode ], '_');

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
