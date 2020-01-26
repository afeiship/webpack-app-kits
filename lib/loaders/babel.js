const resolve = require('path').resolve;
const dirname = require('app-root-path').path;

module.exports = function(inOptions) {
  return Object.assign(
    {
      test: /\.(js)$/,
      use: ['babel-loader'],
      include: [
        resolve(dirname, 'src'),
        resolve(dirname, 'node_modules/mixin-decorator'),
        resolve(dirname, 'node_modules/react-dynamic-router')
      ]
    },
    inOptions
  );
};
