var TEST_RE = /\.(woff|eot|ttf)\??.*$/;

module.exports = function (inOptions) {
  return [
    {
      test: TEST_RE,
      loader: 'url-loader',
      options: {
        name: 'assets/fonts/[name]-[hash:4].[ext]',
        limit: 8192
      }
    }
  ];
};
