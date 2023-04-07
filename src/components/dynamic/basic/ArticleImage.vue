<template>
  <figure class="article-image" :class="[paddingTop, paddingBottom]">
    <ResponsiveImage :src="image" classes="learn-post__img" />
    <figcaption class="img-caption" v-if="caption" :style="bodyColor">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
import { sizes } from "@/utils";

export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    caption: {
      type: String,
      required: false
    },
    padding_top: {
      type: String,
      required: false,
      default: sizes.none
    },
    padding_bottom: {
      type: String,
      required: false,
      default: sizes.small
    },
    component_colors: {
      type: Object,
      required: false
    }
  },
  computed: {
    paddingTop() {
      const size = sizes[this.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    },
    bodyColor() {
      const defaultColor = "var(--color-analog-secondary-light-gray)";
      const color = this.component_colors?.body_color;
      return {
        "--text-color": color ? color : defaultColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.article-image {
  display: grid;
  gap: 16px;
  padding-inline: 16px;
  max-width: 1200px;
  margin-inline: auto;

  @include respond-to(">=m") {
    padding-inline: 0;
  }

  .img-caption {
    font-size: 16px;
    color: var(--text-color);
    text-align: center;
    max-width: 710px;
    margin: auto;
    line-height: 24px;

    @include respond-to("<=m") {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
