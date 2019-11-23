const DnsPrefetchWebpackPlugin = require('@feizheng/dns-prefetch-webpack-plugin');

module.exports = function (inOptions) {
  return new DnsPrefetchWebpackPlugin(
    Object.assign(
      {
        items: ['//www.demo.com']
      },
      inOptions
    )
  );
};
