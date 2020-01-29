const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(inOptions) {
  return [
    {
      test: /\.scss$/i,
      loader: 'import-glob-loader',
      enforce: 'pre'
    },
    {
      test: /\.module\.scss$/i,
      use: [
        // 'style-loader',
        MiniCssExtractPlugin.loader,
        'css-hot-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.scss$/i,
      exclude: /\.module\.scss$/i,
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
