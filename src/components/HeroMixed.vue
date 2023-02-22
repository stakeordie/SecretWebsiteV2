<template>
  <column class="hero-mixed">
    <block class="hero-mixed-layer-bottom">
      <div
        class="hero-mixed-side-left"
        v-bind:style="{ 'background-color': bgColor }"
      ></div>
      <div class="hero-mixed-side-right">
        <img
          class="hero-mixed-side-right-img"
          v-if="bgImage"
          :src="bgImage"
          alt="hero image"
          loading="lazy"
        />
      </div>
    </block>

    <block class="layer-top">
      <div class="hero-message">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="body">
          <slot name="body"></slot>
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
    modifyMainMargin() {
      const mainEl = document.querySelector("main.--flare-page");
      mainEl.classList.add("hero-mixed-margin");
    },
    calcHeroMixedSizes() {
      // COMPONENT ELEMENTS
      const bottomLayer = document.querySelector(
        ".hero-mixed-layer-bottom .content .box"
      );
      const heroMessageEl = document.querySelector(".hero-message");

      // INITIAL VALUES
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
    this.modifyMainMargin();
    this.calcHeroMixedSizes();
  },
};
</script>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

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
