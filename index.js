module.exports = {
  loaders: {
    babel: require('./lib/loaders/babel'),
    css: require('./lib/loaders/css'),
    environment: require('./lib/loaders/environment'),
    font: require('./lib/loaders/font'),
    image: require('./lib/loaders/image'),
    less: require('./lib/loaders/less'),
    mp34: require('./lib/loaders/mp34'),
    pug: require('./lib/loaders/pug'),
    sass: require('./lib/loaders/sass')
  },
  plugins: {
    archiver: require('./lib/plugins/archiver'),
    banner: require('./lib/plugins/banner'),
    bundleAnalyzer: require('./lib/plugins/bundle-analyzer'),
    clean: require('./lib/plugins/clean'),
    define: require('./lib/plugins/define'),
    dllRefrence: require('./lib/plugins/dll-refrence'),
    dll: require('./lib/plugins/dll'),
    dnsPrefetch: require('./lib/plugins/dns-prefetch'),
    extractText: require('./lib/plugins/extract-text'),
    hashedModuleIds: require('./lib/plugins/hashed-moduleIds'),
    hotModuleReplacement: require('./lib/plugins/hot-module-replacement'),
    imagemin: require('./lib/plugins/imagemin'),
    loaderOptions: require('./lib/plugins/loader-options'),
    moduleConcatenation: require('./lib/plugins/module-concatenation'),
    multipleHtml: require('./lib/plugins/multiple-html'),
    progressBar: require('./lib/plugins/progress-bar'),
    provide: require('./lib/plugins/provide'),
    resourceHints: require('./lib/plugins/resource-hints'),
    semver: require('./lib/plugins/semver'),
    serviceWorker: require('./lib/plugins/service-worker'),
    singleHtml: require('./lib/plugins/single-html'),
    statisticInjector: require('./lib/plugins/statistic-injector')
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
      antd: require('./lib/externals/antd'),
      jquery: require('./lib/externals/jquery'),
      moment: require('./lib/externals/moment'),
      react: require('./lib/externals/react'),
      vue: require('./lib/externals/vue')
    }
  }
};
