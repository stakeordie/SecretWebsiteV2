<template>
  <div v-if="isAlertOpen" class="alert-bar" :style="alertStyles">
    <vue-markdown v-if="isAlertOpen" class="alert-content" ref="msg">{{
      alertMessage.text
    }}</vue-markdown>
    <a @click="closeAlert" href="" class="close-alert">
      <img
        src="../assets/icon-menu-close.svg"
        width="24"
        height="24"
        alt="close"
      />
    </a>
  </div>
</template>

<script>
import { getLocaleData } from "@/utils";

export default {
  props: {
    url: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      isAlertOpen: true,
      alertHeight: "68px",
    };
  },
  methods: {
    validateStatus() {
      if (process.isClient) {
        const localData = localStorage.getItem("alertMsg");
        const message = this.$static.alertBar.edges[0].node.text;
        if (localData === message) {
          this.isAlertOpen = false;
        } else {
          this.isAlertOpen = true;
        }
      }
    },
    closeAlert() {
      const sneakPeek = document.querySelector(".landing-event-sneak-peek");

      if (sneakPeek) {
        sneakPeek.style.setProperty("--sum-heights", 68 + "px");
      }

      this.isAlertOpen = false;
      if (process.isClient) {
        const alertMsg = this.$static.alertBar.edges[0].node.text;
        localStorage.setItem("alertMsg", alertMsg.toString());
      }
      return this.$static.alertBar.edges[0].node.text;
    },
    alertStyles() {
      const htmlEl = document.querySelector("html");
      return this.isAlertOpen
        ? htmlEl.setAttribute("style", `--ab-height:${this.alertHeight}`)
        : htmlEl.setAttribute("style", `--ab-height:0px`);
    },
  },
  computed: {
    alertMessage() {
      return getLocaleData(
        this.$static.alertBar,
        this.$context.locale,
        this.$context.text
      );
    },
  },
  mounted() {
    this.validateStatus();
    this.alertStyles();
  },
  updated() {
    this.alertStyles();
  },
};
</script>

<static-query>
  query{
    alertBar: allStrapiAlertBar {
      edges{
        node{
          text
          locale
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: (
  "blue",
  "turquoise",
  "green",
  "yellow",
  "cream",
  "orange",
  "red",
  "purple",
  "gray"
);

// @each $name, $color in $accent-colors {
// 	&.accent-#{$name} {
// 		color: var(--accent-#{$name});
// 	}
// }

.alert-bar {
  + .mega-header {
    @include respond-to(">=m") {
      top: var(--alert-height-desktop);
    }

    @include respond-to("<=s") {
      top: var(--alert-height-mobile);
    }

    + .swirl-wrapper {
      + main.--flare-page {
        @include respond-to(">=m") {
          margin-top: calc(var(--alert-height-desktop));
        }

        @include respond-to("<=s") {
          margin-top: calc(var(--alert-height-mobile));
        }
      }
    }
    .mega-header {
      @include respond-to("<=m") {
        padding-bottom: 67px;
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

      @include respond-to("<=s") {
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
    top: 12px;

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
