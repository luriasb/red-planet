const { description } = require('../../package')

const path = require('path')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Red Planet docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Guía',
        link: '/guide/',
      },
      {
        text: 'Apéndice',
        link: '/appendix/',
      },
    ],
    sidebar: [

        {
          title: 'Guía',
          collapsable: false,
          sidebarDepth: 1,
          path: '/guide/',
          children: [
            '/guide/',
            '/guide/components/components',
            '/guide/components/navigation',
            '/guide/components/headers',
            '/guide/components/banners',
            '/guide/components/content',
            '/guide/deploy'
          ]
        },
        {
          title: 'Apéndice',
          collapsable: false,
          sidebarDepth: 1,
          path: '/appendix/',
          children: [
            '/appendix/filezilla',
            '/appendix/errors',
            '/appendix/console',
            '/appendix/demos',
          ]
        }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, '../assets')
      }
    }
  },
}
