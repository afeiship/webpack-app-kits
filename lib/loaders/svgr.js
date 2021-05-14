const checkModules = require('@jswork/check-modules');

module.exports = function (inOptions) {
  if (checkModules['@svgr/webpack']) {
    return [
      Object.assign(
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        },
        inOptions
      )
    ];
  }
};
