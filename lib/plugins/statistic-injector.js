const fs = require('fs');
const ScriptsInjectorWebpackPlugin = require('scripts-injector-webpack-plugin');

module.exports = function (inOptions) {
  const file = fs.readFileSync(inOptions.filename);
  const mode = inOptions.mode;
  return new ScriptsInjectorWebpackPlugin({
    replacements: [
      function (inHtml) {
        if (!mode || mode === 'production') {
          return inHtml.replace('</body>', '\n' + file + '\n</body>');
        }
        return inHtml;
      }
    ]
  })
};
