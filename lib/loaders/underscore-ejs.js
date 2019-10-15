/**
NOT install package:
npm install -S underscore-template-loader
*/

module.exports = function(inOptions) {
  return Object.assign(
    {
      test: /\.ejs$/,
      loader: 'ejs-compiled-loader'
    },
    inOptions
  );
};
