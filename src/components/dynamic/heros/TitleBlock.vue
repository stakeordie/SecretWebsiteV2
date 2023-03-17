<template>
  <column
    class="title-block-hero"
    :class="[hasImage, imageHeight]"
    :style="backgroundImage"
  >
    <block>
      <div
        class="hero-content"
        v-if="content"
        :class="[paddingTop, paddingBottom]"
      >
        <div class="hero-content__message">
          <h5
            v-if="content.eyebrow_title"
            class="hero-content__message__eyebrow"
            :style="eyebrowColor"
          >
            {{ content.eyebrow_title }}
          </h5>

          <component
            v-if="content.title"
            class="hero-content__message__title"
            :is="defaultTitle"
            :class="[titlePosition, titleWeight]"
          >
            {{ content.title }}
          </component>
          <vue-markdown
            class="hero-content__message__body"
            v-if="content.body"
            :source="content.body"
          />
        </div>
      </div>
    </block>
  </column>
</template>

<script>
import { sizes } from "@/utils";
export default {
  props: {
    image: {
      type: Object,
      required: false,
    },
    image_height: {
      type: String,
      required: false,
    },
    content_position: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
    sizes: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageHeight() {
      return this.image_height === "full-screen" ? "background-full" : "";
    },
    defaultTitle() {
      const weight = this.sizes.title_weight;
      if (!weight || weight === "") {
        return "H1";
      } else if (weight === "H2.5") {
        return "H2";
      } else {
        return weight;
      }
    },
    titleWeight() {
      return this.sizes.title_weight === "H2.5" ? "title-25" : "";
    },
    titlePosition() {
      if (this.sizes.title_alignment === "center") {
        return "title-center";
      } else if (this.sizes.title_alignment === "right") {
        return "title-right";
      } else {
        return "title-left";
      }
    },
    paddingTop() {
      const size = sizes[this.sizes.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.sizes.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    },
    eyebrowColor() {
      const color = this.content.eyebrow_color;
      const defaultColor = "var(--color-ver2-primary-orange)";
      return {
        color: color ? color : defaultColor,
      };
    },
    backgroundImage() {
      return this.image ? `background-image: url(${this.image.url})` : "";
    },
    hasImage() {
      return !this.image ? "empty-image" : "";
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.title-block-hero {
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 32px;
  min-height: 30vh;

  @include respond-to(">=l") {
    min-height: 60vh;
  }

  &.empty-image {
    min-height: 400px;
    height: auto;
    background-color: var(--theme-card-bg-default);
  }

  &.background-full {
    height: calc(100vh - var(--all-headers-height, 0px));
  }

  .hero-content {
    display: grid;
    align-items: flex-end;
    height: 100%;

    &__message {
      display: grid;
      background: var(--color-analog-primary-black);
      padding: var(--f-gutter-xl);
      gap: var(--f-gutter-s);
      width: 100%;

      @include respond-to(">=l") {
        width: calc(70% - var(--f-gutter-xl));
        max-width: 766px;
      }

      * {
        margin: 0;
      }

      &__eyebrow {
        font-size: 14px;
        line-height: 25px;
        text-transform: uppercase;
        letter-spacing: 1px;

        @include respond-to(">=m") {
          font-size: 18px;
        }
      }

      &__body {
        font-family: var(--f-default-headers-font);
        color: var(--color-analog-primary-white);
      }
    }
  }
}
</style>
