<template>
  <div class="media-featured-list horizontal-slider">
    <div v-for="(media, index) in filterMediaItems" :key="index">
      <media-featured
        :url="media.url"
        :pictureSrc="media.picture"
        :category="media.type"
        :title="media.title"
      />
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

.new-media-featured {
  position: relative;

  .content {
    .box {
      overflow-x: scroll;
      scrollbar-width: none;
      scroll-behavior: smooth;
      @include respond-to("<=m") {
        max-width: 100vw;
      }
      padding-left: 16px;
      padding-right: 16px;

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

  .media-featured-list {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    white-space: nowrap;
    grid-gap: 22px;

    @include respond-to(">=s") {
      grid-auto-columns: 350px;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
