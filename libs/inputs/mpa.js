const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const merge = require('../utils/merge');

module.exports = function (inOptions) {
  const entries = inOptions.entries;
  delete inOptions.entries;
  return mpaEntries(
    entries,
    null,
    Object.assign(
      { absolute: true },
      inOptions
    )
  );
};
