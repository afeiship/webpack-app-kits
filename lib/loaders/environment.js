const { shortHash } = require('@feizheng/git-info');
const GIT_HASH = shortHash();
const nxAbsolutePkg = require('@feizheng/next-absolute-package');
const pkg = nxAbsolutePkg();

module.exports = function(inOptions) {
  return [
    {
      test: /config\.js$/,
      loader: 'string-replace-loader',
      options: Object.assign(
        {
          multiple: [
            { search: '__BUILD_HASH__', replace: GIT_HASH },
            { search: '__BUILD_ENV__', replace: process.env.NODE_ENV },
            { search: '__BUILD_VERSION__', replace: pkg.version },
            { search: '__BUILD_DATETIME__', replace: new Date().toLocaleString() }
          ]
        },
        inOptions
      )
    }
  ];
};
