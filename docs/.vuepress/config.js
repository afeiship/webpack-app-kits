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
      }
    ]
  }
};
