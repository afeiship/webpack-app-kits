module.exports = {
  base: '/boilerplate-vuepress/',
  title: 'boilerplate-vuepress-description',
  host: '0.0.0.0',
  description: 'boilerplate-vuepress-description',
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
        title: 'Get started',
        collapsable: false,
        children: ['/javascript/001-get-started.md', '/javascript/002-globby.md']
      }
    ]
  }
};
