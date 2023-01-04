<template>
  <div class="dynamic-breadcrumb">
    <template v-for="(item, index) in routeArray">
      <a :key="index" :href="getLink(index)">
        <span class="name">{{ item }}</span>
        <span v-if="isLastLink(index)" class="dash">/</span>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  computed: {
    routeArray() {
      return this.route.split("/").filter((item) => item);
    },
  },
  methods: {
    getLink(index) {
      const route = this.routeArray.filter((_, idx) => idx <= index).join("/");
      return `/${route}`;
    },
    isLastLink(index) {
      return this.routeArray.length !== index + 1;
    },
  },
};
</script>

<style lang="scss">
.dynamic-breadcrumb {
  padding: var(--f-gutter) 0;
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

    .dash {
      color: var(--color-neutral-dark-mode-05);
      margin: var(--f-gutter-s);
      font-weight: 400;
    }
  }
}
</style>
