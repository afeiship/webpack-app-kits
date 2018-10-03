const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = function (inOptions) {
  return new ProgressBarPlugin(inOptions);
};
