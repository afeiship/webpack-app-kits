const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const TEST_RE = /\.(js)$/;


module.exports = function (inOptions) {
  return {
    test: TEST_RE,
    use: [
      'babel-loader'
    ],
    include: [
      resolve(dirname, 'src'),
      resolve(dirname, 'node_modules/mixin-decorator'),
      resolve(dirname, 'node_modules/react-dynamic-router')
    ]
  }
};
