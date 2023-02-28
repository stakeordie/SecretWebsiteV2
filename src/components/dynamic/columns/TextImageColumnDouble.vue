<template>
  <div>
    <div
      class="text-image-column-double"
      :class="[widthSize, imagePosition, paddingTop, paddingBottom]"
      :id="titleId"
      :isAnchor="is_anchor"
      :navLevel="navigation_level"
    >
      <div class="text-image__col-1">
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
        />
        <DynamicBody
          v-if="paragraph"
          :text="paragraph"
          :align="paragraph_alignment"
        />
        <DynamicButtons
          v-if="buttons"
          :buttons="buttons"
          :position="buttons_position"
        />
      </div>
      <div class="text-image__col-2">
        <ResponsiveImage v-if="image" :src="image" />
        <p v-if="image_description" class="text-image__col-2__caption">
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

export default {
  components: {
    DynamicButtons,
    DynamicImage,
    DynamicTitle,
    DynamicEyebrowTitle,
    DynamicBody
  },
  props: {
    paragraph_title: {
      type: String,
      required: false
    },
    paragraph_title_alignment: {
      type: String,
      required: false
    },
    paragraph_title_weight: {
      type: String,
      required: false
    },
    paragraph: {
      type: String,
      required: false
    },
    eyebrow_title: {
      type: String,
      required: false
    },
    eyebrow_color: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: false
    },
    image_description: {
      type: String,
      required: false
    },
    image_position: {
      type: String,
      required: false
    },
    is_anchor: {
      type: Boolean,
      required: false
    },
    navigation_level: {
      type: String,
      required: false
    },
    padding_top: {
      type: String,
      required: false
    },
    padding_bottom: {
      type: String,
      required: false
    },
    buttons: {
      type: Array,
      required: false
    },
    buttons_position: {
      type: String,
      required: false
    },
    paragraph_image: {
      type: Object,
      required: false
    },
    paragraph_alignment: {
      type: String,
      required: true
    }
  },
  computed: {
    titleId() {
      const title = this.paragraph_title;
      return title ? removeCharacters(title) : "";
    },
    widthSize() {
      return { "wide" : this.width === "wide"};
    },
    imagePosition() {
      return this.image_position === "left" ? "image-left" : "image-right";
    },
    paddingTop() {
      const size = sizes[this.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    }
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article__content {
  .text-image-column-double {
    width: 100%;
    max-width: 1200px;
    margin-inline: auto;
    padding: 0 16px;
    display: grid;
    gap: 26px;
    grid-template-columns: 1fr;

    @include respond-to(">=m") {
      padding: 0;
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to("xxxl") {
      max-width: 1600px;
    }

    &.wide {
      @include respond-to(">=m") {
        grid-template-columns: 2fr 4fr;
      }
    }

    .text-image {
      &__col-1 {
        order: 1;
      }

      &__col-2 {
        order: 2;
        place-self: center;
        padding: 16px;

        &__caption {
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

    &.image-left .text-image {
      &__col-1 {
        order: 2;
      }

      &__col-2 {
        order: 1;
      }
    }
  }
}
</style>
