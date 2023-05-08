<template>
  <div class="card-search">
    <div class="card-search__filters">
      <div class="titles">
        <h5>{{ spotlight_title }}</h5>
        <h2>{{ title }}</h2>
      </div>
      <input
        v-model="search"
        class="search"
        type="text"
        placeholder="Search"
        @input="onInput(true)"
      />
      <div class="chips">
        <label
          v-for="(category, index) of categories"
          :key="index"
          :for="category"
        >
          <input
            :id="category"
            v-model="checkedCategories"
            :value="category"
            type="checkbox"
            @change="onInput()"
          />
          <span class="title">
            {{ category }}
          </span>
        </label>
      </div>
    </div>
    <div
      v-if="filteredData.length && (search || checkedCategories.length)"
      class="card-search__container"
    >
      <a
        v-for="element in filteredData"
        :key="element.id"
        :href="element.route ? element.route : ''"
        class="card-element search-card"
        target="blank"
        rel="noopener noreferrer"
      >
        <ResponsiveImage
          v-if="element.Hero.length"
          class="card-element__image"
          :src="element.Hero[0].image"
        />
        <div class="card-element__content">
          <h6 v-for="({ tag }, index) in element.tags" :key="index">
            {{ tag.toUpperCase() }}
          </h6>
          <h5>{{ element.title }}</h5>
        </div>
      </a>
    </div>
    <div
      v-else-if="!filteredData.length && (search || checkedCategories.length)"
      class="card-search__no-results"
    >
      <img
        src="/img/icons/illustration-no-matches.svg"
        alt="Magnifying glass"
        loading="lazy"
      />
      <h3>{{ no_results_title }}</h3>
      <p class="small">
        {{ no_results_subtitle }}
      </p>
    </div>
    <div v-else class="card-search__no-results">
      <img
        src="/img/icons/illustration-search-default.svg"
        alt="Magnifying glass"
        loading="lazy"
      />
      <h3>{{ empty_title }}</h3>
      <p>{{ empty_subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    searchDataset: { type: Object, required: true },
    spotlight_title: { type: String, required: false, default: "" },
    empty_title: { type: String, required: false, default: "" },
    empty_subtitle: { type: String, required: false, default: "" },
    no_results_title: { type: String, required: false, default: "" },
    no_results_subtitle: { type: String, required: false, default: "" },
    featured_tags: { type: Object, required: false, default: null },
  },
  data() {
    return {
      search: "",
      checkedCategories: [],
      filteredData: [],
    };
  },
  computed: {
    collections() {
      const newCollection = { ...this.searchDataset.LearnArticle };
      delete newCollection.meta;

      return Object.values(newCollection)
        .filter(({ route }) => route.startsWith("/learn/"))
        .sort((a, b) => {
          if (!a.title || !b.title) return 0;

          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });
    },
    categories() {
      return Object.values(this.featured_tags).map(({ tag }) => tag);
    },
  },
  methods: {
    onInput(fromInput = false) {
      const search = this.search.toLowerCase();

      if (fromInput) {
        this.resetCheck();
      } else {
        this.resetSearch();
      }

      if (this.checkedCategories.length) {
        this.filteredData = [...this.collections].filter(({ tags }) =>
          Object.values(tags).some(({ tag }) =>
            this.checkedCategories.includes(tag),
          ),
        );
      } else {
        this.filteredData = [...this.collections].filter(({ title }) =>
          title.toLowerCase().includes(search),
        );
      }
    },
    resetSearch() {
      if (this.search) {
        this.search = "";
      }
    },
    resetCheck() {
      if (this.checkedCategories.length) {
        this.checkedCategories = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../sass/_text.scss";
@import "@lkmx/flare/src/functions/respond-to";

.card-search {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--f-gutter-xl);
  align-content: start;
  text-align: center;
  padding: 32px var(--f-gutter);

  * {
    margin: 0;
  }

  &__filters {
    display: grid;
    justify-content: center;
    gap: 32px;
    padding: 26px 0 var(--f-gutter) 0;

    .titles {
      h5 {
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

    input.search {
      max-width: 400px;
      margin: auto;
      background: var(--color-neutral-dark-mode-04);
      background-image: url("/img/icons/search-icon-gray.svg");
      background-repeat: no-repeat;
      border: none;
      background-position: 8px;
      padding-left: 32px;

      &::placeholder {
        color: var(--color-neutral-dark-mode-06);
        font-size: 16px;
      }
    }

    .chips {
      gap: 10px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      label {
        height: 36px;
        display: grid;
        align-items: center;
        border-radius: 100px;
        padding: 7px 16px 5px 16px;
        border: none;
        background-color: var(--color-neutral-dark-mode-04);
        transition: 0.3s ease;
        user-select: none;
        cursor: pointer;

        &:has(input:checked) {
          background-color: var(--color-ver2-primary-orange);
        }

        input[type="checkbox"] {
          display: none;
        }

        span {
          line-height: 16px;
          font-weight: 600;
          font-size: 18px;
          color: var(--color-neutral-dark-mode-06);
          font-family: "Hind";
          text-transform: capitalize;
        }
      }
    }
  }

  &__container {
    display: grid;
    justify-content: center;
    gap: 26px;

    @include respond-to(">=m") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(">=l") {
      grid-template-columns: repeat(3, 1fr);
    }

    .card-element {
      display: flex;
      flex-direction: column;
      text-align: center;
      transition: 0.5s ease;
      gap: var(--f-gutter);
      padding: var(--f-gutter);
      border-radius: var(--f-radius);
      background: var(--theme-card-bg-default);

      &:hover {
        background: var(--color-neutral-dark-mode-04);
      }

      &__image {
        overflow: hidden;
        border-radius: 10px;
      }

      &__content {
        display: grid;
        gap: 0;
        text-align: left;
        align-content: start;
        color: white;

        h6 {
          color: var(--color-ver2-secondary-orange);
        }
      }
    }
  }

  &__no-results {
    display: grid;
    justify-items: center;
    gap: var(--f-gutter);
    padding: var(--f-gutter-l) 0;

    img {
      max-width: 150px;
    }

    p {
      max-width: 405px;
      text-align: center;

      &.small {
        max-width: 190px;
      }
    }
  }
}
</style>
