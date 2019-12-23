const checkModules = require('@feizheng/check-modules');
const TEST_RE = /\.(jpe?g|png|gif|svg)$/i;

/**
You need install manual:
"imagemin-mozjpeg": "^8.0.0",
"imagemin-webpack-plugin": "^2.4.0",
*/

module.exports = function(inOptions) {
  if (checkModules(['imagemin-webpack-plugin', 'imagemin-mozjpeg'])) {
    const { NODE_ENV, pngquant, mozJpeg, ...options } = inOptions || {};
    const mozJpegOptions = Object.assign({ quality: 70, progressive: true }, mozJpeg);
    const pngquantOptions = Object.assign({ quality: '70-90' }, pngquant);
    const ImageminPlugin = require('imagemin-webpack-plugin').default;
    const imageminMozjpeg = require('imagemin-mozjpeg');
    return new ImageminPlugin(
      Object.assign(
        {
          test: TEST_RE,
          disable: process.env.NODE_ENV !== 'production', // Disable during development
          pngquant: pngquantOptions,
          plugins: [imageminMozjpeg(mozJpegOptions)]
        },
        options
      )
    );
  }
};
