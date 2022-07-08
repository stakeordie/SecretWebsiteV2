<template>
  <simple-layout>
    <template #header>
      <alert-bar></alert-bar>
      <!-- <header-mega-menu> </header-mega-menu> -->
      <header-mega-menu-v2> </header-mega-menu-v2>
      
    </template>

    <column class="swirl-wrapper swirl-v1 swirl-v2">
      <block>
        <div class="swirl top v2">
          <themed-image>
            <img
              v-if="swirlSpecial"
              dark-colored
              light-colored
              class="special-mod"
              src="@/assets/swirl-layout-v2.svg"
              alt=""
            />
            <img
              v-if="!swirlSpecial"
              dark-colored
              light-colored
              src="@/assets/swirl-layout-v2.svg"
              alt=""
            />
            <img
              dark
              src="@/assets/swirl-layout-v2.svg"
              alt="swirl"
              width="100"
              height="100"
            />
          </themed-image>
        </div>
        <!-- <div class="swirl top v1">
          <themed-image>
            <img
              v-if="swirlSpecial"
              dark-colored
              light-colored
              class="special-mod"
              src="@/assets/swirl-special-color.svg"
              alt=""
            />
            <img
              v-if="!swirlSpecial"
              dark-colored
              light-colored
              src="@/assets/swirl-color-dark.svg"
              alt=""
            />
            <img
              dark
              src="@/assets/swirl-lines-dark.svg"
              alt="swirl"
              width="100"
              height="100"
            />
            <img
              light
              src="@/assets/swirl-lines-light.svg"
              alt="swirl"
              width="100"
              height="100"
            />
          </themed-image>
        </div> -->
      </block>
    </column>

    <page>
      <slot></slot>
    </page>

    <column v-if="swirlBottomIsVisible" class="swirl-wrapper-bottom swirl-v1 swirl-v2">
      <block>
        <div class="swirl bottom v2">
          <themed-image>
            <img
              v-if="swirlSpecial"
              dark-colored
              light-colored
              src="@/assets/swirl-special-color-inverted-v2.svg"
              alt="swirl"
              width="100"
              height="100"
            />
            <img
              v-if="!swirlSpecial"
              dark-colored
              light-colored
              src="@/assets/swirl-special-color-inverted-v2.svg"
              alt="swirl"
              width="100"
              height="100"
            />
            <img
              dark
              src="@/assets/swirl-special-color-inverted-v2.svg"
              alt="swirl"
              width="100"
              height="100"
            />
          </themed-image>
        </div>
        <!-- <div class="swirl bottom v1">
          <themed-image>
            <img
              v-if="swirlSpecial"
              dark-colored
              light-colored
              class="special-mod"
              src="@/assets/swirl-special-color-inverted.svg"
              alt=""
            />
            <img
              v-if="!swirlSpecial"
              dark-colored
              light-colored
              src="@/assets/swirl-color-dark.svg"
              alt="swirl"
              width="100"
              height="100"
            />
            <img
              dark
              src="@/assets/swirl-lines-dark.svg"
              alt="swirl"
              width="100"
              height="100"
            />
            <img
              light
              src="@/assets/swirl-lines-light.svg"
              alt="swirl"
              width="100"
              height="100"
            />
          </themed-image>
        </div> -->
      </block>
    </column>

    <template #footer>
      <simple-footer :class="swirlBottomIsVisible" mode="full">
        <!-- <section class="footer-nav">
          <nav>
            <h6 class="footer-nav-title">Learn</h6>
            <g-link
              v-bind:key="index + link"
              v-for="(link, index) in linksFooterLearn"
              :to="$tp(link.path)"
              :target="link.target"
            >
              <span :class="{ 'icon icon-icon-arrow-external': link.external }">
                {{ link.title }}
              </span>
            </g-link>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Get Involved</h6>
            <g-link
              v-bind:key="index + link"
              v-for="(link, index) in linksFooterCommunity"
              :to="$tp(link.path)"
              :target="link.target"
            >
              <span
                :class="{ 'icon icon-icon-arrow-external': link.external }"
                >{{ link.title }}</span
              >
            </g-link>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Develop</h6>
            <g-link
              v-bind:key="index + link"
              v-for="(link, index) in linksFooterDevelopers"
              :to="$tp(link.path)"
              :target="link.target"
            >
              <span
                :class="{ 'icon icon-icon-arrow-external': link.external }"
                >{{ link.title }}</span
              >
            </g-link>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Explore</h6>
            <g-link
              v-bind:key="index + link"
              v-for="(link, index) in linksFooterEcosystem"
              :to="$tp(link.path)"
              :target="link.target"
            >
              <span
                :class="{ 'icon icon-icon-arrow-external': link.external }"
                >{{ link.title }}</span
              >
            </g-link>
          </nav>
        </section> -->
        <footer-menu> </footer-menu>
        <section class="footer-contact">
          <div class="social">
            <g-link :to="$tp(`/`)">
              <img
                class="scrt-logo"
                src="../assets/secretnetwork-logo-primary-white.svg"
                width="124"
                height="58"
              />
            </g-link>
            <nav class="social-navigation">
              <a href="https://forum.scrt.network/" target="blank" rel="noopener noreferrer">
                <img
                  src="@/assets/icon-social-forum.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://github.com/SecretFoundation/SecretWebsite"
                target="blank" rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-github.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a href="https://discord.com/invite/SJK32GY" target="blank" rel="noopener noreferrer">
                <img
                  src="@/assets/icon-social-discord.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a href="https://t.me/SCRTcommunity" target="blank" rel="noopener noreferrer">
                <img
                  src="@/assets/icon-social-telegram.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a href="https://twitter.com/SecretNetwork" target="blank" rel="noopener noreferrer">
                <img
                  src="@/assets/icon-social-twitter.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a href="https://www.instagram.com/scrtnetwork/" target="blank" rel="noopener noreferrer">
                <img
                  src="@/assets/icon-social-instagram.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw"
                target="blank" rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-youtube.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
            </nav>
            <div class="contribute-github">
              <p>
                <a
                  href="https://github.com/SecretFoundation/SecretWebsite"
                  target="blank" rel="noopener noreferrer"
                  >Contribute to scrt.network
                </a>
              </p>
              <a
                href="https://github.com/SecretFoundation/SecretWebsite"
                target="blank" rel="noopener noreferrer"
              >
                <img
                  src="../assets/icon-github.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
            </div>
            <g-link
              v-bind:key="index + link"
              v-for="(link, index) in linksForSocial"
              :to="$tp(link.path)"
              :target="link.target"
            >
              <span
                :class="{ 'icon icon-icon-arrow-external': link.external }"
                >{{ link.title }}</span
              >
            </g-link>
          </div>
          <div class="subscribe">
            <h3>
              <span>Subscribe</span> for <br />
              Secret Network updates
            </h3>
            <form
              action="https://network.us2.list-manage.com/subscribe/post?u=7a05e306cd4c801a88ddcb060&amp;id=889f1a33bc"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                placeholder="Your email"
                required
              />
              <button
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </simple-footer>
      <column class="legal" mode="full" number="1" number-m="1" number-s="1">
        <block class="rights-reserved">
          <p>© Secret Network. All Rights Reserved.</p>
          <nav class="documents">
            <a href="">Terms of Service</a>
            <span>|</span>
            <a href="">Privacy Policy</a>
          </nav>
        </block>
        <!-- <block class="documents">
        </block> -->
      </column>
    </template>
  </simple-layout>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
