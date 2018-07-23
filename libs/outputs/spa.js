const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const merge = require('../utils/merge');

module.exports = function (inOptions) {
  return Object.assign(
    {
      filename: '[name]/[name]-[hash].js'
    },
    inOptions
  );
};
