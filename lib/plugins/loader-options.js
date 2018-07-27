const merge = require('../utils/merge');
const webpack = require('webpack');

require('next-delete');

module.exports = function (inOptoins) {
  const mode = inOptoins.mode;
  const options = nx.delete(inOptoins, ['mode']);
  return new webpack.LoaderOptionsPlugin(
    merge(
      {
        minimize: mode !== 'local'
      },
      options
    )
  );
};