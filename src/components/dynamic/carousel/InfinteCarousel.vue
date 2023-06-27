<template>
  <div class="infinite-carousel" :class="containerStyles">
    <h6 :style="titleColor">
      {{ title }}
    </h6>
    <InfiniteSlideBar :duration="carouselDuration">
      <div v-for="(item, index) in content" :key="index" :style="imageHeight">
        <ResponsiveImage :src="item.image" />
      </div>
    </InfiniteSlideBar>
  </div>
</template>

<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";
import ResponsiveImage from "@/components/content/ResponsiveImage.vue";
import { sizes } from "@/utils";

export default {
  components: {
    InfiniteSlideBar,
    ResponsiveImage,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    padding_top: {
      type: String,
      required: true,
    },
    padding_bottom: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    component_colors: {
      type: Object,
      required: false,
      default: () => {},
    },
    image_height: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  computed: {
    containerStyles() {
      const paddingTop = sizes[this.padding_top] || sizes.small;
      const paddingBottom = sizes[this.padding_bottom] || sizes.small;

      return [`${paddingTop}-top`, `${paddingBottom}-bottom`];
    },
    titleColor() {
      const defaultColor = "var(--color-neutral-dark-mode-05)";
      return {
        "--title-color": this.component_colors?.title_color || defaultColor,
      };
    },
    imageHeight() {
      return {
        "--image-height": this.image_height || "48px",
      };
    },
    carouselDuration() {
      return `${this.duration}s` || "150s";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";
.infinite-carousel {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 24px;

  h6 {
    color: var(--title-color);
    text-align: center;
    margin: 0;
  }

  ::v-deep {
    .vifnslb {
      &-container {
        width: 100%;
        overflow: hidden;
        padding-bottom: 16px;
      }

      &-bar {
        gap: 64px;
        margin-right: 64px;
        overflow: hidden;
        display: flex;
        width: auto;

        @include respond-to(">=m") {
          gap: 96px;
          margin-right: 96px;
        }

        img {
          height: var(--image-height);
        }
      }
    }
  }
}
</style>
