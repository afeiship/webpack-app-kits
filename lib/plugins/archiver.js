const webpack = require('webpack');
const dirname = require('app-root-path').path;
const ArchiverWebpackPlugin = require('archiver-webpack-plugin');
const pkgJson = require(dirname + '/package.json');

module.exports = function(inOptions) {
  const options = Object.assign(
    {
      output: function(inPath, inExt) {
        const name = 'dist/app-' + pkgJson.version + inExt;
        return inPath.replace('dist', name);
      }
    },
    inOptions
  );
  return new ArchiverWebpackPlugin(options);
};
