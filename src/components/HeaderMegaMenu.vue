<template>
  <transition name="slide-megaheader">
    <header class="mega-header" v-show="!scrollingDown">
      <!-- // first block -->
      <div class="mega-header__wrapper">
        <div class="mega-header__wrapper__content">
          <div class="logo-bar" :class="burger">
            <div class="logo-bar__content__image">
              <img
                src="../assets/icon-menu.svg"
                alt="close icon"
                class="menu"
                v-on:click="toggleMegaMenu"
              />
              <img
                src="../assets/icon-close.svg"
                alt="close icon"
                class="close"
                v-on:click="toggleMegaMenu"
              />
              <g-link to="/">
                <img
                  src="../assets/scrt-logo--white.svg"
                  alt="secret network logo"
                  class="logo"
                />
              </g-link>
            </div>
            <div class="logo-bar__content__searchbar">
              <div
                class="logo-bar--searchbar search-trigger search"
                v-on:click="searchTrigger"
              >
                <img src="../assets/search-icon.svg" alt="" />
                <p>Search</p>
              </div>
            </div>
          </div>
          <!-- nav items HEADINGS DESKTOP -->
          <ul class="nav">
            <li
              class="nav__content"
              v-for="(nav, index) in megaMenuItems"
              :key="index"
              v-on:click="toggleMegaMenu"
            >
              <a href="/">{{ nav.title }}</a>
              <img
                :class="chevron"
                class="nav__content__chevron"
                src="../assets/icon-chevron-down.svg"
                alt="arrow down icon"
              />
            </li>
          </ul>
        </div>
      </div>
      <!-- expanded -->
      <div class="mega-header__wrapper__expanded" v-if="megaMenuIsOpen">
        <div class="mega-header__wrapper__expanded__content">
          <div class="nav__expanded">
            <ul
              class="nav__expanded__content"
              v-for="(nav, index) in megaMenuItems"
              :key="index"
            >
              <h6 class="nav__expanded__content__title">{{ nav.title }}</h6>
              <li
                class="nav__expanded__content__item"
                v-for="(it, index) in nav.nav_items"
                :key="index"
              >
                <g-link
                  class="nav__expanded__content__item__link"
                  :to="it.nav_item.page.route"
                  ><span v-on:click="linkCloseMenu">{{ it.nav_item.text }}</span></g-link>
              </li>
            </ul>
          </div>
          <div class="nav__social-media">
            <div class="nav__social-media__content">
              <p class="title">Connect with Us:</p>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://forum.scrt.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="forums"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/message-circle.svg" alt="message image" />
                  <span>Forums</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://discord.com/invite/SJK32GY"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="discord"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/discord.svg" alt="discord image" />
                  <span>Discord</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://t.me/SCRTcommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="telegram"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/telegram.svg" alt="telegram image" />
                  <span>Telegram</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://twitter.com/SecretNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="twitter"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/twitter.svg" alt="twitter image" />
                  <span>Twitter</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="youtube"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/youtube.svg" alt="youtube image" />
                  <span>Youtube</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://www.instagram.com/scrtnetwork/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="instagram"
                  v-on:click="linkCloseMenu"
                >
                  <img
                    src="../assets/icon-social-instagram.svg"
                    alt="instagram image"
                  />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-on:click="linkCloseMenu"
        class="mega-header__overlay"
        v-if="megaMenuIsOpen"
      ></div>
    </header>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      megaMenuIsOpen: false,
      alertIsOpen: true,
      scrollingDown: false,
      columns: [],
    };
  },
  methods: {
    scrollPosition(e) {
      let lastScrollTop = 0;
      window.addEventListener(
        "scroll",
        () => {
          let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop && st > 88) {
            this.scrollingDown = true;
          } else {
            this.scrollingDown = false;
          }
          lastScrollTop = st <= 0 ? 0 : st;
        },
        false
      );
    },
    megaMenuColumns() {
      const body = document.querySelector("body");
      body.setAttribute(
        "style",
        `--scrt-megamenu-columns:${this.columns.length}`
      );
    },
    toggleMegaMenu(e) {
      const body = document.querySelector("body");
      e.preventDefault();
      this.megaMenuIsOpen = !this.megaMenuIsOpen;
      this.megaMenuIsOpen
        ? body.classList.add("freezed")
        : body.classList.remove("freezed");
    },
    linkCloseMenu() {
      const body = document.querySelector("body");
      this.megaMenuIsOpen = false;
      body.classList.remove("freezed");
    },
  },
  computed: {
    chevron() {
      return this.megaMenuIsOpen ? "arrow-up" : "";
    },
    burger() {
      return this.megaMenuIsOpen ? "is-opened" : "is-closed";
    },
    megaMenuItems() {
      const content = this.$static.navHeader.edges.map(
        (it) => it.node.nav_groups
      );
      this.columns = content[0];
      return content[0];
    },
  },
  mounted() {
    this.megaMenuColumns();
    if (process.isClient) {
      this.scrollPosition();
    }
  },
  beforeDestroy() {
    // this.scrollPosition();
  }
};
</script>

