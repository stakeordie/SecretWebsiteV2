<template>
  <div class="hero-video">
    <div class="message">
      <h2>{{ title }}</h2>
      <slot></slot>
    </div>
    <div @click="showVideo = !showVideo" class="video-thumbnail">
      <g-image :src="require(`!!assets-loader!@images/${videoThumbnail}`)" :alt="title"></g-image>
    </div>
    <div v-show="showVideo" class="video">
      <iframe width="100%" height="600" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        showVideo: false,
      }
    },
    props: {
      title: {
        type: String,
        required: false
      },
      videoThumbnail: {
        type: String,
        required: false
      },
      video: {
        type: String,
        required: false
      },
    }
  }

</script>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

  .hero-video {
      padding: var(--f-gutter-xl);
      background: var(--theme-card-variant);
      display: grid;
      grid-template-columns: 60% 1fr;
      gap: var(--f-gutter-xl);
      @include respond-to("<=m") {
        grid-template-columns: 1fr;
      }
    .message {
      p {
        font-size: var(--paragraph-font-size-big);
        line-height: 1.7;
        @include theme(dark dark-colored) {
          color: var(--color-neutral-dark-mode-05);
        }
        @include theme(light light-colored) {
          color: var(--color-neutral-light-mode-05);
        }
      }
    }
    .video {
      grid-column: 1 / span 2;
    }
  }

</style>
