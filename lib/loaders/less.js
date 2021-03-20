const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const checkModules = require('@jswork/check-modules');

module.exports = function(inOptions) {
  if (checkModules['less-loader']) {
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
  }
};
