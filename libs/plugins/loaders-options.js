module.exports = function (inOptoins) {
  var mode = inOptoins.mode;
  var options = nx.delete(inOptoins, ['mode']);
  return new webpack.LoaderOptionsPlugin(
    Object.assign(
      {
        minimize: mode !== 'local'
      },
      options
    )
  );
};
