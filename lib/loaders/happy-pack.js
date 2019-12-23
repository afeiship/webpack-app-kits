const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const TEST_RE = /\.(js)$/;
const checkModules = require('@feizheng/check-modules');

module.exports = function(inOptions) {
  if (checkModules(['happypack'])) {
    return Object.assign(
      {
        test: TEST_RE,
        use: ['happypack/loader?id=babel'],
        include: [
          resolve(dirname, 'src'),
          resolve(dirname, 'node_modules/mixin-decorator')
        ]
      },
      inOptions
    );
  }
};
