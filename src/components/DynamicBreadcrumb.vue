<template>
  <div class="dynamic-breadcrumb">
    <a v-for="(item, index) in routeArray" :href="item" :key="index">
      <span class="name">{{ item }}</span> <span class="dash">/</span>
    </a>
  </div>
</template>

<script>
import { METHODS } from "http";

export default {
  data() {
    return {
      routeUrls: Array(),
    };
  },
  props: {
    route: {
      type: String,
      required: false,
    },
  },
  computed: {
    routeArray() {
      return this.route.split("/");
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.dynamic-breadcrumb {
  padding: var(--f-gutter);
  z-index: 2;
  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-neutral-dark-mode-05);
    text-transform: capitalize;
    &:last-child {
      pointer-events: none;
    }
    &:first-child,
    &:last-child {
      .dash {
        display: none;
      }
    }
    .dash {
      color: var(--color-neutral-dark-mode-05);
      margin: var(--f-gutter-s);
      font-weight: 400;
    }
  }
}
</style>
