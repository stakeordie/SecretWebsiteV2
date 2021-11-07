<template>
  <div class="card-simple" :class="{ 'cta': $static.homeCtaCards.edges[0].node[cardId].page.route }">
    <a :href="$static.homeCtaCards.edges[0].node[cardId].page.route">
      <card-block>
        <h3>{{$static.homeCtaCards.edges[0].node[cardId].title}}</h3>
        <h4>{{$static.homeCtaCards.edges[0].node[cardId].subtitle}}</h4>
        <p>{{$static.homeCtaCards.edges[0].node[cardId].text}}</p>
      </card-block>
      <card-block v-if="hasImage">
        <img :src="$static.homeCtaCards.edges[0].node[cardId].image.url" :alt="$static.homeCtaCards.edges[0].node[cardId].image.alternativeText"/>
      </card-block>
    </a>
    <card-block>
      <image-placeholder v-if="!hasImage" :width="imageWidth" :height="imageHeight" title="Build Card Image" />
    </card-block>
  </div>
</template>

<script>
  export default {
    props: {
      cardId: {
        type: String,
        required: true
      },
      imageWidth: {
        type: String,
        required: true
      },
      imageHeight: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        strapiUrl: process.env.GRIDSOME_STRAPI_URL
      }
    },
    computed: {
      hasImage() {
        if(this.$static.homeCtaCards.edges[0].node[this.cardId].image.caption == "no-image") {
          return false;
        } else {
          return true;
        }
      }
    }
  }

</script>

<static-query>
  query {
    homeCtaCards: allStrapiHomeCtaCards{
      edges {
        node {
          locale
          card_1 {
            title
            subtitle
            text
            image {
              url
              caption
              alternativeText
            }
            page {
              route
            }
          }
          card_2 {
            title
            subtitle
            text
            image {
              url
              caption
              alternativeText
            }
            page {
              route
            }
          }
          card_3 {
            title
            subtitle
            text
            image {
              url
              caption
              alternativeText
            }
            page {
              route
            }
          }
          card_4 {
            title
            subtitle
            text
            image {
              url
              caption
              alternativeText
            }
            page {
              route
            }
          }
          localizations {
            locale
            card_1 {
              title
              subtitle
              text
              image {
                url
                caption
                alternativeText
              }
              page {
                route
              }
            }
            card_2 {
              title
              subtitle
              text
              image {
                url
                caption
                alternativeText
              }
              page {
                route
              }
            }
            card_3 {
              title
              subtitle
              text
              image {
                url
                caption
                alternativeText
              }
              page {
                route
              }
            }
            card_4 {
              title
              subtitle
              text
              image {
                url
                caption
                alternativeText
              }
              page {
                route
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

  $accent-colors: ("blue",
    "turquoise",
    "green",
    "yellow",
    "cream",
    "orange",
    "red",
    "purple",
    "gray",
  );

  // @each $name, $color in $accent-colors {
  // 	&.accent-#{$name} {
  // 		color: var(--accent-#{$name});
  // 	}
  // }

  .card-simple {
    border-radius: var(--f-radius);
    padding: var(--f-gutter-l);
    background: var(--theme-card-bg-default);
    transition: .2s ease;

    p {
      color: var(--theme-card-text-color);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--theme-fg);
    }

    &.vertical-stretch {
      height: 100%;

      a:not([aria-hidden="true"]):not(.btn) {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        .btn {
          margin-top: auto;
        }
      }
    }

    &.cta {
      cursor: pointer;
      &:hover {
      transform: var(--card-hover-transform);
    }

      @each $name,
      $color in $accent-colors {
        &.accent-#{$name} {
          &:hover {
            background: var(--theme-card-bg-hover);
            box-shadow: var(--card-hover-shadow) var(--accent-#{$name});
          }
        }
      }
    }

    &.text-center {
      text-align: center;

      img {
        display: inline-block;
      }

      h6 {
        margin: 0;
        color: var(--theme-fg);
      }
    }

    &.orientation-horizontal {
      a {
        color: var(--theme-fg);
        display: grid;
        gap: var(--f-gutter-xxl);
        grid-template-columns: 1fr 60%;

        @include respond-to("<=m") {
          grid-template-columns: 1fr;
        }

      }
    }

    &.orientation-vertical {
      a {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--f-gutter-xxl);
      }
    }

    @each $name,
    $color in $accent-colors {
      &.accent-#{$name} {
        h3 {
          color: var(--accent-#{$name});
        }
      }
    }
  }

</style>
