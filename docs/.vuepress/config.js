const path = require('path');

function resolve(dirname) {
  return path.resolve(__dirname, dirname);
}

module.exports = {
  base: '/',
  host: '127.0.0.1',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuescroll.js',
      description: 'Customize your scrollbar and scroll with many animations.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuescroll.js',
      description: '可定制的并且有很多滚动动画的滚动条'
    }
  },
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  themeConfig: {
    repo: 'YvesCoding/vuescroll',
    docsRepo: 'YvesCoding/vuescrolljs',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'master',
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Demo',
            link: '/demo/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide'),
          '/demo/': genDemo('Demo')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: 'Demo',
            link: '/zh/demo/'
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('指南'),
          '/zh/demo/': genDemo('Demo')
        }
      }
    }
  },
  configureWebpack: (config, isServer) => {
    let base = {
      resolve: {
        alias: {
          assets: resolve('./assets')
        }
      }
    };
    return base;
  }
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', 'getting-started', 'configuration', 'event', 'api', 'slot']
    }
  ];
}

function genDemo(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['']
    }
  ];
}
