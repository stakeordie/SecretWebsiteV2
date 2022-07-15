<template>
  <div>
    <div class="elements-nfts">
      <!-- FILTER -->
      <div class="filter v3">
        <h5 class="mini-title">Explore</h5>
        <h2>{{ gridHeaderTitle(header) }}</h2>
        <p>{{ gridHeaderSubtitle(header) }}</p>

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
        <!-- <ul
          class="custom-checkbox"
          :class="'selected-' + selectedTag"
          v-if="hasCategories"
        >
          <li>Filter:</li>
          <li v-for="(category, index) of categories" :key="index">
            <label v-on:click="searchFilterReset">
              <input
                :id="category.name"
                type="checkbox"
                :value="category.name"
                v-model="checkedCategories"
              />
              <span class="title">{{ formatCategory(category.name) }} <img src="../assets/icon-remove-filter.svg" alt="" /></span>
            </label>
          </li>
        </ul> -->
      </div>

      <div class="elements-container">
        <!-- GRID -->
        <div class="elements-grid PAGINATED" v-if="isPaginated">
          <div
            class="card-element"
            v-for="element in pagedArray"
            :key="element.id"
          >
            <a
              :href="element.url"
              target="blank"
              rel="noopener noreferrer"
              class="card-element__country"
            >
              <img
                :src="element.picture.url"
                alt="picture"
                class="card-element__country__picture"
              />
              <div
                class="meta"
                :class="{ 'meta--with-categories': hasCategories }"
              >
                <div class="m-title">
                  <h6>{{ element.title }}</h6>
                </div>
                <div
                  class="m-elements"
                  :class="evaluateTags(element.types.length)"
                  v-if="hasCategories"
                >
                  <!-- <p class="tag-accent"
                    v-for="(category, id) in element.types"
                    :key="id"
                    :class="'accent-' + category.name"
                  >
                    {{ formatCategory(category.name) }}
                  </p> -->
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
            <a
              class="card-element__overall-link"
              :href="element.url"
              target="blank"
              rel="noopener noreferrer"
            >
              <div class="card-element__header">
                <img
                  class="card-element__header__logo"
                  :src="element.picture.url"
                  alt="picture"
                />
                <!-- <img src="../assets/ecosystem/image.png" alt="" /> -->
                <!-- Categorie tags -->
                <div
                  class="meta"
                  :class="{ 'meta--with-categories': hasCategories }"
                >
                  <!-- <div
                    class="m-elements card-element__header__tags"
                    :class="evaluateTags(element.types.length)"
                    v-if="hasCategories"
                  >
                    <p class="tag-accent"
                      v-for="(category, id) in element.types"
                      :key="id"
                      :class="'accent-' + category.name"
                    >
                      {{ formatCategory(category.name) }}
                    </p>
                  </div> -->
                </div>
              </div>
              <div
                class="card-element__title-desc"
                :class="{ 'meta--with-categories': hasCategories }"
              >
                <div class="card-element__title-desc__header">
                  <h4 class="element-grid-title">{{ element.title }}</h4>
                  <p>
                    {{element.description}}
                  </p>
                  <!-- <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    
                  </p> -->
                </div>
              </div>
              <!-- <btn class="ecosystem" url="">{{element.cta_title ? element.cta_title : "VISIT SITE"}}</btn> -->
            </a>
          </div>
          <div class="no-results" v-if="searchNoResults">
            <img src="../assets/illustration-no-matches.svg" alt="" />
            <h3>No matches found</h3>
            <p>
              Please try another search or use one of
              <span>the predefined filters.</span>
            </p>
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
    collection: { type: String, required: true },
    header: { type: String, required: false, default: "" },
    pageSize: { type: Number, required: false, default: 10 },
    isPaginated: { type: Boolean, required: false, default: false },
    hasCategories: { type: Boolean, default: true },
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

      // console.log("total array", cardEl.length);
      // console.log("hiddens", hiddenEls.length);
      /////////////////////////////////////////////////////////////////
      // console.log('hiddens', cardEl.classList.contains(hidden))
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
      if (window.location.hash === "#get-scrt") {
        // console.log(window.location.hash);
        // console.log("hit");
        ///////////////////////////////////////
        window.scrollTo(0, 0);
        // HERE
        this.checkedCategories = ["wallet"];
      }

      if (window.location.hash === hash) {
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
      // array.sort(function(a, b){
      // var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      // if (nameA < nameB) //sort string ascending
      //   return -1;
      // if (nameA > nameB)
      //   return 1;
      // return 0; //default return value (no sorting)
      // });
      sortedCollection.sort(function (a, b) {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
      // sortedCollection.sort(function (a, b) {
      //   return a.sort - b.sort;
      // });
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
@import "../sass/functions/theme";
@import "../sass/_text.scss";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: ("validator", "developer", "fund", "wallet");

.ecosystem-nfts {
  .grid-header-v2 {
    display: grid;
    max-width: 60%;
    margin-bottom: var(--f-gutter-xl);
    margin-top: 48px;

    @include respond-to("<=s") {
      max-width: 100%;
    }
    @include respond-to("<=m") {
      margin-top: 11px;
    }
  }

  .elements-nfts {
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
      padding: 32px var(--f-gutter);
    }

    h5 {
      color: var(--color-ver2-primary-turquoise);
      text-transform: uppercase;
    }
    h2 {
      margin-bottom: 48px;
      font-size: 54px;
    }
    p {
      max-width: 650px;
    }

    h4 {
      color: var(--color-neutral-dark-mode-05);
    }
    .filter {
      &.v3 {
        display: grid;
        justify-content: center;
        gap: var(--f-gutter);
        padding-bottom: var(--f-gutter);
        * {
          margin: 0;
        }
        .search-filter {
          max-width: 400px;
          margin: auto;
          background: var(--color-neutral-dark-mode-04);
          background-image: url(../assets/search-icon-gray.svg);
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
    .filter-auction {
      display: flex;
      justify-content: center;
      text-align: center;

      @include respond-to(">=s") {
        margin: 0px 0px 20px 0px;
      }

      button {
        padding: 0px;
        background: none;
        color: var(--color-analog-secondary-blue);
      }
    }


    //////////////////////////////////////////
    // CARDS GRID

    & .elements-container {

      .elements-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 275px));
        column-gap: 26px;
        row-gap: 42px;
        justify-content: center;

        @include respond-to(">=l") {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }

        .no-results {
          display: grid;
          grid-column: span 5;
          justify-items: center;
          gap: var(--f-gutter);
          padding: var(--f-gutter-l) 0;

          img {
            max-width: 150px;
          }
          p {
            span {
              @include respond-to(">=m") {
                display: block;
              }
            }
          }
        }

        .card-element {
          overflow: hidden;
          transition: 0.2s ease;
          display: flex;
          justify-content: center;
          &.hidden {
            display: none;
          }
          

          &__overall-link {
            display: grid;
            grid-template-rows: 180px 1fr;

            @include respond-to("<=xs") {
              gap: 12px;
            }
            
            

            & .card-element__header {
              position: relative;
              width: 200px;
              justify-self: center;

              &__logo {
                position: absolute;
                height: 231px;
                width: auto;
              }
            }
            
            &:hover .card-element__title-desc {
            background: var(--color-neutral-dark-mode-04);
            }
          }

          &__title-desc {
            border-radius: var(--f-radius);
            background: var(--theme-card-bg-default);
            height: 100%;

            padding: var(--f-gutter);
            padding-top: 66px;

            &__header {
              & .element-grid-title {
                color: var(--color-analog-primary-white);
                font-size: 18px;
                line-height: 25px;
                margin-bottom: 8px;

                @include respond-to("<=s") {
                  font-size: 16px;
                  line-height: 23px;
                }
              }
            }

            p {
              min-width: 196px;
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }
}
</style>
