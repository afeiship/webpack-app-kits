const webpack = require('webpack');

module.exports = function(inOptions) {
  return new webpack.ProvidePlugin(
    Object.assign(
      {
        React: 'react',
        ReactDOM: 'react-dom',
        mixin: '@jswork/mixin-decorator',
        service: '@jswork/service-decorator'
      },
      inOptions
    )
  );
};
