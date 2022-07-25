// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource((store) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    store.addSchemaTypes(`
      type StrapiContributor_Types {
        id: Int
        name: String
      }
      type StrapiEcosystemDapp_Types {
        id: Int
        name: String
      }
      type StrapiToolAndWallet_Types {
        id: Int
        name: String
      }
      type StrapiInternationalCommunity_Types {
        id: Int
        name: String
      }
      type StrapiExchange_Types {
        id: Int
        name: String
      }
      type StrapiContributor implements Node @infer {
        sort: Int
        types: [StrapiContributor_Types]
      }
      type StrapiEcosystemDapp implements Node @infer {
        sort: Int
        types: [StrapiEcosystemDapp_Types]
      }
      type StrapiToolAndWallet implements Node @infer {
        sort: Int
        types: [StrapiToolAndWallet_Types]
      }
      type StrapiExchange implements Node @infer {
        sort: Int
        types: [StrapiExchange_Types]
      }
      type StrapiInternationalCommunity implements Node @infer {
        sort: Int
        types: [StrapiInternationalCommunity_Types]
      }
    `)

    const data = require('./data/settings.json');

    const Menu = store.addCollection({typeName: 'Menu'})

    for(const item of data.sidebar){
      Menu.addNode({
        section: item.section,
        topics: item.topics
      })
    }
  })

  api.createPages( async ({ createPage, graphql }) => {
    const { data } = await graphql(`{
      dynamicPages: allStrapiDynamicPage {
        edges {
          node {
            name
            template
            route
            Components {
              comp_name
              content
              collection
              title
                header
              is_paginated
            }
          }
        }
      }
    }`)
    
    data.dynamicPages.edges.forEach(({ node }) => {
      createPage({
        path: `${node.route}`,
        component: `./src/templates/${node.template.toLowerCase()}.vue`,
        context: {
          components: node.Components
        }
      })
    })
    //Use the Pages API here: https://gridsome.org/docs/pages-api/

    // createPage({
    //   path: `/test`,
    //   component: './src/templates/test.vue',
    //   context: {
    //     components: [
    //       {
    //         name: "hero-title",
    //         content: "Hello"
    //       },
    //       {
    //         name: "hero-title",
    //         content: "World"
    //       },
    //       {
    //         name: "hero-title",
    //         content: "!"
    //       }
    //     ]
    //   }
    // })
  })
}
