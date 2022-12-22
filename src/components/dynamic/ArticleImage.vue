<template>
  <figure :class="['article-image', paddingTop, paddingBottom]">
    <img :src="image.url" alt="" class="learn-post__img" />
    <figcaption class="img-caption" v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
import { sizes } from "../../utils";

export default {
  props: {
    image: Object,
    caption: String,
    padding_top: String,
    padding_bottom: String,
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
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article__content {
  .article-image {
    display: grid;
    gap: 16px;
    padding: 0 16px;

    @include respond-to(">=m") {
      padding: 0;
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
