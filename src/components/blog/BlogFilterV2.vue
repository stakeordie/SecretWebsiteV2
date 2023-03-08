<template>
  <div class="blog-filter">
    <h4>Filters</h4>
    <div class="filters">
      <label
        v-for="{ node: filter } in theFilters"
        :key="filter.name | lowerCase"
        :for="filter.name | lowerCase"
        @click="applyFilter"
      >
        {{ filter.name | capitalize }}
        <div class="checkbox">
          <input
            type="checkbox"
            :id="filter.name | lowerCase"
            :value="filter.name | lowerCase"
          />
          <div class="check"></div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appliedFilters: [],
    };
  },
  props: {
    tags: Array,
  },
  methods: {
    applyFilter(event) {
      const { value, checked } = event.target;

      if (checked) {
        this.appliedFilters.push(value);
      } else {
        const index = this.appliedFilters.findIndex((it) => it === value);
        if (index != -1) {
          this.appliedFilters.splice(index, 1);
        }
      }

      this.$emit("blog-filter:filter-applied", this.appliedFilters);
    },
  },

  computed: {
    theFilters() {
      const tags = [...this.tags];
      return tags.sort((f1, f2) =>
        f1.node.name === f2.node.name ? 0 : f1.node.name > f2.node.name ? 1 : -1
      );
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    lowerCase: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.toLowerCase();
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.blog-filter {
  .filters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, auto));
    padding-left: 0;
    gap: var(--f-gutter);

    @include respond-to("m") {
      grid-template-columns: min-content auto;
      display: grid;
      grid-template-columns: repeat(6, auto);
    }
    label {
      display: flex;
      justify-content: space-between;
      margin: 0;
      font-family: "Hind";
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      .checkbox {
        display: grid;
        place-items: center;

        .check {
          display: block;
          width: 24px;
          height: 24px;
          background-image: url("/img/icons/icon-checkbox-unchecked.svg");
        }

        input[type="checkbox"] {
          display: none;

          &:checked + .check {
            background-image: url("/img/icons/icon-checkbox-checked.svg");
            @include theme(light light-colored) {
              filter: invert(1);
            }
          }
        }
      }
    }
  }
}
</style>
