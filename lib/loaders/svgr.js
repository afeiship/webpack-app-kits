const checkModules = require('@jswork/check-modules');

// @reference: https://react-svgr.com/docs/webpack/

module.exports = function (inOptions) {
  if (checkModules['@svgr/webpack']) {
    return [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        options: inOptions
      }
    ];
  }
};
