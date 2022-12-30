<template>
  <figure :class="['article-video', paddingTop, paddingBottom]">
    <video v-if="video" controls>
      <source :src="video.url" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <iframe
      v-if="youtube_video_url"
      :src="youtubeUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowfullscreen
    />
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
    youtube_video_url: String,
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
    youtubeUrl() {
      const url = this.youtube_video_url.toString().split("v=");
      const videoCode = url[1] ? url[1] : this.youtube_video_url;
      return `https://www.youtube.com/embed/${videoCode}`;
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article__content {
  .article-video {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
    max-width: 710px;
    margin: 0 auto;

    @include respond-to(">=m") {
      padding: 0;
    }

    iframe,
    video {
      width: 100%;
      aspect-ratio: 16/9;
    }

    .img-caption {
      font-size: 16px;
      color: var(--color-analog-secondary-light-gray);

      text-align: center;
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
