<template>
  <div class="hero-video">
    <div class="row1">
      <div class="message">
        <h6 class="title">{{$static.homeHero.edges[0].node.title}}</h6>
        <h1 class="tagline">{{$static.homeHero.edges[0].node.tagline}}</h1>
      </div>
      <div @click="showVideo = !showVideo" class="video-thumbnail">
        <img v-show="!showVideo" :src="'https://strapi.stakeordie.com' + $static.homeHero.edges[0].node.video_thumbnail_image.url" alt="Thumbnail" width="371" height="209"/>
      </div>
    </div>
    <div class="row2">
      <p class="message"><vue-markdown>{{$static.homeHero.edges[0].node.subtitle}}</vue-markdown></p>
    </div>
    <div v-if="showVideo" class="video">
      <button class="close-video theme" @click="showVideo = !showVideo"><img src="../assets/icon-menu-close.svg"
          alt=""></button>
      <video width="100%" height="500" controls>
        <source :src="'https://strapi.stakeordie.com' + $static.homeHero.edges[0].node.video.url" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        showVideo: false,
      }
    },
    props: {
      title: {
        type: String,
        required: false
      },
      message: {
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

<static-query>
  query{
    homeHero: allStrapiHomeHero {
      edges{
        node{
          title
          subtitle
          tagline
          video {
            url
          }
          video_thumbnail_image {
            url
          }
        }
      }
    }
  }
</static-query>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  .hero-video {
    padding: var(--f-gutter-l);
    background: var(--theme-card-bg-default);
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: var(--f-gutter-l);
    margin-bottom: var(--f-gutter-xxxl) !important;
    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }

    .row1 {
      display: grid;
      grid-template-columns: 60% 1fr;
      gap: var(--f-gutter-xl);
      grid-area: 1 / 1 / 2 / 3;
      @include respond-to("<=m") {
        grid-template-columns: 1fr;
      }
    }

    .row2 {
      grid-area: 2 / 1 / 3 / 3;
    }

    .message {
      
      .tagline {
        font-family: Hind;
        font-weight: bold;
        font-size: var(--h1-text-size-hero);
        @include respond-to("<=m") {
          font-size: var(--f-h3-text-size);
          line-height: var(--f-h3-line-height);
        }
      }
      .title {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--theme-card-text-color);
      }
      
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
      display: grid;
      grid-template-columns: 1fr;

      .close-video {
        justify-self: flex-end;

        img {
          @include theme(light light-colored) {
            filter: invert(1);
          }
        }
      }
      video {
        @include respond-to("<=s") {
          height: 250px;
        }
      }
    }
  }

</style>
