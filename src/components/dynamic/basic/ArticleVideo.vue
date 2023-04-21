<template>
  <figure class="article-video" :class="[paddingTop, paddingBottom]">
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
    <figcaption v-if="caption" class="img-caption" :style="bodyColor">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
import { sizes } from "@/utils";

export default {
  props: {
    video: {
      type: Object,
      required: false,
      default: null,
    },
    caption: {
      type: String,
      required: false,
      default: "",
    },
    padding_top: {
      type: String,
      required: false,
      default: "",
    },
    padding_bottom: {
      type: String,
      required: false,
      default: "",
    },
    youtube_video_url: {
      type: String,
      required: false,
      default: "",
    },
    component_colors: {
      type: Object,
      required: false,
      default: null,
    },
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
    bodyColor() {
      const defaultColor = "var(--color-analog-secondary-light-gray);";
      const color = this.component_colors?.body_color;
      return {
        "--text-color": color ? color : defaultColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.article-video {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-inline: 16px;
  width: 100%;
  max-width: 710px;
  margin-inline: auto;

  @include respond-to(">=m") {
    padding-inline: 0;
  }

  iframe,
  video {
    width: 100%;
    aspect-ratio: 16/9;
  }

  .img-caption {
    font-size: 16px;
    color: var(--text-color);

    text-align: center;
    margin: auto;
    line-height: 24px;

    @include respond-to("<=m") {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
