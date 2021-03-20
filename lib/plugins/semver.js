const path = require('path');
const dirname = require('app-root-path').path;
const SemverWebpackPlugin = require('@jswork/semver-webpack-plugin');

module.exports = function(inOptions) {
  const NODE_ENV = process.env.NODE_ENV;
  return new SemverWebpackPlugin(
    Object.assign(
      {
        target: path.resolve(dirname, 'package.json'),
        enabled: true,
        callback: function(inVersion) {
          switch (NODE_ENV) {
            // case 'dev':
            // case 'development':
            //   return inVersion;
            case 'test':
            case 'uat':
            case 'prerelease':
              return this.inc(inVersion, 'prerelease', 'alpha');
            case 'release':
            case 'production':
              return this.valid(this.coerce(inVersion));
            default:
              return inVersion;
          }
        }
      },
      inOptions
    )
  );
};
