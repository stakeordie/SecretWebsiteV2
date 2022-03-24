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
                v-on:click.prevent="openMenuFromMobile"
              />
              <img
                src="../assets/icon-close.svg"
                alt="close icon"
                class="close"
                @click.prevent="openMenuFromMobile"
              />
              <g-link to="/">
                <img
                  @click="linkCloseMenu"
                  src="../assets/new-secret-logo.svg"
                  alt="secret network logo"
                  class="logo"
                />
              </g-link>
            </div>

            <div class="logo-bar__content__menu">
              <ul class="nav">
                <li
                  class="nav__content"
                  v-for="(nav, index) in megaMenuItems"
                  :key="index"
                  @click.prevent="toggleMegaMenu(index)"
                >
                  <a href="/">{{ nav.title }}</a>
                  <img
                    class="nav__content__chevron"
                    src="../assets/icon-chevron-down.svg"
                    alt="arrow down icon"
                  />
                </li>
              </ul>
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
            <div class="logo-bar__content__btnSrct">
              <button @click.prevent="redirectAboutSrct">
                <img src="../assets/logo-scrt.svg" alt="" />
                <p>GET SCRT</p>
              </button>
            </div>
          </div>
          <!-- nav items HEADINGS DESKTOP -->
        </div>
      </div>

      <!-- expanded -->
      <div class="mega-header__wrapper__expanded" v-if="megaMenuIsOpen">
        <div class="mega-header__wrapper__expanded__content">
          <div class="nav__expanded">
            <ul
              class="nav__expanded__content"
              :class="{ hidden__submenu: subMenuIndex != index }"
              v-for="(nav, index) in megaMenuItems"
              :key="index"
            >
              <div class="nav__expanded__content__titles">
                <div
                  class="nav__expanded__content__titles__content"
                  @click.prevent="openSubMenu(index)"
                >
                  <div class="nav__expanded__content__titles__content__name">
                    <img :src="nav.icon.url" alt="" />
                    <!-- <img src="../assets/badge.svg" alt="" /> -->
                    <h6>{{ nav.title }}</h6>
                  </div>
                  <img
                    class="nav__expanded__content__chevron"
                    :class="{ arrow_up: subMenuIndex == index }"
                    src="../assets/icon-chevron-down.svg"
                    alt="arrow down icon"
                  />
                </div>
              </div>

              <li
                class="nav__expanded__content__item"
                :class="{
                  hidden__submenu: subMenuIndex != index,
                }"
              >
                <div
                  class="nav__expanded__content__item__cards"
                  :class="{
                    firtsEcoSub: index == 2 && indexSec == 0,
                    lastEcoSub: index == 2 && indexSec == 3,
                  }"
                  v-for="(sec, indexSec) in nav.nav_items"
                  :key="indexSec"
                >
                  <span
                    v-if="sec.sub_category != ''"
                    class="nav__expanded__content__section"
                    >{{ sec.sub_category }}
                    <hr />
                  </span>
                  <span
                    v-else
                    class="nav__expanded__content__section emptytitle"
                    >-
                    <hr />
                  </span>
                  <div
                    class="nav__expanded__content__container"
                    v-for="(secItem, indexItem) in sec.sub_category_nav_item"
                    :key="indexItem"
                  >
                    <g-link
                      v-if="secItem.nav_item.display_on_header"
                      :to="
                        secItem.nav_item.page
                          ? secItem.nav_item.page.route
                          : secItem.nav_item.external_link
                      "
                    >
                      <div
                        @click="linkCloseMenu"
                        class="nav__expanded__content__item__desc"
                      >
                        <div class="nav__expanded__content__item__img">
                          <img
                            v-if="secItem.nav_item.icon != null"
                            :src="secItem.nav_item.icon.url"
                            alt=""
                          />
                          <img v-else src="../assets/badge-black.svg" alt="" />
                        </div>
                        <div
                          class="nav__expanded__content__item__textcontainer"
                        >
                          <div
                            class="nav__expanded__content__item__desc__title"
                          >
                            <span>{{ secItem.nav_item.text }}</span>
                          </div>
                          <div
                            class="nav__expanded__content__item__desc__descr"
                          >
                            <span>{{ secItem.nav_item.description }}</span>
                          </div>
                        </div>
                      </div>
                    </g-link>
                  </div>
                </div>
              </li>
            </ul>
            <div class="nav__expanded__content__btnSrct">
              <button @click.prevent="redirectAboutSrct">
                <img src="../assets/logo-scrt.svg" alt="" />
                <p>GET SCRT</p>
              </button>
            </div>
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
      miniMenuIsOpen: false,
      subMenuIndex: -1,
    };
  },
  methods: {
    scrollPosition(e) {
      let lastScrollTop = 0;
      window.addEventListener(
        "scroll",
        () => {
          if (!this.megaMenuIsOpen) {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop && st > 88) {
              this.scrollingDown = true;
            } else {
              this.scrollingDown = false;
            }
            lastScrollTop = st <= 0 ? 0 : st;
          }
        },
        false
      );
    },
    resizeWindow() {
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 1200) {
          if (this.megaMenuIsOpen && this.subMenuIndex == -1) {
            this.megaMenuIsOpen = false;
          }
        }
      });
    },
    megaMenuColumns() {
      const body = document.querySelector("body");
      body.setAttribute(
        "style",
        `--scrt-megamenu-columns:${this.columns.length}`
      );
    },
    toggleMegaMenu(index) {
      this.megaMenuIsOpen = false;
      const body = document.querySelector("body");
      if (index != this.subMenuIndex) {
        this.subMenuIndex = index;
        this.changeNavElementsToActive(true, index);
        this.megaMenuIsOpen = true;
      } else {
        this.subMenuIndex = -1;
        this.changeNavElementsToActive(false, index);
        this.megaMenuIsOpen = false;
      }

      this.megaMenuIsOpen
        ? body.classList.add("freezed")
        : body.classList.remove("freezed");
    },
    changeNavElementsToActive(active, index) {
      const navEl = document.querySelectorAll(".nav__content");
      const arrow = document.querySelectorAll(".nav__content__chevron");
      if (active) {
        navEl.forEach((el) => {
          el.classList.remove("activeNav");
        });
        arrow.forEach((el) => {
          el.classList.remove("arrow-up");
        });
        navEl[index].classList.add("activeNav");
        arrow[index].classList.add("arrow-up");
      } else {
        navEl[index].classList.remove("activeNav");
        arrow[index].classList.remove("arrow-up");
      }
    },
    openSubMenu(index) {
      if (index == this.subMenuIndex) {
        this.subMenuIndex = -1;
        this.changeNavElementsToActive(false, index);
      } else {
        this.subMenuIndex = index;
        this.changeNavElementsToActive(true, index);
      }
    },
    openMenuFromMobile() {
      this.subMenuIndex = -1;
      if (this.megaMenuIsOpen) {
        this.isMobileOpen = false;
        this.megaMenuIsOpen = !this.megaMenuIsOpen;
      } else {
        this.isMobileOpen = true;
        this.megaMenuIsOpen = !this.megaMenuIsOpen;
      }
    },
    linkCloseMenu() {
      this.megaMenuIsOpen = false;
      const body = document.querySelector("body");
      const navEl = document.querySelectorAll(".nav__content");
      const arrow = document.querySelectorAll(".nav__content__chevron");

      this.subMenuIndex = -1;
      body.classList.remove("freezed");
      navEl.forEach((el) => {
        el.classList.remove("activeNav");
      });
      arrow.forEach((el) => {
        el.classList.remove("arrow-up");
      });
    },
    redirectAboutSrct() {
      this.linkCloseMenu();
      this.$router.push("/about/about-scrt");
    },
    mapNavArray(array) {
      array.forEach((c) => {
        let result = c.nav_items.reduce(function (r, a) {
          r[a.sub_category] = r[a.sub_category] || [];
          r[a.sub_category].push(a);

          return r;
        }, Object.create(null));

        c.nav_items = [];

        Object.entries(result).forEach(([key, value]) => {
          if (key == "Join the Community") {
            let firstArray = value.filter((e, i) => {
              return i < 3;
            });

            let secondArray = value.filter((e, i) => {
              return i > 2;
            });

            c.nav_items.push({
              sub_category: key,
              sub_category_nav_item: firstArray,
            });
            c.nav_items.push({
              sub_category: "",
              sub_category_nav_item: secondArray,
            });
          } else {
            c.nav_items.push({
              sub_category: key,
              sub_category_nav_item: value,
            });
          }
        });
      });
    },
  },

  computed: {
    chevron() {
      return this.megaMenuIsOpen ? "arrow-up" : "arrow-down";
    },
    burger() {
      return this.megaMenuIsOpen ? "is-opened" : "is-closed";
    },
    megaMenuItems() {
      const neWArray = JSON.parse(JSON.stringify(this.$static.navHeader));
      const content = neWArray.edges.map((it) => it.node.nav_groups);

      this.columns = content[0];
      this.mapNavArray(this.columns);

      return this.columns;
    },
  },
  mounted() {
    this.resizeWindow();
    this.megaMenuColumns();
    if (process.isClient) {
      this.scrollPosition();
    }
  },
  beforeDestroy() {
    this.scrollPosition();
  },
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
          icon {
            url
            name
          }
          nav_items {
            sub_category
            nav_item {
              text
              id
              display_on_header
              display_on_footer
              description
              icon {
                url
              }
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
        grid-template-columns: 150px 1fr auto auto;
        grid-auto-flow: column;
        align-items: center;

        @include respond-to("<=l") {
          grid-template-columns: 1fr 24px;
          padding: 0 var(--f-gutter);
        }
        &.is-closed {
          .close,
          .search {
            display: none;
          }
          .search {
            @include respond-to(">l") {
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
            @include respond-to(">l") {
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
            @include respond-to("<=l") {
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
              @include respond-to("<=l") {
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
              @include respond-to(">l") {
                display: none;
              }
            }
          }
          &__menu {
            display: grid;
          }
          &__searchbar {
            display: grid;
            @include respond-to("<xl") {
              justify-content: start;
              width: 100%;
              display: none;
              padding: 0;
            }
          }

          &__btnSrct {
            display: grid;

            @include respond-to("<=l") {
              display: none;
            }
            button {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0px 16px;
              background-color: var(--color-analog-primary-white);
              border-radius: 10px;
              gap: 8.8px;
              padding: 10px 16px;
              &:hover {
                background: #d7dde5;
              }

              img {
                width: 19.2px;
                height: 19.2px;
              }
              p {
                margin: 0;
                color: var(--color-analog-primary-black);
                font-family: var(--f-default-headers-font);
                font-size: 16px;
                font-weight: bold;
                white-space: nowrap;
              }
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
            @include respond-to("<=l") {
              width: 100%;
              display: none;
            }
          }
          @include respond-to("<=l") {
            background-color: var(--mega-headerbackground);
            padding: 0;
          }
          img {
            @include respond-to("<=l") {
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
        margin-bottom: 0;
        @include respond-to("<=l") {
          grid-auto-flow: row;
          grid-template-columns: 1fr;
          padding: 0;
          display: none;
        }
        &__content {
          display: grid;
          grid-auto-flow: column;
          gap: var(--mega-header-gap-nav);
          padding: 22px 0px;
          align-items: center;
          justify-content: center;
          transition: 0.2s ease;
          margin-bottom: 0;

          &.activeNav {
            background: var(--mega-header-background-nav-expanded);
            border-radius: 10px 10px 0px 0px;
          }
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
      border-radius: 0px 0px 10px 10px;
      @include respond-to("<=l") {
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
        @include respond-to("<=l") {
          padding-bottom: 0;
        }
        @media screen and (min-width: 2560px) {
          max-width: 1840px;
        }
        @include respond-to("<=l") {
          width: 100%;
        }
      }
      .nav {
        &__expanded {
          display: grid;
          grid-auto-flow: row;
          background-color: var(--mega-header-background-nav-expanded);
          /* min-height: var(--mega-header-height-nav-expanded); */
          @include respond-to("<=l") {
            display: flex;
            flex-direction: column;
            // padding: 0;
            padding-bottom: 160px;
          }
          &__content {
            padding: 0;
            margin: 0;
            display: grid;
            height: fit-content;
            gap: 20px;
            padding-top: 20px;
            &__chevron {
              transition: 0.2s ease;
              transform: rotate(0);
              &.arrow_up {
                transform: rotate(180deg);
              }
            }
            &.hidden__submenu {
              padding: 0px;
            }
            @include respond-to("<=l") {
              padding-top: 0px;
            }
            &__titles {
              background: black;
              @include respond-to(">l") {
                display: none;
              }
              &__content {
                display: flex;
                padding: 20px;
                justify-content: space-between;
                &__name {
                  display: flex;
                  gap: 12.36px;
                  h6 {
                    margin: 0;
                    font-size: 18px;
                  }
                }
              }
            }
            &__list {
              display: none;
            }
            &__title {
              padding: var(--f-gutter);
              font-weight: 600;
              margin-bottom: 0;
              @include respond-to(">m") {
                display: none;
              }
            }
            &__section {
              font-size: 18px;
              font-family: var(--f-default-headers-font);
              font-weight: 500;
              color: #b2bfcd;
              padding: 20px;
              hr {
                display: block;
                width: 100%;
                height: 3px;
                background: #303c4a;
                margin: 24px 0px 0px 0px;
              }
              &.emptytitle {
                color: var(--mega-header-background-nav-expanded);
              }
            }
            &__container {
              &:hover {
                border-radius: 10px;
                background-color: #303c4a;
              }
            }

            &__item {
              display: grid;
              gap: 37px;
              grid-template-columns: repeat(3, 1fr);
              /* padding: var(--mega-header-padding-list-nav-expanded); */
              margin-bottom: 0;
              /* height: var(--mega-header-height-expaded-item); */
              @include respond-to("<=m") {
                display: flex;
                flex-direction: column;
                padding: var(--mega-header-padding-expaded-item-mobile);
                height: fit-content;
              }
              @include respond-to("<=l") {
                padding: var(--mega-header-padding-expaded-item-mobile);
              }

              &__cards {
                &.firtsEcoSub {
                  @include respond-to(">=l") {
                    grid-row: 1 / 3;
                  }
                }
                &.lastEcoSub {
                  @include respond-to(">=l") {
                    grid-row: 1 / 3;
                    grid-column: 3/4;
                  }
                }
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
              &__textcontainer {
                display: flex;
                flex-direction: column;
                gap: 4px;
              }
              &__desc {
                display: flex;
                align-items: center;
                gap: 12.08px;
                padding: 16px;

                &__title {
                  font-weight: 500;
                  font-size: 18px;
                  font-family: var(--f-default-headers-font);
                  color: #fff;
                  line-height: 24px;
                }
                &__descr {
                  font-family: var(--f-default-headers-font);
                  font-weight: normal;
                  font-size: 16px;
                  color: #b2bfcd;
                  @include respond-to("<=l") {
                    display: none;
                  }
                }
              }

              &__img {
                align-self: flex-start;
                img {
                  width: 24px;
                  height: 24px;
                }
              }

              &.hidden__submenu {
                display: none;
              }
            }
            &__btnSrct {
              position: fixed;
              bottom: 83px;
              right: 16px;
              @include respond-to(">=xl") {
                display: none;
              }
              button {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0px 16px;
                background-color: var(--color-analog-primary-white);
                border-radius: 10px;
                gap: 8.8px;
                padding: 10px 16px;
                &:hover {
                  background: #d7dde5;
                }
                img {
                  width: 19.2px;
                  height: 19.2px;
                }
                p {
                  margin: 0;
                  color: var(--color-analog-primary-black);
                  font-family: var(--f-default-headers-font);
                  font-size: 16px;
                  font-weight: bold;
                  white-space: nowrap;
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
          @include respond-to("<=l") {
            justify-content: space-around;
            padding: 20px;
            background-color: var(--mega-headerbackground);
            width: 100vw;
            bottom: 0;
            position: fixed;
          }
          @include respond-to(">l") {
            display: none;
          }
          .title {
            color: var(--mega-header-color-social-medial-hover);
            @include respond-to("<=l") {
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
            @include respond-to("<=l") {
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
                @include respond-to("<=l") {
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
