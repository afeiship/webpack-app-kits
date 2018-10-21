module.exports = function(inOptions) {
  return Object.assign(
    {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            name: "commons",
            enforce: true
          }
        }
      }
    },
    inOptions
  );
};
