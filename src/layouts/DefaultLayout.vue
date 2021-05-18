<template>
  <simple-layout>
    <template #header>
      <alert-bar></alert-bar>
      <simple-header class="fixed" mode="full">
        <!-- mobile menu toggle -->
        <a class="mobile-menu-toggle" @click="toggleNav" aria-label="Close">
          <img v-show="!isNavOpen" class="open-menu" src="../assets/icon-menu.svg" width="24" height="24" />
          <img v-show="isNavOpen" class="open-menu" src="../assets/icon-menu-close.svg" width="24" height="24" />
        </a>
        <!-- logo -->
        <g-link class="link-logo" to="/">
          <img class="header__logo" src="../assets/secretnetwork-logo-primary-white.svg" width="124" height="58" />
        </g-link>
        <!-- mobile menu wrapper -->
        <div class="nav-wrapper">
          <div :class="{ 'is-nav-open' : isNavOpen }" class="mobile-wrapper">
            <!-- main navigation -->
            <nav class="main-navigation">
              <ul class="header__navigation">
                <li @click.prevent="showLearn" @mouseleave="isLearnOpen = false" class="dropdown-container">
                  <a href="">Learn <img v-show="!isLearnOpen" src="@/assets/icon-chevron-down.svg" alt="chevron"
                      width="24" height="24"><img v-show="isLearnOpen" src="@/assets/icon-chevron-up.svg" alt="chevron"
                      width="24" height="24"></a>
                  <transition name="fade">
                    <ul v-show="isLearnOpen" @click.stop="showLearn" class="dropdown">
                      <li v-bind:key="index+link" v-for="(link, index) in linksLearn">
                        <g-link :to="link.path" :title="link.title"> {{ link.title }}</g-link>
                      </li>
                    </ul>
                  </transition>
                </li>
                <li @click.prevent="showCommunity" @mouseleave="isCommunityOpen = false" class="dropdown-container">
                  <a href="">Community <img v-show="!isCommunityOpen" src="@/assets/icon-chevron-down.svg" alt="chevron"
                      width="24" height="24"><img v-show="isCommunityOpen" src="@/assets/icon-chevron-up.svg"
                      alt="chevron" width="24" height="24"></a>
                  <transition name="fade">
                    <ul v-show="isCommunityOpen" @click.stop="showCommunity" class="dropdown">
                      <li v-bind:key="index+link" v-for="(link, index) in linksCommunity">
                        <g-link :to="link.path" :title="link.title"> {{ link.title }}</g-link>
                      </li>
                    </ul>
                  </transition>
                </li>
                <li @click.prevent="showDevelopers" @mouseleave="isDevelopersOpen = false" class="dropdown-container">
                  <a href="">Developers <img v-show="!isDevelopersOpen" src="@/assets/icon-chevron-down.svg"
                      alt="chevron" width="24" height="24"><img v-show="isDevelopersOpen"
                      src="@/assets/icon-chevron-up.svg" alt="chevron" width="24" height="24"></a>
                  <transition name="fade">
                    <ul v-show="isDevelopersOpen" @click.stop="showDevelopers" class="dropdown">
                      <li v-bind:key="index+link" v-for="(link, index) in linksDevelopers">
                        <g-link :to="link.path" :target="link.target" :title="link.title"> {{ link.title }}</g-link>
                      </li>
                    </ul>
                  </transition>
                </li>
                <li @click.prevent="showEcosystem" @mouseleave="isEcosystemOpen = false" class="dropdown-container">
                  <a href="">Ecosystem <img v-show="!isEcosystemOpen" src="@/assets/icon-chevron-down.svg" alt="chevron"
                      width="24" height="24"><img v-show="isEcosystemOpen" src="@/assets/icon-chevron-up.svg"
                      alt="chevron" width="24" height="24"></a>
                  <transition name="fade">
                    <ul v-show="isEcosystemOpen" @click.stop="showEcosystem" class="dropdown">
                      <li v-bind:key="index+link" v-for="(link, index) in linksEcosystem">
                        <g-link :to="link.path" :target="link.target" :title="link.title"> {{ link.title }}</g-link>
                      </li>
                    </ul>
                  </transition>
                </li>
              </ul>
            </nav>
            <!-- social navigation -->
            <nav class="social-navigation">
              <a href="https://forum.scrt.network/" target="blank">
                <img src="@/assets/icon-social-forum.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://github.com/SecretFoundation/SecretWebsite" target="blank">
                <img src="@/assets/icon-social-github.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://discord.com/invite/SJK32GY" target="blank">
                <img src="@/assets/icon-social-discord.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://t.me/SCRTcommunity" target="blank">
                <img src="@/assets/icon-social-telegram.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://twitter.com/SecretNetwork" target="blank">
                <img src="@/assets/icon-social-twitter.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw" target="blank">
                <img src="@/assets/icon-social-youtube.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
            </nav>
          </div>
          <div v-on:click="searchTrigger" class="search">
            <div class="fake-input">
              <img src="@/assets/icon-search.svg" alt="Search" width="24" height="24" />
              <p>What are you looking for?</p>
            </div>
          </div>
          <!-- toggles -->
          <div class="toggles">
            <!-- social navigation -->
            <nav class="social-navigation">
              <a href="https://forum.scrt.network/" target="blank">
                <img src="@/assets/icon-social-forum.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://github.com/SecretFoundation/SecretWebsite" target="blank">
                <img src="@/assets/icon-social-github.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://discord.com/invite/SJK32GY" target="blank">
                <img src="@/assets/icon-social-discord.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://t.me/SCRTcommunity" target="blank">
                <img src="@/assets/icon-social-telegram.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://twitter.com/SecretNetwork" target="blank">
                <img src="@/assets/icon-social-twitter.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw" target="blank">
                <img src="@/assets/icon-social-youtube.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
            </nav>
            <button class="theme" @click="toggleDarkLightMode">
              <themed-image>
                <img class="not-invert" dark dark-colored src="@/assets/moon.svg" width="24" height="24" />
                <img class="not-invert" light light-colored src="@/assets/sun.svg" width="24" height="24" />
              </themed-image>
            </button>
            <button class="theme" @click="toggleColoredMode">
              <themed-image>
                <img class="not-invert" dark light src="@/assets/mono.svg" width="24" height="24" />
                <img class="not-invert" dark-colored light-colored src="@/assets/chromo.svg" width="24" height="24" />

              </themed-image>
            </button>
          </div>
        </div>
      </simple-header>
    </template>

    <column class="swirl-wrapper">
      <block>
        <div class="swirl top">
          <themed-image>
            <img dark-colored light-colored src="@/assets/swirl-color-dark.svg" alt="" />
            <img dark src="@/assets/swirl-lines-dark.svg" alt="swirl" width="100" height="100" />
            <img light src="@/assets/swirl-lines-light.svg" alt="swirl" width="100" height="100" />
          </themed-image>
        </div>
      </block>
    </column>
    <page>

      <slot></slot>

    </page>
    <column>
      <block>
        <div class="swirl bottom">
          <themed-image>
            <img dark-colored light-colored src="@/assets/swirl-color-dark.svg" alt="swirl" width="100" height="100" />
            <img dark src="@/assets/swirl-lines-dark.svg" alt="swirl" width="100" height="100" />
            <img light src="@/assets/swirl-lines-light.svg" alt="swirl" width="100" height="100" />
          </themed-image>
        </div>
      </block>
    </column>

    <template #footer>
      <simple-footer mode="normal">
        <section class="footer-nav">
          <nav>
            <h6 class="footer-nav-title">Learn </h6>
            <g-link v-bind:key="index+link" v-for="(link, index) in linksFooterLearn" :to="link.path"
              :target="link.target">
              <span :class="{ 'icon icon-icon-arrow-external':link.external }"> {{ link.title }} </span>
            </g-link>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Community</h6>
            <g-link v-bind:key="index+link" v-for="(link, index) in linksFooterCommunity" :to="link.path"
              :target="link.target">
              <span :class="{ 'icon icon-icon-arrow-external':link.external }">{{ link.title }}</span>
            </g-link>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Developers</h6>
            <g-link v-bind:key="index+link" v-for="(link, index) in linksFooterDevelopers" :to="link.path"
              :target="link.target">
              <span :class="{ 'icon icon-icon-arrow-external':link.external }">{{ link.title }}</span>
            </g-link>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Ecosystem</h6>
            <g-link v-bind:key="index+link" v-for="(link, index) in linksFooterEcosystem" :to="link.path"
              :target="link.target">
              <span :class="{ 'icon icon-icon-arrow-external':link.external }">{{ link.title }}</span>
            </g-link>
          </nav>
        </section>
        <section class="footer-contact">
          <div class="social">
            <g-link to="/">
              <img class="scrt-logo" src="../assets/secretnetwork-logo-primary-white.svg" width="124" height="58" />
            </g-link>
            <nav class="social-navigation">
              <a href="https://forum.scrt.network/" target="blank">
                <img src="@/assets/icon-social-forum.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://github.com/SecretFoundation/SecretWebsite" target="blank">
                <img src="@/assets/icon-social-github.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://discord.com/invite/SJK32GY" target="blank">
                <img src="@/assets/icon-social-discord.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://t.me/SCRTcommunity" target="blank">
                <img src="@/assets/icon-social-telegram.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://twitter.com/SecretNetwork" target="blank">
                <img src="@/assets/icon-social-twitter.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
              <a href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw" target="blank">
                <img src="@/assets/icon-social-youtube.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
            </nav>
            <div class="contribute-github">
              <p><a href="https://github.com/SecretFoundation/SecretWebsite" target="blank">Contribute to
                  scrt.network
                </a></p>
              <a href="https://github.com/SecretFoundation/SecretWebsite" target="blank">
                <img src="../assets/icon-github.svg" alt="Join the Conversation" width="24" height="24" />
              </a>
            </div>
          </div>
          <div class="subscribe">
            <h3><span>Subscribe</span> for <br> Secret Network updates</h3>
            <form
              action="https://network.us2.list-manage.com/subscribe/post?u=7a05e306cd4c801a88ddcb060&amp;id=889f1a33bc"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
              target="_blank" novalidate>
              <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Your email"
                required>
              <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                class="button">Subscribe</button>
            </form>
          </div>
        </section>
      </simple-footer>
      <column class="legal" mode="normal" number="2" number-m="2" number-s="1">
        <block class="rights-reserved">
          <p>© Secret Network. All Rights Reserved.</p>
        </block>
        <block class="documents">
          <nav>
            <a href="">Terms of Service</a>
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
  export default {
    data: function () {
      return {
        isNavOpen: false,
        isLearnOpen: false,
        isCommunityOpen: false,
        isDevelopersOpen: false,
        isEcosystemOpen: false,
        linksLearn: [{
            title: 'About the Network',
            path: '/about/about-secret-network',
            target: 'self',
          },
          {
            title: 'Secret Network Blog',
            path: '/blog',
            target: 'self',
          },
          {
            title: 'Media Content',
            path: '/media/features',
            target: 'self',
          },
        ],
        linksCommunity: [{
            title: 'About the Community',
            path: '/community'
          },
          {
            title: 'About Secret Agents',
            path: '/community#secret-agents'
          },
          {
            title: 'About Committees',
            path: '/committees'
          },
        ],
        linksDevelopers: [{
            title: 'How to get started?',
            path: '/developers',
            target: '',
          },
          {
            title: 'About Secret Contracts',
            path: '/developers#secret-contracts',
            target: '',
          },
        ],
        linksEcosystem: [{
            title: 'Explore the Ecosystem',
            path: '/ecosystem/overview',
            target: '',
          },
          {
            title: 'About Wallet Support',
            path: '/ecosystem/overview#wallet-support',
            target: '',
          },
        ],
        linksFooterLearn: [{
            title: 'About the Network',
            path: '/about/about-secret-network',
            external: false,
            target: 'self',
          },
          {
            title: 'Secret Network Blog',
            path: '/blog',
            external: false,
            target: 'self',
          },
          {
            title: 'Media Content',
            path: '/media/features',
            external: false,
            target: 'self',
          },
          {
            title: 'FAQ',
            path: '/about/about-secret-network#faq',
            external: false,
            target: 'self',
          },
          {
            title: 'Secret Brand',
            path: '/brand',
            external: false,
            target: 'self',
          },
          {
            title: 'Graypaper',
            path: '/graypaper',
            external: false,
            target: 'self',
          },
        ],
        linksFooterCommunity: [{
            title: 'About the Community',
            path: '/community',
            external: false,
            target: 'self',
          },
          {
            title: 'About Secret Agents',
            path: '/community#secret-agents',
            external: false,
            target: 'self',
          },
          {
            title: 'About Committees',
            path: '/committees',
            external: false,
            target: 'self',
          },
        ],
        linksFooterDevelopers: [{
            title: 'Intro for Developers',
            path: '/developers',
            external: false,
            target: 'self',
          },
          {
            title: 'Quickstart Guide',
            path: 'https://build.scrt.network/dev/developers.html',
            external: true,
            target: 'blank',
          },
          {
            title: 'Grant Application Process',
            path: '/grant-application-process',
            external: false,
            target: 'blank',
          },
          {
            title: 'Grant Application Ideas',
            path: '/grant-application-ideas',
            external: false,
            target: 'blank',
          },
        ],
        linksFooterEcosystem: [{
            title: 'Ecosystem Overview',
            path: '/ecosystem/overview',
            external: false,
            target: 'self',
          },
          {
            title: 'Wallet Support',
            path: '/ecosystem/overview#wallet-support',
            external: false,
            target: 'blank',
          },
        ],
      }

    },
    watch: {
      isNavOpen: function () {
        this.toggleNavOpen();
      },
      $route() {
        this.isNavOpen = false,
          this.isLearnOpen = false;
        this.isCommunityOpen = false;
        this.isDevelopersOpen = false;
        this.isEcosystemOpen = false;
      }
    },

    mounted() {
      // Hacking the system :(
      this.isNavOpen = false;
      this.toggleNavOpen();
    },

    methods: {
      toggleNavOpen() {
        if (this.isNavOpen) {
          document.body.classList.add('modal-open');
        } else {
          document.body.classList.remove('modal-open');
        }
      },




      // mq () {
      //   this.isMobile = window.matchMedia('(max-width: 768px)').matches;
      // },
      showLearn() {
        this.isLearnOpen = !this.isLearnOpen;
      },
      showCommunity() {
        this.isCommunityOpen = !this.isCommunityOpen;
      },
      showDevelopers() {
        this.isDevelopersOpen = !this.isDevelopersOpen;
      },
      showEcosystem() {
        this.isEcosystemOpen = !this.isEcosystemOpen;
      },
      toggleNav() {
        this.isNavOpen = !this.isNavOpen
      },
      toggleDarkLightMode() {
        this.darkLightModeState = !this.darkLightModeState
        this.setTheme()
      },
      toggleColoredMode() {
        this.coloredModeState = !this.coloredModeState
        this.setTheme()
      },
      setTheme() {
        const colorMode = this.coloredModeState ? '-colored' : ''
        const darkLightMode = this.darkLightModeState ? 'light' : 'dark'
        const theme = `${darkLightMode}${colorMode}`
        this.setBodyAttr(theme)
        if (process.isClient) {
          localStorage.setItem('theme', theme)
        }
      },
      setBodyAttr(theme) {
        const [body] = document.getElementsByTagName('body')
        if (!body) return
        body.setAttribute('theme', theme)
      },
    }
  }

