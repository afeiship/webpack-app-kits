module.exports = {
  loaders: {
    babel: require('./libs/loaders/babel'),
    css: require('./libs/loaders/css'),
    font: require('./libs/loaders/font'),
    image: require('./libs/loaders/image'),
    mp34: require('./libs/loaders/mp34'),
    sass: require('./libs/loaders/sass'),
  },
  plugins: {
    dllRefrence: require('./libs/plugins/dll-refrence'),
    extractText: require('./libs/plugins/extract-text'),
    loadersOptions: require('./libs/plugins/loaders-options'),
    multipleHtml: require('./libs/plugins/multiple-html'),
    provide: require('./libs/plugins/provide'),
  },
  externals: {
    react: require('./libs/externals/react'),
    vue: require('./libs/externals/vue'),
  },
  configs: {
    optimization: require('./libs/configs/optimization'),
    performance: require('./libs/configs/performance'),
  }
};
