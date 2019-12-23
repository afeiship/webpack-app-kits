const HappyPack = require('happypack');

module.exports = function(inOptions) {
  return new HappyPack(
    Object.assign(
      {
        id: 'babel',
        loaders: ['babel-loader?cacheDirectory']
      },
      inOptions
    )
  );
};
