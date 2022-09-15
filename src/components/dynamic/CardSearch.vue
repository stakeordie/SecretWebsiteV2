<template>
  <div>
    <div class="learn-search">
      <!-- FILTER -->
      <div class="filter v3">
        <h5 class="mini-title">Explore</h5>
        <h2>{{ title }}</h2>
        <div class="search">
          <input
            class="search-filter"
            type="text"
            ref="inputSearch"
            v-model="searchInputValue"
            @keyup="searchFilter()"
            placeholder="Search"
          />
        </div>
        <ul
          class="custom-checkbox"
          :class="'selected-' + selectedTag"
          v-if="hasCategories"
        >
          <!-- <li v-for="(category, index) of categories" :key="index">
            <label v-on:click="searchFilterReset">
              <input
                :id="category.name"
                type="checkbox"
                :value="category.name"
                v-model="checkedCategories"
              />
              {{category.name}}
              <span class="title"
                >{{ formatCategory(category.name) }}
                <img src="../../assets/icon-remove-filter.svg" alt=""
              /></span>
            </label>
          </li> -->
        </ul>
      </div>

      <div class="elements-container">
        <!-- GRID -->
        <div class="elements-grid NOPAGINATED">
          <!-- Default state -->
          <div class="no-results" v-if="!searchInputValue && checkedCategories.length === 0">
            <img src="../../assets/illustration-search-default.svg" alt="" />
            <p>{{empty_subtitle}}</p>
          </div>
          <!-- Results -->
          <div class="elements-grid__helper" v-if="searchInputValue || checkedCategories.length >= 1">
            <div
              class="card-element"
              v-for="element in filteredElements"
              :key="element.id"
            >
              <a
                class="card-element__overall-link"
                :href="element.route ? element.route : ''"
                target="blank"
                rel="noopener noreferrer"
              >
                <div class="card-element__header">
                  <img
                    class="card-element__header__logo"
                    :src="element.comp_1_article_hero.image.formats.thumbnail.url"
                    alt="picture"
                  />
                </div>
                <div
                  class="card-element__meta"
                  :class="{ 'meta--with-categories': hasCategories }"
                >
                  <div class="card-element__meta__header">
                    <h6 class="card-element__meta__header__tag">
                      {{ element.title }}
                    </h6>
                    <h5 class="card-element__meta__header__title">
                      {{ element.title }}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          <div class="no-results" v-if="searchNoResults ">
            <img src="../../assets/illustration-no-matches.svg" alt="" />
            <h3>{{no_results_title}}</h3>
            <p>{{no_results_subtitle}}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sortBySorting = (first, second) => {
  if (first.sort === null) return 1;
  if (second.sort === null) return -1;
  return first.sort - second.sort;
};

