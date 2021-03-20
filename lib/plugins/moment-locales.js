const checkModules = require('@jswork/check-modules');

// https://github.com/iamakulov/moment-locales-webpack-plugin

module.exports = function(inOptions) {
  if (checkModules(['moment-locales-webpack-plugin'])) {
    const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
    return new MomentLocalesPlugin(
      Object.assign({ localesToKeep: ['zh-cn', 'es-us'] }, inOptions)
    );
  }
};
