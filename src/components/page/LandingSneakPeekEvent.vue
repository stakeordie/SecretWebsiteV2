<template>
  <div class="summit_content">
    <hero-section v-if="!$store.state.summitStarted" :data="summitHero" />
    <welcome-section v-else :data="summitWelcome" />
    <description-section :data="summitDescription" />
    <banner-section :data="summitBanner" />
    <speakers-section :data="summitSpeakers" />
    <sponsors-section :data="summitSponsors" />
    <announcement-section
      v-if="!$store.state.summitStarted"
      :data="summitAnnouncement"
    />
    <about-secret-section :data="summitAbout" />
  </div>
</template>

<script>
import HeroSection from "../summit/HeroSection.vue";
import DescriptionSection from "../summit/DescriptionSection.vue";
import BannerSection from "../summit/BannerSection.vue";
import SpeakersSection from "../summit/SpeakersSection.vue";
import SponsorsSection from "../summit/SponsorsSection.vue";
import AnnouncementSection from "../summit/AnnouncementSection.vue";
import AboutSecretSection from "../summit/AboutSecretSection.vue";
import WelcomeSection from "../summit/WelcomeSummit.vue";

export default {
  metaInfo() {
    return {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-FS23DKM3PL%22%3E",
          async: true,
        },
        {
          src: "https://www.eventbrite.com/static/widgets/eb_widgets.js",
        },
      ],
    };
  },
  components: {
    HeroSection,
    DescriptionSection,
    BannerSection,
    SpeakersSection,
    SponsorsSection,
    AnnouncementSection,
    AboutSecretSection,
    WelcomeSection,
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

      const eventScript = document.createElement("script");
      eventScript.innerHTML = `
        var exampleCallback = function () {
          console.log("Order complete!");
          setTimeout(function () {
            window.open("https://scrt.network/summit/thank-you", "_self");
          }, 500);
        };

        var clientId;
        ga(function (tracker) {
          clientId = tracker.get("clientId");
        });

        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: "444225429217",
          googleAnalyticsClientId: clientId,
          modal: true,
          modalTriggerElementId: "eventbrite-widget-modal-trigger-444225429217",
          onOrderComplete: exampleCallback,
        });`;
      document.head.appendChild(eventScript);
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
    summitWelcome() {
      return this.$static.summit.edges[0].node.Summit_welcome;
    },
  },
  mounted() {
    setTimeout(() => {
      this.sneakPeek();
      this.addAdScript();
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
            title
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
        Summit_welcome {
          title
          subtitle
          body
          livestream_code_id
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
