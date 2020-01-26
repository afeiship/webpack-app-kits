module.exports = function (inOptions) {
  return {
    test: /\.(mp3|mp4)$/i,
    loader: 'url-loader',
    options: {
      name: 'assets/medias/[name]-[hash:4].[ext]'
    }
  };
};
