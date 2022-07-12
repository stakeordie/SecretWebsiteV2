<template>
  <div class="hero">
    <div class="column1">
      <div class="message">
        <h6 class="title">{{ homeHero.title }}</h6>
        <h1 class="tagline">{{ homeHero.tagline }}</h1>
      </div>
      <p class="message">
        <vue-markdown>{{ homeHero.subtitle }}</vue-markdown>
      </p>
    </div>
    <div class="column2">
      <img v-if="hasImage" :src="homeHero.image.url" :alt="title" />
      <image-placeholder
        v-else
        width="750"
        height="750"
        title="Hero Home Image"
      />
    </div>
  </div>
</template>

<script>
import { getLocaleData } from "@/utils";
export default {
  data: function () {
    return {
      title: "",
    };
  },
  computed: {
    hasImage() {
      if (this.homeHero.image.caption == "no-image") {
        return false;
      } else {
        return true;
      }
    },
    homeHero() {
      return getLocaleData(this.$static.homeHero, this.$context.locale);
    },
  },
};
</script>

<static-query>
  query{
    homeHero: allStrapiHomeHero {
      edges {
        node {
          attributes {
            title
            subtitle
            tagline
            locale
            # localizations {
            #   title
            #   subtitle
            #   tagline
            #   locale
            # }
            image {
              data {
                attributes {
                  url
                  caption
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.hero {
  padding: var(--f-gutter-l);
  background: var(--theme-card-bg-default);
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: var(--f-gutter-l);
  margin-bottom: var(--f-gutter-xxxl) !important;
  @include respond-to("<=m") {
    grid-template-columns: 1fr;
  }

  .column1 {
    display: flex;
    flex-direction: column;
  }

  .message {
    .tagline {
      font-family: Hind;
      font-weight: bold;
      font-size: var(--h1-text-size-hero);
      @include respond-to("<=m") {
        font-size: var(--f-h3-text-size);
        line-height: var(--f-h3-line-height);
      }
    }
    .title {
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--theme-card-text-color);
    }

    p {
      font-size: var(--paragraph-font-size-big);
      line-height: 1.7;

      @include theme(dark dark-colored) {
        color: var(--color-neutral-dark-mode-05);
      }

      @include theme(light light-colored) {
        color: var(--color-neutral-light-mode-05);
      }
      // a {
      //   font-size: var(--f-gutter);
      //   color: var(--color-neutral-dark-mode-05);
      //   &:hover {
      //     color: var(--color-analog-secondary-blue);
      //   }
      //   &:after {
      //     display: inline-block;
      //     width: var(--f-gutter);
      //     height: var(--f-gutter);
      //     content: "";
      //     margin-left: var(--f-gutter-s);
      //     background: url(../../assets/btn-arrow.svg);
      //     background-size: cover;
      //     transform: translate(0, 2px);
      //   }
      // }
      a {
        font-weight: bold;
        width: 100%;
        place-content: center center;
        display: inline-flex;
        background: var(--theme-card-button-bg);
        color: var(--theme-fg);
        cursor: pointer;
        align-items: center;
        gap: var(--f-gutter-xs);
        margin-right: var(--f-gutter);
        margin-bottom: 0;
        padding: var(--f-gutter-s) var(--f-gutter);
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 14px;
        border-radius: var(--f-forms-button-radius);
        outline: none;
        text-decoration: none;
        text-align: center;
        height: min-content;
        transition: background-color 0.4s, color 0.4s;
        p {
          margin-bottom: 0;
        }

        @include respond-to(">=l") {
          max-width: 285px;
        }

        @include respond-to("<=m") {
          margin-top: var(--f-gutter);
        }

        &.text-center {
          justify-content: center;
        }
        &.bg-invert {
          background: var(--theme-fg);
          &:hover {
            background: var(--color-neutral-dark-mode-01);
            @include theme(light light-colored) {
              background: var(--color-neutral-dark-mode-04);
            }
          }
          span {
            color: var(--theme-bg);
          }
        }
        &:hover {
          background: var(--color-neutral-dark-mode-02);
          span {
            transform: translateY(2px);
            color: var(--color-analog-primary-white);
          }
          img {
            @include theme(light light-colored) {
              filter: invert(1);
            }
          }
        }

        .btn-text {
          transform: translateY(1px);
          color: var(--theme-fg);
        }

        &.no-arrow {
          img {
            display: none !important;
          }
        }

        &.full {
          width: 100%;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
