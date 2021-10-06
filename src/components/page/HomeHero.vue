<template>
  <div class="hero-video">
    <div class="column1">
      <div class="message">
        <h6 class="title">{{homeHero.title}}</h6>
        <h1 class="tagline">{{homeHero.tagline}}</h1>
      </div>
      <p class="message"><vue-markdown>{{homeHero.subtitle}}</vue-markdown></p>
    </div>
    <div class="column2">
      <img v-if="hasImage" :src="homeHero.image.url" :alt="title"/>
      <image-placeholder v-else width="750" height="750" title="Hero Home Image"/>
    </div>
  </div>
</template>

<script>
  import { getLocaleNode } from '@/utils' 
  export default {
    data: function () {
      return {
        showVideo: false
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
    },
    computed: {
      hasImage() {
        if(this.homeHero.image.caption == "no-image") {
          return false;
        } else {
          return true;
        }
      },
      homeHero() {
        return getLocaleNode(this.$static.homeHero, this.$context.locale)
      }
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
          image {
            url
            caption
            alternativeText
          }
          locale
        }
      }
    }
  }
</static-query>

<style lang="scss">
  @import "../../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  .hero-video {
    padding: var(--f-gutter-l);
    background: var(--theme-card-bg-default);
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: var(--f-gutter-l);
    margin-bottom: var(--f-gutter-xxxl) !important;
    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }

    .column1 {
      display: flex;
      flex-direction: column;
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
