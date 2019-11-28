module.exports = {
  loaders: {
    babel: require('./lib/loaders/babel'),
    css: require('./lib/loaders/css'),
    environment: require('./lib/loaders/environment'),
    eslint: require('./lib/loaders/eslint'),
    font: require('./lib/loaders/font'),
    image: require('./lib/loaders/image'),
    less: require('./lib/loaders/less'),
    mp34: require('./lib/loaders/mp34'),
    pug: require('./lib/loaders/pug'),
    sass: require('./lib/loaders/sass'),
    underscoreEjs: require('./lib/loaders/underscore-ejs')
  },
  plugins: {
    archiver: require('./lib/plugins/archiver'),
    banner: require('./lib/plugins/banner'),
    bar: require('./lib/plugins/bar'),
    bundleAnalyzer: require('./lib/plugins/bundle-analyzer'),
    copy: require('./lib/plugins/copy'),
    clean: require('./lib/plugins/clean'),
    define: require('./lib/plugins/define'),
    dllRefrence: require('./lib/plugins/dll-refrence'),
    dll: require('./lib/plugins/dll'),
    dnsPrefetch: require('./lib/plugins/dns-prefetch'),
    extractText: require('./lib/plugins/extract-text'),
    fallback: require('./lib/plugins/fallback'),
    hashedModuleIds: require('./lib/plugins/hashed-moduleIds'),
    hotModuleReplacement: require('./lib/plugins/hot-module-replacement'),
    htmlBanner: require('./lib/plugins/html-banner'),
    imagemin: require('./lib/plugins/imagemin'),
    loaderOptions: require('./lib/plugins/loader-options'),
    moduleConcatenation: require('./lib/plugins/module-concatenation'),
    minCssExtract: require('./lib/plugins/min-css-extract'),
    multipleHtml: require('./lib/plugins/multiple-html'),
    offline: require('./lib/plugins/offline'),
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
    mod: require('./lib/inputs/module'),
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
      echarts: require('./lib/externals/echarts'),
      jquery: require('./lib/externals/jquery'),
      moment: require('./lib/externals/moment'),
      propTypesUmd: require('./lib/externals/prop-types-umd'),
      react: require('./lib/externals/react'),
      reactUmd: require('./lib/externals/react-umd'),
      vue: require('./lib/externals/vue')
    }
  }
};
