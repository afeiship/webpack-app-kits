const webpack = require('webpack');

module.exports = function(inOptions) {
  return new webpack.ProvidePlugin(
    Object.assign(
      {
        React: 'react',
        ReactDOM: 'react-dom',
        nx: '@feizheng/next-js-core2',
        mixin: '@feizheng/mixin-decorator'
      },
      inOptions
    )
  );
};
