<template>
  <simple-layout>
    <template #header>
      <simple-header>
        <g-link to="/">
          <g-image class="header__logo" src="../assets/secretnetwork-logo-primary-white.svg" :immediate="true">
          </g-image>
        </g-link>
        <nav>
          <ul class="header__navigation">
            <li @mouseover="showAboutTrigger"  class="dropdown-container">
              <a href="/about">About</a>
              <transition name="fade">
                <ul v-show="showAbout" class="dropdown">
                  <li v-for="(link, index) in linksAbout">
                    <a :href="link.path"> {{ link.title }}</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li @mouseover="showMediaTrigger" class="dropdown-container">
              <a href="/media/features">Media</a>
              <ul v-show="showMedia" class="dropdown">
                <li v-for="(link, index) in linksMedia">
                  <a :href="link.path"> {{ link.title }}</a>
                </li>
              </ul>
            </li>
            <li @mouseover="showCommunityTrigger" class="dropdown-container">
              <a href="/community">Community</a>
              <ul v-show="showCommunity" class="dropdown">
                <li v-for="(link, index) in linksCommunity">
                  <a :href="link.path"> {{ link.title }}</a>
                </li>
              </ul>
            </li>
            <li @mouseover="showDevelopersTrigger" class="dropdown-container">
              <a href="/developers">Developers</a>
              <ul v-show="showDevelopers" class="dropdown">
                <li v-for="(link, index) in linksDevelopers">
                  <a :href="link.path" :target="link.target"> {{ link.title }}</a>
                </li>
              </ul>
            </li>
            <li class="dropdown-container">
              <a href="/ecosystem/overview">Ecosystem</a>
            </li>
            <li class="dropdown-container">
              <a href="https://forum.scrt.network/" target="blank">Forum</a>
            </li>
          </ul>
        </nav>
        <!-- <nav>
          <g-link to="/">Index</g-link>
        </nav> -->
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
    methods: {
      showAboutTrigger() {
        this.showAbout = true;
        this.showMedia = false;
        this.showCommunity = false;
        this.showDevelopers = false;
      },
      showMediaTrigger() {
        this.showMedia = true;
        this.showAbout = false;
        this.showCommunity = false;
        this.showDevelopers = false;
      },
      showCommunityTrigger() {
        this.showCommunity = true;
        this.showAbout = false;
        this.showMedia = false;
        this.showDevelopers = false;
      },
      showDevelopersTrigger() {
        this.showDevelopers = true;
        this.showAbout = false;
        this.showMedia = false;
        this.showCommunity = false;
      },
    }
  }

</script>

<style lang="scss">
  .simple-header {
    .header {
      &__logo {
        width: auto;
        height: 64px;
        padding: var(--f-gutter-s) var(--f-gutter) var(--f-gutter-s) 0;
      }
    }

    nav {
      flex: auto;
      display: flex;
      height: 100%;

      .header__navigation {
        flex: auto;
        margin: 0;
        display: flex;
        height: 100%;
        justify-content: flex-end;
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
            top: var(--f-gutter-xxl);
            background: green;
            display: flex;
            border-radius: var(--f-gutter-xs);
            z-index: 9;
            margin: 0;
            flex-direction: column;
            width: 300px;
            li {
              margin: 0;
              flex: auto;
              padding: var(--f-gutter-s) var(--f-gutter-xxs) ;
            }
          }
        }
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

</style>
