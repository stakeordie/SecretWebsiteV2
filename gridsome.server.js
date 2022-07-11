// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  /*api.loadSource((store) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    store.addSchemaTypes(`
      type StrapiContributors_Types {
        id: Int
        name: String
      }
      type StrapiDApps_Types {
        id: Int
        name: String
      }
      type StrapiToolsAndWallets_Types {
        id: Int
        name: String
      }
      type StrapiInternationalCommunities_Types {
        id: Int
        name: String
      }
      type StrapiExchanges_Types {
        id: Int
        name: String
      }
      type StrapiContributors implements Node @infer {
        sort: Int
        types: [StrapiContributors_Types]
      }
      type StrapiDApps implements Node @infer {
        sort: Int
        types: [StrapiDApps_Types]
      }
      type StrapiToolsAndWallets implements Node @infer {
        sort: Int
        types: [StrapiToolsAndWallets_Types]
      }
      type StrapiExchanges implements Node @infer {
        sort: Int
        types: [StrapiExchanges_Types]
      }
      type StrapiInternationalCommunities implements Node @infer {
        sort: Int
        types: [StrapiInternationalCommunities_Types]
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

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })*/
}
