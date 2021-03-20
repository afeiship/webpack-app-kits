const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const checkModules = require('@jswork/check-modules');

module.exports = function(inOptions) {
  if (checkModules(['happypack'])) {
    return Object.assign(
      {
        test: /\.(js)$/,
        use: ['happypack/loader?id=babel'],
        exclude: /node_modules/
      },
      inOptions
    );
  }
};
