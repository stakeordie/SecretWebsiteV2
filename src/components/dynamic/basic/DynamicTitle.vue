<template>
  <component
    :is="titleHeader"
    v-if="title"
    id="main_title"
    class="dynamic-title"
    :class="[titlePosition, titleAlignment]"
    :style="titleColor"
  >
    {{ title }}
  </component>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    weight: {
      type: String,
      required: false,
      default: "H2"
    },
    alignment: {
      type: String,
      required: false,
      default: "left"
    },
    color: {
      type: String,
      required: false,
      default: "var(--color-analog-primary-white)"
    }
  },
  computed: {
    titleHeader() {
      if (!this.weight || this.weight === "") {
        return "H1";
      } else if (this.weight === "H2.5") {
        return "H2";
      } else {
        return this.weight;
      }
    },
    titlePosition() {
      const textPositions = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      };
      const position = textPositions[this.alignment];
      return position ? position : textPositions.left;
    },
    titleAlignment() {
      return { "title-25": this.weight === "H2.5" };
    },
    titleColor() {
      const defaultColor = "var(--color-analog-primary-white)";
      const color = this.color;
      return {
        "--title-color": color ? color : defaultColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.dynamic-title {
  font-family: "Montserrat";
  color: var(--title-color);
  word-break: break-word;

  &.title-25:is(h2) {
    font-size: var(--f-h2_5-text-size);
    line-height: var(--f-h2_5-line-height);
  }

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
