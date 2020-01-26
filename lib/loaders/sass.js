const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(inOptions) {
  return [
    {
      test: /\.scss$/,
      loader: 'import-glob-loader',
      enforce: 'pre'
    },
    {
      test: /\.scss$/,
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
