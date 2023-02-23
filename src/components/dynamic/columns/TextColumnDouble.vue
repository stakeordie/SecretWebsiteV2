<template>
  <div>
    <div
      :class="['text-column-double', widthSize, paddingTop, paddingBottom]"
      :id="titleId(main_title)"
      :isAnchor="is_anchor"
      :navLevel="navigation_level"
    >
      <DynamicEyebrowTitle
        v-if="eyebrow_title"
        :title="eyebrow_title"
        :alignment="main_title_alignment"
        :color="eyebrow_color"
      />
      <DynamicTitle
        v-if="main_title"
        :title="main_title"
        :weight="main_title_weight"
        :alignment="main_title_alignment"
      />
      <div class="text-column-double__col">
        <div class="text-column-double__col-1">
          <DynamicImage v-if="first_image" :image="first_image" />
          <h4
            v-if="first_paragraph_title"
            class="text-column-double__col__title"
          >
            {{ first_paragraph_title }}
          </h4>
          <VueMarkdown
            v-if="first_paragraph"
            :source="first_paragraph"
            class="text-column-double__col__paragraph"
          />
          <DynamicButtons
            v-if="first_paragraph_buttons"
            :buttons="first_paragraph_buttons"
            :position="first_buttons_position"
          />
        </div>
        <div class="text-column-double__col-2">
          <DynamicImage v-if="second_image" :image="second_image" />
          <h4
            v-if="second_paragraph_title"
            class="text-column-double__col__title"
          >
            {{ second_paragraph_title }}
          </h4>
          <VueMarkdown
            v-if="second_paragraph"
            :source="second_paragraph"
            class="text-column-double__col__paragraph"
          />
          <DynamicButtons
            v-if="second_paragraph_buttons"
            :buttons="second_paragraph_buttons"
            :position="second_buttons_position"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { removeCharacters, sizes } from "@/utils";
import DynamicButtons from "@/components/dynamic/basic/DynamicButtons.vue";
import DynamicEyebrowTitle from "@/components/dynamic/basic/DynamicEyebrowTitle.vue";
import DynamicImage from "@/components/dynamic/basic/DynamicImage.vue";
import DynamicTitle from "@/components/dynamic/basic/DynamicTitle.vue";

export default {
  components: {
    DynamicButtons,
    DynamicImage,
    DynamicTitle,
    DynamicEyebrowTitle,
  },
  props: {
    main_title: {
      type: String,
      required: false,
    },
    main_title_alignment: {
      type: String,
      required: false,
      default: "left",
    },
    main_title_weight: {
      type: String,
      required: false,
      default: "H2",
    },
    eyebrow_title: {
      type: String,
      required: false,
    },
    eyebrow_color: {
      type: String,
      required: false,
    },
    is_anchor: {
      type: Boolean,
      required: false,
    },
    navigation_level: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    first_paragraph_title: {
      type: String,
      required: false,
    },
    first_paragraph: {
      type: String,
      required: false,
    },
    second_paragraph_title: {
      type: String,
      required: false,
    },
    second_paragraph: {
      type: String,
      required: false,
    },
    first_paragraph_buttons: {
      type: Array,
      required: false,
    },
    first_buttons_position: {
      type: String,
      required: false,
    },
    second_paragraph_buttons: {
      type: Array,
      required: false,
    },
    second_buttons_position: {
      type: String,
      required: false,
    },
    first_image: {
      type: Object,
      required: false,
    },
    second_image: {
      type: Object,
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
  },
  computed: {
    widthSize() {
      return this.width === "wide"
        ? "text-column-double__wide"
        : "text-column-double__standard";
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
    padding: 0 16px;

    @include respond-to(">=m") {
      padding: 0;
    }

    &__standard {
      max-width: 1200px;
    }

    &__col {
      width: 100%;
      display: grid;
      gap: 26px;
      grid-template-columns: 1fr;

      @include respond-to(">=m") {
        grid-template-columns: repeat(2, 1fr);
      }

      &__paragraph {
        p,
        ul li {
          color: var(--color-neutral-dark-mode-05);
          font-size: 16px;
          line-height: 30px;

          @include respond-to(">=m") {
            font-size: 20px;
          }
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
