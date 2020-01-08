const webpack = require('webpack');
const HtmlBannerWebpackPlugin = require('@feizheng/html-banner-webpack-plugin');
const dirname = require('app-root-path').path;
const pkg = require(`${dirname}/package.json`);
const exec = require('child_process').execSync;
const currentBranch = require('@feizheng/git-info').currentBranch;


// https://gist.github.com/kevinSuttle/6d3659076f0dda9010659748ed12a283

module.exports = function(inOptions) {
  const { NODE_ENV } = inOptions || {};
  const gitBranch = process.env.GIT_BRANCH || currentBranch();
  return new HtmlBannerWebpackPlugin(
    Object.assign(
      {
        banner: [
          `NAME: ${pkg.name}`,
          `VERSION: v${pkg.version}`,
          `BRANCH: ${gitBranch}`,
          'BUILD_TIME: ' + new Date().toLocaleString()
        ]
      },
      inOptions
    )
  );
};
