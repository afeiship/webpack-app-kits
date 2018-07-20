const merge = require('../utils/merge');
const DEFAULT_EXTS = ['.js', '.json', '.scss', '.css'];

module.exports = function (inOptions) {
  if (inOptions) {
    return merge([
      DEFAULT_EXTS, inOptions
    ]);
  }
  return DEFAULT_EXTS;
};
