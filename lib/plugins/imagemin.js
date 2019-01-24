const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const TEST_RE = /\.(jpe?g|png|gif|svg)$/i;

module.exports = function(inOptions) {
  const { NODE_ENV, pngquant, mozJpeg, ...options } = inOptions || {};
  const mozJpegOptions = Object.assign({ quality: 70, progressive: true }, mozJpeg);
  const pngquantOptions = Object.assign({ quality: '70-90' }, pngquant);
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
};
