<template>
  <div>
    <div class="all-media">
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
                />
                <img
                  class="checked"
                  src="../../assets/icon-checkbox-checked.svg"
                  alt="checked"
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
              <p class="type">{{ media.category }}</p>
              <h6>{{ media.title }}</h6>
              <p></p>
              <img :src="media.picture" :alt="media.title" />
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
          picture: media.cover_image.url,
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
  mediaEntries: allStrapiExternalMediaAlts(
    sort: { by: "order", order: ASC }) {
    edges {
      node {
        id: id
        order
        title
        type
        link
        cover_image {
          url
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

// @each $name, $color in $accent-colors {
// 	&.accent-#{$name} {
// 		color: var(--accent-#{$name});
// 	}
// }

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
      background: var(--theme-card-bg-default);
      transition: 0.2s ease;
      cursor: pointer;
      display: inline-block;
      /* flex-direction: column; */
      width: 350px;
      white-space: normal;
      /* justify-content: space-between; */
      vertical-align: top;
      margin-right: var(--f-gutter-l);
      border-radius: var(--f-radius);
      padding: var(--f-gutter);
      background: var(--theme-card-bg-default);
    }
  }
}

.all-media {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--f-gutter-xl);

  @include respond-to("<=m") {
    grid-template-columns: 1fr;
  }

  //.media-filter {}

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

      @include respond-to("<=s") {
        grid-template-columns: 1fr;
      }

      .item {
        border-radius: var(--f-radius);
        padding: var(--f-gutter);
        background: var(--theme-card-bg-default);
        transition: 0.2s ease;
        cursor: pointer;
        min-height: 300px;
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

        a {
          color: var(--theme-fg);
          display: flex;
          flex-flow: column;
        }

        p {
          &:first-child {
            text-transform: uppercase;
            margin-bottom: var(--f-gutter-s);
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        img {
          position: absolute;
          bottom: 0;
          padding: var(--f-gutter);
          border-radius: var(--f-gutter-l);
          left: 0;
          right: 0;
          height: 182px;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
