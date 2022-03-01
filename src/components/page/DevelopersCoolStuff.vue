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
            <img
              class="card-element__header__logo"
              :src="element.logo[0].url"
              alt="picture"
            />
            <!-- Categorie tags -->
            <div class="meta meta--with-categories">
              <div class="m-elements card-element__header__tags">
                <p
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
          <btn class="ecosystem" url="">{{
            element.cta_title ? element.cta_title : "VISIT SITE"
          }}</btn>
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
        ".media-featured > .--flare-block > .content > .box"
      );
      content.scrollLeft -= 390;
      console.log("left");
    },
    scroll_right() {
      let content = document.querySelector(
        ".media-featured > .--flare-block > .content > .box"
      );
      content.scrollLeft += 390;
      // console.log("right");
      // console.log(content);
    },

    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
  },

  computed: {
    coolStuff() {
      
      const coolStuffArr = this.$static.coolStuff.edges.map((it) => {
        return it.node;
      });
      coolStuffArr.sort(function (a, b) {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        if(titleA < titleB) {
          return -1
        }
        if(titleA > titleB) {
          return 1
        }
        return 0;
      });
      return coolStuffArr;
    },
  },
};
</script>

<static-query>
  query {
    coolStuff: allStrapiCoolStuffs {
      edges {
        node {
          id
          title: name
          url: link
          description
          cta_title
          logo {
            url
          }
          types {
            name
          }
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "../../sass/functions/theme";
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
      // gap: var(--f-gutter);
      flex-direction: column;
      text-align: center;
      border-radius: 10px;
      max-width: 300px;
      min-width: 300px;

      margin-right: var(--f-gutter-l);

      display: inline-flex;
      flex-direction: column;

      white-space: normal;
      justify-content: space-between;
      vertical-align: top;
      position: relative;
      * {
        margin: 0;
      }
      // 🔥🔥🔥🔥🔥 New styles 🔥🔥🔥🔥🔥
      &__overall-link {
        display: grid;
        gap: var(--f-gutter);
        padding: var(--f-gutter);
        grid-template-rows: 64px 1fr 32px;
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
          // gap: 8px;
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

      // &:hover {
      //   transform: var(--card-hover-transform);
      //   box-shadow: var(--card-hover-shadow) var(--accent-gray);
      // }
      &:hover{
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
