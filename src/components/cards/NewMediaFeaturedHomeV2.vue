<template>
  <div class="new-media-featured-home-v2">
    <div class="featured-media-header">
      <h5 class="featured-media-header__title">
        Other MEDIA
      </h5>
      <div class="featured-media-header__btns">
        <btn
          class="link-arrow"
          style="justify-content: right"
          url="/media/features"
        >
          VIEW ALL
        </btn>
      </div>
    </div>
    <div class="items">
      <div
        v-for="(media, index) in filterMediaItems"
        :key="index"
        class="item"
        :class="`accent-${media.type}-v2`"
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

$accent-colors: (Article, Podcast, Video);

.new-media-featured-home-v2 {
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include respond-to("<=s") {
    padding: var(--f-gutter);
  }

  .featured-media-header {
    display: flex;
    justify-content: space-between;

    &__title {
      color: var(--color-neutral-dark-mode-05);
      text-transform: uppercase;
      margin: 0;
    }

    &__btns {
      @include respond-to("<=s") {
        display: flex;
      }

      .btn {
        font-family: hind;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        padding: 0;
        cursor: pointer;

        span {
          transition: 0.2s ease-in-out;
        }

        &:hover {
          & span {
            color: var(--color-newBrand-blue-01);
          }
        }
      }
    }
  }

  .items {
    display: grid;
    gap: var(--f-gutter-l);

    @include respond-to(">=s") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(">=l") {
      grid-template-columns: repeat(3, 1fr);
    }

    .item {
      display: grid;
      padding: var(--f-gutter);
      border-radius: var(--f-gutter-s);
      background: var(--color-neutral-dark-mode-03);
      transition: 0.2s ease;
      cursor: pointer;

      a {
        display: grid;
        width: 100%;
        height: fit-content;

        img {
          border-radius: var(--f-gutter-s);
          height: 180px;
          width: 100%;
          object-fit: cover;

          @include respond-to("m") {
            height: 144px;
          }
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

          @include respond-to("<=m") {
            font-size: 14px;
          }
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
            letter-spacing: 1px;
          }
        }
      }
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
        external_media_source {
          name
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
