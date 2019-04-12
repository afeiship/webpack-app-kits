const webpack = require('webpack');
const HtmlBannerWebpackPlugin = require('html-banner-webpack-plugin');
const dirname = require('app-root-path').path;
const pkg = require(`${dirname}/package.json`);

// https://gist.github.com/kevinSuttle/6d3659076f0dda9010659748ed12a283

module.exports = function(inOptions) {
  const { NODE_ENV } = inOptions || {};
  return new HtmlBannerWebpackPlugin(
    Object.assign(
      {
        banner: [
          `NAME: v${pkg.name}`,
          `VERSION: v${pkg.version}`,
          'BUILD_TIME: ' + new Date().toLocaleString()
        ]
      },
      inOptions
    )
  );
};
