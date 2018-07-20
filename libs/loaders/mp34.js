const TEST_RE = /\.(mp3|mp4)$/i;

module.exports = function (inOptions) {
  return {
    test: TEST_RE,
    loader: 'url-loader',
    options: {
      name: 'assets/medias/[name]-[hash:4].[ext]'
    }
  };
};
