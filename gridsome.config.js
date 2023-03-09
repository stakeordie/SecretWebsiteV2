// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");

const i18nPlugin = {
  use: "gridsome-plugin-i18n",
  options: {
    defaultLocale: "en",
    locales: ["en", "es", "jp", "he", "zh-Hant-TW", "ko-KR"],
    pathAliases: {
      "zh-Hant-TW": "zh-tw",
      "ko-KR": "ko",
    },
    messages: {
      es: require("./src/locales/es.json"),
      jp: require("./src/locales/jp.json"),
    },
    rewriteDefaultLanguage: false,
  },
};

const optionalPlugins = [];
const isI18nEnabled = process.env.ENABLE_I18N === "true" || false;

if (isI18nEnabled) {
  optionalPlugins.push(i18nPlugin);
}

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/sass/docs/config/*.scss")],
    });
}

module.exports = {
  siteName: "Secret Network",
  siteUrl: "http://scrt.network/",
  siteDescription:
    "Secret Network is an open-source protocol that performs computations on encrypted data, bringing privacy to smart contracts and public blockchains.",
  titleTemplate: "%s",
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Content",
        baseDir: "./content",
        path: "/",
        template: "./src/templates/Content.vue",
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        baseDir: "./docs",
        pathPrefix: "/docs",
        typeName: "Doc",
        template: "./src/templates/Docs.vue",
        plugins: ["@gridsome/remark-prismjs"],
      },
    },
    {
      use: "@gridsome/source-ghost",
      options: {
        typeName: "Ghost",
        baseUrl: process.env.GHOST_API_URL,
        contentKey: process.env.GHOST_API_KEY,
      },
    },
    {
      use: "@stakeordie/source-strapi",
      options: {
        isStrapiV4: process.env.IS_STRAPI_V4,
        apiURL: process.env.GRIDSOME_STRAPI_URL,
        queryLimit: 1000, // Defaults to 100
        pageSize: 1000,
        pluralizeOverrides: {
          "cool-stuff": "cool-stuff-plural",
        },
        contentTypes: [
          "announcement", //
          "external-media", //
          "contributor", //
          "ecosystem-dapp", //
          "ecosystem-nft", //
          "ecosystem-partner", //
          "ecosystem-validator", //
          "nft", //
          "cool-stuff", //
          "tool-and-wallet", //
          "exchange", //
          "international-community", //
          "card-grid-header", //
          "committee", //
          "nav-item", //
          "page", //
          "service-bot", //
          "service-bridge", //
          "service-cex", //
          "service-dex", //
          "service-wallet", //
          "service-website", //
          "developer-pathway", //
          "scrt-buying-option", //
        ],
        localizedTypes: [
          /*//complex types
                //'nav-header' - Middlewear
                //content-types,
                'nav-item',
                'home-cta-cards',
                //single-types
                'alert-bar',
                'home-hero',
                'home-explainer',*/
        ],
        singleTypes: [
          "alert-bar",
          "home-announcement",
          "about-subpage",
          "agent-landing-brochure",
          "agent-landing-email-form",
          "agent-landing-hero",
          "agent-landing-intro-row",
          "nav-header",
          "ecosystem-roadmap",
          "services-alert",
          "summit",
          "summit-agenda",
        ],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-173950488-3",
      },
    },
    //   ...optionalPlugins
  ],
  templates: {
    GhostPost: "/blog/:slug",
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["gridsome-plugin-remark-prismjs-all"],
    },
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },
};
