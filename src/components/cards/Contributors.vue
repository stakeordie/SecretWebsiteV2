<template>
  <div>
    <filtered-card-list
      title="Contributors"
      :categories="contributorCategories"
      :elements="contributors"
    >
    </filtered-card-list>

    <!-- <pagination
              :items="contributors"
        >
        </pagination> -->
  </div>
</template>

<script>
import FilteredCardList from "../CardGrid.vue";
import Pagination from "../Pagination.vue";

export default {
  components: { FilteredCardList, Pagination },

  data() {
    return {
      contributorCategories: [
        {
          id: 1,
          title: "validators",
          type: "validator",
        },
        {
          id: 2,
          title: "developers",
          type: "developer",
        },
        {
          id: 3,
          title: "fund",
          type: "fund",
        },
        {
          id: 4,
          title: "wallets",
          type: "wallet",
        },
      ],
    };
  },

  computed: {
    contributors() {
      return this.$static.contributors.edges.map((it) => it.node);
    },
  },
};
</script>

<static-query>
  query {
  	contributors: allStrapiContributor {
      edges {
        node {
          id
          attributes {
            title: name,
            url: link,
            picture: logo {
              data {
                attributes {
                  url
                }
              }
            }
            contributor_category: type {
              name
            }
          }
        }
      }
    }
  }
</static-query>
