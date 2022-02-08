<template>
  <div>
    <!-- GRID HEADER -->
    <div class="grid-header">
      <h3>{{ gridHeaderTitle(header) }}</h3>
      <p>{{ gridHeaderSubtitle(header) }}</p>
    </div>
    <div class="elements">
      <!-- FILTER -->
      <div class="filter">
        <h3 v-if="!gridHeaderTitle(header)">{{ title }}</h3>
        <div class="filter-auction" v-if="hasCategories">
          <h4>Filters</h4>
          <button class="btn-clear" v-on:click="resetCheck">Clear</button>
        </div>
        <ul
          class="custom-checkbox"
          :class="'selected-' + selectedTag"
          v-if="hasCategories"
        >
          <li v-for="(category, index) of categories" :key="index">
            <label>
              <input
                :id="category.name"
                type="checkbox"
                :value="category.name"
                v-model="checkedCategories"
              />
              <span class="title">{{ formatCategory(category.name) }}</span>
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
        <!-- GRID -->
        <div class="elements-grid PAGINATED" v-if="isPaginated">
          <div
            class="card-element"
            v-for="element in pagedArray"
            :key="element.id"
          >
            <a :href="element.url" target="blank" rel="noopener noreferrer">
              <img :src="element.picture.url" alt="picture" />
              <div
                class="meta"
                :class="{ 'meta--with-categories': hasCategories }"
              >
                <div class="m-title">
                  <h6>{{ element.title }}</h6>
                </div>
                <!-- <div class="m-elements"> -->
                <div
                  class="m-elements"
                  :class="evaluateTags(element.types.length)"
                  v-if="hasCategories"
                >
                  <p
                    v-for="(category, id) in element.types"
                    :key="id"
                    :class="'accent-' + category.name"
                  >
                    {{ formatCategory(category.name) }}
                  </p>
                </div>
                <p class="language" v-if="element.language">
                  {{ element.language }}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div class="elements-grid NOPAGINATED" v-else>
          <div
            class="card-element"
            v-for="element in filteredElements"
            :key="element.id"
          >
            <a :href="element.url" target="blank" rel="noopener noreferrer">
              <img :src="element.picture.url" alt="picture" />
              <div
                class="meta"
                :class="{ 'meta--with-categories': hasCategories }"
              >
                <div class="m-title">
                  <h6>{{ element.title }}</h6>
                  <!-- <small>{{ element.sort }}</small> -->
                  <!-- <small>{{ element.id }}</small> -->
                </div>
                <div
                  class="m-elements"
                  :class="evaluateTags(element.types.length)"
                  v-if="hasCategories"
                >
                  <p
                    v-for="(category, id) in element.types"
                    :key="id"
                    :class="'accent-' + category.name"
                  >
                    {{ formatCategory(category.name) }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <pagination
          v-if="isPaginated"
          @page="setPagesFather"
          :pageSize="pageSize"
          :items="filteredElements"
          :currentPage="currentPage"
        >
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
import LogoVue from "./docs/Logo.vue";
import Pagination from "./Pagination.vue";

const sortBySorting = (first, second) => {
  if (first.sort === null) return 1;
  if (second.sort === null) return -1;
  return first.sort - second.sort;
};

export default {
  components: { Pagination },

  data() {
    return {
      currentPage: 0,

      checkedCategories: [],

      selectedTag: "All",
    };
  },

  props: {
    title: { type: String, required: true },
    collection: { type: String, required: true },
    header: { type: String, required: false, default: "" },
    pageSize: { type: Number, required: false, default: 10 },
    isPaginated: { type: Boolean, required: false, default: false },
    hasCategories: { type: Boolean, default: true },
  },

  methods: {
    gridHeaderTitle(x) {
      let headers = this.$static.gridHeaders.edges;
      for (let i = 0; i < headers.length; i++) {
        let headerEdge = headers[i];
        let headerTitle = headerEdge.node.title;
        let headerSubtitle = headerEdge.node.subtitle;
        if (headerTitle == x) {
          // console.log(i);
          headerTitle = this.$static.gridHeaders.edges[i].node.title;
          headerSubtitle = this.$static.gridHeaders.edges[i].node.subtitle;
          return headerTitle;
        }
      }
    },
    gridHeaderSubtitle(x) {
      let headers = this.$static.gridHeaders.edges;
      for (let i = 0; i < headers.length; i++) {
        let headerEdge = headers[i];
        let headerTitle = headerEdge.node.title;
        let headerSubtitle = headerEdge.node.subtitle;
        if (headerTitle == x) {
          // console.log(i);
          headerTitle = this.$static.gridHeaders.edges[i].node.title;
          headerSubtitle = this.$static.gridHeaders.edges[i].node.subtitle;
          return headerSubtitle;
        }
      }
    },
    formatCategory(category) {
      if (!category) return "";
      return category.includes("_") ? category.replace("_", " ") : category;
    },
    setPagesFather(number) {
      this.currentPage = number;
    },
    resetCheck() {
      this.checkedCategories = [];
    },
    hashToFilter(hash, filter) {
      if (window.location.hash === hash) {
        // console.log(window.location.hash)
        if (this.collection === "toolsAndWallets") {
          setTimeout(() => {
            window.location.href = "#toolswallets";
            this.checkedCategories = [filter];
          }, 500);
        }
      }
    },
    hash(hash, collection, link) {
      if (window.location.hash === hash) {
        // console.log(window.location.hash)
        if (this.collection === collection) {
          setTimeout(() => {
            window.location.href = link;
          }, 500);
        }
      }
    },

    evaluateTags(size) {
      if (!size) return;

      if (size < 5) {
        return "tag-card-" + size;
      } else {
        return "tag-card-5";
      }
    },
  },

  computed: {
    // WALTER WAS HERE
    filteredElements() {
      const sortedCollection = this.collections;
      for (const [i, element] of sortedCollection.entries()) {
        if (element.sort == null) {
          element.sort = 99999;
        }
      }
      sortedCollection.sort(function (a, b) {
        return a.sort - b.sort;
      });
      if (!this.checkedCategories.length) {
        return sortedCollection;
      }
      const collection = sortedCollection.filter((post) =>
        post.types.some((tag) => this.checkedCategories.includes(tag.name))
      );
      return collection;
    },

    // OLD FUNCTION
    // filteredElements() {
    //   this.collections.sort(sortBySorting);
    //   if (!this.checkedCategories.length) {
    //     return this.collections;
    //   }
    //   const collection = this.collections.filter(post =>
    //     post.types.some(tag => this.checkedCategories.includes(tag.name))
    //   );
    //   console.log(collection);
    //   console.log('🌮');
    //   return collection;
    // },

    pagedArray() {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredElements.slice(start, end);
    },

    collections() {
      return this.$static[this.collection].edges.map((it) => it.node);
    },

    categories() {
      const data = this.$static[this.collection].edges.filter((element) => {
        return element.node.types.length > 0;
      });

      const categoryData = data.map((item) => {
        return {
          name: item.node.types[0]?.name,
        };
      });

      let uniqueCategories = [];

      categoryData.filter((cat) => {
        if (!uniqueCategories.find((cat_some) => cat_some.name == cat.name)) {
          uniqueCategories.push(cat);
        }
      });

      return uniqueCategories;
    },
  },

  mounted() {
    this.hashToFilter("#wallets", "wallet");
    this.hashToFilter("#tools", "tool");
    this.hash("#dapps", "dApps", "#dapps");
    this.hash("#exchanges", "exchanges", "#exchanges");
    this.hash("#contributors", "contributors", "#contributors");
  },
  updated() {},
};
</script>

<static-query>
query {
  gridHeaders: allStrapiCardGridHeaders {
    edges {
      node {
        id
        title,
        subtitle
      }
    }
  }
    dApps: allStrapiDApps {
    edges {
      node {
        id
        sort
        title: name
        url: link
        picture: logo {
          url
        }
        types {
          name
        }
      }
    }
  }
  contributors: allStrapiContributors {
    edges {
      node {
        id
        sort
        title: name
        url: link
        picture: logo {
          url
        }
        types {
          name
        }
      }
    }
  }
  toolsAndWallets: allStrapiToolsAndWallets {
    edges {
      node {
        id
        sort
        title: name
        url: link
        picture: logo {
          url
        }
        types {
          name
        }
      }
    }
  }
    internationalCommunities: allStrapiInternationalCommunities {
    edges {
      node {
        id
        sort
        title: name
        url: link
        language: language
        picture: logo {
          url
        }
        types {
          name
        }
      }
    }
  }
  exchanges: allStrapiExchanges {
    edges {
      node {
        id
        sort
        title: name
        url: link
        picture: logo {
          url
        }
        types {
          name
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "../sass/functions/theme";
@import "../sass/_text.scss";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: ("validator", "developer", "fund", "wallet");

.grid-header {
  display: grid;
  max-width: 60%;
  margin-bottom: var(--f-gutter-l);
  @include respond-to("<=s") {
    max-width: 100%;
  }
}

.elements {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--f-gutter-xl);
  background-color: var(--theme-card-grid-bg-color);
  padding: 32px;

  @include respond-to("<=m") {
    grid-template-columns: 1fr;
  }

  h3 {
    margin-bottom: 48px;
  }

  h4 {
    color: var(--color-neutral-dark-mode-05);
  }

  .filter-auction {
    display: flex;
    justify-content: space-between;

    @include respond-to(">=s") {
      margin: 0px 0px 20px 0px;
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
      grid-template-columns: repeat(1, 1fr);
      gap: var(--f-gutter);

      @include respond-to(">=s") {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-to(">=m") {
        grid-template-columns: repeat(4, 1fr);
      }

      @include respond-to(">=l") {
        grid-template-columns: repeat(4, 1fr);
      }

      @include respond-to(">=xl") {
        grid-template-columns: repeat(5, 1fr);
      }

      .card-element {
        border-radius: var(--f-radius);
        overflow: hidden;
        background: var(--theme-card-bg-default);
        transition: 0.2s ease;
        display: flex;
        flex-direction: column;
        text-align: center;

        img {
          object-fit: cover;
          width: 100%;
          aspect-ratio: 1 / 1;
        }

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

          &--with-categories {
            height: 112px;
          }

          h6 {
            font-size: 14px;
          }

          .m-elements {
            display: grid;
            height: 100%;

            &.tag-card-1 {
              place-content: center center;
              p {
                font-size: var(--f-tags-general);
              }
            }
            &.tag-card-2 {
              p {
                place-content: center center;
                font-size: var(--f-tags-normal);
              }
            }
            &.tag-card-3,
            &.tag-card-4 {
              place-content: center center;
              p {
                font-size: var(--f-tags-s);
              }
            }

            &.tag-card-3,
            &.tag-card-4,
            &.tag-card-5 {
              grid-template-columns: repeat(2, 1fr);
              p {
                font-size: var(--f-tags-s);
              }
            }

            p {
              font-size: 12px;
              text-transform: capitalize;
            }
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
