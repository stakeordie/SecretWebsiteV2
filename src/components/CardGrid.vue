<template>
  <div>
    <div class="elements">
      <div class="filter">
        <h3>{{ title }}</h3>
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
        <div class="elements-grid" v-if="isPaginated">
          <div
            class="card-element"
            v-for="element in pagedArray"
            :key="element.id"
          >
            <a :href="element.url" target="blank">
              <div class="image-container">
                <img :src="element.picture.url" alt="picture" />
              </div>
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
                    v-for="category in element.types"
                    :key="category.id"
                    :class="'accent-' + category.title"
                  >
                    {{ category.title }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="elements-grid" v-else>
          <div
            class="card-element"
            v-for="element in filteredElements"
            :key="element.id"
          >
            <a :href="element.url" target="blank">
              <img :src="element.picture.url" alt="picture" />
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
                  <p
                    v-for="category in element.types"
                    :key="category.id"
                    :class="'accent-' + category.title"
                  >
                    {{ category.title }}
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

      checkedCategories: [],

      selectedTag: "All",
    };
  },

  props: {
    title: { type: String, required: true },
    collection: { type: String, required: true },
    pageSize: { type: Number, required: false, default: 10 },
    isPaginated: { type: Boolean, required: false, default: false },
    hasCategories: { type: Boolean, default: true },
  },

  methods: {
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
      if (!this.checkedCategories.length) {
        return this.collections;
      }
      return this.collections.filter((post) =>
        post.types.some((tag) => this.checkedCategories.includes(tag.title))
      );
    },

    pagedArray() {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredElements.slice(start, end);
    },

    collections() {
      return this.$static[this.collection].edges.map((it) => it.node);
    },

    categories() {
      // SKip Undifened Elements
      const data = this.$static[this.collection].edges.filter((element) => {
        return element.node.types[0] !== undefined;
      });

      const categoryData = data.map((item) => {
        return {
          titleCategory: item.node.types[0]?.title,
          type: item.node.types[0]?.type,
          // type: item.node[this.categoryName][0]?.type,
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

    getTagByPage() {
      return this.pagedArray;
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
        	types { 
            title: type,
            type
          }
        }
      }
    }
    dApps: allStrapiDApps {
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
@import "../sass/_text.scss";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: ("Validator", "Developer", "Fund", "Wallet");

.elements {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--f-gutter-xl);
  background-color: var(--theme-card-grid-bg-color);
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
      grid-template-columns: repeat(1, 1fr);
      gap: var(--f-gutter);

      @include respond-to(">=s") {
        grid-template-columns: repeat(2, 1fr);

        img {
          width: 100%;
          height: 160px;
        }
        .meta {
          height: 112px;
        }
      }

      @include respond-to(">=m") {
        grid-template-columns: repeat(4, 1fr);
        img {
          width: 100%;
          height: 160px;
        }
        .meta {
          height: 80px;
        }
      }

      @include respond-to(">=l") {
        grid-template-columns: repeat(4, 1fr);
        img {
          height: 160px;
        }
        .meta {
          height: 80px;
        }
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

        .image-container {
          img {
            object-fit: cover;
            width: 100%;
            height: 160px;
          }
        }

        .meta {
          padding: var(--f-gutter);
          display: flex;
          flex-direction: column;
          gap: var(--f-gutter-xxs);

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
