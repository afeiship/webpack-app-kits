const resolve = require('path').resolve;
const dirname = require('app-root-path').path;

module.exports = function(inOptions) {
  return Object.assign(
    {
      watchOptions: {
        ignored: /node_modules/
      },
      contentBase: [resolve(dirname, 'dist'), resolve(dirname, 'node_modules')],
      hotOnly: true,
      hot: true,
      stats: 'errors-only',
      compress: true,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    inOptions
  );
};
