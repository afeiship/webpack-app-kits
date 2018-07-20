var merge = require('../utils/merge');

module.exports = function (inOptions) {
  return merge({
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          name: 'commons',
          enforce: true
        }
      }
    }
  }, inOptions);
};
