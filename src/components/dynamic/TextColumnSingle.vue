<template>
  <div>
    <div
      :class="['text-column-single', widthSize, paddingTop, paddingBottom]"
      :id="titleId"
      :isAnchor="is_anchor"
      :navLevel="navigation_level"
    >
      <h5
        v-if="eyebrow_title"
        class="text-column__eyebrow"
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
      <vue-markdown
        v-if="paragraph"
        :source="paragraph"
        class="text-column__paragraph"
      />
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
    eyebrow_title: String,
    eyebrow_color: String,
    paragraph: String,
    is_anchor: Boolean,
    width: String,
    navigation_level: String,
    padding_top: String,
    padding_bottom: String,
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
