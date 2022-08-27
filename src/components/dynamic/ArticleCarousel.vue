<template>
  <div>
    <div class="items horizontal-slider learn-article__item">
      <div
        class="card-element item"
        v-for="(element, index) in articles"
        :key="index"
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
              :src="element.imageUrl"
              alt="picture"
            />
          </div>
          <div class="card-element__title-desc">
            <div class="card-element__title-desc__header">
              <h6 class="element-grid-main-tag">{{ element.mainTag }}</h6>
              <h5 class="element-grid-title">{{ element.title }}</h5>
            </div>
          </div>
          <!-- <btn class="ecosystem" url="">{{
            element.cta_title ? element.cta_title : "VISIT SITE"
          }}</btn> -->
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
      articles: [
        //BOTTOM CTAs
        {
          imageUrl: "/img/learn/learnThumbnail-00001.jpg",
          mainTag: "Tutorial",
          title: "Secret-BSC Bridge",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00002.jpg",
          mainTag: "Tutorial",
          title: "Secret-XRM Bridge",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00003.jpg",
          mainTag: "Tutorial",
          title: "How to buy SCRT using Osmosis ZOne & ATOM",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00004.jpg",
          mainTag: "Tutorial",
          title: "How to buy SCRT using Switchwhere",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00005.jpg",
          mainTag: "Tutorial",
          title: "How to buy SCRT using Transak on Secret Swap",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00006.jpg",
          mainTag: "Tutorial",
          title: "How to Stake SCRT",
          url: "/learn/test",
        },
      ],
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
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
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
    coolStuff: allStrapiCoolStuff {
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
          types: type {
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

.learn-article {
  &__item {
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
      // flex-direction: column;
      text-align: center;
      border-radius: 10px;
      max-width: 400px;
      min-width: 400px;

      margin-right: var(--f-gutter-l);

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
        gap: 10px;
        padding: var(--f-gutter);
        // grid-template-rows: 64px 1fr;

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
        grid-template-columns: 1fr;
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
          gap: 0;
          align-content: start;
        }
        .element-grid {
          &-main-tag {
            font-family: "Hind";
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: #fbc998;
            display: flex;
            align-items: center;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          &-title {
            color: white;
          }
        }
      }
      &.hidden {
        display: none;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 206px;
        // aspect-ratio: 1 / 1;
      }

      // &:hover {
      //   transform: var(--card-hover-transform);
      //   box-shadow: var(--card-hover-shadow) var(--accent-gray);
      // }
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
