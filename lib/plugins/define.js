const webpack = require('webpack');

module.exports = function (inOptions) {
  const { mode } = inOptions;
  return new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(mode)
  });
};
