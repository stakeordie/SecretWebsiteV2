<template>
  <div class="filters">
    <div class="filters__search">
      <input
        v-model="search"
        class="search"
        type="text"
        placeholder="Search"
        @input="filterData(true)"
      />
    </div>
    <div v-if="categories.length" class="filters__chips">
      <span class="title">Filter:</span>
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
            @change="filterData()"
          />
          <span>{{ formatName(category) }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    collections: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: "",
      checkedCategories: [],
      filteredData: [...this.collections],
    };
  },
  watch: {
    filteredData() {
      this.emitData();
    },
  },
  mounted() {
    this.emitData();
  },
  methods: {
    filterData(fromInput = false) {
      const searchValue = this.search.toLowerCase();

      if (fromInput) {
        this.resetCheck();
      } else {
        this.resetSearch();
      }

      if (this.checkedCategories.length) {
        this.filteredData = [...this.collections].filter((item) =>
          item.types.some((tag) => this.checkedCategories.includes(tag.name)),
        );
      } else {
        this.filteredData = [...this.collections].filter((item) =>
          item.title.toLowerCase().includes(searchValue),
        );
      }
    },
    formatName(category = "") {
      return category.includes("_") ? category.replace("_", " ") : category;
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
    emitData() {
      this.$emit("filterData", this.filteredData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.filters {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--f-gutter);

  * {
    margin: 0;
  }

  &__search {
    width: 100%;
    max-width: 400px;

    input.search {
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
  }

  &__chips {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    @include respond-to(">=m") {
      flex-direction: row;
    }

    .title {
      font-family: "Hind";
      color: var(--color-neutral-dark-mode-05);

      @include respond-to(">=m") {
        line-height: 16px;
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
          background-color: var(--color-ver2-primary-turquoise);
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
}
</style>
