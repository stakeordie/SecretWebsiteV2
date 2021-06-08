<template>
  <div>
    <div class="elements">
      <div class="filter">
        <h3>{{ title }}</h3>
        <div class="filter-auction">
          <h4>Filters</h4>
          <button class="btn-clear" v-on:click="resetCheck">Clear</button>
        </div>
        <ul class="custom-checkbox" :class="'selected-' + selectedTag">
          <li v-for="(category, index) of categories" :key="index">
            <label>
              <input
                type="checkbox"
                :value="category.titleCategory"
                v-model="checkedCategories"
              />
              <span class="title">{{ category.titleCategory }}</span>
              <img
                class="unchecked"
                src="../assets/icon-checkbox-unchecked.svg"
                alt="unchecked"
              />
              <img
                class="checked"
                src="../assets/icon-checkbox-checked.svg"
                alt="checked"
              />
            </label>
          </li>
        </ul>
      </div>

      <div class="elements-container">
        <div class="elements-grid">
          <div
            class="card-element"
            v-for="element in pagedArray"
            :key="element.id"
          >
            <a :href="element.url" target="blank">
              <img :src="element.picture.url" alt="picture" />
              <div class="meta">
                <h6>{{ element.title }}</h6>
                <p
                  v-for="category in element.types"
                  :key="category.id"
                  :class="'accent-' + category.title"
                >
                  {{ category.title }}
                </p>
              </div>
            </a>
          </div>
        </div>
        <pagination
          @page="setPagesFather"
          :pageSize="pageSize"
          :items="filteredElements"
        >
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  components: { Pagination },

  data() {
    return {
      currentPage: 0,

      pageSize: 15,

      checkedCategories: [],

      selectedTag: "All",
    };
  },

  props: {
    title: { type: String, required: true },
    collectionName: { type: String, required: true },
    categoryName: { type: String, required: true },
  },

  // created() {
  //   console.log(this.collection);
  // },

  methods: {
    setPagesFather(number) {
      this.currentPage = number;
    },
    resetCheck() {
      this.checkedCategories = [];
    },
  },

  computed: {
    filteredElements: function () {
      if (!this.checkedCategories.length) {
        return this.collection;
      }
      return this.collection.filter((post) =>
        post[this.categoryName].some((tag) =>
          this.checkedCategories.includes(tag.title)
        )
      );
    },

    pagedArray() {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredElements.slice(start, end);
    },

    collection() {
      return this.$static[this.collectionName].edges.map((it) => it.node);
    },

    categories() {
      // SKip Undifened Elements
      const data = this.$static[this.collectionName].edges.filter((element) => {
        return element.node[this.categoryName][0] !== undefined;
      });

      const categoryData = data.map((item) => {
        return {
          titleCategory: item.node[this.categoryName][0]?.title,
          type: item.node[this.categoryName][0]?.type,
          // titleCategory: item.node[this.categoryName].map((cat) => cat?.title),
        };
      });

      let uniqueCategories = [];

      categoryData.filter((cat) => {
        if (
          !uniqueCategories.find(
            (cat_some) => cat_some.titleCategory == cat.titleCategory
          )
        ) {
          uniqueCategories.push(cat);
        }
      });

      return uniqueCategories;
    },
  },
};
</script>

<static-query>
  query {
  	allStrapiContributors {
      edges {
        node {
          id,
          title: name,
          url: link,
          picture: logo {
          	url
          },
        	types { 
            title: type,
            type
          }
        }
      }
    }
    allStrapiDApps {
    edges {
      node {
        id,
        title: name,
        url: link,
        picture: logo {
          url
        },
        types { 
          title: type,
          type
        }
      }
    }
  }
  },
  

</static-query>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: ("Validator", "Developer", "Fund", "Wallet");

.elements {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--f-gutter-xl);
  background-color: var(--color-neutral-dark-mode-02);
  padding: 32px;

  @include respond-to("<=m") {
    grid-template-columns: 1fr;
  }

  h4 {
    color: var(--color-neutral-dark-mode-05);
  }

  .filter-auction {
    display: flex;
    justify-content: space-between;

    @include respond-to(">=s") {
      margin: 48px 0px 20px 0px;
    }

    button {
      padding: 0px;
      background: none;
      color: var(--color-analog-secondary-blue);
    }
  }

  .elements-container {
    .elements-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: var(--f-gutter);

      @include respond-to("<=m") {
        grid-template-columns: repeat(3, 1fr);
      }
      @include respond-to("<=s") {
        grid-template-columns: repeat(2, 1fr);
      }

      .card-element {
        border-radius: var(--f-radius);
        overflow: hidden;
        background: var(--theme-card-bg-default);
        transition: 0.2s ease;
        display: flex;
        flex-direction: column;
        text-align: center;

        &:hover {
          transform: var(--card-hover-transform);
          box-shadow: var(--card-hover-shadow) var(--accent-gray);
        }

        * {
          margin: 0;
        }

        h6 {
          color: var(--theme-fg);
        }

        p {
          &.tag {
            text-transform: capitalize;
          }

          @each $name, $color in $accent-colors {
            &.accent-#{$name} {
              color: var(--accent-#{$name});
            }
          }
        }

        .meta {
          padding: var(--f-gutter);
          display: flex;
          flex-direction: column;
          gap: var(--f-gutter-xxs);
          height: 112px;
          overflow-y: auto;

          &::-webkit-scrollbar {
            width: 5px;
            background-color: var(#1a2128);
          }

          &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: #f5f5f5;
          }

          &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #c4c4c4;
          }

          .location {
            color: var(--color-analog-secondary-blue);
          }
        }
      }
    }
  }
}
</style>
