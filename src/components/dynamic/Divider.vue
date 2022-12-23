<template>
  <div :class="[paddingTop, paddingBottom]">
    <div class="divider"></div>
  </div>
</template>

<script>
import { sizes } from "../../utils";

export default {
  props: {
    padding_top: String,
    padding_bottom: String,
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
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.divider {
  width: 100%;
  border: 1px solid var(--color-neutral-gray-08);
}
</style>
