<template>
  <SimpleLayout>
    <template #header v-if="!hideHeader">
      <AlertBar />
      <HeaderMegaMenuV2 />
    </template>

    <SwirlTop :swirlSpecial="swirlSpecial" />
    <Page>
      <slot></slot>
    </Page>
    <SwirlBottom
      :swirlSpecial="swirlSpecial"
      :swirlBottomIsVisible="swirlBottomIsVisible"
    />

    <template #footer>
      <SimpleFooter :class="swirlBottomIsVisible" mode="full">
        <FooterMenu />
        <FooterContact />
      </SimpleFooter>
      <FooterLegal />
    </template>
  </SimpleLayout>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import { addScrollSmooth } from "@/utils";
import FooterContact from "@/components/Layout/FooterContact.vue";
import FooterMenu from "@/components/Layout/FooterMenu.vue";
import FooterLegal from "@/components/Layout/FooterLegal.vue";
import SwirlTop from "@/components/Layout/SwirlTop.vue";
import SwirlBottom from "@/components/Layout/SwirlBottom.vue";

export default {
  components: { FooterContact, FooterMenu, FooterLegal, SwirlTop, SwirlBottom },
  data() {
    return {
      isNavOpen: false,
      swirlSpecial: false,
      swirlBottomIsVisible: true
    };
  },
  props: {
    hideHeader: {
      type: Boolean,
      required: false
    }
  },
  watch: {
    isNavOpen() {
      this.toggleNavOpen();
    },
    $route() {
      this.isNavOpen = false;
    },
    $route: {
      handler(to, from) {
        addScrollSmooth(to);
        this.checker();
        this.removeBottomSwirl();
        this.isNavOpen = false;
        return;
      }
    }
  },
  methods: {
    removeBottomSwirl() {
      if (process.isClient) {
        const path = window.location.pathname;
        const simpleFooter = document.querySelector(".simple-footer");
        if (path.includes("/ecosystem/ecosystem-roadmap")) {
          this.swirlBottomIsVisible = false;
          simpleFooter.classList.add("swirlIsOff");
        } else {
          this.swirlBottomIsVisible = true;
          simpleFooter.classList.remove("swirlIsOff");
        }
      }
    },
    checker() {
      if (!process.isClient) return;
      const path = window.location.pathname;
      this.swirlSpecial = path.includes("/about/get-scrt") || false;
    },
    toggleNavOpen() {
      if (this.isNavOpen) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    toggleDarkLightMode() {
      this.darkLightModeState = !this.darkLightModeState;
      this.setTheme();
    },
    toggleColoredMode() {
      this.coloredModeState = !this.coloredModeState;
      this.setTheme();
    },
    //* SET INITIAL THEME
    setInitialTheme() {
      let theme = `dark-colored`;
      this.setBodyAttr(theme);
      if (process.isClient) {
        localStorage.setItem("theme", theme);
      }
    },
    setTheme() {
      let themeSwitched;
      const colorMode = this.coloredModeState ? "" : "-colored";
      const darkLightMode = this.darkLightModeState ? "light" : "dark";
      themeSwitched = `${darkLightMode}${colorMode}`;
      this.setBodyAttr(themeSwitched);
      if (process.isClient) {
        localStorage.setItem("theme", themeSwitched);
      }
    },
    setBodyAttr(theme) {
      const [body] = document.getElementsByTagName("body");
      if (!body) return;
      body.setAttribute("theme", theme);
    }
  },
  mounted() {
    this.isNavOpen = false;
    this.toggleNavOpen();
    this.setInitialTheme();
    this.checker();
    this.removeBottomSwirl();
  }
};
</script>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.simple-layout {
  position: relative;
}
.simple-header {
  display: grid;
  gap: 50px;
  background: var(--theme-bg);
  transition: var(--color-transition);
  z-index: 20;
  .link-logo {
    justify-content: center;
    display: flex;
  }
  &.fixed {
    position: fixed;
    z-index: 9999;
    width: 100%;
    left: 0;
    top: 0;
  }
  img:not(.not-invert) {
    @include theme(light light-colored) {
      filter: invert(1);
    }
  }
  .box {
    gap: var(--f-gutter-l);
    padding-top: 0px;
    padding-bottom: 0px;
    display: grid;
    grid-template-columns: 124px 1fr;
    @media only screen and (max-width: (1160px - 1px)) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .mobile-menu-toggle {
    @media only screen and (min-width: (1160px)) {
      display: none;
    }
  }
  .header {
    &__logo {
      width: auto;
      height: 58px;
      padding: var(--f-gutter-s) var(--f-gutter) var(--f-gutter-s) 0;
    }
  }
  .nav-wrapper {
    display: grid;
    grid-auto-flow: column;
    gap: var(--f-gutter);
    height: 100%;
    justify-content: space-between;
    @media only screen and (min-width: (1160px)) {
      grid-template-columns: auto 1fr auto;
    }
    @media only screen and (max-width: (1160px - 1px)) {
      justify-content: flex-end;
    }
    .mobile-wrapper {
      display: flex;
      gap: var(--f-gutter-xxl);

      @media only screen and (max-width: (1160px - 1px)) {
        display: none;
      }

      &.is-nav-open {
        @media only screen and (min-width: (1160px)) {
          display: none;
        }
        display: flex;
        flex: auto;
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 67px;
        width: 100%;
        overflow-y: scroll;
        height: calc(100vh - 67px);
        min-height: calc(100vh - 67px);
        background: var(--theme-bg);
        gap: var(--f-gutter-xl);
        padding: var(--f-gutter);
        padding-bottom: 150px;
        .main-navigation {
          height: auto;
        }
        .header__navigation {
          display: flex;
          gap: var(--f-gutter-xl);
          flex-direction: column;
          justify-content: flex-start;
          align-items: baseline;
          img {
            display: none;
          }
          li.dropdown-container {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            a {
              padding: 0;
            }
            ul.dropdown {
              display: flex !important;
              position: relative;
              top: 0;
              background-color: transparent;
              box-shadow: none;
              animation: none;
              a {
                color: var(--theme-links-default) !important;
                padding: var(--f-gutter-s) var(--f-gutter-s);
                &:hover {
                  color: var(--theme-links-hover) !important;
                }
              }
            }
          }
        }
      }
      .social-navigation {
        display: grid;
        grid-auto-flow: column;
        gap: var(--f-gutter-xxs);
        align-items: center;

        @media only screen and (min-width: (1160px)) {
          display: none;
        }
        a {
          padding: 0 !important;
          display: grid;
          justify-content: center;
        }
      }
    }
    .search {
      display: grid;
      align-items: center;
      @media only screen and (min-width: (1340px - 1px)) {
        justify-items: end;
      }
      @media only screen and (max-width: (1340px - 1px)) {
        justify-items: center;
      }
      .fake-input {
        display: grid;
        grid-auto-flow: column;
        gap: var(--f-gutter-xs);
        align-items: center;
        background: var(--theme-card-bg-variant);
        padding: var(--f-gutter-s) var(--f-gutter);
        border-radius: var(--f-radius);
        @media only screen and (max-width: (1340px - 1px)) {
          padding: 0;
          background: transparent;
        }
        @media only screen and (min-width: (1340px)) {
          grid-template-columns: 24px 1fr;
          width: 100%;
          max-width: 400px;
        }
        img {
          width: 20px;
          height: 20px;
          opacity: 0.6;
          @include theme(light light-colored) {
            filter: invert(1);
          }
          @media only screen and (max-width: (1340px - 1px)) {
            opacity: 1;
            filter: brightness(2);
            width: 24px;
            height: 24px;
          }
        }
        p {
          margin: 0;
          @media only screen and (max-width: (1340px - 1px)) {
            display: none;
          }
        }
      }
    }
    .toggles {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      gap: var(--f-gutter);
      padding-left: var(--f-gutter);
      @media only screen and (max-width: (1340px - 1px)) {
        padding-left: 0;
      }
      .social-navigation {
        display: grid;
        grid-auto-flow: column;
        gap: var(--f-gutter-s);
        align-items: center;
        padding-right: var(--f-gutter);

        @media only screen and (max-width: (1160px - 1px)) {
          display: none;
        }
        a {
          padding: 0 !important;
        }
      }
      button {
        margin: 0;
        padding: 0;
        cursor: pointer;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
.simple-footer {
  background: var(--color-neutral-dark-mode-01);
  min-height: 577px;
  margin-top: 196px;
  gap: var(--f-gutter-l);
  padding-top: var(--f-gutter-l);
  padding-bottom: var(--f-gutter-l);

  img:not(.not-invert) {
    @include theme(light light-colored) {
      filter: invert(1);
    }
  }
}
.fade-enter-active {
  -webkit-animation: fade-in-top 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-top 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.fade-leave-active {
  -webkit-animation: fade-out-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: fade-out-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0;
  }
}
@keyframes fade-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>
