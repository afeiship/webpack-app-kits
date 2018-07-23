const merge = require('../utils/merge');
const DEFAULT_EXTS = ['.js', '.json', '.scss', '.css'];

module.exports = function (inOptions) {
  return inOptions || DEFAULT_EXTS;
};
