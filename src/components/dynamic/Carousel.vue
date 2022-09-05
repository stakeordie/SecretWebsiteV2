<template>
  <div class="mover learn-carousel">
    <div class="learn-carousel__header">
      <div class="learn-carousel__header__description">
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </div>
      <div class="learn-carousel__header__controls">
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </div>
    </div>
    <div class="items horizontal-slider learn-carousel__item">
      <p>{{ image }}</p>
      <div
        class="card-element item"
        v-for="(element, index) in articlesCarousel.data.learn_pages"
        :key="index"
      >
        <a
          class="card-element__overall-link"
          :href="element.dynamic_learn_article.data.route"
          target="blank"
          rel="noopener noreferrer"
        >
          <div class="card-element__header">
            <img
              class="card-element__header__logo"
              src="/img/learn/learnThumbnail-00002.jpg"
              alt="picture"
            />
          </div>
          <div class="card-element__title-desc">
            <div class="card-element__title-desc__header">
              <!-- <p>{{dynamic_page_groups_learn_article}}</p> -->
              <h6 class="element-grid-main-tag">{{ tagCarousel }}</h6>
              <h5 class="element-grid-title">{{ element.name }}</h5>
              <!-- <div v-for="(article, index) in element.learn_pages" :key="index">
                <h5 class="element-grid-title">{{ article.name }}</h5>
              </div> -->
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- </block>
    
    </column> -->
  </div>
</template>

<script>
export default {
  props: {
    dynamic_page_groups_learn_article: Object,
    title: String,
    subtitle: String,
    image: Object,
  },

  data() {
    return {
      articlesCarousel: [],
      tagCarousel: [],
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
    carouselItems() {
      this.articlesCarousel = this.dynamic_page_groups_learn_article;
      this.tagCarousel = this.articlesCarousel.data.name;
      return this.articlesCarousel;
    },
  },

  beforeMount() {
    this.carouselItems();
  },
};
</script>

<style lang="scss">
.learn-carousel {
  display: grid;
  &__header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1200px;
    position: absolute;
    background: lightcoral;
    width: var(--f-breakpoint-xxl);
  }
  &__item {
    white-space: nowrap;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    padding-top: 100px;

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
      &__overall-link {
        display: grid;
        gap: 10px;
        padding: var(--f-gutter);
      }
      &__header {
        display: grid;
        grid-template-columns: 1fr;
        align-items: start;
        gap: 4px;
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
