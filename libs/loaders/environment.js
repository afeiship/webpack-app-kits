const TEST_RE = /config\.js$/;
const { shortHash } = require('git-info');
const GIT_HASH = shortHash();


module.exports = function (inOptions) {
  const { mode,  ...options } = inOptions;
  const _mode = mode || 'development';
  return [
    {
      test: TEST_RE,
      loader: 'string-replace-loader',
      options: {
        multiple: [
          { search: '__BUILD_HASH__', replace: GIT_HASH },
          { search: '__BUILD_ENV__', replace: _mode },
        ],
        ...options
      }
    }
  ];
};