<static-query>
  query {
  navHeader: allStrapiNavHeader {
    edges {
      node {
        nav_groups {
          title
          id
          nav_items {
            nav_item {
              text
              id
              page {
                name
                title
                route
                locale
              }
              locale
              external_link
            }
            sort_name
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "../sass/_text.scss";
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/_respond-to.scss";
:root {
  --mega-header-space: 16px;
  --mega-header-space-l: 24px;
  --mega-headerbackground: var(--color-neutral-dark-mode-01);
  --mega-header-padding-logo: 5px;
  --mega-header-border-searchbar: 4px;
  --mega-header-padding-searchbar: 7px 8px;
  --mega-header-line-height-searchbar: 25.62px;
  --mega-header-gap-searchbar: 10px;
  --mega-header-width-searchbar: 219px;
  --mega-header-gap-nav: 10px;
  --mega-header-background-nav-expanded: rgba(43, 52, 64, 1);
  --mega-header-color-nav-exanded: rgba(240, 242, 245, 1);
  --mega-header-color-nav-exanded-hover: rgba(178, 190, 204, 1);
  --mega-header-gap-social-media: 4px;
  --mega-header-color-social-medial: rgba(240, 242, 245, 1);
  --mega-header-color-social-media-icon: var(--color-analog-primary-white);
  --mega-header-color-social-medial-hover: rgba(240, 242, 245, 0.5);
  --mega-header-padding-tb-nav-expanded: 8px;
  --mega-header-padding-list-nav-expanded: 10px 24px;
  --mega-header-text-size-nav-expanded: 18px;
  --mega-header-line-height-nav-expanded: 28.8px;
  --mega-header-weight-nav-expanded: 500;
  --mega-header-height-list-nav-expanded: 27px;
  --mega-header-height-nav-expanded: 300px;
  --mega-header-grid-image-content: 24px 1fr;
  --mega-header-height-expaded-item: 47px;
  --mega-header-height-expaded-item-mobile: 40px;
  --mega-header-padding-expaded-item-mobile: 8px 26px;
  --mega-header-line-height: var(--f-h6-line-height);
  --paragraph-font-weight-big: 300;
}
.mega-header {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  /* display: none; */
  @include respond-to(">=xxl") {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__wrapper {
    height: 100%;
    width: 100%;
    background-color: var(--mega-headerbackground);
    /* width: 100vw; */
    justify-content: center;
    display: flex;
    @include respond-to("<=m") {
      width: 100%;
    }
    &__content {
      width: 100%;
      display: grid;
      @include respond-to(">=xl") {
        max-width: 1440px;
      }
      @media screen and (min-width: 2560px) {
        max-width: 1840px;
      }
      .logo-bar {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-auto-flow: column;
        align-items: center;
        padding: 0 var(--f-gutter-l);
        @include respond-to("<=m") {
          grid-template-columns: 1fr 24px;
          padding: 0 var(--f-gutter);
        }
        &.is-closed {
          .close,
          .search {
            display: none;
          }
          .search {
            @include respond-to(">m") {
              display: grid;
            }
          }
        }
        &.is-opened {
          .menu {
            display: none;
          }
          .close {
            display: unset;
            @include respond-to(">m") {
              display: none;
            }
          }
          .search {
            @include respond-to(">m") {
              display: grid;
            }
          }
        }
        &__content {
          &__image {
            padding: var(--mega-header-padding-logo) var(--f-gutter);
            @include respond-to("<=m") {
              display: grid;
              grid-template-columns: var(--mega-header-grid-image-content);
              padding-left: 0;
              padding-right: 0;
              justify-content: space-around;
              align-content: center;
            }
            a {
              .logo {
                width: 129px;
                height: 58px;
                justify-self: center;
              }
              @include respond-to("<=m") {
                display: grid;
                justify-content: center;
              }
              &:visited {
                color: inherit;
                background-color: inherit;
              }
              &:active {
                color: inherit;
                background-color: inherit;
              }
            }
            .close,
            .search,
            .menu {
              width: var(--mega-header-space-l);
              height: var(--mega-header-space-l);
              align-self: center;
              @include respond-to(">m") {
                display: none;
              }
            }
          }
          &__searchbar {
            display: grid;
            justify-content: end;
            padding-right: var(--f-gutter);
            @include respond-to("<=m") {
              justify-content: start;
              width: 100%;
              /* display: none; */
              padding: 0;
            }
          }
        }
        &--searchbar {
          display: grid;
          align-items: center;
          grid-auto-flow: column;
          gap: var(--mega-header-gap-searchbar);
          padding: var(--mega-header-padding-searchbar);
          border-radius: var(--mega-header-border-searchbar);
          background-color: var(--color-neutral-dark-mode-03);
          p {
            min-width: var(--mega-header-width-searchbar);
            margin-bottom: 0;
            /* line-height: var(--mega-header-line-height-searchbar); */
            /* height: var(--mega-header-space); */
            @include respond-to("<=m") {
              width: 100%;
              display: none;
            }
          }
          @include respond-to("<=m") {
            background-color: var(--mega-headerbackground);
            padding: 0;
          }
          img {
            @include respond-to("<=m") {
              width: 24px;
              height: auto;
            }
          }
        }
      }
      .nav {
        display: grid;
        grid-auto-flow: column;
        padding: 0 var(--f-gutter);
        grid-template-columns: repeat(var(--scrt-megamenu-columns), 1fr);
        margin-bottom: 0;
        @include respond-to("<=m") {
          grid-auto-flow: row;
          grid-template-columns: 1fr;
          padding: 0;
          display: none;
        }
        &__content {
          display: grid;
          grid-auto-flow: column;
          gap: var(--mega-header-gap-nav);
          padding: 8px var(--f-gutter-l);
          align-items: center;
          justify-content: start;
          transition: 0.2s ease;
          margin-bottom: 0;
          @include respond-to("<=m") {
            padding: var(--f-gutter);
          }
          a {
            margin-bottom: 0;
            width: fit-content;
            color: var(--color-analog-primary-white);
            font-family: var(--f-default-headers-font);
            font-weight: 600;
          }
          &__chevron {
            transition: 0.2s ease;
            transform: rotate(0);
            &.arrow-up {
              transform: rotate(180deg);
            }
          }
          &:hover {
            cursor: pointer;
            a {
              color: var(--mega-header-color-nav-exanded-hover);
            }
          }
        }
      }
    }
    &__expanded {
      height: 100%;
      /* width: 100vw; */
      width: 100%;
      justify-content: center;
      display: flex;
      background-color: var(--mega-header-background-nav-expanded);
      @include respond-to("<=m") {
        position: absolute;
        top: 67px;
        left: 0;
        width: 100%;
        scrollbar-width: none;
        overflow-y: scroll;
        overflow: auto;
        scroll-behavior: smooth;
        // height: calc(100vh - (var(--alert-height-mobile) + 68px));
        height: calc(100vh - (67px + var(--ab-height)));
        padding-bottom: 0;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      &__content {
        width: 100%;
        display: grid;
        background-color: var(--mega-header-background-nav-expanded);
        padding-bottom: var(--f-gutter);
        @include respond-to(">=xl") {
          max-width: 1440px;
        }
        @media screen and (min-width: 2560px) {
          max-width: 1840px;
        }
      }
      .nav {
        &__expanded {
          display: grid;
          grid-auto-flow: column;
          padding: var(--mega-header-padding-tb-nav-expanded) var(--f-gutter);
          grid-template-columns: repeat(var(--scrt-megamenu-columns), 1fr);
          background-color: var(--mega-header-background-nav-expanded);
          /* min-height: var(--mega-header-height-nav-expanded); */
          @include respond-to("<=m") {
            grid-auto-flow: row;
            grid-template-columns: 1fr;
            height: auto;
            padding: 0;
          }
          &__content {
            padding: 0;
            margin: 0;
            display: grid;
            height: fit-content;
            gap: 20px;
            padding-top: 11px;
            &__title {
              padding: var(--f-gutter);
              font-weight: 600;
              margin-bottom: 0;
              @include respond-to(">m") {
                display: none;
              }
            }
            &__item {
              /* padding: var(--mega-header-padding-list-nav-expanded); */
              margin-bottom: 0;
              /* height: var(--mega-header-height-expaded-item); */
              padding-left: 24px;
              @include respond-to("<=m") {
                padding: var(--mega-header-padding-expaded-item-mobile);
                height: var(--mega-header-height-expaded-item-mobile);
              }
              &__link {
                color: var(--mega-header-color-nav-exanded) !important;
                line-height: var(--mega-header-line-height-nav-expanded);
                font-weight: 400;
                font-size: var(--mega-header-text-size-nav-expanded);
                /* height: var(--mega-header-height-list-nav-expanded); */
                &:hover {
                  color: var(--mega-header-color-nav-exanded-hover) !important;
                  height: var(--mega-header-space-l);
                }
                @include respond-to("<=m") {
                  line-height: var(--mega-header-line-height);
                }
              }
            }
          }
        }
        &__social-media {
          display: grid;
          justify-content: end;
          background-color: var(--mega-header-background-nav-expanded);
          padding: 0 16px;
          padding-top: 11px;
          @include respond-to("<=m") {
            justify-content: space-around;
            padding: var(--f-gutter);
            background-color: var(--mega-headerbackground);
            width: 100vw;
          }
          @include respond-to(">=m") {
            width: 100%;
          }
          .title {
            color: var(--mega-header-color-social-medial-hover);
            @include respond-to("<=m") {
              display: none;
            }
          }
          p,
          a {
            margin-bottom: 0;
            font-family: var(--f-default-headers-font);
            font-weight: var(--paragraph-font-weight-big);
            img {
              color: var(--mega-header-color-social-media-icon);
            }
            span {
              color: var(--mega-header-color-social-medial);
            }
          }
          &__content {
            display: grid;
            grid-auto-flow: column;
            gap: var(--f-gutter);
            /* padding-right: var(--f-gutter); */
            @include respond-to("<=m") {
              padding-right: 0;
              justify-content: space-around;
              width: 100vw;
            }
          }
          &__icon-content {
            a {
              display: grid;
              grid-auto-flow: column;
              gap: var(--mega-header-gap-social-media);
              height: 24px;
              display: grid;
              align-content: center;
              line-height: var(--mega-header-line-height);
              &:hover {
                color: var(--mega-header-color-social-medial-hover);
              }
              span {
                height: 24px;
                @include respond-to("<=m") {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
  &__overlay {
    // background: deepskyblue;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    inset: 0px;
    transition-property: opacity;
    backdrop-filter: blur(0.25em);
    animation: 75ms ease-in;
  }
}

.slide-megaheader-enter-active,
.slide-megaheader-leave-active {
  // opacity: 1;
  transform: translateY(0px);
  // transition: opacity 0.5s;
  transition: 0.5s ease;
}
.slide-megaheader-enter,
.slide-megaheader-leave-to {
  transform: translateY(-110px);
  transition: 0.5s ease;
  // opacity: 0;
}
</style>
