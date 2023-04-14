<template>
  <div>
    <div v-if="dynamic_learn_article_group" class="learn-carousel">
      <div class="learn-carousel__header">
        <div class="learn-carousel__header__description">
          <h3>{{ title }}</h3>
          <p v-if="subtitle">
            {{ subtitle }}
          </p>
        </div>
        <div class="learn-carousel__header__controls">
          <button class="theme padding-small control" @click="scroll('left')">
            <img
              src="/img/icons/icon-circle-left.svg"
              alt="left"
              loading="lazy"
            />
          </button>

          <button class="theme padding-small control" @click="scroll('right')">
            <img
              src="/img/icons/icon-circle-right.svg"
              alt="right"
              loading="lazy"
            />
          </button>
        </div>
      </div>
      <div
        v-if="dynamic_learn_article_group"
        ref="learn_carousel"
        class="items learn-carousel__item"
      >
        <CarouselCard
          v-for="(element,
          index) in dynamic_learn_article_group.dynamic_learn_articles"
          :key="index"
          :data="element"
        />
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
import CarouselCard from "@/components/dynamic/cards/CarouselCard.vue";

export default {
  components: {
    CarouselCard,
  },
  props: {
    dynamic_learn_article_group: Object,
    title: String,
    subtitle: String,
    card_image: Object,
    searchDataset: Object,
  },
  computed: {
    carouselData() {
      return dynamic_learn_article_group.dynamic_learn_articles;
    },
  },
  methods: {
    scroll(direction = "right") {
      const carouselBox = this.$refs.learn_carousel;
      if (direction === "right") {
        carouselBox.scrollLeft += 390;
      } else {
        carouselBox.scrollLeft -= 390;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-carousel {
  display: grid;
  gap: 16px;

  &__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    padding: 0 var(--f-gutter-l);

    @include respond-to(">=s") {
      flex-direction: row;
    }

    @include respond-to(">=xl") {
      max-width: 1200px;
      justify-self: center;
    }

    &__description {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
      }
      * {
        margin: 0;
      }
    }
    &__controls {
      display: flex;

      * {
        margin: 0;
      }
    }
  }

  &__item {
    width: 100%;
    white-space: nowrap;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    overflow-x: auto;
    gap: 26px;
    scroll-behavior: smooth;
    padding-right: 16px;
    padding-left: 16px;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;

    @include respond-to(">=l") {
      padding-left: 3vw;
    }

    @include respond-to(">=xxl") {
      padding-left: 13vw;
    }

    @include respond-to("xxxl") {
      padding-left: 19vw;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
