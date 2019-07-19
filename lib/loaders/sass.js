const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TEST_RE = /\.scss$/;

module.exports = function(inOptions) {
  return [
    {
      test: TEST_RE,
      loader: 'import-glob-loader',
      enforce: 'pre'
    },
    {
      test: TEST_RE,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-hot-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }
  ];
};
