<template>
  <div
    class="grid-container"
    :style="[gridStyles, textColor]"
    :class="containerPaddings"
  >
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
      <div
        v-if="data.title || data.description"
        class="grid-card__info"
        :style="textAlignment(data)"
      >
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
  components: {
    CardWrapper,
  },
  props: {
    padding_top: {
      type: String,
      required: true,
    },
    padding_bottom: {
      type: String,
      required: true,
    },
    grid_columns_mobile: {
      type: String,
      required: true,
    },
    grid_columns_tablet: {
      type: String,
      required: true,
    },
    grid_columns_desktop: {
      type: String,
      required: true,
    },
    grid_card: {
      type: Array,
      required: true,
    },
    cta_button: {
      type: Object,
      required: false,
      default: null,
    },
    component_colors: {
      type: Object,
      required: false,
      default: null,
    },
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
      const columns = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
      };

      return {
        "--mobile-columns": columns[this.grid_columns_mobile] || columns.one,
        "--tablet-columns": columns[this.grid_columns_tablet] || columns.three,
        "--desktop-columns": columns[this.grid_columns_desktop] || columns.five,
      };
    },
    textColor() {
      const defaultTitle = "var(--color-neutral-dark-mode-06)";
      const defaultText = "var(--color-neutral-dark-mode-05)";
      return {
        "--title-color": this.component_colors?.title_color || defaultTitle,
        "--text-color": this.component_colors?.body_color || defaultText,
      };
    },
  },
  methods: {
    textAlignment({ title_alignment = "left", body_alignment = "left" }) {
      const alignment = {
        left: "left",
        center: "center",
        right: "right",
      };

      return {
        "--title-alignment": alignment[title_alignment] || alignment.left,
        "--body-alignment": alignment[body_alignment] || alignment.left,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.grid-container {
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(var(--mobile-columns), 1fr);

  @include respond_to(">=m") {
    grid-template-columns: repeat(var(--tablet-columns), 1fr);
  }

  @include respond_to(">=l") {
    grid-template-columns: repeat(var(--desktop-columns), 1fr);
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
      gap: 8px;

      &__title {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        color: var(--title-color);
        word-break: break-word;
        text-align: var(--title-alignment);

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
        color: var(--text-color);
        word-break: break-word;
        text-align: var(--body-alignment);
      }
    }
  }
}
</style>
