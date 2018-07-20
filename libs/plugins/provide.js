var merge = require('../utils/merge');

module.exports = function(inOptions){
  return new webpack.ProvidePlugin(
    merge(
      {
        React: 'react',
        ReactDOM: 'react-dom',
        nx: 'next-js-core2',
        mixin: 'mixin-decorator'
      },
      inOptions
    )
  );
};
