const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TEST_RE = /\.less$/;

module.exports = function (inOptions) {
  return [
    {
      test: TEST_RE,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-hot-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      })
    }
  ];
};
