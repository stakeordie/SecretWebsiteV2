<template>
  <figure :class="['article-image', paddingTop, paddingBottom]">
    <ResponsiveImage :src="image" classes="learn-post__img" />
    <figcaption class="img-caption" v-if="caption">
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
    }
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article__content {
  .article-image {
    display: grid;
    gap: 16px;
    padding: 0 16px;
    max-width: 1200px;
    margin-inline: auto;

    @include respond-to(">=m") {
      padding: 0;
    }

    @include respond-to("xxxl") {
      max-width: 1600px;
    }

    .img-caption {
      font-size: 16px;
      color: var(--color-analog-secondary-light-gray);

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
}
</style>
