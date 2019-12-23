const checkModules = require('@feizheng/check-modules');

module.exports = function(inOptions) {
  if (checkModules('extract-text-webpack-plugin')) {
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    return new ExtractTextPlugin(
      Object.assign(
        {
          filename: '[name]/[name]-[hash].css',
          allChunks: true
        },
        inOptions
      )
    );
  }
};

/**
 * 实践中遇到的 case:
1. 这个会产生一个问题： css 里会混入 js 代码。
2. 在 webpack 4.2 之前好像没有这个问题，之后就会出现。
3. 这也是官方不再推荐这个插件的原因之一了
4. 所以在后续的项目中不再使用这个插件，留在这里，仅仅是为了兼容。
*/
