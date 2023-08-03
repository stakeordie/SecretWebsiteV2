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
                  src="/img/icons/icon-checkbox-unchecked.svg"
                  alt="unchecked"
                  loading="lazy"
                />
                <img
                  class="checked"
                  src="/img/icons/icon-checkbox-checked.svg"
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

        <div class="media-items-list">
          <div
            v-bind:key="`${media.title}`"
            v-for="media in filteredCategories"
          >
            <media-featured
              :url="media.url"
              :pictureSrc="media.picture"
              :category="media.category"
              :title="media.title"
            />
          </div>
        </div>
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
        this.selectedCategories.includes(it.category),
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
  mediaEntries: allStrapiExternalMedia(sort: { by: "release_date", order: DESC }) {
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
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

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

    .media-items-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 22px;

      @include respond-to(">=m") {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-to(">=l") {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-to(">=xxxl") {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>
