module.exports = {
  title: '摩羯 Blog', // Title for the site. This will be displayed in the navbar.
  theme: '@vuepress/theme-blog',
  base: "/capricorn-blog/",
  themeConfig: {

    dateFormat: 'YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/jenkey2011',
        }
      ],
      copyright: [{
        text: 'Privacy Policy',
        link: 'https://policies.google.com/privacy?hl=en-US',
      },
      {
        text: 'MIT Licensed | Copyright © 2018-present Vue.js',
        link: '',
      },
      ],
    },
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      },
      {
        id: 'writing',
        dirname: '_writings',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#sitemap
     */
    sitemap: {
      hostname: 'https://xxx.com/'
    },
    smoothScroll: true
  },
}




// 我的自己项目：github token


// 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