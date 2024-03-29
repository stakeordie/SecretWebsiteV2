<template>
  <div>
    <div class="items horizontal-slider page-developer__cool-stuff">
      <div
        class="card-element item"
        v-for="element in coolStuff"
        :key="element.id"
      >
        <a
          class="card-element__overall-link"
          :href="element.url"
          target="blank"
          rel="noopener noreferrer"
        >
          <div class="card-element__header">
            <ResponsiveImage
              classes="card-element__header__logo"
              :src="element.logo"
            />
            <!-- Categorie tags -->
            <div class="meta meta--with-categories">
              <div class="m-elements card-element__header__tags">
                <p
                  class="tag-accent"
                  v-for="(category, id) in element.types"
                  :key="id"
                  :class="'accent-' + category.name"
                >
                  {{ category.name }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-element__title-desc">
            <div class="card-element__title-desc__header">
              <h4 class="element-grid-title">{{ element.title }}</h4>
              <p>
                {{ element.description }}
              </p>
            </div>
          </div>
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
        ".media-featured > .--flare-block > .content > .box",
      );
      content.scrollLeft -= 390;
    },
    scroll_right() {
      let content = document.querySelector(
        ".media-featured > .--flare-block > .content > .box",
      );
      content.scrollLeft += 390;
    },

    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
  },

  computed: {
    coolStuff() {
      return this.$static.coolStuff.edges.map((it) => {
        return it.node;
      });
    },
  },
};
</script>

<static-query>
  query {
    coolStuff: allStrapiCoolStuff (sort: { by: "cta_title", order: ASC }) {
      edges {
        node {
          id
          title: name
          url: link
          description
          cta_title
          logo {
            url
            ext
            name
          }
          types: type {
            name
          }
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developer {
  &__cool-stuff {
    white-space: nowrap;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;

    &::-webkit-scrollbar {
      display: none;
    }
    .card-element {
      border-radius: var(--f-radius);
      overflow: hidden;
      background: var(--theme-card-bg-default);
      transition: 0.2s ease;
      display: inline-flex;
      text-align: center;
      border-radius: 10px;
      max-width: 300px;
      min-width: 300px;

      margin-right: var(--f-gutter-l);

      white-space: normal;
      justify-content: space-between;
      vertical-align: top;
      position: relative;
      * {
        margin: 0;
      }
      &__overall-link {
        display: grid;
        gap: var(--f-gutter);
        padding: var(--f-gutter);
        grid-template-rows: 64px 1fr;

        .ecosystem {
          margin-top: 0;

          &:hover {
            color: var(--color-highkey-secondary-blue);
          }
        }
        &:hover .ecosystem .btn-text {
          color: var(--color-newBrand-blue-01);
        }

        &:hover .tag-accent {
          border-color: var(--color-neutral-dark-mode-02);
        }
      }
      &__header {
        display: grid;
        grid-template-columns: 64px 1fr;
        align-items: start;
        gap: 4px;

        &__logo {
          border-radius: 10px;
        }
        .meta {
          display: grid;
          justify-items: end;
        }
        &__tags {
          display: flex;
          flex-flow: wrap-reverse;
          justify-content: flex-end;
          gap: 5px;
          p {
            font-size: 15px;
            text-transform: capitalize;
            border-radius: 100px;
            padding: 2px 8px;
            border: 1px solid var(--color-neutral-dark-mode-04);
          }
        }
      }
      &__title-desc {
        display: grid;
        gap: 8px;
        text-align: left;
        &__header {
          display: grid;
          gap: 8px;
          align-content: start;
        }
        h4 {
          color: white;
        }
      }
      &.hidden {
        display: none;
      }

      img {
        object-fit: cover;
        width: 100%;
        aspect-ratio: 1 / 1;
      }

      &:hover {
        background: var(--color-neutral-dark-mode-04);
      }

      * {
        margin: 0;
      }

      h6 {
        color: var(--theme-fg);
      }

      p {
        &.tag {
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
