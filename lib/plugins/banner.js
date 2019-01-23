const webpack = require('webpack');

module.exports = function(inOptions) {
  const { NODE_ENV } = inOptions || {};
  return new webpack.BannerPlugin(
    Object.assign(
      {
        banner: [
          'hash: [hash]',
          'chunkhash: [chunkhash]',
          'name: [name]',
          'filebase: [filebase]',
          'query: [query]',
          'file: [file]'
        ].join('\n')
      },
      inOptions
    )
  );
};
