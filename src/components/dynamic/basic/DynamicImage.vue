<template>
  <div class="dynamic-image" :class="imagePosition" :style="imageMargin">
    <ResponsiveImage :src="image.image" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imagePosition() {
      const imagePositions = {
        left: "image-left",
        center: "image-center",
        right: "image-right",
      };
      const position = imagePositions[this.image.position];
      return position ? position : imagePositions.left;
    },
    imageMargin() {
      const margin = this.image.image_margin;
      const value = margin ? margin : "12px";
      return `--image-margin: ${value}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.dynamic-image {
  display: flex;

  &.image-left {
    justify-content: flex-start;
  }

  &.image-center {
    justify-content: center;
  }

  &.image-right {
    justify-content: flex-end;
  }

  img {
    margin: var(--image-margin) 0;
  }
}
</style>
