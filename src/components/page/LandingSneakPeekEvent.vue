<template>
  <div class="summit_content">
    <hero-section :data="summitHero" />
    <description-section :data="summitDescription" />
    <banner-section :data="summitBanner" />
    <announcement-section :data="summitAnnouncement" />
  </div>
</template>

<script>
import HeroSection from "../summit/HeroSection.vue";
import DescriptionSection from "../summit/DescriptionSection.vue";
import BannerSection from "../summit/BannerSection.vue";
import AnnouncementSection from "../summit/AnnouncementSection.vue";

export default {
  metaInfo() {
    return {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-FS23DKM3PL%22%3E",
          async: true,
        },
      ],
    };
  },
  components: {
    HeroSection,
    DescriptionSection,
    BannerSection,
    AnnouncementSection,
  },
  methods: {
    sneakPeek() {
      const header = document.querySelector(".mega-header");
      const alertBar = document.querySelector(".alert-bar");
      const summitContent = document.querySelector(".summit_content");
      const headerHeight = alertBar
        ? alertBar.offsetHeight + header.offsetHeight
        : header.offsetHeight;

      summitContent.style.setProperty("--sum-heights", `${headerHeight}px`);
      summitContent.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
      );
    },
    addAdScript() {
      const functionScript = document.createElement("script");
      functionScript.innerHTML = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FS23DKM3PL');`;
      document.head.appendChild(functionScript);
    },
  },
  computed: {
    summitAbout() {
      return this.$static.summit.edges[0].node.Summit_about;
    },
    summitAnnouncement() {
      return this.$static.summit.edges[0].node.Summit_announcement;
    },
    summitBanner() {
      return this.$static.summit.edges[0].node.Summit_banner;
    },
    summitDescription() {
      return this.$static.summit.edges[0].node.Summit_description;
    },
    summitHero() {
      return this.$static.summit.edges[0].node.Summit_hero;
    },
    summitSpeakers() {
      return this.$static.summit.edges[0].node.Summit_speakers;
    },
    summitSponsors() {
      return this.$static.summit.edges[0].node.Summit_sponsors;
    },
  },
  mounted() {
    setTimeout(() => {
      this.sneakPeek();
      this.addAdScript();
      console.log(this.summitHero);
    }, 100);
  },
};
</script>

<static-query>
query {
  summit: allStrapiSummit {
    edges {
      node {
        Summit_hero {
          title
          subtitle
          start_date
          body
          cta_button {
            title
            url
          }
        }
        Summit_description {
          title
          subtitle
          descriptions {
            body
            icon {
              url
            }
          }
        }
        Summit_banner {
          title
        }
        Summit_speakers {
          title
          cta_button {
            title
            url
          }
          speaker {
            ... on StrapiSummit_SummitSpeakers_Speaker {
              name
              description
              image {
                url
              }
            }
          }
        }
        Summit_sponsors {
          title
          subtitle
          body
          sponsors {
            url
            image {
              url
            }
          }
        }
        Summit_announcement {
          title
          cta_button {
            title
            url
          }
        }
        Summit_about {
          title
          subtitle
          body
          cta_button {
            title
            url
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.summit-index {
  background: url("../../assets/events/summit/secret-summit-background.svg");
  background-repeat: repeat-y;
  background-position: top center;
  background-size: 250%;

  @include respond-to(">=l") {
    background-size: 100%;
  }

  .swirl-wrapper,
  .swirl-wrapper-bottom {
    display: none;
  }

  .--flare-page {
    padding: 0;
    .content {
      .box {
        padding: 0;
      }
    }
  }
}
</style>
