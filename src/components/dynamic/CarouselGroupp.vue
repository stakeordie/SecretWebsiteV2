<template>
  <div class="learn-carousel" :class="'carouselId-' + idCarousel">
    <div class="learn-carousel__header">
      <div class="learn-carousel__header__description">
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </div>
      <div class="learn-carousel__header__controls">
        <button class="theme padding-small control" @click="scroll_left">
          <img src="../../assets/icon-circle-left.svg" alt="left" />
        </button>

        <button class="theme padding-small control" @click="scroll_right">
          <img src="../../assets/icon-circle-right.svg" alt="right" />
        </button>
      </div>
    </div>
    <div class="items horizontal-slider learn-carousel__item">
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
              :src="element.card_image.data.url"
              alt="picture"
            />
          </div>
          <div class="card-element__title-desc">
            <div class="card-element__title-desc__header">
              <h6 class="element-grid-main-tag">{{ tagCarousel }}</h6>
              <h5 class="element-grid-title">{{ element.title }}</h5>
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
    carousels: [
      {
        dynamic_page_groups_learn_article: Object,
        title: String,
        subtitle: String,
        card_image: Object,
      }
    ]
  },

  methods: {
    scroll_left() {
      let content = document.querySelector(`.carouselId-${this.idCarousel}`);
      content.parentElement.scrollLeft -= 390;
    },
    scroll_right() {
      let content = document.querySelector(`.carouselId-${this.idCarousel}`);
      content.parentElement.scrollLeft += 390;
    },
    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
    carouselItems() {
      this.articlesCarousel = this.dynamic_page_groups_learn_article;
      this.tagCarousel = this.articlesCarousel.data.title;
      console.log(this.articlesCarousel)
      return this.articlesCarousel;
    },
    idCarouselTagger() {
      this.idCarousel = this.dynamic_page_groups_learn_article.data.id;
      return this.idCarousel;
    },
  },
  mounted() {
  },
  beforeMount() {
    this.idCarouselTagger();
    this.carouselItems();
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.learn-carousel {
  display: grid;
  &__header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1200px;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--f-gutter-l);
    @include respond-to(">=l") {
      width: var(--f-breakpoint-xxl);
    }
    &__description {
      display: grid;
      gap: 0;
      * {
        margin: 0;
      }
    }
    &__controls {
      display: grid;
      gap: 0;
      justify-content: end;
      grid-auto-flow: column;
      * {
        margin: 0;
      }
    }
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
