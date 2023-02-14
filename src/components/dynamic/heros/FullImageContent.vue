<template>
  <column mode="full" class="full-image-content-hero">
    <block>
      <section
        class="hero-wrapper"
        :class="[imageHeight, paddingTop, paddingBottom]"
      >
        <img
          v-if="image"
          alt="Background Image"
          class="background-image"
          :class="imagePosition"
          :src="image.url"
        />
        <div class="content-hero">
          <h4
            v-if="content.eyebrow_title"
            class="content-hero__eyebrow"
            :class="titlePosition"
            :style="eyebrowColor"
          >
            {{ content.eyebrow_title }}
          </h4>
          <component
            v-if="content.title && !content.custom_title"
            class="content-hero__title"
            :is="defaultTitle"
            :class="[titlePosition, titleWeight]"
          >
            {{ content.title }}
          </component>
          <vue-markdown
            v-else-if="content.custom_title"
            class="content-hero__custom-title"
            :class="titlePosition"
            :source="content.custom_title"
          />
          <vue-markdown
            v-if="content.body"
            class="content-hero__body"
            :class="titlePosition"
            :source="content.body"
          />
        </div>
      </section>
    </block>
  </column>
</template>

<script>
import { sizes } from "../../../utils";

export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
    image_position: {
      type: String,
      required: true,
    },
    image_size: {
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
      return this.image_size === "full" ? "background-full" : "";
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
      return this.sizes.title_weight === "H2.5" ? "text-25" : "";
    },
    titlePosition() {
      const textPositions = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      };
      const position = textPositions[this.sizes.title_alignment];
      return position ? position : textPositions.center;
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
    imagePosition() {
      const imagePositions = {
        left: "image-left",
        center: "image-center",
        right: "image-right",
        full: "image-full",
      };
      const position = imagePositions[this.image_position];
      return position ? position : imagePositions.right;
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.full-image-content-hero {
  margin-bottom: 32px;
  background-color: #11151a;

  .content .box {
    padding: 0;
  }

  .hero-wrapper {
    display: grid;
    place-items: center;
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 572px;
    padding: 0 16px;

    &.background-full {
      min-height: calc(100vh - var(--header-height));
    }

    img.background-image {
      position: absolute;
      z-index: 0;
      opacity: 0.3;
      height: 100%;
      width: 100%;
      user-select: none;
      object-fit: contain;

      &.image-left {
        object-position: left;
      }

      &.image-center {
        object-position: center;
      }

      &.image-right {
        object-position: right;
      }

      &.image-full {
        object-fit: cover;
        object-position: center;
      }
    }

    .content-hero {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
      gap: 16px;
      max-width: 600px;

      * {
        margin: 0;
      }

      .text {
        &-25:is(h2) {
          font-size: var(--f-h2_5-text-size);
          line-height: var(--f-h2_5-line-height);
        }

        &-left {
          text-align: left;
        }

        &-center {
          text-align: center;
        }

        &-right {
          text-align: right;
        }
      }

      &__eyebrow {
        font-family: "Hind";
        font-weight: 700;
        text-transform: uppercase;
        color: var(--color-ver2-primary-orange);
      }

      &__custom-title {
        strong {
          color: var(--color-newBrand-blue-02);
        }
      }

      &__body {
        p {
          font-size: var(--paragraph-font-size-big);
          line-height: var(--paragraph-line-height-big);
        }
      }
    }
  }
}
</style>
