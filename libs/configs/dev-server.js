const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const merge = require('../utils/merge');

module.exports = function (inOptions) {
  return merge({
    contentBase: [
      resolve(dirname, 'dist'),
      resolve(dirname, 'node_modules')
    ],
    hot: true,
    stats: 'errors-only',
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }, inOptions);
};
