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
        'Vuescroll - A customizable scrollbar plugin based on vue.js for PC and mobile phone'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuescroll.js',
      description: 'Vuescroll - 一个自定义滚动条的插件适用于PC和移动端'
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
    displayAllHeaders: true,
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
          },
          {
            text: 'Suggestion',
            link: 'https://github.com/YvesCoding/vuescroll/issues/90'
          },
          {
            text: 'Ecosystem',
            items: [
              {
                text: 'vuepress-theme-vuescroll',
                link: 'https://github.com/YvesCoding/vuepress-theme-vuescroll'
              },
              {
                text: 'vuescroll-carousel',
                link: 'https://github.com/YvesCoding/vuescroll-carousel'
              }
            ]
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
          },
          {
            text: '建议',
            link: 'https://github.com/YvesCoding/vuescroll/issues/90'
          },
          {
            text: '生态系统',
            items: [
              {
                text: 'vuepress-theme-vuescroll',
                link: 'https://github.com/YvesCoding/vuepress-theme-vuescroll'
              },
              {
                text: 'vuescroll-carousel',
                link: 'https://github.com/YvesCoding/vuescroll-carousel'
              }
            ]
          },
          {
            text: '捐赠',
            link: '/zh/donate/'
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('指南'),
          '/zh/demo/': genDemo('Demo'),
          '/zh/donate/': [
            {
              title: '捐赠',
              collapsable: false,
              children: ['']
            }
          ]
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
        'class-hook',
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
