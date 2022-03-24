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
          <p class="type">{{ media.type }}</p>
          <h6>{{ media.title }}</h6>
          <p></p>
          <img :src="media.picture" :alt="media.title" />
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
      required: false
    }
  },

  data() {
    return {
      mediaItems: []
    };
  },

  methods: {
      scroll_left() {
        let content = document.querySelector(".media-featured > .--flare-block > .content > .box");
        content.scrollLeft -= 390;
        console.log('left');
      },
      scroll_right() {
        let content = document.querySelector(".media-featured > .--flare-block > .content > .box");
        content.scrollLeft += 390;
        console.log('right');
        console.log(content);
      },

      onFilterApplied(filters) {
        this.appliedFilters = filters;
      }
    },

  computed: {
    filterMediaItems() {
      return this.$static.mediaEntries.edges.map(({ node: it }) => {
        return {
          type: it.type,
          title: it.title,
          url: it.link,
          picture: it.cover_image.url
        };
      });
    }
  }
};
</script>

<static-query>
query {
  mediaEntries: allStrapiExternalMediaAlts(filter: { is_featured: { eq: true } }){
    edges {
      node {
        title
        type
        link
        cover_image {
          url
        }
        is_featured
        external_media_source{
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

// @each $name, $color in $accent-colors {
// 	&.accent-#{$name} {
// 		color: var(--accent-#{$name});
// 	}
// }

.media-featured {
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

    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      border-radius: var(--f-radius);
      padding: var(--f-gutter);
      background: var(--theme-card-bg-default);
      transition: 0.2s ease;
      cursor: pointer;
      display: inline-block;
      //flex-direction: column;
      width: 350px;
      height: 400px;
      white-space: normal;
      //justify-content: space-between;
      vertical-align: top;
      margin-right: var(--f-gutter-l);
      position: relative;
      &:hover {
        transform: var(--card-hover-transform);
      }

      @each $name, $color in $accent-colors {
        &.accent-#{$name} {
          &:hover {
            background: var(--theme-card-bg-hover);
            box-shadow: var(--card-hover-shadow) var(--accent-#{$name});
          }

          .type {
            color: var(--accent-#{$name});
          }
        }
      }
      .type {
        text-transform: uppercase;
        margin: 0;
      }
      h6 {
        color: var(--theme-fg);
      }
      img {
        position: absolute;
        bottom: 0;
        padding: var(--f-gutter);
        border-radius: var(--f-gutter-l);
        left: 0;
        right: 0;
        height: 290px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>