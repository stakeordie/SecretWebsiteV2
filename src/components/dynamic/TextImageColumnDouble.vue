<template>
  <div>
    <div
      class="text-image-column-double"
      :class="[widthSize, imagePosition, paddingTop, paddingBottom]"
      :id="titleId"
      :isAnchor="is_anchor"
      :navLevel="navigation_level"
    >
      <div class="text-image__col-1">
        <h5
          v-if="eyebrow_title"
          class="text-image__col-1__eyebrow"
          :class="titlePosition"
          :style="{
            color: eyebrow_color
              ? eyebrow_color
              : 'var(--color-ver2-primary-orange)',
          }"
        >
          {{ eyebrow_title }}
        </h5>
        <component
          v-if="paragraph_title"
          id="main_title"
          class="text-image__col-1__title"
          :is="defaultTitle"
          :class="[titlePosition, titleWeight]"
        >
          {{ paragraph_title }}
        </component>
        <vue-markdown
          :source="paragraph"
          class="text-image__col-1__paragraph"
        />
      </div>
      <div class="text-image__col-2">
        <img :src="image.url" :alt="image.alternativeText" />
        <p class="text-image__col-2__caption">{{ image_description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { removeCharacters, sizes } from "../../utils";

export default {
  props: {
    paragraph_title: String,
    paragraph_title_alignment: String,
    paragraph_title_weight: String,
    paragraph: String,
    eyebrow_title: String,
    eyebrow_color: String,
    width: String,
    image: Object,
    image_description: String,
    image_position: String,
    is_anchor: Boolean,
    navigation_level: String,
  },
  computed: {
    titleId() {
      const title = this.paragraph_title;
      return title ? removeCharacters(title) : "";
    },
    defaultTitle() {
      const weight = this.paragraph_title_weight;
      if (!weight || weight === "") {
        return "H1";
      } else if (weight === "H2.5") {
        return "H2";
      } else {
        return weight;
      }
    },
    widthSize() {
      return this.width === "wide"
        ? "text-image-column-double__wide"
        : "text-image-column-double__standard";
    },
    titlePosition() {
      if (this.paragraph_title_alignment === "center") {
        return "text-image__col-1__title__center";
      } else if (this.paragraph_title_alignment === "right") {
        return "text-image__col-1__title__right";
      } else {
        return "text-image__col-1__title__left";
      }
    },
    titleWeight() {
      return this.paragraph_title_weight === "H2.5"
        ? "text-image__title__25"
        : "";
    },
    imagePosition() {
      return this.image_position === "left" ? "image-left" : "image-right";
    },
    paddingTop() {
      const size = sizes[this.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article__content {
  .text-image-column-double {
    width: 100%;
    padding: 0 16px;
    display: grid;
    gap: 26px;
    grid-template-columns: 1fr;

    @include respond-to(">=m") {
      padding: 0;
      grid-template-columns: repeat(2, 1fr);
    }

    &__wide {
      @include respond-to(">=m") {
        grid-template-columns: 2fr 4fr;
      }
    }

    .text-image {
      &__col-1 {
        order: 1;

        &__title {
          font-family: "Montserrat";

          &__25:is(h2) {
            font-size: var(--f-h2_5-text-size);
            line-height: var(--f-h2_5-line-height);
          }

          &__left {
            text-align: start;
          }

          &__center {
            text-align: center;
          }

          &__right {
            text-align: end;
          }
        }

        &__eyebrow {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 6px;
        }

        &__paragraph {
          p,
          ul,
          li {
            color: var(--color-neutral-dark-mode-05);
            font-size: 20px;
            line-height: 30px;
          }
        }
      }

      &__col-2 {
        order: 2;
        place-self: center;
        padding: 16px;

        &__caption {
          font-size: 16px;
          color: var(--color-neutral-dark-mode-05);
          text-align: center;
          max-width: 710px;
          margin: 0 auto;
          padding: 16px;
          line-height: 24px;
        }
      }
    }

    &.image-left .text-image {
      &__col-1 {
        order: 2;
      }

      &__col-2 {
        order: 1;
      }
    }
  }
}
</style>
