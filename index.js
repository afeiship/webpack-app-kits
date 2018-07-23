module.exports = {
  utils: {
    merge: require('./libs/utils/merge'),
  },
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
    dll: require('./libs/plugins/dll'),
    extractText: require('./libs/plugins/extract-text'),
    loadersOptions: require('./libs/plugins/loaders-options'),
    multipleHtml: require('./libs/plugins/multiple-html'),
    provide: require('./libs/plugins/provide'),
  },
  entries:{
    mpa: require('./libs/entries/mpa'),
    spa: require('./libs/entries/spa'),
  },
  outputs:{
    dll: require('./libs/outputs/dll'),
    spa: require('./libs/outputs/spa'),
  },
  configs: {
    alias: require('./libs/configs/alias'),
    devServer: require('./libs/configs/dev-server'),
    optimization: require('./libs/configs/optimization'),
    performance: require('./libs/configs/performance'),
    extensions: require('./libs/configs/extensions'),
    externals: {
      react: require('./libs/externals/react'),
      vue: require('./libs/externals/vue'),
    }
  }
};
