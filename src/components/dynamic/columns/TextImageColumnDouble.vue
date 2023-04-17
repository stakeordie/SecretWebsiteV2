<template>
  <div>
    <div
      :id="titleId"
      class="text-image-column-double"
      :class="containerStyles"
      :style="contentAlignment"
    >
      <div class="col-1">
        <DynamicImage v-if="paragraph_image" :image="paragraph_image" />
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
        <DynamicButtons
          v-if="buttons"
          :buttons="buttons"
          :position="buttons_position"
        />
        <DynamicFooter :title="footer_title" :links="footer_links" />
      </div>
      <div class="col-2">
        <ResponsiveImage v-if="image" :src="image" />
        <p v-if="image_description">
          {{ image_description }}
        </p>
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
import DynamicBody from "@/components/dynamic/basic/DynamicBody.vue";
import DynamicFooter from "@/components/dynamic/basic/DynamicFooter.vue";

export default {
  components: {
    DynamicButtons,
    DynamicImage,
    DynamicTitle,
    DynamicEyebrowTitle,
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
    paragraph: {
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
    width: {
      type: String,
      required: false,
      default: "",
    },
    image: {
      type: Object,
      required: false,
      default: null,
    },
    image_description: {
      type: String,
      required: false,
      default: "",
    },
    image_position: {
      type: String,
      required: false,
      default: "",
    },
    is_anchor: {
      type: Boolean,
      required: false,
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
    buttons: {
      type: Array,
      required: false,
      default: () => [],
    },
    buttons_position: {
      type: String,
      required: false,
      default: "",
    },
    paragraph_image: {
      type: Object,
      required: false,
      default: null,
    },
    paragraph_alignment: {
      type: String,
      required: true,
    },
    component_colors: {
      type: Object,
      required: false,
      default: null,
    },
    content_alignment: {
      type: String,
      required: true,
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
    containerStyles() {
      const paddingTop = sizes[this.padding_top] || sizes.none;
      const paddingBottom = sizes[this.padding_bottom] || sizes.small;
      const isWide = this.width === "wide";

      return [`${paddingTop}-top`, `${paddingBottom}-bottom`, { wide: isWide }];
    },
    contentAlignment() {
      const isImageLeft = this.image_position === "left";
      const alignment = {
        top: "start",
        center: "center",
        bottom: "end",
      };

      return {
        "--align-items": alignment[this.content_alignment] || alignment.center,
        "--text-order": !isImageLeft ? 1 : 2,
        "--image-order": isImageLeft ? 1 : 2,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.text-image-column-double {
  width: 100%;
  padding-inline: 16px;
  display: grid;
  gap: 26px;
  place-items: var(--align-items);

  @include respond-to(">=m") {
    padding-inline: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  &.wide {
    @include respond-to(">=m") {
      grid-template-columns: 2fr 4fr;
    }
  }

  .col-1 {
    order: var(--text-order);
  }

  .col-2 {
    order: var(--image-order);
    padding: 16px;

    p {
      font-size: 16px;
      color: var(--color-neutral-dark-mode-05);
      text-align: center;
      max-width: 710px;
      margin: 0 auto;
      padding: 16px;
      line-height: 24px;
    }
  }
}
</style>
