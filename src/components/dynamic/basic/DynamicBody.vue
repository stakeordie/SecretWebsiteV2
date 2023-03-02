<template>
  <VueMarkdown
    v-if="text"
    :source="text"
    class="dynamic-body"
    :style="[textAlignment, bodyColor]"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    align: {
      type: String,
      required: false,
      default: "left"
    },
    color: {
      type: String,
      required: false,
      default: "var(--color-neutral-dark-mode-05)"
    }
  },
  computed: {
    textAlignment() {
      const alignments = {
        left: "left",
        center: "center",
        right: "right"
      };
      const position = alignments[this.align];
      return {
        "--text-alignment": position ? position : alignments.left
      };
    },
    bodyColor() {
      const defaultColor = "var(--color-neutral-dark-mode-05)";
      const color = this.color;
      return {
        "--text-color": color ? color : defaultColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.dynamic-body {
  text-align: var(--text-alignment);

  ::v-deep {
    p,
    ul,
    li {
      color: var(--text-color);
      font-size: 16px;
      line-height: 30px;

      @include respond-to(">=m") {
        font-size: 20px;
      }
    }
  }
}
</style>
