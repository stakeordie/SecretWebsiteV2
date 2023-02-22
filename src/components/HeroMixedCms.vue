<template>
  <column class="hero-mixed">
    <block
      class="hero-mixed-layer-bottom"
      v-for="(element, index) in sectionContent"
      :key="index"
    >
      <div
        class="hero-mixed-side-left"
        :style="{ 'background-color': element.heroColor }"
      ></div>
      <div class="hero-mixed-side-right">
        <ResponsiveImage
          classes="hero-mixed-side-right-img"
          :src="element.heroImage"
        />
      </div>
    </block>

    <block class="layer-top">
      <div
        class="hero-message"
        v-for="(element, index) in sectionContent"
        :key="index"
      >
        <div class="title">
          <h6>{{ element.heroSubtitle }}</h6>
          <h2>{{ element.heroTitle }}</h2>
        </div>
        <div class="body">
          <VueMarkdown :source="element.heroBody" />
        </div>
      </div>
    </block>
  </column>
</template>

<script>
export default {
  data: function () {
    return {
      showVideo: false,
    };
  },
  props: {
    section: {
      type: String,
      required: true,
    },
    accent: {
      type: String,
      required: false,
    },
    bgColor: {
      type: String,
      required: false,
    },
    bgImage: {
      type: String,
      required: false,
    },
    specialMargin: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
  methods: {
    calcHeroMixedSizes() {
      const bottomLayer = document.querySelector(
        ".hero-mixed-layer-bottom .content .box"
      );
      const heroMessageEl = document.querySelector(".hero-message");
      let leftDistance = heroMessageEl.getBoundingClientRect().left;
      bottomLayer.setAttribute(
        "style",
        `grid-template-columns: ${
          leftDistance + heroMessageEl.offsetWidth / 2 + "px"
        } 1fr;`
      );
      window.addEventListener("resize", function () {
        onResize();
      });
    },
  },
  mounted() {
    this.calcHeroMixedSizes();
  },
  computed: {
    sectionContent() {
      const content = this.$static.aboutSubpages.edges.map(
        (it) => it.node[this.section]
      );
      if (process.isClient) {
        const accentColor = document.querySelector(".simple-layout");
        accentColor.style.setProperty("--aboutSp-accent", content[0].heroColor);
      }
      return content;
    },
  },
};
</script>

<static-query>
query {
  aboutSubpages: allStrapiAboutSubpage {
    edges {
      node {
        AboutSecretTokensBridges: about_secret_tokens_bridges {
          heroColor: hero_color
          heroImage: hero_image {
            url
            name
            ext
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          heroSubtitle: hero_subtitle
          heroTitle: hero_title
          heroBody: hero_body
          mainContent: main_content
        }
        aboutSecretFinance: about_secret_finance {
          heroColor: hero_color
          heroImage: hero_image {
            url
            name
            ext
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          heroSubtitle: hero_subtitle
          heroTitle: hero_title
          heroBody: hero_body
          mainContent: main_content
        }
        secretNfts: secret_nfts {
          heroColor: hero_color
          heroImage: hero_image {
            url
            ext
            name
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          heroSubtitle: hero_subtitle
          heroTitle: hero_title
          heroBody: hero_body
          mainContent: main_content
        }
        faq {
          heroColor: hero_color
          heroImage: hero_image {
            url
            ext
            name
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          heroSubtitle: hero_subtitle
          heroTitle: hero_title
          heroBody: hero_body
          mainContent: main_content
        }
        secretContracts: secret_contracts {
          heroColor: hero_color
          heroImage: hero_image {
            url
            ext
            name
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          heroSubtitle: hero_subtitle
          heroTitle: hero_title
          heroBody: hero_body
          mainContent: main_content
        }
        aboutSecretBridges: about_secret_bridges {
          heroColor: hero_color
          heroImage: hero_image {
            url
            ext
            name
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          heroSubtitle: hero_subtitle
          heroTitle: hero_title
          heroBody: hero_body
          mainContent: main_content
        }
        aboutSecretDaos: about_secret_daos {
          heroColor: hero_color
          heroImage: hero_image {
            url
            ext
            name
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          heroSubtitle: hero_subtitle
          heroTitle: hero_title
          heroBody: hero_body
          mainContent: main_content
        }
        aboutSecretGaming: about_secret_gaming {
          heroColor: hero_color
          heroImage: hero_image {
            url
            ext
            name
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          heroSubtitle: hero_subtitle
          heroTitle: hero_title
          heroBody: hero_body
          mainContent: main_content
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.about {
  &-secret-tokens-bridges,
  &-secret-finance,
  &-secret-gaming,
  &-secret-daos,
  &-secret-bridges,
  &-secret-nfts,
  &-secret-contracts {
    .swirl-wrapper {
      opacity: 0;
      display: none;
    }
  }
}

.hero-mixed {
  display: grid;
  position: relative;
  height: 593px;
  overflow: hidden;

  @include respond-to("<=m") {
    height: auto !important;
  }

  &-layer-bottom {
    inset: 0;

    .content {
      width: 100%;
      height: 100%;

      .box {
        position: absolute;
        padding: 0;
        width: 100%;

        .hero-mixed-side {

          &-right {
            background: black;

            @include respond-to("<=xs") {
              display: flex;
              width: fit-content;
              height: inherit;
            }
            &-img {
              width: 100%;
              object-fit: cover;
              @include respond-to("<=s") {
                width: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }

  .layer-top {
    z-index: 1;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-top: 100px;

    .hero-message {
      display: grid;
      width: calc(70% - var(--f-gutter-xl));
      max-width: 766px;
      background: var(--color-analog-primary-black);
      padding: var(--f-gutter-xl);
      gap: var(--f-gutter-l);
      @include respond-to("<=m") {
        padding: var(--f-gutter-l);
        width: calc(100% - var(--f-gutter));
        gap: 8px;
      }

      * {
        margin: 0;
      }

      .title {
        display: grid;
        gap: var(--f-gutter-s);
        color: --color-analog-primary-white;
        h2 {
          color: white;
        }
        @include respond-to("<=m") {
          gap: 8px;
          h2 {
            font-size: var(--f-h2-text-size-s);
            line-height: 32px;
          }
        }

        h6 {
          font-size: 18px;
          @include respond-to("<=m") {
            font-size: 14px;
          }
          line-height: 25px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--aboutSp-accent);
        }
      }

      .body {
        * {
          font-family: var(--f-default-headers-font);
          color: var(--color-analog-primary-white);
        }
        ul {
          list-style-type: disc;
          padding-left: var(--f-gutter-l);
        }
      }
    }
  }
}
</style>
