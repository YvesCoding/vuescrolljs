const path = require('path');

function resolve(dirname) {
  return path.resolve(__dirname, dirname);
}

module.exports = {
  base: '/',
  host: '127.0.0.1',
  port: '8088',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuescroll.js',
      description:
        'A powerful, customizable scrollbar plugin specially designed for Vue.js'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuescroll.js',
      description: '一个可定制的， 功能强大专为 Vue.js 设计的滚动条插件'
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
    if (!isServer) {
      base.devtool = '#source-map';
    }
    return base;
  }
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'configuration',
        'event',
        'api',
        'slot',
        'typescript'
      ]
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
