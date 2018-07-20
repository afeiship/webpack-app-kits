const merge = require('../utils/merge');

module.exports = function (inOptions) {
  return merge(
    {
      hints: false
    }, inOptions
  );
};
