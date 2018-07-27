const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TEST_RE = /\.scss$/;

module.exports = function (inOptions) {
  return [
    {
      test: TEST_RE,
      loader: 'import-glob-loader',
      enforce: 'pre'
    },
    {
      test: TEST_RE,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-hot-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      })
    }
  ];
};
