<template>
  <header>
    <!-- // first block -->
    <div class="mega-header">
      <div class="mega-header__logo-bar">
        <div class="mega-header__logo-bar__content__image">
          <img src="./assets/icon-close.svg" alt="close icon" class="close">
          <img src="./assets/scrt-logo--white.svg" alt="secret network logo" />
          <img src="./assets/search-icon--small.svg" alt="close icon" class="search">
        </div>
        <div class="mega-header__logo-bar__content__searchbar">
          <div class="mega-header__logo-bar--searchbar">
            <img src="./assets/search-icon.svg" alt="" />
            <span>Search</span>
          </div>
        </div>
      </div>
      <!-- nav items HEADINGS DESKTOP -->
      <ul class="mega-header__nav">
        <li
          class="mega-header__nav__content"
          v-for="(nav, index) in navigation"
          :key="index"
        >
          <a v-on:click="toggleMegaMenu" href="/">{{ nav.title }}</a>
          <img 
          :class="chevron"
          class="mega-header__nav__content__chevron" src="./assets/icon-chevron-down.svg" alt="arrow down icon" />
        </li>
      </ul>
    </div>
    <!-- expanded -->
    <div class="wrapper" v-if="megaMenuIsOpen">
      <div class="mega-header__nav__expanded">
        <ul
          class="mega-header__nav__expanded__content"
          v-for="(nav, index) in navigation"
          :key="index"
        >
          <li
            class="mega-header__nav__expanded__content__item"
            v-for="(it, index) in nav.nav_items"
            :key="index"
          >
            <a
              class="mega-header__nav__expanded__content__item__link"
              :href="it.nav_item.page.route"
              >{{ it.nav_item.text }}</a
            >
          </li>
        </ul>
      </div>
      <div class="mega-header__social-media">
        <div class="mega-header__social-media__content">
          <p class="title">Connect with Us:</p>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/message-circle.svg" alt="message image" />
            <a href="" alt="forums">Forums</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/discord.svg" alt="discord image" />
            <a href="" alt="discord">Discord</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/telegram.svg" alt="telegram image" />
            <a href="" alt="telegram">Telegram</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/twitter.svg" alt="twitter image" />
            <a href="" alt="twitter">Twitter</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/youtube.svg" alt="youtube image" />
            <a href="" alt="youtube">Youtube</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/icon-social-instagram.svg" alt="instagram image" />
            <a href="" alt="instagram">Instagram</a>
          </div>
        </div>
      </div>
      <!-- Social media mobile -->
      <div class="mega-header__mobile__social-media">
        <div class="mega-header__mobile__social-media__content">
          <div class="mega-header__mobile__social-media__icon-content">            
            <a href="" alt="discord"><img src="./assets/discord.svg" alt="discord image" /></a>
          </div>
          <div class="mega-header__mobile__social-media__icon-content">            
            <a href="" alt="telegram"><img src="./assets/telegram.svg" alt="telegram image" /></a>
          </div>
          <div class="mega-header__mobile__social-media__icon-content">        
            <a href="" alt="twitter"><img src="./assets/twitter.svg" alt="twitter image" /></a>
          </div>
          <div class="mega-header__mobile__social-media__icon-content">            
            <a href="" alt="instagram"><img src="./assets/icon-social-instagram.svg" alt="instagram image" /></a>
          </div>
          <div class="mega-header__mobile__social-media__icon-content">            
            <a href="" alt="youtube"><img src="./assets/youtube.svg" alt="youtube image" /></a>
          </div>
          <div class="mega-header__mobile__social-media__icon-content">
            <a href="" alt="forums"><img src="./assets/message-circle.svg" alt="message image" /></a>
          </div>          
        </div>
      </div>      
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          title: "Learn",
          nav_items: [
            {
              nav_item: {
                text: "About Secret Network",
                page: {
                  name: "About the Network",
                  title: "About the Network",
                  route: "/about/about-secret-network",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "About Secret Network",
            },
            {
              nav_item: {
                text: "About Secret (SCRT)",
                page: {
                  name: "About SCRT",
                  title: "About SCRT",
                  route: "/about/about-scrt",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "About Secret (SCRT)",
            },
            {
              nav_item: {
                text: "Our Blog",
                page: {
                  name: "Secret Network Blog",
                  title: "Secret Network Blog",
                  route: "/blog",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Our Blog",
            },
            {
              nav_item: {
                text: "Latest Media",
                page: {
                  name: "Media Content",
                  title: "Media Content",
                  route: "/media/features",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Latest Media",
            },
            {
              nav_item: {
                text: "FAQ",
                page: {
                  name: "FAQ",
                  title: "FAQ",
                  route: "/about/faq",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "FAQ",
            },
          ],
        },
        {
          title: "Get Involved",
          nav_items: [
            {
              nav_item: {
                text: "Become a Secret Agent",
                page: {
                  name: "Become a Secret Agent",
                  title: "Become a Secret Agent",
                  route: "/get-involved/become-secret-agent",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Become a Secret Agent",
            },
            {
              nav_item: {
                text: "Join an International Community",
                page: {
                  name: "International Communities",
                  title: "International Communities",
                  route: "/get-involved/international-communities",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Join an International Community",
            },
          ],
        },
        {
          title: "Develop",
          nav_items: [
            {
              nav_item: {
                text: "Developer Resources",
                page: {
                  name: "How to get started?",
                  title: "How to get started?",
                  route: "/developers",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Developer Resources",
            },
          ],
        },
        {
          title: "Explore",
          nav_items: [
            {
              nav_item: {
                text: "DApps",
                page: {
                  name: "Explore the Ecosystem",
                  title: "Explore the Ecosystem",
                  route: "/ecosystem/overview",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "DApps",
            },
            {
              nav_item: {
                text: "Tools",
                page: {
                  name: "Explore the Ecosystem",
                  title: "Explore the Ecosystem",
                  route: "/ecosystem/overview",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Tools",
            },
            {
              nav_item: {
                text: "Wallets",
                page: {
                  name: "Explore the Ecosystem",
                  title: "Explore the Ecosystem",
                  route: "/ecosystem/overview",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Wallets",
            },
            {
              nav_item: {
                text: "Exchanges",
                page: {
                  name: "Explore the Ecosystem",
                  title: "Explore the Ecosystem",
                  route: "/ecosystem/overview",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Exchanges",
            },
            {
              nav_item: {
                text: "Contributors",
                page: {
                  name: "Explore the Ecosystem",
                  title: "Explore the Ecosystem",
                  route: "/ecosystem/overview",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Contributors",
            },
            {
              nav_item: {
                text: "Ecosystem Roadmap",
                page: {
                  name: "Ecosystem Roadmap",
                  title: "Ecosystem Roadmap",
                  route: "/ecosystem/ecosystem-roadmap",
                  locale: "en",
                },
                locale: "en",
                external_link: "",
              },
              sort_name: "Ecosystem Roadmap",
            },
          ],
        },
      ],
      megaMenuIsOpen: false,
    };
  },
  methods: {
    toggleMegaMenu(e) {
      e.preventDefault();
      this.megaMenuIsOpen = !this.megaMenuIsOpen
    }
  },
  computed: {
    chevron() {
        return this.megaMenuIsOpen ? 'arrow-up' : '';
    }
  }
};
</script>

<style lang="scss">
@import "../sass/_text.scss";
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/_respond-to.scss";
:root {
  --mega-headerbackground: var(--color-analog-primary-black);
  --mega-header-padding-logo: 5px;
  --mega-header-border-searchbar: 4px;
  --mega-header-padding-searchbar: 10px;
  --mega-header-gap-searchbar: 10px;
  --mega-header-width-searchbar: 219px;
  --mega-header-gap-nav: 10px;
  --mega-header-background-nav-expanded: rgba(43, 52, 64, 1);
  --mega-header-color-nav-exanded: rgba(240, 242, 245, 1);
  --mega-header-color-nav-exanded-hover: rgba(178, 190, 204, 1);
  --mega-header-gap-social-media: 4px;
  --mega-header-color-social-medial: rgba(240, 242, 245, 1);
  --mega-header-color-social-medial-hover: rgba(240, 242, 245, 0.5);
  --mega-header-padding-tb-nav-expanded: 8px;
  --mega-header-padding-list-nav-expanded: 10px 24px;
  --mega-header-text-size-nav-expanded: 18px;
  --mega-header-line-height-nav-expanded: 28.8px;
  --mega-header-weight-nav-expanded: 500;
  --mega-header-height-list-nav-expanded: 29px;
  --mega-header-height-nav-expanded: 300px;
}
.mega-header {
  height: 100%;
  background-color: var(--mega-headerbackground);
  &__logo-bar {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;
    align-items: center;
    padding: 0 var(--f-gutter-l);
    @include respond-to("<=m") {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
      padding: 0 var(--f-gutter);
    }
    &__content {
      &__image {
        padding: var(--mega-header-padding-logo) var(--f-gutter);
        @include respond-to("<=m") {
          display: grid;
          grid-template-columns: auto 1fr auto;
          padding-left: 0;
          padding-right: 0;
          justify-content: space-around;
          align-content: center;
        }
        img {
          width: 130.67px;
          height: 58px;
          justify-self: center;
        }
        .close, .search {
          width: 24px;
          height: 24px;
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
          display: none;
        }
      }
    }
    &--searchbar {
      display: grid;
      grid-auto-flow: column;
      gap: var(--mega-header-gap-searchbar);
      padding: var(--mega-header-padding-searchbar);
      border-radius: var(--mega-header-border-searchbar);
      background-color: var(--color-neutral-dark-mode-03);
      span {
        min-width: var(--mega-header-width-searchbar);
        margin-bottom: 0;
        @include respond-to("<=m") {
          width: 100%;
        }
      }
    }
  }
  &__nav {
    display: grid;
    grid-auto-flow: column;
    padding: 0 var(--f-gutter);
    grid-template-columns: repeat(4, 1fr);
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
      padding: var(--f-gutter) var(--f-gutter-l);
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
        transform: rotate(180deg);
        &.arrow-up {
          transform: rotate(0deg);
        }
      }
    }

    &__expanded {
      display: grid;
      grid-auto-flow: column;
      padding: var(--mega-header-padding-tb-nav-expanded) var(--f-gutter);
      grid-template-columns: repeat(4, 1fr);
      background-color: var(--mega-header-background-nav-expanded);
      height: var(--mega-header-height-nav-expanded);
      @include respond-to("<=l") {
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        height: 100%;
        padding: 0;
      }
      &__content {
        padding: 0;
        margin: 0;
        &__item {
          padding: var(--mega-header-padding-list-nav-expanded);
          margin-bottom: 0;
          @include respond-to("<=m") {
            padding: 8px 26px;
          }
          &__link {
            color: var(--mega-header-color-nav-exanded);
            font-family: var(--f-default-text-font);
            line-height: var(--mega-header-line-height-nav-expanded);
            font-weight: 500;
            font-size: var(--mega-header-text-size-nav-expanded);
            height: var(--mega-header-height-list-nav-expanded);
            &:hover {
              color: var(--mega-header-color-nav-exanded-hover);
            }
          }
        }
      }
    }
  }
  &__social-media {
    display: grid;
    justify-content: end;
    background-color: var(--mega-header-background-nav-expanded);    
    padding-bottom: var(--f-gutter);
    @include respond-to("<=m") {
      justify-content: start;
      padding: var(--f-gutter);
    }
    p,
    a {
      margin-bottom: 0;
      font-family: var(--f-default-headers-font);
      font-weight: var(--paragraph-font-weight-big);
      color: var(--mega-header-color-social-medial);
    }
    &__content {
      display: grid;
      grid-auto-flow: column;
      width: fit-content;
      gap: var(--f-gutter);
      padding-right: var(--f-gutter);
      @include respond-to("<=m") {
        grid-auto-flow: row;
        justify-content: start;
        padding-right: 0;
        display: none;
      }
    }
    &__icon-content {
      display: grid;
      grid-auto-flow: column;

      gap: var(--mega-header-gap-social-media);
      a {
        height: 100%;
        display: grid;
        align-content: center;
        &:hover {
          color: var(--mega-header-color-social-medial-hover);
        }
      }
    }
  }
  &__mobile {
    &__social-media {
    @include respond-to(">m") {
      display: none;
    }      
      &__content {
        display: grid;
        grid-auto-flow: column;
        height: 67px;
      }
      &__icon-content {
        display: grid;
        justify-content: center;
        align-content: center;
        img {
          display: block;
          margin: auto;
        }
      }      
    }
  }
}
</style>
