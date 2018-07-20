var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TEST_RE = /\.css$/;

module.exports = function(inOptions){
  return {
    test: TEST_RE,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-hot-loader',
        'css-loader',
        'postcss-loader'
      ]
    })
  }
};