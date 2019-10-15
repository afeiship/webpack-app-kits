module.exports = function(inOptions) {
  // npm install -S underscore-template-loader
  return Object.assign(
    {
      test: /\.ejs$/,
      loader: 'ejs-compiled-loader'
    },
    inOptions
  );
};
