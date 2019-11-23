const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const mpaEntries = require('@feizheng/webpack-mpa-entries')

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
