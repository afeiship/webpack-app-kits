var nx = require('next-js-core2');

//package:
require('next-flatten');

module.exports = function () {
  var args = nx.slice(arguments);
  return Array.isArray(args[0]) ? nx.flatten(args) : nx.mix.apply(null, args);
};
