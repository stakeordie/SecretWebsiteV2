<template>
  <div class="hero-video">
    <div class="column1">
      <div class="message">
        <h6 class="title">{{$static.homeHero.edges[0].node.title}}</h6>
        <h1 class="tagline">{{$static.homeHero.edges[0].node.tagline}}</h1>
      </div>
      <p class="message"><vue-markdown>{{$static.homeHero.edges[0].node.subtitle}}</vue-markdown></p>
    </div>
    <div class="column2">
      <img v-if="hasImage" :src="'https://strapi.stakeordie.com' + $static.homeHero.edges[0].node.image.url" :alt="title"/>
      <div class="insert-image-here" v-else>
        <h4 class="title">
          Home Hero Image
        </h4>
        <h1 class="dimensions">
          750 x 750
        </h1>
        <div class="upload">
          <img src="../assets/software-upload.svg" />
          <p>
            Click to select an asset or drag & drop a file in this area
          </p>
        </div>
      </div>
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
    },
    computed: {
      hasImage() {
        this.$static.homeHero.edges[0].node.image.caption == 'no-image'
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
    .insert-image-here {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      text-align: center;
      cursor: pointer;
      width: 100%;
      height: 100%;
      border: 4px dashed;
      border-color: var(--f-h1-text-color);
      padding: 20px;
      
      .dimensions {
        font-family: hind;
      }
      
      .upload {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        img {
          width: 24px;
          margin: auto;
        }
        p {
          margin: 0px;
          padding: 10px;
          font-size: 18px;
        }
      }
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
