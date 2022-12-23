<template>
  <figure :class="['article-video', paddingTop, paddingBottom]">
    <video controls width="250">
      <source :src="video.data.url" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <figcaption class="img-caption" v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
import { sizes } from "../../utils";

export default {
  props: {
    video: Object,
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
  .article-video {
    display: grid;
    gap: 16px;
    padding: 0 16px;
    justify-content: center;

    @include respond-to(">=m") {
      padding: 0;
    }

    video {
      width: 100%;
      height: auto;
      max-width: 710px;
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
