<template>
  <Column mode="full">
    <Block>
      <div class="full-image-hero">
        <section class="hero-wrapper" :class="containerStyles">
          <ResponsiveImage
            v-if="image"
            :imageClass="imagePosition"
            :src="image"
            high-quality
          />
          <div class="content-hero">
            <DynamicEyebrowTitle
              v-if="content.eyebrow_title"
              :title="content.eyebrow_title"
              :alignment="sizes.title_alignment"
              :color="content.eyebrow_color"
            />
            <DynamicTitle
              v-if="content.title && !content.custom_title"
              :title="content.title"
              :weight="sizes.title_weight"
              :alignment="sizes.title_alignment"
            />
            <DynamicCustomTitle
              v-else-if="content.custom_title"
              :content="content"
              :sizes="sizes"
            />
            <DynamicBody
              v-if="content.body"
              :text="content.body"
              :align="sizes.body_alignment"
            />
            <DynamicButtons v-if="buttons" :buttons="buttons" />
          </div>
        </section>
      </div>
    </Block>
  </Column>
</template>

<script>
import { sizes } from "@/utils";
import DynamicButtons from "@/components/dynamic/basic/DynamicButtons.vue";
import DynamicBody from "@/components/dynamic/basic/DynamicBody.vue";
import DynamicEyebrowTitle from "@/components/dynamic/basic/DynamicEyebrowTitle.vue";
import DynamicTitle from "@/components/dynamic/basic/DynamicTitle.vue";

export default {
  components: {
    DynamicButtons,
    DynamicBody,
    DynamicEyebrowTitle,
    DynamicTitle
  },
  props: {
    image: {
      type: Object,
      required: false
    },
    image_position: {
      type: String,
      required: true
    },
    hero_height: {
      type: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    },
    sizes: {
      type: Object,
      required: true
    },
    buttons: {
      type: Array,
      required: false
    }
  },
  computed: {
    containerStyles() {
      const paddingTop = sizes[this.sizes.padding_top];
      const paddingBottom = sizes[this.sizes.padding_bottom];
      const isFullImage = this.hero_height === "full-screen";

      return [
        `${paddingTop || sizes.none}-top`,
        `${paddingBottom || sizes.small}-bottom`,
        { "background-full": isFullImage }
      ];
    },
    imagePosition() {
      const imagePositions = {
        left: "image-left",
        center: "image-center",
        right: "image-right",
        full: "image-full"
      };
      const position = imagePositions[this.image_position];
      return position || imagePositions.right;
    }
  }
};
</script>

<style lang="scss" scoped>
.full-image-hero {
  background-color: var(--color-neutral-dark-mode-01);

  .hero-wrapper {
    display: grid;
    place-items: center;
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 572px;
    padding-inline: 16px;

    &.background-full {
      min-height: calc(100vh - var(--all-headers-height, 0px));
    }

    .content-hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 1;
      gap: 16px;
      max-width: 700px;
    }
  }
}

::v-deep {
  .content > .box {
    padding: 0;
  }

  .responsive-image {
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
    user-select: none;

    img {
      opacity: 0.3;
      user-select: none;
      object-fit: contain;
      height: 100%;
      width: 100%;

      &.image-left {
        object-position: left;
      }
      &.image-center {
        object-position: center;
      }
      &.image-right {
        object-position: right;
      }
      &.image-full {
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .dynamic-eyebrow-title,
  .dynamic-title,
  .dynamic-custom-title {
    font-family: "Hind";
    margin: 0;
  }

  .dynamic-eyebrow-title {
    font-size: 22px;
    font-weight: 700;
  }

  .dynamic-body :last-child {
    margin: 0;
  }
}
</style>
