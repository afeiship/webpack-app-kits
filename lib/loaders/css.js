const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TEST_RE = /\.css$/;

module.exports = function(inOptions) {
  return {
    test: TEST_RE,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      'css-hot-loader',
      'css-loader',
      'postcss-loader'
    ]
  };
};
