<template>
  <div class="card-simple" :class="{ 'cta': $static.homeCtaCards.edges[0].node[cardId].link }">
    <a :href="'https://strapi.stakeordie.com' + $static.homeCtaCards.edges[0].node[cardId].link">
      <card-block>
        <h3>{{$static.homeCtaCards.edges[0].node[cardId].title}}</h3>
        <h4>{{$static.homeCtaCards.edges[0].node[cardId].subtitle}}</h4>
        <p>{{$static.homeCtaCards.edges[0].node[cardId].text}}</p>
      </card-block>
      <card-block>
        <img v-if="hasImage" :src="'https://strapi.stakeordie.com' + $static.homeCtaCards.edges[0].node[cardId].image.url" :alt="title"/>
        <image-placeholder v-else width="630" height="500" title="Build Card Image"/>
      </card-block>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      cardId: {
        type: String,
        required: true
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
          card_1 {
            title
            subtitle
            text
            image {
              url
              caption
              alternativeText
            }
            link
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
            link
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
            link
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
            link
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

      @each $name,
      $color in $accent-colors {
        &.accent-#{$name} {
          &:hover {
            background: var(--theme-card-bg-hover);
            box-shadow: var(--f-gutter-s) var(--f-gutter-s) 0 0 var(--accent-#{$name});
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