export default {
  data() {
    return {
      search: "",
      searchInputValue: "",
      searchNoResults: false,
      currentPage: 0,
      checkedCategories: [],
      selectedTag: "All",
    };
  },

  props: {
    props: ["value"],
    title: { type: String, required: true },
    collection: { type: String, required: false },
    header: { type: String, required: false, default: "" },
    pageSize: { type: Number, required: false, default: 10 },
    isPaginated: { type: Boolean, required: false, default: false },
    hasCategories: { type: Boolean, default: true },
    searchDataset: { type: Object, required: true },
    spotlight_title: String,
    source_api: String,
    empty_title: String,
    empty_subtitle: String,
    no_results_title: String,
    no_results_subtitle: String
  },

  methods: {
    searchFilter() {
      const cardEl = document.querySelectorAll(".card-element");
      let hiddenEls = [];
      this.resetCheck();
      this.search = this.searchInputValue.toLowerCase();

      cardEl.forEach((item) => {
        if (!item.innerText.toLowerCase().includes(this.search)) {
          item.classList.add("hidden");
          hiddenEls.push(".");
        }
        if (
          !this.search ||
          item.innerText.toLowerCase().includes(this.search)
        ) {
          item.classList.remove("hidden");
        }
      });
      if (cardEl.length !== hiddenEls.length) this.searchNoResults = false;
      if (cardEl.length === hiddenEls.length) this.searchNoResults = true;
    },
    searchFilterReset() {
      this.search = "";
      const cardEl = document.querySelectorAll(".card-element");
      this.searchInputValue = "";
      cardEl.forEach((item) => {
        item.classList.remove("hidden");
      });
    },
    gridHeaderTitle(x) {
      let headers = this.$static.gridHeaders.edges;
      for (let i = 0; i < headers.length; i++) {
        let headerEdge = headers[i];
        let headerTitle = headerEdge.node.title;
        let headerSubtitle = headerEdge.node.subtitle;
        if (headerTitle == x) {
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
    filteredElements() {
      // for (const [i, element] of sortedCollection.entries()) {
      //   if (element.sort == null) {
      //     element.sort = 99999;
      //   }
      // }
      const sortedCollection = this.collections.sort((a, b) => {
        if(a.title == null || b.title == null) return 0;

        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();

        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        else return 0;
      });
      if (!this.checkedCategories.length) {
        return sortedCollection;
      }
      const collection = sortedCollection.filter((post) =>
        post.types.some((tag) => this.checkedCategories.includes(tag.name))
      );
      return collection;
    },

    pagedArray() {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredElements.slice(start, end);
    },

    collections() {
      const { meta, ...newCollection } = {...this.searchDataset.LearnArticle}
      return Object.values(newCollection);
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

  mounted() {},
  updated() {},
};
</script>

<static-query>
query {
  gridHeaders: allStrapiCardGridHeader {
    edges {
      node {
        id
        title,
        subtitle
      }
    }
  }
  ecosystemValidators: allStrapiEcosystemValidator {
    edges {
      node {
        title: name
        picture: logo {
        	url
        }
        link
        order
      }
    }
  }
  dApps: allStrapiEcosystemDapp {
    edges {
      node {
        id
        sort
        title: name
        url: link
        description
        cta_title
        picture: logo {
          url
        }
        types: type {
          name
        }
      }
    }
  }
  contributors: allStrapiContributor {
    edges {
      node {
        id
        sort
        title: name
        url: link
        cta_title
        description
        cta_title
        picture: logo {
          url
        }
        types: type {
          name
        }
      }
    }
  }
  toolsAndWallets: allStrapiToolAndWallet {
    edges {
      node {
        id
        sort
        title: name
        url: link
        description
        cta_title
        picture: logo {
          url
        }
        types: type {
          name
        }
      }
    }
  }
  internationalCommunities: allStrapiInternationalCommunity {
    edges {
      node {
        id
        sort
        title: name
        url: link
        cta_title
        language: language
        picture: logo {
          url
        }
        types: type {
          name
        }
      }
    }
  }
  exchanges: allStrapiExchange {
    edges {
      node {
        id
        sort
        title: name
        url: link
        description
        cta_title
        picture: logo {
          url
        }
        types: type {
          name
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "../../sass/functions/theme";
@import "../../sass/_text.scss";
@import "@lkmx/flare/src/functions/respond-to";

.learn-search {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--f-gutter-xl);
  margin-top: 0;
  align-content: start;
  text-align: center;

  @include respond-to("<=m") {
    grid-template-columns: 1fr;
  }

  @include respond-to("<=s") {
    //grid-template-columns: repeat(2, 1fr);
    padding: 32px var(--f-gutter);
  }
  .filter {
    &.v3 {
      display: grid;
      justify-content: center;
      gap: var(--f-gutter);
      padding: 26px 0 var(--f-gutter) 0;
      * {
        margin: 0;
      }
      .custom-checkbox {
        // grid-auto-flow: column;
        // grid-template-columns: auto;
        gap: 10px;
        display: flex;
        justify-content: center;
        li {
          text-align: center;
          display: grid;
          align-items: center;
          font-size: 16px;
          color: var(--color-neutral-dark-mode-05);
          font-family: hind;
          * {
            margin: 0;
          }
          label {
            padding: 0;
            border: 0;
            transition: 0.2s ease;

            &:hover {
              color: var(--color-analog-primary-white);
            }
            span {
              display: grid;
              gap: 2px;
              grid-auto-flow: column;
              align-items: center;
              font-size: 18px;
              text-transform: capitalize;
              border-radius: 100px;
              padding: 7px 16px 5px 16px;
              border: none;
              background-color: var(--color-neutral-dark-mode-04);
              color: var(--color-neutral-dark-mode-06);
              font-weight: 600;

              transition: 0.2s ease;
              img {
                width: 0px;
                height: 0px;
              }
            }
            input {
              &:checked {
                ~ .title {
                  background-color: var(--color-ver2-primary-turquoise);
                  border: none;
                }
              }
            }
          }
          span {
            padding: 8px;
            border: 1px solid white;
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
      .search-filter {
        max-width: 400px;
        margin: auto;
        background: var(--color-neutral-dark-mode-04);
        background-image: url(../../assets/search-icon-gray.svg);
        background-repeat: no-repeat;
        //border-color: var(--color-neutral-dark-mode-01);
        border: none;
        background-position: 8px;
        padding-left: 32px;

        &::placeholder {
          color: var(--color-neutral-dark-mode-06);
          font-size: 16px;
        }
      }
    }
  }
  .elements-container {
    .elements-grid {
      display: grid;

      &__helper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(3, 1fr));
        @include respond-to("<=xs") {
          justify-content: center;
          grid-template-columns: repeat(auto-fit, minmax(250px, 380px));
        }
        @include respond-to(">=l") {
          grid-template-columns: repeat(3, 1fr);
        }
        @include respond-to(">=xl") {
          grid-template-columns: repeat(3, 1fr);
        }
        gap: var(--f-gutter);
        .card-element {
          border-radius: var(--f-radius);
          overflow: hidden;
          background: var(--theme-card-bg-default);
          transition: 0.2s ease;
          display: grid;
          text-align: center;
          border-radius: 10px;
          * {
            margin: 0;
          }
          &__overall-link {
            display: grid;
            gap: var(--f-gutter);
            padding: var(--f-gutter);
          }
          &__header {
            display: grid;
            grid-template-columns: 1fr;
            align-items: start;
            gap: 4px;
            &__logo {
              border-radius: 10px;
              padding: 0;
              object-fit: cover;
              height: 206px;
              width: 100%;
              background-color: var(--color-neutral-dark-mode-04);
            }
          }

          &__meta {
            display: grid;
            gap: 0;
            text-align: left;
            &__header {
              display: grid;
              gap: 0;
              align-content: start;
              &__tag {
                color: var(--color-ver2-secondary-orange);
              }
              &__title {
                color: white;
              }
            }
            p {
              min-width: 196px;
            }
          }
          &.hidden {
            display: none;
          }

          & img {
            object-fit: cover;
            //width: 100%;
            aspect-ratio: 1 / 1;
          }

          &:hover {
            background: var(--color-neutral-dark-mode-04);
          }

          * {
            margin: 0;
          }
        }
      }

      .no-results {
        display: grid;
        grid-column: span 5;
        justify-items: center;
        gap: var(--f-gutter);
        padding: var(--f-gutter-l) 0;
        * {
          margin: 0;
        }
        img {
          max-width: 150px;
        }
        p {
          text-align: center;

          span {
            @include respond-to(">=m") {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
