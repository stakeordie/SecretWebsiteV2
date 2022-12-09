<template>
  <div>
    <div
      class="text-column-double"
      :class="widthSize"
      :id="titleId(main_title)"
      :isAnchor="is_anchor"
      :navLevel="navigation_level"
    >
      <h5
        v-if="eyebrow_title"
        class="text-column-double__eyebrow"
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
        v-if="main_title"
        id="main_title"
        class="text-column-double__title"
        :is="defaultTitle"
        :class="[
          titlePosition,
          main_title_weight === 'H2.5' ? 'text-column-double__title__25' : '',
        ]"
      >
        {{ main_title }}
      </component>
      <div class="text-column-double__col">
        <div class="text-column-double__col-1">
          <h4
            v-if="first_paragraph_title"
            class="text-column-double__col__title"
          >
            {{ first_paragraph_title }}
          </h4>
          <vue-markdown
            :source="first_paragraph"
            class="text-column-double__col__paragraph"
          />
        </div>
        <div class="text-column-double__col-2">
          <h4
            v-if="second_paragraph_title"
            class="text-column-double__col__title"
          >
            {{ second_paragraph_title }}
          </h4>
          <vue-markdown
            :source="second_paragraph"
            class="text-column-double__col__paragraph"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { removeCharacters } from "../../utils";

export default {
  props: {
    main_title: String,
    main_title_alignment: String,
    main_title_weight: String,
    eyebrow_title: String,
    eyebrow_color: String,
    is_anchor: Boolean,
    navigation_level: String,
    width: String,
    first_paragraph_title: String,
    first_paragraph: String,
    second_paragraph_title: String,
    second_paragraph: String,
  },
  computed: {
    defaultTitle() {
      if (!this.main_title_weight || this.main_title_weight === "") {
        return "H1";
      } else if (this.main_title_weight === "H2.5") {
        return "H2";
      } else {
        return this.main_title_weight;
      }
    },
    widthSize() {
      return this.width === "wide"
        ? "text-column-double__wide"
        : "text-column-double__standard";
    },
    titlePosition() {
      if (this.main_title_alignment === "center") {
        return "text-column__title__center";
      } else if (this.main_title_alignment === "right") {
        return "text-column__title__right";
      } else {
        return "text-column__title__left";
      }
    },
  },
  methods: {
    titleId(title) {
      return title ? removeCharacters(title) : "";
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article__content {
  .text-column-double {
    padding: 64px 16px;

    @include respond-to(">=m") {
      padding: 64px 0;
    }

    &__standard {
      max-width: 1200px;
    }

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

    &__col {
      width: 100%;
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));

      @include respond-to(">=m") {
        grid-template-columns: repeat(2, 1fr);
      }

      &__paragraph {
        p,
        ul li {
          color: var(--color-neutral-dark-mode-05);
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
  }
  &.empty-nav {
    .text-column-double {
      margin: 0 auto;
    }
  }
}
</style>
