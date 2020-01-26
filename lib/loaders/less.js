const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (inOptions) {
  return [
    {
      test: /\.less$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-hot-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true
          }
        }
      ]
    }
  ];
};
