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
          description: 'A reactive virtual scrollbar based on vue.js 2.X'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'Vuescroll.js',
          description: '一个基于vue.js 2.X的响应式虚拟滚动条'
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
        docsBranch: 'dev',
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
                    }
            ],
            sidebar: {
                '/guide/': genSidebarConfig('Guide')
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
                }
            ],
            sidebar: {
                '/zh/guide/': genSidebarConfig('指南')
            }
        }
    }
    },
    configureWebpack: (config, isServer) => {
        return {
            resolve: {
                alias: {
                    comp: resolve('./components'),
                    assets: resolve('./assets')
                }
            },
            devtool: "#source-map"
        }
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