<template>
  <column mode="full">
    <block>
      <div class="full-image-content-hero">
        <section
          class="hero-wrapper"
          :class="[imageHeight, paddingTop, paddingBottom]"
        >
          <ResponsiveImage
            v-if="image"
            :imageClass="imagePosition"
            :src="image"
            high-quality
          />
          <div class="content-hero">
            <DynamicEyebrowTitle
              v-if="content.eyebrow_title"
              :alignment="sizes.title_alignment"
              :color="content.eyebrow_color"
              :title="content.eyebrow_title"
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
          </div>
        </section>
      </div>
    </block>
  </column>
</template>

<script>
import { sizes } from "@/utils";
import DynamicEyebrowTitle from "@/components/dynamic/basic/DynamicEyebrowTitle.vue";
import DynamicTitle from "@/components/dynamic/basic/DynamicTitle.vue";
import DynamicCustomTitle from "@/components/dynamic/basic/DynamicCustomTitle.vue";
import DynamicBody from "@/components/dynamic/basic/DynamicBody.vue";

export default {
  components: {
    DynamicEyebrowTitle,
    DynamicTitle,
    DynamicCustomTitle,
    DynamicBody
  },
  props: {
    image: {
      type: Object,
      required: true
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
    }
  },
  computed: {
    imageHeight() {
      return this.hero_height === "full-screen" ? "background-full" : "";
    },
    paddingTop() {
      const size = sizes[this.sizes.padding_top];
      return size ? `${size}-top` : `${sizes.none}-top`;
    },
    paddingBottom() {
      const size = sizes[this.sizes.padding_bottom];
      return size ? `${size}-bottom` : `${sizes.small}-bottom`;
    },
    imagePosition() {
      const imagePositions = {
        left: "image-left",
        center: "image-center",
        right: "image-right",
        full: "image-full"
      };
      const position = imagePositions[this.image_position];
      return position ? position : imagePositions.right;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.full-image-content-hero {
  background-color: #11151a;

  .hero-wrapper {
    display: grid;
    place-items: center;
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 572px;
    padding: 0 16px;

    &.background-full {
      min-height: calc(100vh - var(--header-height, 0px));
    }

    .content-hero {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
      gap: 16px;
      max-width: 600px;
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
}
</style>
