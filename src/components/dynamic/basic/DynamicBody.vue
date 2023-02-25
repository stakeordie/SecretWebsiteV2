<template>
  <VueMarkdown
    v-if="text"
    :source="text"
    class="dynamic-body"
    :style="textAlignment"
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
      color: var(--color-neutral-dark-mode-05);
      font-size: 16px;
      line-height: 30px;

      @include respond-to(">=m") {
        font-size: 20px;
      }
    }
  }
}
</style>
