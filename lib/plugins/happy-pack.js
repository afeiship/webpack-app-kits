const HappyPack = require('happypack');
const checkModules = require('@feizheng/check-modules');

module.exports = function(inOptions) {
  if (checkModules(['happypack'])) {
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
