const path = require('path');

function resolve(dirname) {
    return path.resolve(__dirname, dirname);
}

module.exports = {
    base: "/vuescrolljs/",
    host: '127.0.0.1',
    locales: {
        '/': {
          lang: 'en-US',
          title: 'Vuescroll.js', 
          description: 'A reactive, multi-modes, virtual scrollbar based on vue.js 2.X'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'Vuescroll.js',
          description: '一个基于vue.js2.X的响应式, 多模式的虚拟滚动条'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }]
    ],
    themeConfig: {
        repo: 'wangyi7099/vuescroll',
        docsRepo: 'wangyi7099/vuescrolljs',
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
                    link: '/guide/',
                    },
                    {
                    text: 'Demo',
                    link: '/Demo/',
                    }
            ],
            sidebar: {
                '/guide/': genSidebarConfig('Guide'),
                '/Demo/': genDemo('Demo')
            }
        },
        '/zh/': {
            label: '简体中文',
            selectText: '选择语言',
            editLinkText: '在 GitHub 上编辑此页',
            nav: [
                {
                text: '指南',
                link: '/zh/guide/',
                },
                {
                text: 'Demo',
                link: '/zh/Demo/',
                }
            ],
            sidebar: {
                '/zh/guide/': genSidebarConfig('指南'),
                '/zh/Demo/': genDemo('Demo')
            }
        }
    }
    },
    configureWebpack: (config, isServer) => {
        let base =  {
            resolve: {
                alias: {
                    assets: resolve('./assets')
                }
            }
        }
        return base;
    }
}

function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'getting-started',
          'Configuration',
          'event',
          'api'
        ]
      }
    ]
  }

  function genDemo(title) {
    return [
        {
          title,
          collapsable: false,
          children: [
           '',
           'Advanced'
          ]
        }
      ]
  }