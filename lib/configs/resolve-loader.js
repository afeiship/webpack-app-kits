const resolve = require('path').resolve;
const dirname = require('app-root-path').path;

module.exports = function (inOptions) {
  return Object.assign(
    {
      modules: ['./build/loaders', 'node_modules']
    },
    inOptions
  )
};
