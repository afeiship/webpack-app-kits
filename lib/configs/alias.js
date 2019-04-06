const resolve = require('path').resolve;
const dirname = require('app-root-path').path;

module.exports = function(inOptions) {
  return Object.assign(
    {
      '@': resolve(dirname, 'src'),
      '#': resolve(dirname, 'src/components'),
      components: resolve(dirname, 'src/components'),
      environments: resolve(dirname, 'src/environments'),
      assets: resolve(dirname, 'src/assets'),
      images: resolve(dirname, 'src/assets/images'),
      styles: resolve(dirname, 'src/assets/styles'),
      views: resolve(dirname, 'src/components/views'),
      interceptors: resolve(dirname, 'src/components/interceptors'),
      services: resolve(dirname, 'src/components/services'),
      scripts: resolve(dirname, 'src/components/scripts'),
      mixins: resolve(dirname, 'src/components/mixins'),
      modals: resolve(dirname, 'src/components/modals'),
      'react-dom': '@hot-loader/react-dom'
    },
    inOptions
  );
};
