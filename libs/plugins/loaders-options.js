var merge = require('../utils/merge');
var webpack = require('webpack');

module.exports = function (inOptoins) {
  var mode = inOptoins.mode;
  var options = nx.delete(inOptoins, ['mode']);
  return new webpack.LoaderOptionsPlugin(
    merge(
      {
        minimize: mode !== 'local'
      },
      options
    )
  );
};
