<template>
  <div class="slider__container">
    <button class="action_slider theme padding-small control no-margin-bottom" @click="scroll_left">
      <img src="/img/icons/icon-circle-left.svg" alt="left" loading="lazy" />
    </button>

    <button class="action_slider theme padding-small control no-margin-bottom" @click="scroll_right">
      <img src="/img/icons/icon-circle-right.svg" alt="right" loading="lazy" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    sliderId: {
      type: String,
      require: true,
    },
  },
  methods: {
    scroll_left() {
      let content = document.querySelector(
        `.horizontal-slider-${this.sliderId} > .--flare-block > .content > .box`,
      );
      content.scrollLeft -= 390;
    },
    scroll_right() {
      let content = document.querySelector(
        `.horizontal-slider-${this.sliderId} > .--flare-block > .content > .box`,
      );
      content.scrollLeft += 390;
    },

    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
  },
};
</script>

<style></style>
