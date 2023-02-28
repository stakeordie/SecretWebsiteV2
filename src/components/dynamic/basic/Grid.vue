<template>
  <div class="grid-container" :style="gridStyles" :class="containerPaddings">
    <CardWrapper
      v-for="(data, index) in grid_card"
      :key="index"
      :url="data.url"
      :externalLink="data.is_external_link"
      class="grid-card"
    >
      <div v-if="data.image" class="grid-card__image">
        <ResponsiveImage :src="data.image" />
      </div>
      <div class="grid-card__info" v-if="data.title || data.description">
        <span v-if="data.title" class="grid-card__info__title">
          {{ data.title }}
        </span>
        <span v-if="data.description" class="grid-card__info__description">
          {{ data.description }}
        </span>
      </div>
    </CardWrapper>
  </div>
</template>

<script>
import { sizes } from "@/utils";
import CardWrapper from "@/components/dynamic/cards/CardWrapper.vue";

export default {
  props: {
    padding_top: {
      type: String,
      required: true
    },
    padding_bottom: {
      type: String,
      required: true
    },
    grid_columns_mobile: {
      type: String,
      required: true
    },
    grid_columns_tablet: {
      type: String,
      required: true
    },
    grid_columns_desktop: {
      type: String,
      required: true
    },
    grid_card: {
      type: Array,
      required: true
    },
    cta_button: {
      type: Object,
      required: false
    }
  },
  components: {
    CardWrapper
  },
  computed: {
    containerPaddings() {
      const topSize = sizes[this.padding_top];
      const bottomSize = sizes[this.padding_bottom];
      return [
        `${topSize ? topSize : sizes.none}-top`,
        `${bottomSize ? bottomSize : sizes.small}-bottom`
      ];
    },
    gridStyles() {
      const columns = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6
      };
      const mobileColumns = columns[this.grid_columns_mobile];
      const tabletColumns = columns[this.grid_columns_tablet];
      const desktopColumns = columns[this.grid_columns_desktop];

      return {
        "--mobile-columns": mobileColumns ? mobileColumns : columns.one,
        "--tablet-columns": tabletColumns ? tabletColumns : columns.three,
        "--desktop-columns": desktopColumns ? desktopColumns : columns.five
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.grid-container {
  display: grid;
  gap: 26px;
  max-width: 1200px;
  margin-inline: auto;
  grid-template-columns: repeat(var(--mobile-columns), 1fr);

  @include respond_to(">=m") {
    grid-template-columns: repeat(var(--tablet-columns), 1fr);
  }

  @include respond_to(">=l") {
    grid-template-columns: repeat(var(--desktop-columns), 1fr);
  }

  @include respond-to("xxxl") {
    max-width: 1600px;
  }

  .grid-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px;
    border-radius: 8px;
    transition: 0.5s;

    &:is(a):hover {
      background-color: var(--color-neutral-dark-mode-04);
    }

    &__image {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    &__info {
      display: flex;
      flex-direction: column;
      text-align: center;

      &__title {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        color: var(--color-neutral-dark-mode-06);
        word-break: break-word;

        @include respond_to(">=l") {
          font-size: 22px;
        }
      }

      &__description {
        font-family: "Hind";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--color-neutral-dark-mode-05);
        word-break: break-word;
      }
    }
  }
}
</style>
