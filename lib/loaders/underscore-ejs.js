module.exports = function(inOptions) {
  return Object.assign(
    {
      test: /\.ejs$/,
      loader: 'ejs-compiled-loader'
    },
    inOptions
  );
};
