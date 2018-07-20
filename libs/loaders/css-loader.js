var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CSS_RE = /\.css$/;

module.exports = [
  {
    test: CSS_RE,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-hot-loader',
        'css-loader',
        'postcss-loader'
      ]
    })
  }
];
