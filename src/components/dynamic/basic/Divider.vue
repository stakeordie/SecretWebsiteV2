<template>
  <div :class="[paddingTop, paddingBottom]" :style="dividerColor">
    <div class="divider"></div>
  </div>
</template>

<script>
import { sizes } from "@/utils";

export default {
  props: {
    padding_top: {
      type: String,
      required: false
    },
    padding_bottom: {
      type: String,
      required: false
    },
    background_color: {
      type: String,
      required: false
    },
    divider_color: {
      type: String,
      required: false
    }
  },
  computed: {
    paddingTop() {
      const size = sizes[this.padding_top];
      return size ? `${size}-top` : "small-top";
    },
    paddingBottom() {
      const size = sizes[this.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    },
    dividerColor() {
      const defaultColor = "var(--color-neutral-gray-08)";
      const color = this.divider_color;
      return { "--divider-color": color ? color : defaultColor };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.divider {
  width: 100%;
  border: 1px solid var(--divider-color);
}
</style>
