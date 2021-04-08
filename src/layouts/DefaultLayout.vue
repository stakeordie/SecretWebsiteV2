<template>
  <simple-layout>
    <template #header>
      <simple-header mode="full">
        <g-link to="/">
          <g-image class="header__logo" src="../assets/secretnetwork-logo-primary-white.svg" :immediate="true">
          </g-image>
        </g-link>
        <nav class="main-navigation">
          <ul class="header__navigation">
            <li @mouseover="showAbout = true" @mouseleave="showAbout = false" class="dropdown-container">
              <a href="/about/about-secret-network">About</a>
            </li>
            <li @mouseover="showMedia = true" @mouseleave="showMedia = false" class="dropdown-container">
              <a href="/media/features">Media <img src="@/assets/icon-chevron-down.svg" alt=""></a>
              <transition name="fade">
                <ul v-show="showMedia" class="dropdown">
                  <li v-for="(link, index) in linksMedia">
                    <a :href="link.path"> {{ link.title }}</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li @mouseover="showCommunity = true" @mouseleave="showCommunity = false" class="dropdown-container">
              <a href="/community">Community <img src="@/assets/icon-chevron-down.svg" alt=""></a>
              <transition name="fade">
                <ul v-show="showCommunity" class="dropdown">
                  <li v-for="(link, index) in linksCommunity">
                    <a :href="link.path"> {{ link.title }}</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li @mouseover="showDevelopers = true" @mouseleave="showDevelopers = false" class="dropdown-container">
              <a href="/developers">Developers <img src="@/assets/icon-chevron-down.svg" alt=""></a>
              <transition name="fade">
                <ul v-show="showDevelopers" class="dropdown">
                  <li v-for="(link, index) in linksDevelopers">
                    <a :href="link.path" :target="link.target"> {{ link.title }}</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li class="dropdown-container">
              <a href="/ecosystem/overview">Ecosystem</a>
            </li>
          </ul>
        </nav>
        <nav class="social-navigation">

          <a href="https://forum.scrt.network/" target="blank"><img src="@/assets/icon-social-forum.svg" alt=""></a>
          <a href="https://github.com/SecretFoundation/SecretWebsite" target="blank"><img
              src="@/assets/icon-social-github.svg" alt=""></a>
          <a href="https://discord.com/invite/SJK32GY" target="blank"><img src="@/assets/icon-social-discord.svg"
              alt=""></a>
          <a href="https://t.me/SCRTcommunity" target="blank"><img src="@/assets/icon-social-telegram.svg" alt=""></a>
          <a href="https://twitter.com/SecretNetwork" target="blank"><img src="@/assets/icon-social-twitter.svg"
              alt=""></a>
          <a href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw" target="blank"><img
              src="@/assets/icon-social-youtube.svg" alt=""></a>

        </nav>
        <div class="toggles">
          <button class="theme" @click="toggleDarkLightMode">
            <themed-image>
              <g-image class="not-invert" dark dark-colored src="@/assets/moon.svg" :immediate="true"></g-image>
              <g-image class="not-invert" light light-colored src="@/assets/sun.svg" :immediate="true"></g-image>
            </themed-image>
          </button>
          <button class="theme" @click="toggleColoredMode">
            <themed-image>
              <g-image class="not-invert" dark light src="@/assets/mono.svg" :immediate="true"></g-image>
              <g-image class="not-invert" dark-colored light-colored src="@/assets/chromo.svg" :immediate="true">
              </g-image>
            </themed-image>
          </button>
        </div>
      </simple-header>
    </template>

    <div class="swirl top">
      <themed-image>
        <img dark-colored light-colored src="@/assets/hero-color.svg" alt="" />
        <img dark src="@/assets/hero-black.svg" alt="" />
        <img light src="@/assets/hero-white.svg" alt="" />
      </themed-image>
    </div>
    <page>

      <slot></slot>

    </page>
    <div class="swirl bottom">
      <themed-image>
        <img dark-colored light-colored src="@/assets/hero-color.svg" alt="" />
        <img dark src="@/assets/hero-black.svg" alt="" />
        <img light src="@/assets/hero-white.svg" alt="" />
      </themed-image>
    </div>

    <template #footer>
      <simple-footer mode="normal">
        <section class="footer-nav">
          <nav>

            <h6 class="footer-nav-title">About </h6>
            <a v-for="(link, index) in linksFooterAbout" :href="link.path" :target="link.target"> <span
                :class="{ 'icon icon-icon-arrow-external':link.external }">{{ link.title }}</span></a>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Community</h6>
            <a v-for="(link, index) in linksFooterCommunity" :href="link.path" :target="link.target"> <span
                :class="{ 'icon icon-icon-arrow-external':link.external }">{{ link.title }}</span></a>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Developers</h6>
            <a v-for="(link, index) in linksFooterDevelopers" :href="link.path" :target="link.target"> <span
                :class="{ 'icon icon-icon-arrow-external':link.external }">{{ link.title }}</span></a>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Ecosystem</h6>
            <a v-for="(link, index) in linksFooterEcosystem" :href="link.path" :target="link.target"> <span
                :class="{ 'icon icon-icon-arrow-external':link.external }">{{ link.title }}</span></a>
          </nav>
          <nav>
            <h6 class="footer-nav-title">Media</h6>
            <a v-for="(link, index) in linksFooterMedia" :href="link.path" :target="link.target"> <span
                :class="{ 'icon icon-icon-arrow-external':link.external }">{{ link.title }}</span></a>
          </nav>
        </section>
        <section class="footer-contact">
          <div class="social">
            <g-link to="/">
              <g-image class="scrt-logo" src="../assets/secretnetwork-logo-primary-white.svg" :immediate="true">
              </g-image>
            </g-link>
            <nav class="social-navigation">
              <a href="https://forum.scrt.network/" target="blank"><img src="@/assets/icon-social-forum.svg" alt=""></a>
              <a href="https://github.com/SecretFoundation/SecretWebsite" target="blank"><img
                  src="@/assets/icon-social-github.svg" alt=""></a>
              <a href="https://discord.com/invite/SJK32GY" target="blank"><img src="@/assets/icon-social-discord.svg"
                  alt=""></a>
              <a href="https://t.me/SCRTcommunity" target="blank"><img src="@/assets/icon-social-telegram.svg"
                  alt=""></a>
              <a href="https://twitter.com/SecretNetwork" target="blank"><img src="@/assets/icon-social-twitter.svg"
                  alt=""></a>
              <a href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw" target="blank"><img
                  src="@/assets/icon-social-youtube.svg" alt=""></a>
            </nav>
            <div class="contribute-github">
              <p>Contribute to scrt.network</p>
              <img src="../assets/icon-github.svg" alt="">
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
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
            </form>
          </div>
        </section>
      </simple-footer>
      <!-- <column class="legal" mode="normal" number="2">
        <block class="rights-reserved">
          <p>© Secret Network. All Rights Reserved.</p>
        </block>
        <block class="documents">
          <nav>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
          </nav>
        </block>
      </column> -->
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
        showAbout: false,
        showMedia: false,
        showCommunity: false,
        showDevelopers: false,
        linksAbout: [{
          title: 'FAQ',
          path: '/faq'
        }, ],
        linksMedia: [{
            title: 'Blog',
            path: '/blog'
          },
          {
            title: 'Video',
            path: '/media/video'
          },
          {
            title: 'Podcast',
            path: '/media/podcast'
          },
          {
            title: 'Brand',
            path: '/media/brand'
          },
        ],
        linksCommunity: [{
            title: 'Become a Secret Agent',
            path: 'https://forms.gle/8NbTmUNVgbUkHY8eA'
          },
          {
            title: 'Committees',
            path: '/committees'
          },
        ],
        linksDevelopers: [{
            title: 'Learn about Secret Contracts',
            path: 'https://build.scrt.network/dev/quickstart.html',
            target: 'blank',
          },
          {
            title: 'Secret Contract development guide',
            path: 'https://github.com/enigmampc/secret-contracts-guide',
            target: 'blank',
          },
          {
            title: 'Secret App Quickstarts',
            path: 'https://github.com/enigmampc/SecretJS-Templates',
            target: 'blank',
          },
          {
            title: 'Node Runner Guide',
            path: 'https://build.scrt.network/validators-and-full-nodes/join-validator-mainnet.html',
            target: 'blank',
          },
          {
            title: 'View Source Code',
            path: 'https://github.com/enigmampc/SecretNetwork',
            target: 'blank',
          },
        ],
        linksFooterAbout: [{
            title: 'What is Secret Network',
            path: '/about/about-secret-network',
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
            title: 'Graypaper',
            path: '/graypaper',
            external: false,
            target: 'self',
          },
        ],
        linksFooterCommunity: [{
            title: 'Committees',
            path: '/committees',
            external: false,
            target: 'self',
          },
          {
            title: 'Become a Secret Agent',
            path: 'https://forms.gle/8NbTmUNVgbUkHY8eA',
            external: true,
            target: 'blank',
          },
          {
            title: 'Forum',
            path: 'https://forum.scrt.network/',
            external: true,
            target: 'blank',
          },
        ],
        linksFooterDevelopers: [{
            title: 'Get started',
            path: '/developers',
            external: false,
            target: 'self',
          },
          {
            title: 'Quickstart',
            path: 'https://build.scrt.network/dev/developers.html',
            external: true,
            target: 'blank',
          },
          {
            title: 'About Secret Contracts',
            path: '/developers#about',
            external: true,
            target: 'blank',
          },
          {
            title: 'Grant Application Ideas',
            path: '/grant-application-ideas',
            external: false,
            target: 'blank',
          },
          {
            title: 'Grant Application Process',
            path: '/grant-application-process',
            external: false,
            target: 'blank',
          },
        ],
        linksFooterEcosystem: [{
            title: 'Contributors',
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
        linksFooterMedia: [{
            title: 'Features',
            path: '/media/features',
            external: false,
            target: 'self',
          },
          {
            title: 'Blog',
            path: '/blog',
            external: false,
            target: 'self',
          },
          {
            title: 'Video',
            path: '/media/video',
            external: false,
            target: 'self',
          },
          {
            title: 'Podcast',
            path: '/media/podcast',
            external: false,
            target: 'self',
          },
          {
            title: 'Brand',
            path: '/media/brand',
            external: false,
            target: 'self',
          },
        ],
      }

    },
    watch: {
      $route(to, from) {
        this.showAbout = false;
        this.showMedia = false;
        this.showCommunity = false;
        this.showDevelopers = false;
      }
    },
    methods: {
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

  .simple-layout {
    position: relative;
    overflow: hidden;
  }

  .simple-header {
    display: grid;
    gap: 50px;
    background: var(--theme-bg);
    transition: var(--color-transition);

    img:not(.not-invert) {
      @include theme(light light-colored) {
        filter: invert(1);
      }
    }

    .box {
      gap: var(--f-gutter-l);
      padding-top: 0px;
      padding-bottom: 0px;
    }

    .header {
      &__logo {
        width: auto;
        height: 58px;
        padding: var(--f-gutter-s) var(--f-gutter) var(--f-gutter-s) 0;
      }
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
                display: flex;
                flex: auto;
                height: 100%;
                font-weight: 500;
                text-decoration: none;

                &:hover {
                  @include theme(dark dark-colored) {
                    color: black !important;
                    text-shadow: 0px 0px 0.5px var(--theme-bg);
                  }

                  @include theme(light light-colored) {
                    color: white !important;
                    text-shadow: 0px 0px 1px var(--theme-bg);
                  }
                }
              }
            }
          }
        }
      }
    }

    .social-navigation {
      display: flex;
      gap: var(--f-gutter);

      a {
        padding: 0 !important;
      }
    }

    .toggles {
      display: flex;
      align-items: center;
      gap: var(--f-gutter);
      padding-left: var(--f-gutter);

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

  .swirl {
    position: absolute;
    z-index: -10;
    width: 100%;
    height: 500px;

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
      top: -50px;

    }

    &.bottom {
      left: 0;
      bottom: 248px;

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
      grid-template-columns: repeat(5, 1fr);
      gap: var(--f-gutter);
      margin-bottom: var(--f-gutter-xl);

      nav {
        display: flex;
        flex-direction: column;
        gap: var(--f-gutter);
        padding-right: var(--f-gutter);

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
          }
        }
      }
    }

    .footer-contact {
      display: grid;
      grid-template-columns: 1fr 445px;

      .social {
        display: grid;
        gap: var(--f-gutter);

        .scrt-logo {
          width: 182px;
          height: auto;
        }

        .social-navigation {
          display: flex;
          gap: var(--f-gutter);
        }

        .contribute-github {
          display: flex;
          gap: var(--f-gutter);
          align-items: center;

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
        }
      }
    }
  }

  .legal {
    @include theme(light light-colored) {
      background: var(--color-neutral-dark-mode-05);
    }

    height: 48px;

    .content {
      .box {
        p {
          margin: 0;
          // color: var(--the);
        }
      }
    }

    .documents {
      nav {
        display: flex;
        justify-content: flex-end;
        gap: var(--f-gutter);

        a:not(:first-child) {
          border-left: 1px solid var(--theme-fg);
          padding-left: var(--f-gutter);
        }
      }
    }
  }

  .fade-enter-active {
    -webkit-animation: swing-in-top-fwd 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    animation: swing-in-top-fwd 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  }

  .fade-leave-active {
    -webkit-animation: swing-out-top-bck 0.2s cubic-bezier(0.600, -0.280, 0.735, 0.045) both;
    animation: swing-out-top-bck 0.2s cubic-bezier(0.600, -0.280, 0.735, 0.045) both;
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

</style>
