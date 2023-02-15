<template>
  <div>
    <div
      :class="['text-column-single', widthSize, paddingTop, paddingBottom]"
      :id="titleId"
      :isAnchor="is_anchor"
      :navLevel="navigation_level"
    >
      <DynamicImage v-if="image" :image="image" />
      <h5
        v-if="eyebrow_title"
        class="text-column__eyebrow"
        :class="titlePosition"
        :style="eyebrowColor"
      >
        {{ eyebrow_title }}
      </h5>
      <component
        id="main_title"
        v-if="paragraph_title"
        class="text-column__title"
        :is="defaultTitle"
        :class="[
          titlePosition,
          paragraph_title_weight === 'H2.5' ? 'text-column__title__25' : '',
        ]"
      >
        {{ paragraph_title }}
      </component>
      <VueMarkdown
        v-if="paragraph"
        :source="paragraph"
        class="text-column__paragraph"
      />
      <CtaButton v-if="button" v-bind="button" />
    </div>
  </div>
</template>

<script>
import { removeCharacters, sizes } from "../../utils";
import CtaButton from "./CtaButton.vue";
import DynamicImage from "./basic/DynamicImage.vue";

export default {
  components: { CtaButton, DynamicImage },
  props: {
    paragraph_title: {
      type: String,
      required: false,
    },
    paragraph_title_alignment: {
      type: String,
      required: false,
    },
    paragraph_title_weight: {
      type: String,
      required: false,
    },
    eyebrow_title: {
      type: String,
      required: false,
    },
    eyebrow_color: {
      type: String,
      required: false,
    },
    paragraph: {
      type: String,
      required: false,
    },
    is_anchor: {
      type: Boolean,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    navigation_level: {
      type: String,
      required: false,
    },
    padding_top: {
      type: String,
      required: false,
    },
    padding_bottom: {
      type: String,
      required: false,
    },
    button: {
      type: Object,
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
  },
  computed: {
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
    titleId() {
      const title = this.paragraph_title;
      return title ? removeCharacters(title) : "";
    },
    widthSize() {
      return this.width === "wide"
        ? "text-column-single__wide"
        : "text-column-single__standard";
    },
    titlePosition() {
      if (this.paragraph_title_alignment === "center") {
        return "text-column__title__center";
      } else if (this.paragraph_title_alignment === "right") {
        return "text-column__title__right";
      } else {
        return "text-column__title__left";
      }
    },
    paddingTop() {
      const size = sizes[this.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    },
    eyebrowColor() {
      const color = this.eyebrow_color;
      return {
        color: color ? color : "var(--color-ver2-primary-orange)",
      };
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article__content {
  .text-column-single {
    padding: var(--f-gutter);
    width: 100%;
    padding: 0 16px;

    @include respond-to(">=m") {
      padding: 0;
    }

    &__standard {
      max-width: 800px;
    }

    .text-column {
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
  }

  &.empty-nav {
    .text-column-single {
      margin: 0 auto;
    }
  }
}
</style>
