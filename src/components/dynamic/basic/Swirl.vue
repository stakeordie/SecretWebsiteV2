<template>
  <div v-if="data.image" class="dynamic-swirl-component" :class="swirlPosition">
    <ResponsiveImage :src="data.image" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    align: {
      type: String,
      required: true,
      default: "top"
    }
  },
  computed: {
    swirlPosition() {
      const alignment = {
        top: "swirl-top",
        bottom: "swirl-bottom"
      };
      const positions = {
        "inline-content": "__block",
        "under-content": "__absolute"
      };
      const align = alignment[this.align] || alignment.top;
      const defaultPosition = positions["inline-content"];
      const position = positions[this.data.position] || defaultPosition;
      return align + position;
    }
  }
};
</script>

<style lang="scss" scoped>
.dynamic-swirl-component {
  &.swirl-top {
    &__absolute {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }

  &.swirl-bottom {
    &__block {
      padding-top: 26px;
    }

    &__absolute {
      position: absolute;
      z-index: -1;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }

  img {
    width: 100%;
  }
}
</style>
