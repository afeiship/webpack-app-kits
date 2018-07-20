const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(inOptions){
  return new ExtractTextPlugin('[name]/[name]-[hash].css');
};
