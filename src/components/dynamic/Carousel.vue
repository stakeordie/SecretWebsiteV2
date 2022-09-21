<template>
  <div
    class="learn-carousel"
    :class="[
      dynamic_learn_article_group.data
        ? 'carouselId-' + dynamic_learn_article_group.data.id
        : '',
      dynamic_learn_article_group.data ? 'carouselId-' + idCarousel : '',
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
    <!-- PORTAL -->
    <div
      class="items learn-carousel__item"
      v-if="dynamic_learn_article_group.data"
    >
      <div
        class="card-element item"
        v-for="(element, index) in articlesCarousel.data.dynamic_learn_articles
          .data"
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
              :src="element.thumbnail_image.data.url"
              alt="picture"
            />
          </div>
          <div class="card-element__title-desc">
            <div class="card-element__title-desc__header">
              <div v-for="(tag, index) in element.tags.data" :key="index">
                <h6 class="element-grid-main-tag">{{ tag.tag }}</h6>
              </div>
              <!-- <h6 class="element-grid-main-tag">{{ element.tags.data.tag }}</h6> -->
              <h5 class="element-grid-title">{{ element.title }}</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- SUBBPAGE / ARTICLE -->
    <div
      class="items learn-carousel__item"
      v-if="dynamic_learn_article_group.data"
    >
      <!-- <h6>LOL</h6> -->
      <!-- <h6>{{dynamic_page_groups_learn_article.data.learn_pages.dynamic_learn_article}}</h6> -->
      <div
        class="card-element item"
        v-for="(element, index) in articlesCarouselSubpage.data.learn_pages"
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
              <div
                v-for="(tag, index) in element.dynamic_learn_article.data.tags
                  .data"
                :key="index"
              >
                <h6 class="element-grid-main-tag">{{ tag.tag }}</h6>
              </div>
              <!-- <h6 class="element-grid-main-tag">{{ tagCarousel }}</h6> -->
              <h5 class="element-grid-title">
                {{
                  element.dynamic_learn_article.title
                    ? element.dynamic_learn_article.title
                    : "null"
                }}
              </h5>
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
      if (this.dynamic_learn_article_group.data) {
        let contentSubpage = document.querySelector(
          `.carouselId-${this.dynamic_learn_article_group.data.id}`
        );
        contentSubpage.parentElement.scrollLeft -= 390;
        contentSubpage.scrollLeft -= 390;
      } else {
        let content = document.querySelector(`.carouselId-${this.idCarousel}`);
        content.parentElement.scrollLeft -= 390;
        content.scrollLeft -= 390;
      }
    },
    scroll_right() {
      if (this.dynamic_learn_article_group.data) {
        let contentSubpage = document.querySelector(
          `.carouselId-${this.dynamic_learn_article_group.data.id}`
        );
        contentSubpage.parentElement.scrollLeft += 390;
        contentSubpage.scrollLeft += 390;
      } else {
        let content = document.querySelector(`.carouselId-${this.idCarousel}`);
        content.parentElement.scrollLeft += 390;
        content.scrollLeft += 390;
      }

      // contentSubpage.parentElement.scrollLeft += 390;
      // contentSubpage.scrollLeft += 390;
    },
    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
    carouselItems() {
      this.articlesCarousel = this.dynamic_learn_article_group;
      // this.tagCarousel = this.articlesCarousel.data.name;

      this.articlesCarouselSubpage = this.dynamic_learn_article_group;

      console.log(this.articlesCarousel);
      console.log(this.articlesCarouselSubpage);

      if (this.articlesCarousel) {
        return this.articlesCarousel;
      } else if (this.articlesCarouselSubpage) {
        return this.articlesCarouselSubpage;
      }
    },
    idCarouselTagger() {
      this.idCarousel = this.dynamic_learn_article_group.data.id;
      return this.idCarousel;
    },
  },
  beforeMount() {
    this.carouselItems();
    if (!this.dynamic_learn_article_group) {
      this.idCarouselTagger();
    }
  },
  created() {
    console.log(this.dynamic_learn_article_group)
  }
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
