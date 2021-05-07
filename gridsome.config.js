// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Secret Network',
    siteUrl: 'http://scrt.network/',
    siteDescription: 'Secret Network is an open-source protocol that performs computations on encrypted data, bringing privacy to smart contracts and public blockchains.',
    titleTemplate: '%s - Bringing Privacy to Smart Contracts and Public Blockchains',
    plugins: [{
            use: "@gridsome/vue-remark",
            options: {
                typeName: "Content",
                baseDir: "./content",
                path: "/",
                template: "./src/templates/Content.vue",
            },
        },
        {
            use: '@gridsome/source-ghost',
            options: {
                typeName: 'Ghost',
                baseUrl: 'https://blog-admin.scrt.network',
                contentKey: '74d989aa8008b1d8e3c9464b65',
            }
        },
        {
            use: '@gridsome/source-strapi',
            options: {
              apiURL: 'http://strapi.stakeordie.com',
              queryLimit: 1000, // Defaults to 100
              contentTypes: [
                  'faq-items',
                  'secret-agents',
                  'announcements'
              ],
              singleTypes: [
                  'alert-bar',
                  'home-hero',
                  'home-announcement-one',
                  'home-cta-cards',
                  'home-explainer',
                  'home-announcements',
                  'home-announcement-one',
                  'home-announcement-two',
              ],
              // Possibility to login with a Strapi user,
              // when content types are not publicly available (optional).
              loginData: {
                identifier: '',
                password: ''
              }
            }
          }
    ],
    templates: {
        GhostPost: '/blog/:slug'
    },
    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                'gridsome-plugin-remark-prismjs-all',
            ]
        },
    },
    chainWebpack: config => {
        config.resolve.alias.set('@images', '@/../content/img')
    },
    configureWebpack: {
        resolve: {
            symlinks: false,
        },
    },
};