export default {
  data: function () {
    return {
      isNavOpen: false,
      isLearnOpen: false,
      isCommunityOpen: false,
      isDevelopersOpen: false,
      isEcosystemOpen: false,
      swirlSpecial: false,
      swirlBottomIsVisible: true,
      linksLearn: [
        {
          title: "About the Network",
          path: "/about/about-secret-network",
          target: "self",
        },
        {
          title: "About SCRT",
          path: "/about/get-scrt",
          target: "self",
        },
        {
          title: "Secret Network Blog",
          path: "/blog",
          target: "self",
        },
        {
          title: "Media Content",
          path: "/media/features",
          target: "self",
        },
        {
          title: "FAQ",
          path: "/about/faq",
          target: "self",
        },
      ],
      linksCommunity: [
        // {
        //   title: "About the Community",
        //   path: "/community",
        // },
        // {
        //   title: "About Secret Agents",
        //   path: "/community#secret-agents",
        // },
        {
          title: "Become a Secret Agent",
          path: "/get-involved/become-secret-agent",
        },
        {
          title: "International Communities",
          path: "/get-involved/international-communities",
        },
        {
          title: "About Committees",
          path: "/committees",
        },
      ],
      linksDevelopers: [
        {
          title: "How to get started?",
          path: "/developers",
          target: "",
        },
        {
          title: "About Secret Contracts",
          path: "/developers#secret-contracts",
          target: "",
        },
      ],
      linksEcosystem: [
        {
          title: "Explore the Ecosystem",
          path: "/ecosystem/overview",
          target: "",
        },
        {
          title: "About Wallet Support",
          path: "/ecosystem/overview#wallet-support",
          target: "",
        },
        {
          title: "Roadmap",
          path: "/ecosystem/ecosystem-roadmap",
          target: "",
        },
      ],
      linksFooterLearn: [
        {
          title: "About the Network",
          path: "/about/get-scrt",
          external: false,
          target: "self",
        },
        {
          title: "Secret Network Blog",
          path: "/blog",
          external: false,
          target: "self",
        },
        {
          title: "Media Content",
          path: "/media/features",
          external: false,
          target: "self",
        },
        {
          title: "FAQ",
          path: "/about/faq",
          external: false,
          target: "self",
        },
        {
          title: "Secret Brand",
          path: "/brand",
          external: false,
          target: "self",
        },
        {
          title: "Graypaper",
          path: "/graypaper",
          external: false,
          target: "self",
        },
        {
          title: "Run a Node",
          path: "https://docs.scrt.network/node-guides/secret-nodes.html",
          external: true,
          target: "blank",
        },
      ],
      linksFooterCommunity: [
        {
          title: "About the Community",
          path: "/community",
          external: false,
          target: "self",
        },
        {
          title: "About Secret Agents",
          path: "/community#secret-agents",
          external: false,
          target: "self",
        },
        {
          title: "About Committees",
          path: "/committees",
          external: false,
          target: "self",
        },
      ],
      linksFooterDevelopers: [
        {
          title: "Intro for Developers",
          path: "/developers",
          external: false,
          target: "self",
        },
        {
          title: "Quickstart Guide",
          path: "https://docs.scrt.network/dev/developers.html",
          external: true,
          target: "blank",
        },
        {
          title: "Grant Application Process",
          path: "/grant-application-process",
          external: false,
          target: "blank",
        },
        {
          title: "Grant Application Ideas",
          path: "/grant-application-ideas",
          external: false,
          target: "blank",
        },
      ],
      linksFooterEcosystem: [
        {
          title: "Ecosystem Overview",
          path: "/ecosystem/overview",
          external: false,
          target: "self",
        },
        {
          title: "Wallet Support",
          path: "/ecosystem/overview#wallet-support",
          external: false,
          target: "blank",
        },
      ],
      linksForSocial: [
        {
          title: "Submit an issue",
          path: "https://github.com/stakeordie/SecretWebsiteV2/issues",
          external: true,
          target: "blank",
        },
      ],
    };
  },
  watch: {
    isNavOpen: function () {
      this.toggleNavOpen();
    },
    $route() {
      (this.isNavOpen = false), (this.isLearnOpen = false);
      this.isCommunityOpen = false;
      this.isDevelopersOpen = false;
      this.isEcosystemOpen = false;
      // this.removeMainMarginHeroMixed();
    },
    $route: {
      handler(to, from) {
        this.checker();
        this.removeBottomSwirl();
        this.isNavOpen = false;
        return;
      },
      // immediate: true,
    },
  },

  methods: {
    removeBottomSwirl() {
      if (process.isClient) {
        const path = window.location.pathname;
        const simpleFooter = document.querySelector(".simple-footer");
        if (path.includes("/ecosystem/ecosystem-roadmap")) {
          this.swirlBottomIsVisible = false;
          simpleFooter.classList.add("swirlIsOff");
          console.log("test" + this.swirlBottomIsVisible);
        } else {
          this.swirlBottomIsVisible = true;
          simpleFooter.classList.remove("swirlIsOff");
        }
      }
    },
    checker() {
      if (process.isClient) {
        const path = window.location.pathname;
        if (path.includes("/about/get-scrt")) {
          this.swirlSpecial = true;
        } else {
          this.swirlSpecial = false;
        }
      }
    },
    toggleNavOpen() {
      if (this.isNavOpen) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    },

    // mq () {
    //   this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    // },
    showLearn() {
      this.isLearnOpen = !this.isLearnOpen;
      this.isNavOpen = false;
    },
    showCommunity() {
      this.isCommunityOpen = !this.isCommunityOpen;
      this.isNavOpen = false;
    },
    showDevelopers() {
      this.isDevelopersOpen = !this.isDevelopersOpen;
      this.isNavOpen = false;
    },
    showEcosystem() {
      this.isEcosystemOpen = !this.isEcosystemOpen;
      this.isNavOpen = false;
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
    //* NEW SET THEME
    //! ORIGINAL SET THEME
    // setTheme() {
    //   const colorMode = this.coloredModeState ? "-colored" : "";
    //   const darkLightMode = this.darkLightModeState ? "light" : "dark";
    //   const theme = `${darkLightMode}${colorMode}`;
    //   this.setBodyAttr(theme);
    //   if (process.isClient) {
    //     localStorage.setItem("theme", theme);
    //   }
    // },
    setBodyAttr(theme) {
      const [body] = document.getElementsByTagName("body");
      if (!body) return;
      body.setAttribute("theme", theme);
    },
    callFunction: function (className) {
      if ((window.onload = "load")) {
        setTimeout(function () {
          const el = document.body;
          el.classList.add(className);
        }, 700);
      }
    },
  },
  mounted() {
    // Hacking the system :(
    this.isNavOpen = false;
    this.toggleNavOpen();
    this.callFunction("body-visible");
    this.setInitialTheme();
    this.checker();
    this.removeBottomSwirl();
    // this.removeMainMarginHeroMixed();
  },
};
</script>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

body {
  @include respond-to("<=m") {
    /* overflow-y:hidden; */
  }
}
.simple-layout {
  position: relative;
  // overflow: hidden;
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

    // @include respond-to("<=m") {
    //   grid-template-columns: repeat(3, 1fr);
    // }
    @media only screen and (max-width: (1160px - 1px)) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .mobile-menu-toggle {
    // @include respond-to(">=l") {
    //   display: none;
    // }
    @media only screen and (min-width: (1160px)) {
      display: none;
    }
  }

  .header {
    &__logo {
      width: auto;
      height: 58px;
      padding: var(--f-gutter-s) var(--f-gutter) var(--f-gutter-s) 0;

      @include respond-to("<=m") {
        // transform: translateX(var(--f-gutter-l));
      }
    }
  }

  .nav-wrapper {
    display: grid;
    grid-auto-flow: column;
    gap: var(--f-gutter);
    height: 100%;
    justify-content: space-between;

    // @include respond-to("<=m") {
    //   justify-content: flex-end;
    // }

    @media only screen and (min-width: (1160px)) {
      grid-template-columns: auto 1fr auto;
    }

    @media only screen and (max-width: (1160px - 1px)) {
      justify-content: flex-end;
    }

    .mobile-wrapper {
      display: flex;
      gap: var(--f-gutter-xxl);

      // @include respond-to("<=m") {
      //   display: none;
      // }

      @media only screen and (max-width: (1160px - 1px)) {
        display: none;
      }

      // .main-navigation {
      //   display: flex;
      //   flex: auto;
      //   height: 100%;

      //   .header__navigation {
      //     flex: auto;
      //     margin: 0;
      //     display: flex;
      //     height: 100%;
      //     justify-content: flex-start;
      //     align-items: center;

      //     li.dropdown-container {
      //       padding-left: 0;
      //       margin: 0;
      //       position: relative;
      //       display: flex;
      //       height: 100%;
      //       align-items: center;

      //       & > a {
      //         text-decoration: none;
      //         display: flex;
      //         gap: 10px;
      //         color: var(--theme-fg);
      //       }

      //       .dropdown {
      //         position: absolute;
      //         left: 0;
      //         top: 56px;
      //         background: var(--theme-dropdown-bg);
      //         display: flex;
      //         border-radius: var(--f-gutter-xs);
      //         z-index: 9;
      //         margin: 0;
      //         flex-direction: column;
      //         min-width: 200px;
      //         flex: auto;
      //         box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
      //         padding-left: 0;

      //         li {
      //           margin: 0;
      //           flex: auto;
      //           padding: 0;
      //           height: 100%;
      //           display: flex;

      //           a {
      //             white-space: nowrap;
      //             color: var(--theme-bg);

      //             @include theme(dark dark-colored) {
      //               color: var(--color-neutral-light-mode-045);
      //             }

      //             padding: var(--f-gutter-s) var(--f-gutter);
      //             display: inline-block;
      //             flex: auto;
      //             height: 100%;
      //             font-weight: 500;
      //             text-decoration: none;

      //             &:hover {
      //               font-weight: 600;

      //               @include theme(dark dark-colored) {
      //                 color: black;
      //               }

      //               @include theme(light light-colored) {
      //                 color: white;
      //               }
      //             }

      //             &:before {
      //               display: block;
      //               content: attr(title);
      //               font-weight: bold;
      //               height: 0;
      //               overflow: hidden;
      //               visibility: hidden;
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      // }

      &.is-nav-open {
        // @include respond-to(">=l") {
        //   display: none;
        // }

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
        // display: flex;
        gap: var(--f-gutter-xxs);
        align-items: center;

        // @include respond-to(">=l") {
        //   display: none;
        // }

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

        // @include respond-to("<=m") {
        //   display: none;
        // }

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

.swirl-wrapper {
  height: var(--f-header-height);
}

.swirl {
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 335px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    object-position: bottom;
  }

  &.top {
    left: 0;
    right: 0;
    top: 0;
    img {
      &.special-mod {
        height: 255px;
        object-fit: cover;
        object-position: center bottom;
        @include respond-to("<=m") {
          // height: 222px;
        }
      }
    }
  }

  &.bottom {
    left: 0;
    bottom: -300px;
    &.v2 {
      height: 139px;
      bottom: -196px;
    }

    @include respond-to("<=s") {
      bottom: -300px;
    }

    img {
      transform: rotate(180deg);
    }
    img {
      &.special-mod {
        height: 274px;
        object-fit: fill;
        object-position: center bottom;
        transform: rotate(0);
        @include respond-to("<=m") {
          // height: 222px;
        }
      }
    }
  }
}

.simple-footer {
  background: var(--theme-bg);
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

  // .footer-nav {
  //   display: grid;
  //   grid-template-columns: repeat(4, 1fr);
  //   gap: var(--f-gutter);
  //   margin-bottom: var(--f-gutter-xxl);

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
  //     }

  //     a {
  //       line-height: 1.5;
  //       text-decoration: none;
  //       display: flex;
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

  .footer-contact {
    // display: grid;
    // grid-template-columns: 1fr 445px;
    // width: 100%;
    // max-width: 1873px;
    display: grid;
    grid-template-columns: 1fr 445px;
    width: 100%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;

    a{
      //color: var(--color-newBrand-blue-02) !important;

      &:hover {
                  color: var(--mega-header-color-nav-exanded-hover) !important;
                }
    }

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      gap: var(--f-gutter-xxl);
    }

    .social {
      display: grid;
      gap: var(--f-gutter);

      @include respond-to("<=s") {
        text-align: center;
        justify-content: center;
      }

      .scrt-logo {
        width: 182px;
        height: auto;
        display: inline-block;
      }

      .social-navigation {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        gap: var(--f-gutter);

        
      }

      .contribute-github {
        display: grid;
        grid-auto-flow: column;
        gap: var(--f-gutter);
        align-items: center;
        grid-auto-columns: max-content;

        p {
          margin: 0;
        }
      }

      .submit-issue {
        display: grid;
        grid-auto-flow: column;
        gap: var(--f-gutter);
        align-items: center;
        grid-auto-columns: max-content;

        p {
          margin: 0;
        }
      }
    }

    .subscribe {
      align-self: end;

      h3 {
        margin-bottom: var(--f-gutter);

        span {
          @include theme(dark dark-colored) {
            color: var(--color-newBrand-blue-01);
          }

          @include theme(light light-colored) {
            color: var(--color-analog-secondary-purple);
          }
        }
      }

      form {
        display: grid;
        gap: var(--f-gutter-s);
        grid-template-columns: 1fr 137px;

        @include respond-to("<=s") {
          grid-template-columns: 1fr;

          .button,
          input {
            margin: 0 !important;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
        }
      }
    }
  }
}

.legal {
  // height: 48px;
  

  @include theme(light light-colored) {
    background: var(--color-neutral-light-mode-01);
  }

  @include theme(dark dark-colored) {
    background: black;
  }

  @include respond-to("<=s") {
    grid-template-columns: 1fr;
    height: auto;
    text-align: center;
  }

  .content {
    display: grid;
    // justify-content: center;
    .box {
      // align-content: end;
      // display: grid;
    // grid-template-columns: 1fr 445px;
      // background: red;
    // padding: 40px;
    padding-left: var(--f-gutter-xl);
    padding-right: var(--f-gutter-xl);
        display: grid;
        width: 100%;
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
        grid-auto-flow: column;
      p,
      a {
        margin: 0;
        // color: var(--the);
      }
      .documents {
        display: grid;
        grid-auto-flow: column;
        gap: var(--f-gutter);
        justify-content: end;
    .content {
      .box {
        display: grid;
        align-content: end;
      }
    }

    nav {
      display: grid;
      grid-auto-flow: column;
      justify-content: flex-end;
      gap: var(--f-gutter);

      @include respond-to("<=s") {
        justify-content: center;
      }

      a:not(:first-child) {
        border-left: 1px solid var(--theme-fg);
        padding-left: var(--f-gutter);
      }
    }
  }
    }
  }

  
}

// .fade-enter-active {
//   -webkit-animation: swing-in-top-fwd 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
//   animation: swing-in-top-fwd 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
// }

// .fade-leave-active {
//   -webkit-animation: swing-out-top-bck 0.2s cubic-bezier(0.600, -0.280, 0.735, 0.045) both;
//   animation: swing-out-top-bck 0.2s cubic-bezier(0.600, -0.280, 0.735, 0.045) both;
// }

@-webkit-keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }

  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}

@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }

  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}

@-webkit-keyframes swing-out-top-bck {
  0% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }

  100% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
}

@keyframes swing-out-top-bck {
  0% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }

  100% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
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

/* ----------------------------------------------
 * Generated by Animista on 2021-5-14 15:13:33
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in-top
 * ----------------------------------------
 */
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

/* ----------------------------------------------
 * Generated by Animista on 2021-5-14 15:20:41
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-out-top
 * ----------------------------------------
 */
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
