<template>
  <div class="grid-container" :class="containerPaddings">
    <div class="grid-container__cards" :class="gridStyles">
      <GridCard v-for="(item, index) in grid_card" :key="index" :data="item" />
    </div>
    <btn v-if="cta_button" :url="cta_button.url" class="no-arrow">
      {{ cta_button.title }}
    </btn>
  </div>
</template>

<script>
import { sizes } from "../../../utils";
import GridCard from "../cards/GridCard.vue";

export default {
  props: {
    padding_top: String,
    padding_bottom: String,
    grid_columns_mobile: String,
    grid_columns_tablet: String,
    grid_columns_desktop: String,
    grid_card: Array,
    cta_button: Object,
  },
  components: {
    GridCard,
  },
  data() {
    return {
      columns: {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
      },
    };
  },
  computed: {
    containerPaddings() {
      const topSize = sizes[this.padding_top];
      const bottomSize = sizes[this.padding_bottom];
      return [
        `${topSize ? topSize : sizes.none}-top`,
        `${bottomSize ? bottomSize : sizes.small}-bottom`,
      ];
    },
    gridStyles() {
      const mobileColumns = this.columns[this.grid_columns_mobile];
      const tabletColumns = this.columns[this.grid_columns_tablet];
      const desktopColumns = this.columns[this.grid_columns_desktop];

      return [
        `mobile-columns-${mobileColumns ? mobileColumns : this.columns.one}`,
        `tablet-columns-${tabletColumns ? tabletColumns : this.columns.three}`,
        `desktop-columns-${
          desktopColumns ? desktopColumns : this.columns.five
        }`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.grid-container {
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;

  &__cards {
    display: grid;
    gap: 26px;
  }

  .btn {
    margin: 0;
  }

  $column-sizes: (1, 2, 3, 4, 5, 6);

  @each $size in $column-sizes {
    .mobile-columns-#{$size} {
      grid-template-columns: repeat(#{$size}, 1fr);
    }

    .tablet-columns-#{$size} {
      @include respond_to(">=s") {
        grid-template-columns: repeat(#{$size}, 1fr);
      }
    }

    .desktop-columns-#{$size} {
      @include respond_to(">=l") {
        grid-template-columns: repeat(#{$size}, 1fr);
      }
    }
  }
}
</style>
