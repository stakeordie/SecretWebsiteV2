<template>
  <section v-if="cards" class="custom-carousel" :class="containerPaddings">
    <div class="header">
      <DynamicTitle
        v-if="title"
        :title="title"
        :alignment="title_alignment"
        :weight="title_weight"
        class="header__title"
        :color="component_colors ? component_colors.title_color : ''"
      />
      <div v-if="!hide_scroll_arrows" class="header__controls">
        <button @click="scroll('left')">
          <img
            src="/img/icons/icon-circle-left.svg"
            alt="Left icon"
            loading="lazy"
          />
        </button>
        <button @click="scroll()">
          <img
            src="/img/icons/icon-circle-right.svg"
            alt="Right icon"
            loading="lazy"
          />
        </button>
      </div>
    </div>
    <div ref="custom_carousel" class="cards-content">
      <CardWrapper
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :url="card.url"
        :externalLink="card.is_external_link"
        :style="textAlignment(card)"
      >
        <ResponsiveImage
          v-if="card.image"
          :src="card.image"
          class="card__image"
        />
        <DynamicTitle
          :title="card.title"
          :alignment="card.title_alignment"
          :weight="card.title_size"
        />
        <p v-if="card.description" class="card__text">
          {{ card.description }}
        </p>
      </CardWrapper>
    </div>
  </section>
</template>

<script>
import CardWrapper from "@/components/dynamic/cards/CardWrapper.vue";
import DynamicTitle from "@/components/dynamic/basic/DynamicTitle.vue";
import { sizes } from "@/utils";

export default {
  components: {
    CardWrapper,
    DynamicTitle,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    title_weight: {
      type: String,
      required: true,
    },
    title_alignment: {
      type: String,
      required: true,
    },
    padding_top: {
      type: String,
      required: true,
    },
    padding_bottom: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
    component_colors: {
      type: Object,
      required: false,
      default: null,
    },
    hide_scroll_arrows: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    containerPaddings() {
      const top = sizes[this.padding_top];
      const bottom = sizes[this.padding_bottom];
      return [
        `${top ? top : sizes.small}-top`,
        `${bottom ? bottom : sizes.small}-bottom`,
      ];
    },
  },
  methods: {
    scroll(direction = "right") {
      const carousel = this.$refs.custom_carousel;

      if (direction === "right") {
        carousel.scrollLeft += 300;
      } else {
        carousel.scrollLeft -= 300;
      }
    },
    textAlignment({ body_alignment = "left" }) {
      const alignment = {
        left: "left",
        center: "center",
        right: "right",
      };

      return {
        "--body-alignment": alignment[body_alignment] || alignment.left,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.custom-carousel {
  display: grid;
  gap: 16px;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    padding: 0 var(--f-gutter-l);
    min-height: 44px;

    @include respond-to(">=s") {
      flex-direction: row;
    }

    @include respond-to(">=xl") {
      max-width: 1200px;
      justify-self: center;
    }

    &__title {
      flex: 1;
    }

    &__controls {
      display: flex;
      gap: 16px;

      button {
        width: 44px;
        height: 44px;
        all: unset;
        user-select: none;
        border-radius: 100%;
        cursor: pointer;

        :hover {
          filter: brightness(1.5);
        }
      }
    }
  }

  .cards-content {
    width: 100%;
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
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

    .card {
      border-radius: var(--f-radius);
      background: var(--theme-card-bg-default);
      transition: 0.2s ease;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      padding: 16px;
      width: 300px;
      gap: 8px;
      flex-shrink: 0;
      scroll-snap-align: center;

      @include respond-to(">=m") {
        scroll-snap-align: end;
      }

      &:is(a):hover {
        cursor: pointer;
        background-color: var(--color-neutral-dark-mode-04);
      }

      &__image {
        max-width: 60px;
        display: flex;
        margin-bottom: 8px;
      }

      &__text {
        margin: 0;
        word-break: break-word;
        text-align: var(--body-alignment);
      }
    }
  }

  ::v-deep {
    .dynamic-title {
      margin: 0;
    }
  }
}
</style>
