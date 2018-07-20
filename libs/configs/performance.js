var merge = require('../utils/merge');

module.export = function (inOptions) {
  return merge(
    {
      hints: false
    }, inOptions
  );
}
