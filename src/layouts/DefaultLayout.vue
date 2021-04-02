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
              <a href="/media/features">Media</a>
              <transition name="fade">
                <ul v-show="showMedia" class="dropdown">
                  <li v-for="(link, index) in linksMedia">
                    <a :href="link.path"> {{ link.title }}</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li @mouseover="showCommunity = true" @mouseleave="showCommunity = false" class="dropdown-container">
              <a href="/community">Community</a>
              <transition name="fade">
                <ul v-show="showCommunity" class="dropdown">
                  <li v-for="(link, index) in linksCommunity">
                    <a :href="link.path"> {{ link.title }}</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li @mouseover="showDevelopers = true" @mouseleave="showDevelopers = false" class="dropdown-container">
              <a href="/developers">Developers</a>
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
            <a href="https://github.com/SecretFoundation/SecretWebsite" target="blank"><img src="@/assets/icon-social-github.svg" alt=""></a>
            <a href="https://discord.com/invite/SJK32GY" target="blank"><img src="@/assets/icon-social-discord.svg" alt=""></a>
            <a href="https://t.me/SCRTcommunity" target="blank"><img src="@/assets/icon-social-telegram.svg" alt=""></a>
            <a href="https://twitter.com/SecretNetwork" target="blank"><img src="@/assets/icon-social-twitter.svg" alt=""></a>
            <a href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw" target="blank"><img src="@/assets/icon-social-youtube.svg" alt=""></a>

        </nav>
      </simple-header>
    </template>

    <page>

      <slot></slot>

    </page>

    <template #footer>
      <simple-footer>
        <p>Flare Project</p>
      </simple-footer>
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
      }
      
    },
    watch:{
    $route (to, from){
        this.showAbout = false;
        this.showMedia = false;
        this.showCommunity = false;
        this.showDevelopers = false;
    }
  } ,
    methods: {

    }
  }

</script>

<style lang="scss">
  .simple-header {
    display: grid;
    gap: 50px;
    .header {
      &__logo {
        width: auto;
        height: 64px;
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

          a {
            text-decoration: none;
          }

          .dropdown {
            position: absolute;
            left: 0;
            top: 64px;
            background: white;
            border: 1px solid black;
            display: flex;
            border-radius: var(--f-gutter-xs);
            z-index: 9;
            margin: 0;
            flex-direction: column;
            min-width: 200px;
            flex: auto;

            li {
              margin: 0;
              flex: auto;
              padding: var(--f-gutter-s) var(--f-gutter-xs);
              height: 100%;
              display: flex;

              a {
                white-space: nowrap;
                color: black;
                display: flex;
                flex: auto;
                height: 100%;

                &:hover {
                  color: red;
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
