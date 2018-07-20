var nx = require('next-js-core2');

//package:
require('next-flatten');

module.exports = function () {
  var args = nx.slice(arguments);
  var first = args[0];
  var action = Array.isArray(first) ? 'flatten' : 'mix';
  return nx[action].apply(null, args);
};
