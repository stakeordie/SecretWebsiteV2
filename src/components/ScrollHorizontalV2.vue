<template>
  <div class="actions">
    <button class="theme padding-small control" @click="scroll_left">
      <img src="../assets/icon-circle-left.svg" alt="left" />
    </button>

    <button class="theme padding-small control" @click="scroll_right">
      <img src="../assets/icon-circle-right.svg" alt="right" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tagSlug: {
      type: String,
      default: ''
    }
  },
  methods: {
      scroll_left() {
        let content = document.querySelector(`.horizontal-slider.${this.tagSlug} > .--flare-block > .content > .box`);
        content.scrollLeft -= 390;
      },
      scroll_right() {
        let content = document.querySelector(`.horizontal-slider.${this.tagSlug} > .--flare-block > .content > .box`);
        content.scrollLeft += 390;
      },

      onFilterApplied(filters) {
        this.appliedFilters = filters;
      }
    },
};
</script>

<style></style>
