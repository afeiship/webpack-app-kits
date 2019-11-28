module.exports = function(inOptions) {
  return Object.assign(
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },
    inOptions
  );
};
