const path = require('path');
const SemverWebpackPlugin = require('semver-webpack-plugin')

module.exports = function (inOptions) {
  const { mode } = inOptions;
  return new SemverWebpackPlugin(
    Object.assign(
      {
        target: path.resolve(__dirname, '../package.json'),
        enabled: true,
        callback: function (inVersion) {
          switch (mode) {
            case 'development':
              return this.inc(inVersion, 'prerelease', 'alpha');
            case 'production':
              return this.valid(this.coerce(inVersion));
          }
        }
      },
      inOptions
    )
  );
};
