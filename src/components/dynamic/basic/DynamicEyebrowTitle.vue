<template>
  <h5
    v-if="title"
    class="dynamic-eyebrow-title"
    :class="titlePosition"
    :style="eyebrowColor"
  >
    {{ title }}
  </h5>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    alignment: {
      type: String,
      required: false,
      default: "left"
    },
    color: {
      type: String,
      required: false,
      default: "var(--color-ver2-primary-orange)"
    }
  },
  computed: {
    titlePosition() {
      const textPositions = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      };
      const position = textPositions[this.alignment];
      return position ? position : textPositions.left;
    },
    eyebrowColor() {
      const color = this.color;
      const defaultColor = "var(--color-ver2-primary-orange)";
      return {
        "--eyebrow-title-color": color ? color : defaultColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.dynamic-eyebrow-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 6px;
  color: var(--eyebrow-title-color);

  &.text-left {
    text-align: start;
  }

  &.text-center {
    text-align: center;
  }

  &.text-right {
    text-align: end;
  }
}
</style>
