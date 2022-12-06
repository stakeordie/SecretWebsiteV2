<template>
  <div class="text-column-single" :class="widthSize">
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
      v-if="paragraph_title"
      class="text-column__title"
      :is="defaultTitle"
      :id="titleId"
      :is-anchor="is_anchor"
      :nav_level="navigation_level"
      :class="[
        titlePosition,
        paragraph_title_weight === 'H2.5' ? 'text-column__title__25' : '',
      ]"
    >
      {{ paragraph_title }}
    </component>
    <vue-markdown :source="paragraph" class="text-column__paragraph" />
  </div>
</template>

<script>
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
  },
  computed: {
    defaultTitle() {
      if (!this.paragraph_title_weight || this.paragraph_title_weight === "") {
        return "H1";
      } else if (this.paragraph_title_weight === "H2.5") {
        return "H2";
      } else {
        return this.paragraph_title_weight;
      }
    },
    titleId() {
      return this.paragraph_title
        ? this.paragraph_title.toLowerCase().replace(/\s+/g, "-")
        : "";
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
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article__content {
  .text-column-single {
    padding: var(--f-gutter);
    width: 100%;
    padding: 64px 16px;

    @include respond-to(">=m") {
      padding: 64px 0;
    }


    &__standard {
      max-width: 800px;
    }

    .text-column {
      &__title {
        font-family: "Montserrat";

        &__25:is(h2) {
          font-size: 36px;
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
