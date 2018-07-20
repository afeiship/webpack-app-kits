const path = require('path');
const TEST_RE = /\.(js)$/;


module.exports = function (inOptions) {
  const dirname = inOptions.dirname;
  return {
    test: TEST_RE,
    use: [
      'babel-loader'
    ],
    include: [
      path.resolve(dirname, 'src'),
      path.resolve(dirname, 'node_modules/mixin-decorator'),
      path.resolve(dirname, 'node_modules/react-dynamic-router')
    ]
  }
};
