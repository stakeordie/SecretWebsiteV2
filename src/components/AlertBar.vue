<template>
  <div v-if="isAlertOpen" class="alert-bar">
    <vue-markdown class="alert-content">{{ message }}</vue-markdown>
    <a @click="isAlertOpen = false" href="" class="close-alert">
      <g-image src="../assets/icon-menu-close.svg" :immediate="true"></g-image>
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
      top: var(--alert-height);
      +.swirl {
        &.top {
          margin-top: calc(var(--alert-height) + var(--f-header-height));
        }
        +main.--flare-page {
          margin-top: calc(var(--alert-height) + var(--f-header-height));
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
    height: var(--alert-height);
    @include respond-to("<=s") {
      text-align: left;
    }

    .alert-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: var(--f-gutter);
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
        top: 22px;
        right: var(--f-gutter);
        img {
          @include theme(light light-colored) {
            filter: invert(1);
          }
        }
      }
  }

</style>
