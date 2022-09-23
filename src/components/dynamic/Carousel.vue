<template>
  <div>
    <div
      v-if="dynamic_learn_article_group"
      class="learn-carousel"
      :class="[
        dynamic_learn_article_group
          ? 'carouselId-' + dynamic_learn_article_group.id
          : '',
        dynamic_learn_article_group ? 'carouselId-' + idCarousel : '',
      ]"
    >
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
      <div
        class="items learn-carousel__item"
        v-if="dynamic_learn_article_group"
      >
        <div
          class="card-element item"
          v-for="(element, index) in articlesCarousel
            .dynamic_learn_articles"
          :key="index"
        >
          <a
            class="card-element__overall-link"
            :href="element.route"
            target="blank"
            rel="noopener noreferrer"
          >
            <div class="card-element__header">
              <img
                class="card-element__header__logo"
                :src="
                  element.thumbnail_image.url
                    ? element.thumbnail_image.url
                    : ''
                "
                alt="picture"
              />
            </div>
            <div class="card-element__title-desc">
              <div class="card-element__title-desc__header">
                <div v-for="(tag, index) in element.tags" :key="index">
                  <h6 class="element-grid-main-tag">{{ tag.tag }}</h6>
                </div>
                <h5 class="element-grid-title">{{ element.title }}</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div
      v-else
      style="font-size: xx-large; border: 1px solid white; padding: 10px 30px"
    >
      A CAROUSEL DEFINED HERE IS MISSING AN ARTICLE GROUP - CHECK THE ENTRY IN
      STRAPI
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dynamic_learn_article_group: Object,
    title: String,
    subtitle: String,
    card_image: Object,
    searchDataset: Object,
  },

  data: function () {
    return {
      idCarousel: "",
    };
  },

  methods: {
    scroll_left() {
      let carouselId = document.querySelector(`.carouselId-${this.dynamic_learn_article_group.id}`);
      let carouselBox = carouselId.closest(".box");
      let carouselGroupHelper = carouselId.closest(".carousel-group-helper");
      
      if (!carouselGroupHelper) {
        carouselBox.scrollLeft -= 390;
      } else {
        carouselId.scrollLeft -= 390;
      }
    },
    scroll_right() {
      let carouselId = document.querySelector(
        `.carouselId-${this.dynamic_learn_article_group.id}`
      );
      let carouselBox = carouselId.closest(".box");
      let carouselGroupHelper = carouselId.closest(".carousel-group-helper");

      if (!carouselGroupHelper) {
        carouselBox.scrollLeft += 390;
      } else {
        carouselId.scrollLeft += 390;
      }
    },
    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
    carouselItems() {
      this.articlesCarousel = this.dynamic_learn_article_group;
      return this.articlesCarousel;
    },
    idCarouselTagger() {
      this.idCarousel = this.dynamic_learn_article_group.id;
      return this.idCarousel;
    },
  },
  beforeMount() {
    if (this.dynamic_learn_article_group) {
      this.carouselItems();
      this.idCarouselTagger();
    }
  },
  created() {
    console.log(this.dynamic_learn_article_group)
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
