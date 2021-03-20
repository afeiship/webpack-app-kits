const fs = require('fs');
const ScriptsInjectorWebpackPlugin = require('@jswork/scripts-injector-webpack-plugin');

module.exports = function(inOptions) {
  const file = fs.readFileSync(inOptions.filename);
  const NODE_ENV = process.env.NODE_ENV;
  return new ScriptsInjectorWebpackPlugin({
    replacements: [
      function(inHtml) {
        if (NODE_ENV === 'production') {
          return inHtml.replace('</body>', '\n' + file + '\n</body>');
        }
        return inHtml;
      }
    ]
  });
};
