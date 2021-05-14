const checkModules = require('@jswork/check-modules');

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
