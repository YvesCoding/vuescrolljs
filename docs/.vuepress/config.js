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
      description:
        'A scrolling chamberlain with a simple getting-start and full configuration'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuescroll.js',
      description: '一个简单上手，有充足配置的滚动小管家'
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
            text: 'demo',
            items: [
              { text: 'basic', link: '/demo/basic/' },
              { text: 'advanced', link: '/demo/advanced/' }
            ]
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide'),
          '/demo/basic/': genDemo('Basic Demo'),
          '/demo/advanced/': genDemo('Advanced Demo')
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
            items: [
              { text: '基础', link: '/zh/demo/basic/' },
              { text: '高级', link: '/zh/demo/advanced/' }
            ]
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('指南'),
          '/zh/demo/basic/': genDemo('基础Demo'),
          '/zh/demo/advanced/': genDemo('高级Demo')
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
