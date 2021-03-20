const checkModules = require('@jswork/check-modules');

module.exports = function(inOptions) {
  if (checkModules(['happypack'])) {
    const HappyPack = require('happypack');
    return new HappyPack(
      Object.assign(
        {
          id: 'babel',
          loaders: ['babel-loader?cacheDirectory']
        },
        inOptions
      )
    );
  }
};
