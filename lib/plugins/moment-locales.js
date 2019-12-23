const checkModules = require('@feizheng/check-modules');

module.exports = function(inOptions) {
  if (checkModules(['moment-locales-webpack-plugin'])) {
    const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
    return new MomentLocalesPlugin(
      Object.assign({ localesToKeep: ['zh-cn', 'es-us'] }, inOptions)
    );
  }
};
