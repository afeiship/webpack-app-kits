const resolve = require('path').resolve;
const dirname = require('app-root-path').path;
const nxWebpackAlias = require('@jswork/next-webpack-alias');

// HMR: 'react-dom': '@hot-loader/react-dom'

module.exports = function(inOptions) {
  return nxWebpackAlias(
    Object.assign(
      {
        '@': resolve(dirname, 'src'),
        components: resolve(dirname, 'src/components'),
        config: resolve(dirname, 'src/config'),
        environments: resolve(dirname, 'src/environments'),
        assets: resolve(dirname, 'src/assets'),
        images: resolve(dirname, 'src/assets/images'),
        styles: resolve(dirname, 'src/assets/styles'),
        services: resolve(dirname, 'src/services'),
        mixins: resolve(dirname, 'src/mixins')
      },
      inOptions
    )
  );
};
