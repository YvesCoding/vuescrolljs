const path = require('path');

function resolve(dirname) {
  return path.resolve(__dirname, dirname);
}

// const isPro = process.env.NODE_ENV == 'production';

module.exports = {
  base: '/',
  host: '127.0.0.1',
  port: '3000',
  serviceWorker: false,
  theme: 'vuescroll',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuescroll.js',
      description:
        'A scrollbar plugin allows you to customize scrollbars under Vue.js and scroll smoothly.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuescroll.js',
      description: '一个滚动条插件， 可以让你在Vue.js下自定义滚动条，平滑地滚动'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
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
        lastUpdated: 'Last Updated', // string | boolean
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
        },
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新', // string | boolean
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
        },
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
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
      children: [
        '',
        'getting-started',
        'configuration',
        'event',
        'api',
        'slot',
        'typescript',
        'optimizing-performance'
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
