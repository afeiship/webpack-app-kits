const TEST_RE = /\.(jpe?g|png|gif|svg|ico)$/i;

module.exports = function(inOptions) {
  return {
    test: TEST_RE,
    loader: 'url-loader',
    options: {
      name: 'assets/images/[name]-[hash:4].[ext]',
      limit: 8192
    }
  };
};
