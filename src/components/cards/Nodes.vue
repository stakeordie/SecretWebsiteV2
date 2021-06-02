<template>

    <filtered-card-list
        title="Nodes"
        :categories="nodeCategories"
        :elements="nodes"
    >

    </filtered-card-list>

</template>

<script>
import FilteredCardList from '../FilteredCardList.vue'


export default {
  components: { FilteredCardList },

  data(){

      return{
        nodeCategories: [{
            id: 1,
            title: 'active',
            type: 'Active',
        },{
            id: 2,
            title: 'inactive',
            type: 'Inactive',
        }]
      }
  },

  computed:{ 

    nodes() {
    return this.$static.nodes.edges.map(it => it.node);
    }

  }
}

</script>

<static-query>
  query {
  	nodes: allStrapiNodes {
      edges {
        node {
          id,
          title: name,
          url: link,
          picture: logo {
          	url
          },
        	node_categories: types {
            title: type
          }
        }
      }
    }
  }
</static-query>