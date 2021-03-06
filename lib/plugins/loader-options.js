const webpack = require('webpack');

module.exports = function(inOptoins) {
  return new webpack.LoaderOptionsPlugin(
    Object.assign(
      {
        minimize: process.env.NODE_ENV !== 'development'
      },
      inOptoins
    )
  );
};
