<template>
  <div>
    <div
      :id="titleId"
      :class="['text-column-single', widthSize, paddingTop, paddingBottom]"
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
        :color="component_colors ? component_colors.title_color : ''"
      />
      <DynamicBody
        v-if="paragraph"
        :text="paragraph"
        :align="paragraph_alignment"
        :color="component_colors ? component_colors.body_color : ''"
        :isExternalLink="is_external_link"
      />
      <CtaButton v-if="button" v-bind="button" />
      <DynamicFooter :title="footer_title" :links="footer_links" />
    </div>
  </div>
</template>

<script>
import { removeCharacters, sizes } from "@/utils";
import CtaButton from "@/components/dynamic/basic/CtaButton.vue";
import DynamicEyebrowTitle from "@/components/dynamic/basic/DynamicEyebrowTitle.vue";
import DynamicImage from "@/components/dynamic/basic/DynamicImage.vue";
import DynamicTitle from "@/components/dynamic/basic/DynamicTitle.vue";
import DynamicBody from "@/components/dynamic/basic/DynamicBody.vue";
import DynamicFooter from "@/components/dynamic/basic/DynamicFooter.vue";

export default {
  components: {
    CtaButton,
    DynamicImage,
    DynamicEyebrowTitle,
    DynamicTitle,
    DynamicBody,
    DynamicFooter,
  },
  props: {
    paragraph_title: {
      type: String,
      required: false,
      default: "",
    },
    paragraph_title_alignment: {
      type: String,
      required: false,
      default: "",
    },
    paragraph_title_weight: {
      type: String,
      required: false,
      default: "",
    },
    eyebrow_title: {
      type: String,
      required: false,
      default: "",
    },
    eyebrow_color: {
      type: String,
      required: false,
      default: "",
    },
    paragraph: {
      type: String,
      required: false,
      default: "",
    },
    paragraph_alignment: {
      type: String,
      required: false,
      default: "",
    },
    is_anchor: {
      type: Boolean,
      required: false,
    },
    width: {
      type: String,
      required: false,
      default: "",
    },
    navigation_level: {
      type: String,
      required: false,
      default: "",
    },
    padding_top: {
      type: String,
      required: false,
      default: "",
    },
    padding_bottom: {
      type: String,
      required: false,
      default: "",
    },
    button: {
      type: Object,
      required: false,
      default: null,
    },
    image: {
      type: Object,
      required: false,
      default: null,
    },
    component_colors: {
      type: Object,
      required: false,
      default: null,
    },
    is_external_link: {
      type: Boolean,
      required: false,
      default: false,
    },
    footer_title: {
      type: String,
      required: false,
      default: "",
    },
    footer_links: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    titleId() {
      const title = this.paragraph_title;
      return title ? removeCharacters(title) : "";
    },
    widthSize() {
      return this.width === "wide" ? "wide" : "standard";
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
    width: 100%;
    padding-inline: 16px;

    @include respond-to(">=m") {
      padding-inline: 0;
    }

    &.standard {
      max-width: 800px;
    }
  }

  &.empty-nav {
    .text-column-single {
      margin-inline: auto;
    }
  }
}
</style>