</script>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

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

        .main-navigation {
          display: flex;
          flex: auto;
          height: 100%;

          .header__navigation {
            flex: auto;
            margin: 0;
            display: flex;
            height: 100%;
            justify-content: flex-start;
            align-items: center;

            li.dropdown-container {
              padding-left: 0;
              margin: 0;
              position: relative;
              display: flex;
              height: 100%;
              align-items: center;

              &>a {
                text-decoration: none;
                display: flex;
                gap: 10px;
                color: var(--theme-fg);
              }

              .dropdown {
                position: absolute;
                left: 0;
                top: 56px;
                background: var(--theme-dropdown-bg);
                display: flex;
                border-radius: var(--f-gutter-xs);
                z-index: 9;
                margin: 0;
                flex-direction: column;
                min-width: 200px;
                flex: auto;
                box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
                padding-left: 0;

                li {
                  margin: 0;
                  flex: auto;
                  padding: 0;
                  height: 100%;
                  display: flex;

                  a {
                    white-space: nowrap;
                    color: var(--theme-bg);

                    @include theme(dark dark-colored) {
                      color: var(--color-neutral-light-mode-045);
                    }

                    padding: var(--f-gutter-s) var(--f-gutter);
                    display: inline-block;
                    flex: auto;
                    height: 100%;
                    font-weight: 500;
                    text-decoration: none;

                    &:hover {
                      font-weight: 600;

                      @include theme(dark dark-colored) {
                        color: black;
                      }

                      @include theme(light light-colored) {
                        color: white;
                      }
                    }

                    &:before {
                      display: block;
                      content: attr(title);
                      font-weight: bold;
                      height: 0;
                      overflow: hidden;
                      visibility: hidden;
                    }
                  }
                }
              }
            }
          }
        }

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

              &.on-mobile {
                // pointer-events: none;
              }

              a {
                padding: 0;
              }

              ul.dropdown {
                display: flex !important;
                position: relative;
                top: 0;
                background-color: transparent;
                box-shadow: none;

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
            background: transparent
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
          gap: var(--f-gutter);
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
      top: 50px;

    }

    &.bottom {
      left: 0;
      bottom: -300px;

      @include respond-to("<=s") {
        bottom: -300px;
      }

      img {
        transform: rotate(180deg);
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

    .footer-nav {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--f-gutter);
      margin-bottom: var(--f-gutter-xxl);

      @include respond-to("<=s") {
        grid-template-columns: 1fr;
        gap: var(--f-gutter-xxl);
      }


      nav {
        display: grid;
        align-content: start;
        gap: var(--f-gutter);
        padding-right: var(--f-gutter);

        @include respond-to("<=s") {
          text-align: center;
          padding-right: 0;
          align-items: center;
        }

        .footer-nav-title {
          color: var(--theme-fg);
          margin-bottom: 0;
        }

        a {
          line-height: 1.5;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: var(--f-gutter-s);

          span {
            display: inline-block;
            width: 90%;

            @include respond-to("<=s") {
              width: 100%;
            }
          }
        }
      }
    }

    .footer-contact {
      display: grid;
      grid-template-columns: 1fr 445px;

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
      }

      .subscribe {
        align-self: end;

        h3 {
          margin-bottom: var(--f-gutter);

          span {
            @include theme(dark dark-colored) {
              color: var(--color-analog-secondary-blue);
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
      .box {
        display: grid;
        align-content: end;

        p,
        a {
          margin: 0;
          // color: var(--the);
        }
      }
    }

    .documents {
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
    -webkit-animation: fade-in-top 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-top 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .fade-leave-active {
    -webkit-animation: fade-out-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: fade-out-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
