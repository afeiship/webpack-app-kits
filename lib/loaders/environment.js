const TEST_RE = /config\.js$/;
const { shortHash } = require('@feizheng/git-info');
const resolve = require('path').resolve;
const GIT_HASH = shortHash();
const dirname = require('app-root-path').path;
const packageJson = require(resolve(dirname, './package.json'));

module.exports = function(inOptions) {
  return [
    {
      test: TEST_RE,
      loader: 'string-replace-loader',
      options: Object.assign(
        {
          multiple: [
            { search: '__BUILD_HASH__', replace: GIT_HASH },
            { search: '__BUILD_ENV__', replace: process.env.NODE_ENV },
            { search: '__BUILD_VERSION__', replace: packageJson.version }
          ]
        },
        inOptions
      )
    }
  ];
};
