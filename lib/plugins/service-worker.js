const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const webpack = require('webpack');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = function(inOptions) {
  return new ServiceWorkerWebpackPlugin(
    Object.assign(
      {
        entry: resolve(dirname, '../src/sw.js'),
        excludes: ['**/.*', '**/*.map', '*.html']
      },
      inOptions
    )
  );
};
