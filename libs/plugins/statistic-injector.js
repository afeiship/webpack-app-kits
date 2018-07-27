const fs = require('fs');
const ScriptsInjectorWebpackPlugin = require('scripts-injector-webpack-plugin');

module.exports = function (inOptions) {
  const file = fs.readFileSync(inOptions.filename);
  return new ScriptsInjectorWebpackPlugin({
    replacements: [
      function () {
        return inHtml.replace('</body>', '\n' + file + '\n</body>');
      }
    ]
  })
};
