var merge = require('../utils/merge');

module.exports = function (inOptions) {
  return merge(['.js', '.json', '.scss', '.css'], inOptions);
};
