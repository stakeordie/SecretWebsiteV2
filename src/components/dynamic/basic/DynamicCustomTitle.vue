<template>
  <VueMarkdown
    v-if="content.custom_title"
    class="dynamic-custom-title"
    :source="content.custom_title"
    :class="[titlePosition, titleWeight]"
    :style="titleColor"
  />
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    sizes: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "var(--color-analog-primary-white)"
    }
  },
  computed: {
    titlePosition() {
      const textPositions = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      };
      const position = textPositions[this.sizes.title_alignment];
      return position ? position : textPositions.left;
    },
    titleWeight() {
      return { "title-25": this.sizes.title_weight === "H2.5" };
    },
    titleColor() {
      const defaultColor = "var(--color-analog-primary-white)";
      const titleColor = this.color;
      const customColor = this.content.custom_title_color;
      return {
        "--title-color": titleColor ? titleColor : defaultColor,
        "--custom-color": customColor ? customColor : defaultColor
      };
    }
  }
};
</script>

<style lang="scss">
.dynamic-custom-title {
  color: var(--title-color);

  * {
    font-family: "Montserrat";
  }

  strong {
    color: var(--custom-color);
  }

  &.title-25 {
    * {
      font-size: var(--f-h2_5-text-size);
      line-height: var(--f-h2_5-line-height);
    }
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
