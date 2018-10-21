const webpack = require('webpack');

module.exports = function(inOptions) {
  const { mode } = inOptions;
  /**
   * 变量的值将会原样替换到 js 代码
   * 所以这里需要： JSON.stringify(mode)，最终得到 '"development/production/test"'
   * https://segmentfault.com/q/1010000006111130/a-1020000006112689
   */
  return new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(mode)
  });
};
