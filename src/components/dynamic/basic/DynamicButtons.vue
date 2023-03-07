<template>
  <div v-if="buttons.length" class="buttons-row" :style="buttonsPosition">
    <CtaButton
      v-for="(button, index) in buttons"
      v-bind="button"
      :key="index"
    />
  </div>
</template>

<script>
import CtaButton from "@/components/dynamic/basic/CtaButton.vue";

export default {
  components: { CtaButton },
  props: {
    buttons: {
      type: Array,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: "left"
    }
  },
  computed: {
    buttonsPosition() {
      const positions = {
        left: "flex-start",
        center: "center",
        right: "flex-end"
      };

      return {
        "--align-buttons": positions[this.position] || positions.left
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.buttons-row {
  display: flex;
  gap: var(--f-gutter);
  flex-wrap: wrap;
  justify-content: center;

  @include respond-to(">=s") {
    justify-content: var(--align-buttons);
  }
}

::v-deep {
  .cta-button {
    width: fit-content;

    .button {
      @include respond-to("<=m") {
        margin: 0;
      }
    }
  }
}
</style>
