<template>
  <div v-if="buttons.length" class="buttons-row" :class="buttonsPosition">
    <cta-button
      v-for="(button, index) in buttons"
      v-bind="button"
      :key="index"
      :align="false"
      :full="full"
    />
  </div>
</template>

<script>
import CtaButton from "./CtaButton.vue";

export default {
  components: { CtaButton },
  props: {
    buttons: {
      type: Array,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    full: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    buttonsPosition() {
      const positions = {
        left: "align-left",
        center: "align-center",
        right: "align-right",
        full: "align-full",
      };
      const match = positions[this.position];
      return match ? match : positions.left;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.buttons-row {
  display: flex;
  gap: var(--f-gutter);
  flex-wrap: wrap;
  justify-content: center;

  @include respond-to(">=m") {
    &.align-left {
      justify-content: flex-start;
    }

    &.align-center {
      justify-content: center;
    }

    &.align-right {
      justify-content: flex-end;
    }
  }

  &.align-full {
    width: 100%;
    flex-wrap: nowrap;
  }
}
</style>
