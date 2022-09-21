const client = require('./src/apis/strapiv4')
const pluralize = require('pluralize')

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

  api.createPages( async ({ createPage }) => {
    try {

      // SEARCH CONFIG
      const searchDataSets = [
        {
          endpoint: 'dynamic-learn-articles',
          name: 'LearnArticle',
          injectInto: [
            'card-search'
          ],
        }
      ]

      for(let i=0; i < searchDataSets.length; i++) {
        let searchResult = await client.getDynamicPage(searchDataSets[i].endpoint);
        searchDataSets[i].dataSet = searchResult
      }
      // SEARCH CONFIG

      const { data } = await client.allStrapiDynamicPage()
      console.log("DATA = page_set and template of dynamic page sets")
      let pageSetEndpoint = {
        plural: "",
        singular: ""
      }
      let response
      for (const dynamicPage of data) {
        const { attributes } = dynamicPage
        const { page_set, template } = attributes
        pageSetEndpoint.plural = pluralize("dynamic-" + page_set.replace(" ", "-").toLowerCase())
        pageSetEndpoint.singular = "dynamic-" + page_set.replace(" ", "-").toLowerCase()
        console.log("Endpoint API Route: ", pageSetEndpoint);
        try {
          response = await client.getDynamicPage(pageSetEndpoint.plural)
        } catch (error) {
          try {
            response = await client.getDynamicPage(pageSetEndpoint.singular)
          } catch (e) {
            console.error(
              "\u001b[1;31m Page Set query for endpoint " + pageSetEndpoint.singular + " FAILED. It may be the case that the collection is empty. Here is the Error: ", e)
            continue;
          }
        }
        //console.log("page_set responses: ", response)
        if(!Array.isArray(response.data)) {
          response.data = [ response.data ]
        }
        response = expandPropsToParent(response, 'attributes');
        //console.log("page_set response after expansion ", response)
        const { data } = response
        //console.log("Help", data);
        data.forEach(page => {
          page.currentComponents = []
          let maxSort = 0
          Object.keys(page).forEach(key => {
            if (key.startsWith('comp_') && page[key] != null) {
              let order = +key.split('_')[1]
              if(Array.isArray(page[key])) {
                page[key] = { 
                  compArray: page[key]
                }
              }
              if (Number.isInteger(order)) {
                maxSort = order
                page[key].order = order
                page[key].comp_name = key.replace(`comp_${order}_`, '').replace(/_/g, '-')
              } else {
                maxSort += 1
                order = maxSort
                page[key].order = order
                page[key].comp_name = key.replace(`comp_`, '').replace(/_/g, '-')
              }
              page.currentComponents.push(page[key])
            } else if (key.toLowerCase().startsWith('components')) {
              let order = +key.split('_')[1]
              if (Number.isInteger(order)) {
                maxSort = order
              } else {
                maxSort += 1
                order = maxSort
              }
              page[key].forEach(component => component.order = order)
              page.currentComponents.push(...page[key])
            }
          })
          page.currentComponents
              .filter(component => component.__component != null)
              .forEach(component => component.comp_name = component.__component.split('.')[1])
              
          page.currentComponents
              .filter(component => component.image != null)
              .forEach(component => {
                const data = expandPropsToParent(component, 'data')
                component.image = expandPropsToParent(data, 'image')
              })
          /* Add Search Datasets to components */    
          page.currentComponents.forEach(component => {
            component.searchDataset = {}
            searchDataSets.forEach(search => {
              if(search.injectInto.indexOf(component.comp_name) > -1) {
                const data = expandPropsToParent(search.dataSet,'data');
                component.searchDataset[search.name] = expandPropsToParent(data,'attributes');
              }
            })
          })
          page.currentComponents.sort((a, b) => a.order - b.order)
          console.log("Creating a page with the route: ", page.route)
          createPage({
            path: `${page.route}`,
            component: `./src/templates/${template}.vue`,
            context: {
              components: page.currentComponents,
              route: page.route
            }
          })
        })
      }
    } catch (error) {
      console.log("An Errror Occured", error);
    }
    
  })
}

function expandPropsToParent(input, prop) {
  let result;

  if (input instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  if (!input) return null;


  const keys = Object.keys(input);
  for (const key of keys) {
    if (key === prop) {
      if(input[prop] === null) {
        result = null;
      } else {
        const attrKeys = Object.keys(input[prop]);
        for (const attrKey of attrKeys) {
          if (typeof input[prop][attrKey] === "object") {
            const innerConversion = expandPropsToParent(input[prop][attrKey], prop);
            if (input instanceof Array) {
              result.push(innerConversion);
            } else {
              result[attrKey] = innerConversion;
            }
          } else {
            const value = input[prop][attrKey];
            if (input instanceof Array) {
              result.push(value);
            } else {
              result[attrKey] = value;
            }
          }
        }
      }
    } else {
      if (typeof input[key] === "object") {
        const innerConversion = expandPropsToParent(input[key], prop);
        if (input instanceof Array) {
          result.push(innerConversion);
        } else {
          result[key] = innerConversion;
        }
      } else {
        const value = input[key];
        if (input instanceof Array) {
          result.push(value);
        } else {
          // Null values or "result" being null will fail
          result[key] = value;
        }
      }
    }
  }

  return result;
}
