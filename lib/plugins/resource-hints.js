const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

module.exports = function (inOptions) {
  return new ResourceHintWebpackPlugin();
};
