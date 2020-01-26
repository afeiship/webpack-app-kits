/**
NOT install package:
npm install -S html-loader pug-html-loader --registry=https://registry.npm.taobao.org
*/

module.exports = function(inOptions) {
  return {
    test: /\.pug$/,
    use: [
      {
        loader: 'html-loader'
      },
      {
        loader: 'pug-html-loader',
        inOptions
      }
    ]
  };
};
