module.exports = {
  base: '/webpack-app-kits/',
  title: 'webpack-app-kits',
  host: '0.0.0.0',
  description: 'Webpack application kits.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Configs',
        collapsable: false,
        children: [
          '/configs/alias.md',
          '/configs/dev-server.md',
          '/configs/devtool.md',
          '/configs/extensions.md',
          '/configs/optimization.md',
          '/configs/performance.md',
          '/configs/resolve-loader.md'
        ]
      },
      {
        title: 'Externals',
        collapsable: false,
        children: [
          '/externals/antd.md',
          '/externals/jquery.md',
          '/externals/moment.md',
          '/externals/react.md',
          '/externals/vue.md',
        ]
      },
      {
        title: 'Inputs',
        collapsable: false,
        children: [
          '/inputs/dll.md',
          '/inputs/mpa.md',
          '/inputs/spa.md',
        ]
      },
      {
        title: 'Loaders',
        collapsable: false,
        children: [
          '/loaders/babel.md',
          '/loaders/css.md',
          '/loaders/environment.md',
          '/loaders/font.md',
          '/loaders/image.md',
          '/loaders/less.md',
          '/loaders/mp34.md',
          '/loaders/pug.md',
          '/loaders/sass.md',
        ]
      },
      {
        title: 'Outputs',
        collapsable: false,
        children: [
          '/outputs/dll.md',
          '/outputs/mpa.md',
          '/outputs/spa.md',
        ]
      },
      {
        title: 'Plugins',
        collapsable: false,
        children: [
          '/outputs/dll.md',
          '/outputs/mpa.md',
          '/outputs/spa.md',
        ]
      }
    ]
  }
};
