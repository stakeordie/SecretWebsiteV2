<template>
  <div v-if="isAlertOpen" class="alert-bar" :style="backgroundColor">
    <VueMarkdown
      v-if="alertMessage.text"
      :source="alertMessage.text"
      class="alert-content"
      :style="textColor"
    />
    <button @click="closeAlert" class="close-alert">
      <img src="/img/icons/icon-menu-close.svg" alt="close" loading="lazy" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAlertOpen: false
    };
  },
  methods: {
    validateIsOpen() {
      if (!process.isClient) return;
      const localData = localStorage.getItem("alertMsg");
      const message = this.alertMessage.text;
      this.isAlertOpen = Boolean(localData !== message);
    },
    closeAlert() {
      if (!process.isClient) return;
      this.isAlertOpen = false;
      const alertMsg = String(this.alertMessage.text);
      localStorage.setItem("alertMsg", alertMsg);
    },
    headerHeights() {
      if (!process.isClient) return;
      const header = document.querySelector(".mega-header");
      const alertBar = document.querySelector(".alert-bar");
      const alertHeight = Number(alertBar?.offsetHeight || 0);
      const headerHeight = Number(alertHeight + header?.offsetHeight || 0);

      document.body.style.setProperty("--ab-height", `${alertHeight}px`);
      document.body.style.setProperty("--header-height", `${headerHeight}px`);
    }
  },
  computed: {
    alertMessage() {
      return this.$static.alertBar.edges[0].node;
    },
    textColor() {
      const color = this.alertMessage.text_color
        ? this.alertMessage.text_color
        : "var(--theme-fg)";
      return { "--alert-text-color": color };
    },
    backgroundColor() {
      const color = this.alertMessage.background_color
        ? this.alertMessage.background_color
        : "var(--theme-alert-bg-color)";
      return { "--alert-background-color": color };
    }
  },
  mounted() {
    this.validateIsOpen();
    this.headerHeights();
  },
  updated() {
    this.headerHeights();
  }
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

<style lang="scss" scoped>
@import "@/sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.alert-bar {
  background: var(--alert-background-color);
  position: fixed;
  z-index: 101;
  width: 100%;
  left: 0;
  top: 0;
  text-align: center;
  height: var(--alert-height-desktop);

  @include respond-to("<=s") {
    text-align: left;
    height: var(--alert-height-mobile);
  }

  ::v-deep {
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
