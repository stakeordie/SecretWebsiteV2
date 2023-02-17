<template>
  <column>
    <block>
      <section
        class="double-column-image-hero"
        :class="[imagePosition, paddingTop, paddingBottom]"
      >
        <div class="hero-image col-1">
          <img v-if="image" :src="image.url" />
        </div>

        <div class="content-hero col-2" v-if="content">
          <div class="content-hero__header">
            <h5
              v-if="content.eyebrow_title"
              class="content-hero__header__eyebrow"
              :class="titlePosition"
              :style="eyebrowColor"
            >
              {{ content.eyebrow_title }}
            </h5>
            <component
              v-if="content.title && !content.custom_title"
              class="content-hero__header__title"
              :is="defaultTitle"
              :class="[titlePosition, titleWeight]"
            >
              {{ content.title }}
            </component>
            <VueMarkdown
              v-else-if="content.custom_title"
              class="content-hero__header__custom-title"
              :class="titlePosition"
              :source="content.custom_title"
              :style="customTitleColor"
            />
          </div>
          <VueMarkdown
            v-if="content.body"
            class="content-hero__body"
            :source="content.body"
          />
          <DynamicButtons :buttons="buttons" :position="buttons_position" />
        </div>
      </section>
    </block>
  </column>
</template>

<script>
import { sizes } from "../../../utils";
import DynamicButtons from "../basic/DynamicButtons.vue";

export default {
  components: { DynamicButtons },
  props: {
    image: {
      type: Object,
      required: true,
    },
    image_position: {
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
    buttons: {
      type: Array,
      required: false,
    },
    buttons_position: {
      type: String,
      required: false,
    },
  },
  computed: {
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
    titlePosition() {
      if (this.sizes.title_alignment === "center") {
        return "title-center";
      } else if (this.sizes.title_alignment === "right") {
        return "title-right";
      } else {
        return "title-left";
      }
    },
    titleWeight() {
      return this.sizes.title_weight === "H2.5" ? "title-25" : "";
    },
    imagePosition() {
      return this.image_position === "right" ? "image-right" : "image-left";
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
    customTitleColor() {
      const color = this.content.custom_title_color;
      const textColor = color ? color : "var(--color-analog-primary-white)";
      return {
        "--title-color": textColor,
      };
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.double-column-image-hero {
  padding: var(--f-gutter);
  display: grid;
  grid-template-columns: 1fr;
  gap: 54px;
  min-height: 75vh;

  @include respond-to(">=m") {
    gap: 26px;
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-image {
    display: flex;
    justify-content: center;
    order: 1;

    img {
      object-fit: contain;
    }
  }

  .content-hero {
    display: grid;
    gap: var(--f-gutter);
    margin: auto;
    order: 2;

    @include respond-to("<=s") {
      padding: var(--f-gutter);
    }

    &__header {
      * {
        margin: 0;
      }

      &__eyebrow {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 6px;
        text-transform: uppercase;
        color: var(--color-ver2-primary-orange);
      }

      &__custom-title {
        * {
          font-family: "Montserrat";
        }

        strong {
          color: var(--title-color);
        }
      }
    }

    &__body {
      display: grid;
      gap: var(--f-gutter);
      color: var(--theme-card-text-color);

      p {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        margin: 0;
      }

      ul {
        display: grid;
        row-gap: 10px;
        padding-left: 0;
        margin-bottom: 0;

        li {
          display: flex;
          align-items: center;
          font-size: var(--paragraph-font-size-big);
          line-height: var(--paragraph-line-height-big);
          margin-bottom: 0;
          position: relative;
          padding-left: 34px;

          &::before {
            content: "";
            background-image: url("../../../assets/about-secret-network/check-circle-green.svg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 2px;
          }
        }
      }
    }

    &__buttons {
      display: flex;
      gap: var(--f-gutter);
      flex-direction: column;

      @include respond-to(">=s") {
        flex-direction: row;
      }
    }

    .title {
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
  }

  &.image-right {
    .col-1 {
      order: 1;

      @include respond-to(">=m") {
        order: 2;
      }
    }

    .col-2 {
      order: 2;
      @include respond-to(">=m") {
        order: 1;
      }
    }
  }
}
</style>
