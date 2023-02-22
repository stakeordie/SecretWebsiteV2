<template>
  <div>
    <div class="new-all-media">
      <div class="media-filter">
        <div class="filter">
          <h4>Filters</h4>
          <ul class="custom-checkbox" :class="'selected-' + selectedCategories">
            <li v-for="cat in categories" :key="cat.ig">
              <label>
                <input
                  type="checkbox"
                  v-model="selectedCategories"
                  :value="cat.name"
                />
                {{ cat.name | capitalize }}
                <img
                  class="unchecked"
                  src="../../assets/icon-checkbox-unchecked.svg"
                  alt="unchecked"
                  loading="lazy"
                />
                <img
                  class="checked"
                  src="../../assets/icon-checkbox-checked.svg"
                  alt="checked"
                  loading="lazy"
                />
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div class="media-items">
        <h3>Media</h3>

        <div class="items">
          <div
            v-bind:key="`${media.title}`"
            v-for="media in filteredCategories"
            class="item"
            :class="`accent-${media.category}`"
          >
            <a :href="media.url">
              <ResponsiveImage :src="media.picture" />
              <p class="type">{{ media.category }}</p>
              <h6>{{ media.title }}</h6>
            </a>
          </div>
        </div>
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
      categories: [
        {
          name: "Article",
          id: 1,
        },
        {
          name: "Podcast",
          id: 2,
        },
        {
          name: "Video",
          id: 3,
        },
      ],
      selectedCategories: [],
    };
  },

  computed: {
    mediaItems() {
      return this.$static.mediaEntries.edges.map(({ node: media }) => {
        return {
          category: media.type,
          title: media.title,
          picture: media.cover_image,
          url: media.link,
        };
      });
    },

    filteredCategories() {
      if (this.selectedCategories.length <= 0) {
        return this.mediaItems;
      }
      return this.mediaItems.filter((it) =>
        this.selectedCategories.includes(it.category)
      );
    },
  },

  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<static-query>
query {
  mediaEntries: allStrapiExternalMedia(sort: { by: "order", order: ASC }) {
    edges {
      node {
        id: id
        order: sort
        title
        type
        link
        cover_image {
          url
          ext
          name
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

$accent-colors: ("Article", "Podcast", "Video");

.featured-media {
  .content {
    .box {
      overflow-x: scroll;
      max-width: 98vw;
      padding-left: 1rem;
      padding-right: 1rem;

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
      transition: 0.2s ease;
      cursor: pointer;
      display: inline-block;
      width: 350px;
      white-space: normal;
      vertical-align: top;
      margin-right: var(--f-gutter-l);
      border-radius: var(--f-radius);
      padding: var(--f-gutter);
    }
  }
}

.new-all-media {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--f-gutter-xl);

  @include respond-to("<=m") {
    grid-template-columns: 1fr;
  }

  .media-items {
    h3 {
      text-transform: capitalize;
    }

    .items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--f-gutter);

      @include respond-to("<=xxl") {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-to("<=l") {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-to("<=xs") {
        grid-template-columns: 1fr;
      }

      .item {
        display: grid;
        padding: var(--f-gutter);
        border-radius: var(--f-gutter-s);
        background: var(--color-neutral-dark-mode-03);
        height: 300px;
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
            width: 100%;
            object-fit: cover;
            height: 150px;
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
}
</style>
