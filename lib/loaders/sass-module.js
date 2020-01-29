const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(inOptions) {
  return {
    test: /\.module\.scss$/,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  };
};
