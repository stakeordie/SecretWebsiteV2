<template>
  <Column
    v-if="data.image"
    class="dynamic-swirl-component"
    mode="full"
    :class="swirlPosition"
  >
    <Block>
      <img :src="data.image.url" alt="Swirl background" />
    </Block>
  </Column>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    align: {
      type: String,
      required: true,
      default: "top",
    },
  },
  computed: {
    swirlPosition() {
      const alignment = {
        top: "swirl-top",
        bottom: "swirl-bottom",
      };
      const positions = {
        "inline-content": "__block",
        "under-content": "__absolute",
      };
      const align = alignment[this.align];
      const defaultPosition = positions["inline-content"];
      const position = positions[this.data.position] || defaultPosition;
      return align + position;
    },
  },
};
</script>

<style lang="scss">
.dynamic-swirl-component {
  .content .box {
    padding: 0;
  }

  &.swirl-top {
    &__block {
      padding-bottom: 26px;
    }

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
