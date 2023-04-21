<template>
  <VueMarkdown
    v-if="text"
    :source="text"
    class="dynamic-body"
    :style="[textAlignment, bodyColor]"
    :anchorAttributes="anchorAttributes"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    align: {
      type: String,
      required: false,
      default: "left",
    },
    color: {
      type: String,
      required: false,
      default: "var(--color-neutral-dark-mode-05)",
    },
    isExternalLink: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    textAlignment() {
      const alignments = {
        left: "left",
        center: "center",
        right: "right",
      };

      const margins = {
        left: "0",
        center: "0 auto",
        right: "0 0 0 auto",
      };

      return {
        "--text-alignment": alignments[this.align] || alignments.left,
        "--image-alignment": margins[this.align] || margins.left,
      };
    },
    bodyColor() {
      const defaultColor = "var(--color-neutral-dark-mode-05)";
      const color = this.color;
      return {
        "--text-color": color || defaultColor,
      };
    },
    anchorAttributes() {
      return {
        target: this.isExternalLink ? "_blank" : "_self",
        rel: "nofollow",
      };
    },
  },
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
      text-align: var(--text-alignment);
      color: var(--text-color);
      font-size: 16px;
      line-height: 30px;

      @include respond-to(">=m") {
        font-size: 20px;
      }
    }

    img {
      margin: var(--image-alignment);
    }
  }
}
</style>
