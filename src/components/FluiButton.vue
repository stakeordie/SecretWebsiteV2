<template>
  <button class="flui-button" :class="classes" @click="onClick">
    {{ label }}
    <slot></slot>
  </button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "flui-button",

  props: {
    label: {
      type: String,
      default: "normal",
    },
    fullMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "flui-button__mode--full": this.fullMode,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss">
:root {
  --flui-button-bg-color: var(--flui-color-blue-02);
  --flui-button-bg-hover-color: var(--flui-color-black);
  --flui-button-text-color: var(--flui-color-white);
}
.flui-button {
  background: var(--flui-button-bg-color);
  border: 1px solid var(--flui-button-bg-color);
  padding: var(--f-gutter-s) var(--f-gutter);
  color: var(--flui-button-text-color);
  &:hover {
    background: var(--flui-button-bg-hover-color);
    border: 1px solid var(--flui-button-bg-hover-color);
  }
  &:focus {
    box-shadow: 0 0 0 2px var(--flui-button-text-color),
      0 0 0px 3px var(--flui-button-bg-color);
  }
  &:active {
    transform: translateY(1px);
  }
  &__mode--full {
    width: 100%;
  }
}
</style>
