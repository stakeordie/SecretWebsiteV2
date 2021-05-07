<template>
  <div v-if="isAlertOpen" class="alert-bar">
    <vue-markdown class="alert-content">{{ message }}</vue-markdown>
    <a @click="isAlertOpen = false" href="" class="close-alert">
      <img src="../assets/icon-menu-close.svg" width="24" height="24" alt="close" />
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: false
      },
    },
    data: function () {
      return {
        isAlertOpen: true,
        message: 'SecretSwap - the first front-running resistant, cross-chain DEX - is now LIVE on mainnet. [CLICK HERE](https://scrt.network/blog/secretswap-is-live-on-mainnet) to learn more.',
      }
    }
  }

</script>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  $accent-colors: ("blue",
    "turquoise",
    "green",
    "yellow",
    "cream",
    "orange",
    "red",
    "purple",
    "gray",
  );

  // @each $name, $color in $accent-colors {
  // 	&.accent-#{$name} {
  // 		color: var(--accent-#{$name});
  // 	}
  // }

  .alert-bar {
    +.simple-header {
      @include respond-to(">=m") {
        top: var(--alert-height-desktop);
      }

      @include respond-to("<=s") {
        top: var(--alert-height-mobile);
      }

      +.swirl-wrapper {
        +main.--flare-page {
          @include respond-to(">=m") {
            margin-top: calc(var(--alert-height-desktop));
          }

          @include respond-to("<=s") {
            margin-top: calc(var(--alert-height-mobile));
          }
        }
      }
    }

    background: var(--theme-alert-bg-color);
    position: fixed;
    z-index: 99999;
    width: 100%;
    left: 0;
    top: 0;
    text-align: center;
    height: var(--alert-height-desktop);

    @include respond-to("<=s") {
      text-align: left;
      height: var(--alert-height-mobile);
    }

    .alert-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: var(--f-gutter);

      @include respond-to("m") {
        padding-right: var(--f-gutter-xxl);
        padding-left: var(--f-gutter-xxl);
      }

      @include respond-to("<=s") {
        padding-right: var(--f-gutter-xl);
      }

      p {
        margin: 0;
        color: var(--theme-fg);

        @include respond-to ("<=s") {
          font-size: 14px;
          line-height: 1.4;
        }

        a {
          text-decoration: underline;
        }
      }
    }

    .close-alert {
      position: absolute;
      top: 16px;

      @include respond-to("<=s") {
        top: 22px;
      }

      right: var(--f-gutter);

      img {
        @include theme(light light-colored) {
          filter: invert(1);
        }
      }
    }
  }

</style>
