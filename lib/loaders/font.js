module.exports = function(inOptions) {
  return {
    test: /\.(woff|eot|ttf)\??.*$/,
    loader: 'url-loader',
    options: Object.assign(
      {
        name: 'assets/fonts/[name]-[hash:4].[ext]',
        limit: 8192
      },
      inOptions
    )
  };
};
