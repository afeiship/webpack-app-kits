const resolve = require('path').resolve;
const dirname = require('app-root-path').path;

module.exports = function (inOptions) {
  return Object.assign(
    {
      path: resolve(dirname, 'dist/'),
      filename: 'vendors/[name].[chunkhash].js',
      library: '[name]_library'
    }
    , inOptions
  );
};
