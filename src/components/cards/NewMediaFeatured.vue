<template>
  <div>
    <div class="items horizontal-slider">
      <div
        v-for="(media, index) in filterMediaItems"
        :key="index"
        class="item"
        :class="`accent-${media.type}`"
      >
        <a :href="media.url">
          <ResponsiveImage :src="media.picture" />
          <p class="type">{{ media.type }}</p>
          <h6>{{ media.title }}</h6>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      mediaItems: [],
    };
  },

  methods: {
    scroll_left() {
      let content = document.querySelector(
        ".new-media-featured > .--flare-block > .content > .box"
      );
      content.scrollLeft -= 390;
    },
    scroll_right() {
      let content = document.querySelector(
        ".new-media-featured > .--flare-block > .content > .box"
      );
      content.scrollLeft += 390;
    },

    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
  },

  computed: {
    filterMediaItems() {
      return this.$static.mediaEntries.edges.map(({ node: it }) => {
        return {
          type: it.type,
          title: it.title,
          url: it.link,
          picture: it.cover_image,
        };
      });
    },
  },
};
</script>

<static-query>
query {
  mediaEntries: allStrapiExternalMedia(filter: { is_featured: { eq: true } }) {
    edges {
      node {
        title
        type
        link
        cover_image {
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
        is_featured
      }
    }
  }
}

</static-query>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: (Article, Podcast, Video);

.new-media-featured {
  position: relative;

  .content {
    .box {
      overflow-x: scroll;
      max-width: 98vw;
      scrollbar-width: none;
      scroll-behavior: smooth;
      @include respond-to("<=m") {
        max-width: 97vw;
      }
      padding-left: 0;
      padding-right: 0;

      @include respond-to(">=l") {
        padding-left: 3vw;
      }

      @include respond-to(">=xl") {
        padding-left: 9vw;
      }

      @include respond-to(">=xxl") {
        padding-left: 13vw;
      }

      @include respond-to("xxxl") {
        padding-left: 19vw;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .items {
    white-space: nowrap;
    display: inline-flex;
    gap: var(--f-gutter-l);

    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      display: grid;
      padding: var(--f-gutter);
      border-radius: var(--f-gutter-s);
      background: var(--color-analog-primary-black);
      height: 340px;
      width: 350px;
      transition: 0.2s ease;
      cursor: pointer;

      &:hover {
        transform: none;
      }

      a {
        display: grid;
        width: 100%;
        height: fit-content;

        img {
          border-radius: var(--f-gutter-s);
          width: inherit;
          max-height: 200px;
          min-height: 200px;
          object-fit: cover;
        }

        .type {
          margin-top: var(--f-gutter-s);
          margin-bottom: 0;
          line-height: 24px;
          text-transform: uppercase;
          font-weight: 600;
          width: 100%;
          white-space: normal;
        }

        h6 {
          margin-bottom: 0;
          color: var(--color-analog-primary-white);
          width: 100%;
          white-space: normal;
        }
      }

      @each $name, $color in $accent-colors {
        &.accent-#{$name} {
          background: var(--color-neutral-dark-mode-03);
          &:hover {
            background: var(--color-neutral-dark-mode-04);
            box-shadow: none;
          }

          .type {
            color: var(--accent-#{$name}-v2);
            letter-spacing: 1px;
          }
        }
      }
    }
  }
}
</style>
