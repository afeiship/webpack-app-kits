module.exports = {
  utils: {
    merge: require('./libs/utils/merge'),
  },
  loaders: {
    babel: require('./libs/loaders/babel'),
    css: require('./libs/loaders/css'),
    font: require('./libs/loaders/font'),
    image: require('./libs/loaders/image'),
    less: require('./libs/loaders/less'),
    mp34: require('./libs/loaders/mp34'),
    sass: require('./libs/loaders/sass'),
  },
  plugins: {
    bundleAnalyzer: require('./libs/plugins/bundle-analyzer'),
    dllRefrence: require('./libs/plugins/dll-refrence'),
    dll: require('./libs/plugins/dll'),
    extractText: require('./libs/plugins/extract-text'),
    hotModuleReplacement: require('./libs/plugins/hot-module-replacement'),
    loaderOptions: require('./libs/plugins/loader-options'),
    moduleConcatenation: require('./libs/plugins/module-concatenation'),
    multipleHtml: require('./libs/plugins/multiple-html'),
    provide: require('./libs/plugins/provide'),
  },
  inputs: {
    mpa: require('./libs/inputs/mpa'),
    spa: require('./libs/inputs/spa')
  },
  outputs: {
    dll: require('./libs/outputs/dll'),
    spa: require('./libs/outputs/spa'),
    mpa: require('./libs/outputs/mpa'),
  },
  configs: {
    alias: require('./libs/configs/alias'),
    devServer: require('./libs/configs/dev-server'),
    devtool: require('./libs/configs/devtool'),
    optimization: require('./libs/configs/optimization'),
    performance: require('./libs/configs/performance'),
    extensions: require('./libs/configs/extensions'),
    externals: {
      react: require('./libs/externals/react'),
      vue: require('./libs/externals/vue'),
    }
  }
};
