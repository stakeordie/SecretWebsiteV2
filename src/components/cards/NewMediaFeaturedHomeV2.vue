<template>
  <div class="new-media-featured-home-v2">
    <div class="featured-media-header">
      <h4 class="featured-media-header__title">Other Media</h4>
      <a href="/media/features" class="view-all">
        <span>view all</span>
        <img
          src="/img/icons/icon-arrow-right-light.svg"
          alt="Arrow left"
          loading="lazy"
        />
      </a>
    </div>
    <div class="media-featured-items-list">
      <div v-for="(media, index) in filterMediaItems" :key="index">
        <media-featured
          :url="media.url"
          :pictureSrc="media.picture"
          :category="media.type"
          :title="media.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MediaFeatured from "@/components/cards/MediaFeatured.vue";
export default {
  components: { MediaFeatured },
  props: {
    url: {
      type: String,
      required: false,
      default: "",
    },
  },

  data() {
    return {
      mediaItems: [],
    };
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
  methods: {
    scroll_left() {
      let content = document.querySelector(
        ".new-media-featured > .--flare-block > .content > .box",
      );
      content.scrollLeft -= 390;
    },
    scroll_right() {
      let content = document.querySelector(
        ".new-media-featured > .--flare-block > .content > .box",
      );
      content.scrollLeft += 390;
    },

    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.new-media-featured-home-v2 {
  display: flex;
  flex-direction: column;

  @include respond-to("<=s") {
    padding: var(--f-gutter);
  }

  .featured-media-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--f-gutter);

    @include respond-to("<=s") {
      padding: 16px 0px;
    }

    &__title {
      color: var(--color-neutral-dark-mode-05);
      text-transform: uppercase;
      margin: 0;
      font-weight: 600;
    }

    .view-all {
      display: flex;
      gap: 10px;
      align-items: center;
      text-transform: uppercase;
      font-family: hind;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      padding: 0;
      font-size: 16px;
      cursor: pointer;
      padding: 10px 0px;
      line-height: 16px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  .media-featured-items-list {
    display: grid;
    gap: var(--f-gutter-l);

    @include respond-to(">=s") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(">=l") {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

<static-query>
query {
  mediaEntries: allStrapiExternalMedia(
    order: DESC
    limit: 3
    filter: { is_featured: { eq: true } }
  ) {
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
          border-top-left-radius: 22px;
          border-top-right-radius: 22px;
          width: inherit;
          max-height: 200px;
          min-height: 200px;
          object-fit: cover;
        }

        .type {
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
        &.accent-#{$name}-v2 {
          &:hover {
            background: var(--color-neutral-dark-mode-04);
            box-shadow: none;
          }

          .type {
            color: var(--accent-#{$name}-v2);
          }
        }
      }
    }
  }
}
</style>
