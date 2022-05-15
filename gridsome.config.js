// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

function filePathToLink(path = ''){
  return `/${path.endsWith('index.md') ? path.replace('index.md', '') : path.replace('.md', '')}/`
}

module.exports = {
  siteName: 'Badlabs',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com'),
  pathPrefix: process.env.PATH_PREFIX ? process.env.PATH_PREFIX: '',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/docs/', title: 'Docs' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
            ]
          },
          {
            title: 'TradeBot',
            items: [
                '/docs/trade-bot/architecture/',
                '/docs/trade-bot/exchange-client/',
                '/docs/trade-bot/db-types/',

            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/,
            /code/,
            /pre/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }

  ],
  templates: {
    MarkdownPage: [
      {
        path: (node) => {
          return filePathToLink(node.fileInfo.path)
        }
      }
    ]
  }
}
