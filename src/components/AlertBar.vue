<template>
  <div v-if="isAlertOpen" class="alert-bar" :style="backgroundColor">
    <vue-markdown
      v-if="alertMessage.text"
      :source="alertMessage.text"
      class="alert-content"
      :style="textColor"
    />
    <button @click="closeAlert" class="close-alert">
      <img src="../assets/icon-menu-close.svg" alt="close" />
    </button>
  </div>
</template>

<script>
import { getLocaleData } from "@/utils";

export default {
  data() {
    return {
      isAlertOpen: true,
      alertHeight: "68px",
    };
  },
  methods: {
    validateIsOpen() {
      if (process.isClient) {
        const localData = localStorage.getItem("alertMsg");
        const message = this.alertMessage.text;

        if (localData === message) {
          this.isAlertOpen = false;
        } else {
          this.isAlertOpen = true;
        }
      }
    },
    closeAlert() {
      this.isAlertOpen = false;
      document.body.style.setProperty("--sum-heights", 68 + "px");

      if (process.isClient) {
        const alertMsg = String(this.alertMessage.text);
        localStorage.setItem("alertMsg", alertMsg);
      }
    },
    alertStyles() {
      const height = this.isAlertOpen ? this.alertHeight : "0px";
      document.body.setAttribute("style", `--ab-height:${height}`);
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
    textColor() {
      const color = this.alertMessage.text_color
        ? this.alertMessage.text_color
        : "var(--theme-fg)";
      return `--alert-text-color: ${color}`;
    },
    backgroundColor() {
      const color = this.alertMessage.background_color
        ? this.alertMessage.background_color
        : "var(--theme-alert-bg-color)";
      return `--alert-background-color: ${color}`;
    },
  },
  mounted() {
    this.validateIsOpen();
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
          text_color
          background_color
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.alert-bar {
  background: var(--alert-background-color);
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
      color: var(--alert-text-color);

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
    border: none;
    background-color: transparent;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 13px;
    right: var(--f-gutter);

    @include respond-to("<=s") {
      top: 22px;
    }

    img {
      width: 24px;
      height: 24px;

      @include theme(light light-colored) {
        filter: invert(1);
      }
    }
  }
}
</style>
