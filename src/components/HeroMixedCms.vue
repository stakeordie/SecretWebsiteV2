<template>
  <column class="hero-mixed">
    <block class="hero-mixed-layer-bottom" v-for="(element, index) in sectionContent" :key="index"> 
      <div
        class="hero-mixed-side-left"
        v-bind:style="{ 'background-color': element.heroColor }"
      ></div>
      <div class="hero-mixed-side-right">
        <img
          class="hero-mixed-side-right-img"
          :src="element.heroImage[0].url"
          alt="hero image"
        />
      </div>
    </block>

    <block class="layer-top">
      <div class="hero-message" v-for="(element, index) in sectionContent" :key="index">
        <div class="title">
          <h6>{{element.heroSubtitle}}</h6>
          <h2>{{element.heroTitle}}</h2>
        </div>
        <div class="body">
          <vue-markdown :source="element.heroBody"></vue-markdown>
        </div>
      </div>
    </block>
  </column>
</template>

<script>
export default {
  data: function() {
    return {
      showVideo: false
    };
  },
  props: {
    section: {
        type: String,
        required: true
      },
    accent: {
      type: String,
      required: false
    },
    bgColor: {
      type: String,
      required: false
    },
    bgImage: {
      type: String,
      required: false
    },
    specialMargin: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  methods: {
    // modifyMainMargin() {
    //   const mainEl = document.querySelector("main.--flare-page");
    //   mainEl.classList.add("hero-mixed-margin");
    // },
    calcHeroMixedSizes() {
      // BROWSER VALUES
      let previosBrowserWidth = window.innerWidth || document.body.clientWidth;
      let currentBrowserWidth = window.innerWidth || document.body.clientWidth;

      // COMPONENT ELEMENTS
      const bottomLayer = document.querySelector(
        ".hero-mixed-layer-bottom .content .box"
      );
      let bottomLayerSideRightWidth = document.querySelector(
        ".hero-mixed-side-right"
      ).offsetWidth;
      let bottomLayerSideRightHeight = document.querySelector(
        ".hero-mixed-side-right"
      ).offsetHeight;
      let bottomLayerSideRightImg = document.querySelector(
        ".hero-mixed-side-right-img"
      );
      const heroMessageEl = document.querySelector(".hero-message");

      // INITIAL VALUES
      let leftDistance = heroMessageEl.getBoundingClientRect().left;
      bottomLayer.setAttribute(
        "style",
        `grid-template-columns: ${leftDistance +
          heroMessageEl.offsetWidth / 2 +
          "px"} 1fr;`
      );

      // ON RESIZE VALUES
      let onResize = function() {
        currentBrowserWidth = window.innerWidth || document.body.clientWidth;
        if (Math.abs(previosBrowserWidth - currentBrowserWidth) > 1) {
          leftDistance = heroMessageEl.getBoundingClientRect().left;
          bottomLayer.setAttribute(
            "style",
            `grid-template-columns: ${leftDistance +
              heroMessageEl.offsetWidth / 2 +
              "px"} 1fr;`
          );
          // bottomLayerSideRightImg.setAttribute(
          //   "style",
          //   `width: ${bottomLayerSideRightWidth}px; height: ${bottomLayerSideRightHeight}px`
          // );
        }
      };
      window.addEventListener("resize", function() {
        onResize();
      });
    }
  },
  mounted() {
    this.calcHeroMixedSizes();
  },
  computed: {
    sectionContent() {
      const content = this.$static.aboutSubpages.edges.map(
        (it) => it.node[this.section]
      );
      return content;
    },
  }
};
</script>

<static-query>
query {
  aboutSubpages: allStrapiAboutSecretTokensBridges {
    edges {
      node {
         AboutSecretTokensBridges{
          heroColor
          heroImage {
            url
          }
          heroSubtitle
          heroTitle
          heroBody
          mainContent
        }
        aboutSecretFinance {
          heroColor
          heroImage {
            url
          }
          heroSubtitle
          heroTitle
          heroBody
          mainContent
        }
        secretNfts {
          heroColor
          heroImage {
            url
          }
          heroSubtitle
          heroTitle
          heroBody
          mainContent
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.hero-mixed {
  display: grid;
  position: relative;
  height: 593px;

  &-layer-bottom {
    position: absolute;
    inset: 0;

    .content {
      .box {
        display: grid;
        grid-template-columns: 25% 75%;
        grid-auto-flow: column;
        @include respond-to("<=m") {
          grid-auto-flow: row;
          grid-template-columns: repeat(2, 1fr);
        }
        position: absolute;
        inset: 0;
        padding: 0;

        .hero-mixed-side {
          &-left {
            background: #ffc7c0;
          }

          &-right {
            background: black;
            display: flex;
            overflow: hidden;
            justify-items: center;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              max-width: none;
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
        gap: var(--f-gutter-l);
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
          gap: var(--f-gutter-s);
          h2 {
            font-size: var(--f-h2-text-size-s);
            line-height: var(--f-gutter);
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
          color: var(--color-analog-secondary-yellow);
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
