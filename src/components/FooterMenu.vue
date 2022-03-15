<template>

    <div class="mega-footer">
      
      <!-- expanded -->
      <div class="mega-footer__wrapper__expanded">
        <div class="mega-footer__wrapper__expanded__content">
          <div class="nav__expanded">
            <ul
              class="nav__expanded__content"
              v-for="(nav, index) in footerMenuItems"
              :key="index"
            >
              <h6 class="nav__expanded__content__title">{{ nav.title }}</h6>
              <li
                class="nav__expanded__content__item"
                v-for="(it, index) in nav.nav_items"
                :key="index"
              >
              <!-- <span>{{it.nav_item.external_link}}</span> -->
              <!-- <span>{{it.nav_item.page.route}}</span> -->

                <g-link 
                  class="nav__expanded__content__item__link"
                  :to="it.nav_item.page ? it.nav_item.page.route : it.nav_item.external_link"
                  ><span >{{ it.nav_item.text }}</span><img v-if="it.nav_item.external_link" class="nav__expanded__content__item__link-icon" src ="../assets/icon-arrow-external-blue.svg" alt="External Link"/></g-link>

              </li>
            </ul>
          </div>
          <!-- <div class="nav__social-media">
            <div class="nav__social-media__content">
              <p class="title">Connect with Us:</p>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://forum.scrt.network/"
                  target="_blank"
                  alt="forums"
                >
                  <img src="../assets/message-circle.svg" alt="message image" />
                  <span>Forums</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://discord.com/invite/SJK32GY"
                  target="_blank"
                  alt="discord"
                >
                  <img src="../assets/discord.svg" alt="discord image" />
                  <span>Discord</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://t.me/SCRTcommunity"
                  target="_blank"
                  alt="telegram"
                >
                  <img src="../assets/telegram.svg" alt="telegram image" />
                  <span>Telegram</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://twitter.com/SecretNetwork"
                  target="_blank"
                  alt="twitter"
                >
                  <img src="../assets/twitter.svg" alt="twitter image" />
                  <span>Twitter</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw"
                  target="_blank"
                  alt="youtube"
                >
                  <img src="../assets/youtube.svg" alt="youtube image" />
                  <span>Youtube</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://www.instagram.com/scrtnetwork/"
                  target="_blank"
                  alt="instagram"
                >
                  <img
                    src="../assets/icon-social-instagram.svg"
                    alt="instagram image"
                  />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

</template>

<script>
export default {
  computed: {
    footerMenuItems() {
      const content = this.$static.navFooter.edges.map(
        (it) => it.node.nav_groups
      );
      this.footerMenu = content[0];
      // console.log(this.footerMenu);
      return content[0];
    },
  },
};
</script>

<static-query>
  query {
  navFooter: allStrapiNavHeader {
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
.mega-footer {
  // position: fixed;
  // left: 0;
  // right: 0;
  // width: 100%;
  // z-index: 999;
  /* display: none; */
  @include respond-to(">=xxl") {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__wrapper {
    height: 100%;
    width: 100%;
    // background-color: var(--mega-headerbackground);
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
            // color: var(--color-analog-primary-white);
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
      // background-color: var(--mega-header-background-nav-expanded);
      @include respond-to("<=m") {
        // position: absolute;
        // top: 67px;
        // left: 0;
        width: 100%;
        // scrollbar-width: none;
        // overflow-y: scroll;
        // overflow: auto;
        scroll-behavior: smooth;
        // height: calc(100vh - (var(--alert-height-mobile) + 68px));
        // height: calc(100vh - (67px + var(--ab-height)));
        padding-bottom: 0;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      &__content {
        width: 100%;
        display: grid;
        // background-color: var(--mega-header-background-nav-expanded);
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
          // background-color: var(--mega-header-background-nav-expanded);
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
                padding-left: 24px;
              @include respond-to(">m") {
                // display: none;
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
                // color: var(--mega-header-color-nav-exanded) !important;
                display: grid;
                grid-template-columns: auto 1fr;
                align-items: center;
                gap: var(--f-gutter-xxs);
                line-height: var(--mega-header-line-height-nav-expanded);
                font-weight: 400;
                font-size: var(--mega-header-text-size-nav-expanded);
                height: var(--mega-header-space-l);
                /* height: var(--mega-header-height-list-nav-expanded); */
                &:hover {
                  color: var(--mega-header-color-nav-exanded-hover) !important;
                  height: var(--mega-header-space-l);
                }
                @include respond-to("<=m") {
                  line-height: var(--mega-header-line-height);
                }
              }
              &__link-icon {
                transform: translateY(-2px);
              }
            }
          }
        }
        &__social-media {
          display: grid;
          justify-content: end;
          // background-color: var(--mega-header-background-nav-expanded);
          padding: 0 16px;
          padding-top: 11px;
          @include respond-to("<=m") {
            justify-content: space-around;
            padding: var(--f-gutter);
            // background-color: var(--mega-headerbackground);
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
// .footer-nav {
//   // background: green;
//   display: grid;
//   grid-template-columns: repeat(var(--scrt-megamenu-columns), 1fr);
//   margin-bottom: var(--f-gutter-xxl);
//   gap: 60px;
//   // padding: 8px var(--f-gutter-l);

//   ul {
//     // display:grid;
//     // grid-auto-flow: column;
//     display: grid;
//     grid-auto-flow: column;
//     padding: 0 var(--f-gutter);
//     grid-template-columns: repeat(var(--scrt-megamenu-columns), 1fr);
//     margin-bottom: 0;
//     .nav__expanded__content__title {
//       display: flex;
//       img {
//         opacity: 0;
//       }
//     }

//     li {
//       display: grid;
//       grid-auto-flow: row;
//       // padding: 8 px var(--f-gutter-l);
//       // align-items: center;
//       // justify-content: start;
//     }
//   }

//   @include respond-to("<=s") {
//     grid-template-columns: 1fr;
//     gap: var(--f-gutter-xxl);
//   }

//   nav {
//     display: grid;
//     align-content: start;
//     gap: var(--f-gutter);
//     padding-right: var(--f-gutter);

//     @include respond-to("<=s") {
//       text-align: center;
//       padding-right: 0;
//       align-items: center;
//     }

//     .footer-nav-title {
//       color: var(--theme-fg);
//       margin-bottom: 0;
//       // width: fit-content;
//       // display: flex;
//     }

//     a {
//       line-height: 1.5;
//       text-decoration: none;
//       // display: flex;
//       align-items: center;
//       gap: var(--f-gutter-s);

//       span {
//         display: inline-block;
//         width: 90%;

//         @include respond-to("<=s") {
//           width: 100%;
//         }
//       }
//     }
//   }
// }
</style>
