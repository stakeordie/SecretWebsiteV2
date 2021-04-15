<template>
  <div class="hero-video">
    <div class="message">
      <h2>Secret Network</h2>
      <p class="message">Secret Network is a <strong>blockchain-based</strong>, <strong>open-source</strong> protocol that lets anyone perform computations on encrypted data, bringing <strong>privacy</strong> to <strong>smart contracts</strong> and <strong>public blockchains</strong>.</p>
    </div>
    <div @click="showVideo = !showVideo" class="video-thumbnail">
      <img v-show="!showVideo" src="../assets/hero-video-thumbnail.jpg" :alt="title"/>
    </div>
    <div v-if="showVideo" class="video">
      <button class="close-video theme" @click="showVideo = !showVideo"><img src="../assets/icon-menu-close.svg"
          alt=""></button>
      <video width="100%" height="500" controls>
        <source src="../assets/scrt-intro.mp4" type="video/mp4">
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

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  .hero-video {
    padding: var(--f-gutter-l);
    background: var(--theme-card-bg-variant);
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: var(--f-gutter-xl);
    margin-bottom: var(--f-gutter-xxxl) !important;
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
    }
  }

</style>
