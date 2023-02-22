<template>
  <div>
    <div class="learn-search">
      <!-- FILTER -->
      <div class="filter v3">
        <div class="titles">
          <h5 class="mini-title">{{ spotlight_title }}</h5>
          <h2>{{ title }}</h2>
        </div>
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
          <li v-for="(category, index) of featured_tags" :key="index">
            <label @click="searchFilterReset">
              <input
                :id="category"
                type="checkbox"
                :value="category.tag"
                v-model="checkedCategories"
              />
              <span class="title">
                {{ category.tag }}
                <img
                  src="../../../assets/icon-remove-filter.svg"
                  alt="Remove icon"
                  loading="lazy"
                />
              </span>
            </label>
          </li>
        </ul>
      </div>

      <div class="elements-container">
        <!-- GRID -->
        <div class="elements-grid NOPAGINATED">
          <!-- Default state -->
          <div
            class="no-results"
            v-if="!searchInputValue && checkedCategories.length === 0"
          >
            <img
              src="../../../assets/illustration-search-default.svg"
              alt="Magnifying glass"
              loading="lazy"
            />
            <h3>{{ empty_title }}</h3>
            <p>{{ empty_subtitle }}</p>
          </div>
          <!-- Results -->
          <div
            class="elements-grid__helper"
            v-if="searchInputValue || checkedCategories.length >= 1"
          >
            <div
              class="card-element search-card"
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
                  <ResponsiveImage
                    classes="card-element__header__logo"
                    :src="element.comp_1_article_hero.image.formats.thumbnail"
                  />
                </div>
                <div
                  class="card-element__meta"
                  :class="{ 'meta--with-categories': hasCategories }"
                >
                  <div class="card-element__meta__header">
                    <h6
                      v-for="({ tag }, index) in element.tags"
                      :key="index"
                      class="card-element__meta__header__tag"
                    >
                      {{ tag.toUpperCase() }}
                    </h6>
                    <h5 class="card-element__meta__header__title">
                      {{ element.title }}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div class="no-results" v-if="searchNoResults">
              <img
                src="../../../assets/illustration-no-matches.svg"
                alt="Magnifying glass"
                loading="lazy"
              />
              <h3>{{ no_results_title }}</h3>
              <p class="no_results_subtitle">{{ no_results_subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      searchInputValue: "",
      searchNoResults: false,
      currentPage: 0,
      checkedCategories: [],
      selectedTag: "All"
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
    empty_title: String,
    empty_subtitle: String,
    no_results_title: String,
    no_results_subtitle: String,
    featured_tags: Object
  },

  methods: {
    searchFilter() {
      const cardEl = document.querySelectorAll(".search-card");
      let hiddenEls = [];
      this.resetCheck();
      this.search = this.searchInputValue.toLowerCase();

      cardEl.forEach(item => {
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
      const cardEl = document.querySelectorAll(".search-card");
      this.searchInputValue = "";
      cardEl.forEach(item => {
        item.classList.remove("hidden");
      });
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
    }
  },
  computed: {
    filteredElements() {
      const collections = this.collections;
      const sortedCollection = collections.sort((a, b) => {
        if (a.title == null || b.title == null) return 0;

        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });

      if (!this.checkedCategories.length) {
        return sortedCollection;
      }
      return sortedCollection.filter(({ tags }) =>
        Object.values(tags).some(({ tag }) =>
          this.checkedCategories.includes(tag)
        )
      );
    },

    pagedArray() {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredElements.slice(start, end);
    },

    collections() {
      const { meta, ...newCollection } = { ...this.searchDataset.LearnArticle };
      return Object.values(newCollection);
    },

    categories() {
      const data = [];
      this.collections.forEach(elem => {
        Object.values(elem.tags).forEach(({ tag }) => data.push(tag));
      });
      return [...new Set(data)];
    }
  }
};
</script>

<style lang="scss">
@import "../../../sass/functions/theme";
@import "../../../sass/_text.scss";
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
    padding: 32px var(--f-gutter);
  }

  .titles {
    .mini-title {
      color: var(--color-ver2-primary-orange);
      text-transform: uppercase;
    }

    h2 {
      font-family: var(--f-default-headers-font);
      font-size: 36px;
      font-weight: 600;
      line-height: 42px;
    }
  }

  .filter {
    &.v3 {
      display: grid;
      justify-content: center;
      gap: 32px;
      padding: 26px 0 var(--f-gutter) 0;
      * {
        margin: 0;
      }
      .custom-checkbox {
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
                  background-color: var(--color-ver2-primary-orange);
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
        background-image: url(../../../assets/search-icon-gray.svg);
        background-repeat: no-repeat;
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
          max-width: 405px;
          text-align: center;

          span {
            @include respond-to(">=m") {
              display: block;
            }
          }
        }

        .no_results_subtitle {
          max-width: 190px;
        }
      }
    }
  }
}
</style>
