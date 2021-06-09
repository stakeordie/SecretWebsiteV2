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
          type: "Validator",
        },
        {
          id: 2,
          title: "developers",
          type: "Developer",
        },
        {
          id: 3,
          title: "fund",
          type: "Fund",
        },
        {
          id: 4,
          title: "wallets",
          type: "Wallet",
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
  	contributors: allStrapiContributors {
      edges {
        node {
          id,
          title: name,
          url: link,
          picture: logo {
          	url
          },
        	contributor_categories: types {
            title: type
          }
        }
      }
    }
  }
</static-query>