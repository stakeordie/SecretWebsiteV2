<template>
  <div v-if="isAlertOpen" class="alert-bar" :style="varAlertHeight">
    <div class="alert-content" ref="msg">{{alertMessage.text}}</div>
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
    message: {
      type: String,
      required: true,
    }
  },
  data: function () {
    return {
      isAlertOpen: true,
      alertHeight: "68px",
    };
  },
  methods: {
    checkForStatus() {
      if (process.isClient) {
        let localStorage = window.localStorage.getItem("alertMsg");
        if (localStorage === this.$static.alertBar.edges[0].node.text) {
        } else {
          this.isAlertOpen = true;
        }
      }
      return this.$static.alertBar.edges[0].node.text;
    },
    checkAlertHeight() {
      const body = document.querySelector("body");
      return body.setAttribute("style", `--ab-height:0px`);
    },
    closeAlert() {
      this.isAlertOpen = false;
      if (process.isClient) {
        let alertMsg = this.$static.alertBar.edges[0].node.text;
        localStorage.setItem("alertMsg", `${alertMsg}`);
      }
      // console.log(this.$static.alertBar.edges[0].node.text)
      return this.$static.alertBar.edges[0].node.text;
    },
    varAlertHeight() {
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
  beforeMount() {
    this.checkForStatus();
  },
  mounted() {
    this.checkForStatus();
    this.varAlertHeight();
  },
  updated() {
    this.varAlertHeight();
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
