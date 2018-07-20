var path = require('path');
var TEST_RE = /\.(js)$/;


module.exports = function (inOptions) {
  var dirname = inOptions.dirname;

  return [
    {
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
  ]
};
