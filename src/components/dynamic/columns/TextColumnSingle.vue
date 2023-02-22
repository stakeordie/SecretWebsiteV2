<template>
  <div>
    <div
      :class="['text-column-single', widthSize, paddingTop, paddingBottom]"
      :id="titleId"
      :isAnchor="is_anchor"
      :navLevel="navigation_level"
    >
      <DynamicImage v-if="image" :image="image" />
      <DynamicEyebrowTitle
        v-if="eyebrow_title"
        :title="eyebrow_title"
        :alignment="paragraph_title_alignment"
        :color="eyebrow_color"
      />
      <DynamicTitle
        v-if="paragraph_title"
        :title="paragraph_title"
        :alignment="paragraph_title_alignment"
        :weight="paragraph_title_weight"
      />
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
import { removeCharacters, sizes } from "@/utils";
import CtaButton from "@/components/dynamic/basic/CtaButton.vue";
import DynamicEyebrowTitle from "@/components/dynamic/basic/DynamicEyebrowTitle.vue";
import DynamicImage from "@/components/dynamic/basic/DynamicImage.vue";
import DynamicTitle from "@/components/dynamic/basic/DynamicTitle.vue";

export default {
  components: { CtaButton, DynamicImage, DynamicEyebrowTitle, DynamicTitle },
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
    titleId() {
      const title = this.paragraph_title;
      return title ? removeCharacters(title) : "";
    },
    widthSize() {
      return this.width === "wide"
        ? "text-column-single__wide"
        : "text-column-single__standard";
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
