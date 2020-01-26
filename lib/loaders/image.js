module.exports = function(inOptions) {
  return {
    test: /\.(jpe?g|png|gif|svg|ico)$/i,
    loader: 'url-loader',
    options: Object.assign(
      {
        name: 'assets/images/[name]-[hash:4].[ext]',
        limit: 8192
      },
      inOptions
    )
  };
};
