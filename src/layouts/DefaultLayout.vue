<template>
  <simple-layout>
    <template #header>
      <alert-bar></alert-bar>
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
              src="../../src/assets/swirl-about-top.svg"
              alt=""
              width="100"
              height="100"
            />
            <img
              v-if="!swirlSpecial"
              dark-colored
              light-colored
              src="../../src/assets/swirl-about-top.svg"
              alt=""
              width="100"
              height="100"
            />
            <img
              dark
              src="../../src/assets/swirl-about-top.svg"
              alt="swirl"
              width="100"
              height="100"
            />
          </themed-image>
        </div>
      </block>
    </column>

    <page>
      <slot></slot>
    </page>

    <column
      v-if="swirlBottomIsVisible"
      class="swirl-wrapper-bottom swirl-v1 swirl-v2"
    >
      <block>
        <div class="swirl bottom v2">
          <themed-image>
            <img
              v-if="swirlSpecial"
              dark-colored
              light-colored
              src="@/assets/swirl-about-top.svg"
              alt="swirl"
              width="100"
              height="100"
            />
            <img
              v-if="!swirlSpecial"
              dark-colored
              light-colored
              src="@/assets/swirl-about-top.svg"
              alt="swirl"
              width="100"
              height="100"
            />
            <img
              dark
              src="@/assets/swirl-about-top.svg"
              alt="swirl"
              width="100"
              height="100"
            />
          </themed-image>
        </div>
      </block>
    </column>

    <template #footer>
      <simple-footer :class="swirlBottomIsVisible" mode="full">
        <footer-menu> </footer-menu>
        <section class="footer-contact">
          <div class="social">
            <g-link :to="$tp(`/`)">
              <img
                class="scrt-logo"
                src="../assets/new-secret-logo.svg"
                width="124"
                height="58"
              />
            </g-link>
            <nav class="social-navigation">
              <a
                href="https://forum.scrt.network/"
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-forum.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://github.com/SecretFoundation/SecretWebsite"
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-github.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://discord.com/invite/SJK32GY"
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-discord.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://t.me/SCRTcommunity"
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-telegram.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://twitter.com/SecretNetwork"
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-twitter.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://www.instagram.com/scrtnetwork/"
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-instagram.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw"
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/icon-social-youtube.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
            </nav>
            <!-- <div class="contribute-github">
              <p>
                <a
                  href="https://github.com/SecretFoundation/SecretWebsite"
                  target="blank"
                  rel="noopener noreferrer"
                  >Contribute to scrt.network
                </a>
              </p>
              <a
                href="https://github.com/SecretFoundation/SecretWebsite"
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/icon-github.svg"
                  alt="Join the Conversation"
                  width="24"
                  height="24"
                />
              </a>
            </div> -->
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
            <h3>Get Updates</h3>
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
                placeholder="Enter your email"
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
            <span></span>
            <a href="">Privacy Policy</a>
          </nav>
        </block>
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
import { addScrollSmooth } from "../utils";

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
        addScrollSmooth(to);
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
.swirl-wrapper {
  height: var(--f-header-height);
}
.swirl {
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 148px !important;
  img {
    position: absolute;
    width: 100%;
    height: auto;
    overflow: hidden;
    object-fit: contain;
    object-position: bottom;
  }
  &.top {
    left: 0;
    top: 68px;
    &.v2 {
      height: 148px;
    }

    img {
      &.special-mod {
        height: 148px;
        object-fit: fill;
        object-position: center bottom;
      }
    }
  }

  &.bottom {
    left: 0;
    bottom: -300px;

    &.v2 {
      height: 148px;
      bottom: -196px;
    }

    @include respond-to("<=s") {
      bottom: -300px;
    }

    img {
      transform: rotate(180deg);
      bottom: 0;

      &.special-mod {
        height: 274px;
        object-fit: fill;
        object-position: center bottom;
        transform: rotate(0);
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

  .footer-contact {
    display: grid;
    grid-template-columns: 1fr 445px;
    width: 100%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
    a {
      &:hover {
        color: var(--mega-header-color-nav-exanded-hover) !important;
      }
    }
    @include respond-to("<=m") {
      grid-template-columns: 1fr;
      gap: var(--f-gutter-xxl);
    }
    .social {
      display: grid;
      gap: var(--f-gutter);
      place-items: start;

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
      /* .contribute-github {
        display: grid;
        grid-auto-flow: column;
        gap: var(--f-gutter);
        align-items: center;
        grid-auto-columns: max-content;
        p {
          margin: 0;
        }
      } */
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

      a,
      span {
        color: var(--color-analog-tertiary-blue);
      }
    }
    .subscribe {
      align-self: end;
      h3 {
        margin-bottom: var(--f-gutter);
        @include respond-to("<=s") {
          text-align: center;
        }

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
        grid-template-columns: 1fr 150px;
        grid-template-rows: 46px;
        place-items: stretch;

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
        .button,
        input {
          margin: 0;
        }

        input {
          padding: 10px 16px;
          background-color: var(--color-neutral-dark-mode-03);
          border: none;

          &::placeholder {
            color: var(--color-analog-primary-white);
            opacity: 0.6;
          }
        }

        .button {
          background-color: var(--color-ver2-primary-orange);
          text-transform: uppercase;
          font-family: "Hind";
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 1px;
          height: 100%;
          padding: 17px 32px 15px 32px;
        }
      }
    }
  }
}
.legal {
  @include theme(light light-colored) {
    background: var(--color-neutral-light-mode-01);
  }
  @include theme(dark dark-colored) {
    background: var(--color-neutral-dark-mode-01);
  }
  @include respond-to("<=s") {
    grid-template-columns: 1fr;
    height: auto;
    text-align: center;
  }

  .content {
    display: grid;

    .box {
      padding-left: var(--f-gutter-xl);
      padding-right: var(--f-gutter-xl);
      display: grid;
      width: 100%;
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      grid-auto-flow: column;

      p {
        margin: 0;
        color: var(--color-analog-primary-white);
      }

      a {
        margin: 0;
        color: var(--color-analog-tertiary-blue);
      }

      .documents {
        display: grid;
        grid-auto-flow: column;
        gap: 20px;
        justify-content: end;
        .content {
          .box {
            display: grid;
            align-content: end;
          }
        }

        span {
          width: 1px;
          background-color: white;
          height: 100%;
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
