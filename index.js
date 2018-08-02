module.exports = {
  utils: {
    merge: require('./lib/utils/merge'),
    mode: require('./lib/utils/mode'),
  },
  loaders: {
    babel: require('./lib/loaders/babel'),
    css: require('./lib/loaders/css'),
    environment: require('./lib/loaders/environment'),
    font: require('./lib/loaders/font'),
    image: require('./lib/loaders/image'),
    less: require('./lib/loaders/less'),
    mp34: require('./lib/loaders/mp34'),
    sass: require('./lib/loaders/sass'),
  },
  plugins: {
    bundleAnalyzer: require('./lib/plugins/bundle-analyzer'),
    define: require('./lib/plugins/define'),
    dllRefrence: require('./lib/plugins/dll-refrence'),
    dll: require('./lib/plugins/dll'),
    extractText: require('./lib/plugins/extract-text'),
    hashedModuleIds: require('./lib/plugins/hashed-moduleIds'),
    hotModuleReplacement: require('./lib/plugins/hot-module-replacement'),
    loaderOptions: require('./lib/plugins/loader-options'),
    moduleConcatenation: require('./lib/plugins/module-concatenation'),
    multipleHtml: require('./lib/plugins/multiple-html'),
    provide: require('./lib/plugins/provide'),
    semver: require('./lib/plugins/semver'),
    singleHtml: require('./lib/plugins/single-html'),
    statisticInjector: require('./lib/plugins/statistic-injector'),
  },
  inputs: {
    dll: require('./lib/inputs/dll'),
    spa: require('./lib/inputs/spa'),
    mpa: require('./lib/inputs/mpa')
  },
  outputs: {
    dll: require('./lib/outputs/dll'),
    spa: require('./lib/outputs/spa'),
    mpa: require('./lib/outputs/mpa')
  },
  configs: {
    alias: require('./lib/configs/alias'),
    devServer: require('./lib/configs/dev-server'),
    devtool: require('./lib/configs/devtool'),
    extensions: require('./lib/configs/extensions'),
    optimization: require('./lib/configs/optimization'),
    performance: require('./lib/configs/performance'),
    resolveLoader: require('./lib/configs/resolve-loader'),
    externals: {
      react: require('./lib/externals/react'),
      vue: require('./lib/externals/vue'),
    }
  }
};
