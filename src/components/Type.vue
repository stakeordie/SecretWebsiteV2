<template>
  <div class="content-type">
    <div class="message">
      <h6>{{ title }}</h6>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.content-type {
  border: 1px solid black;
  margin-bottom: var(--f-gutter);
  padding: var(--f-gutter-xxl) var(--f-gutter) var(--f-gutter) var(--f-gutter);
  position: relative;
  background: var(--theme-card-variant);
  h6 {
    position: absolute;
    left: 0;
    top: 0;
    background: black;
    color: white;
    padding: var(--f-gutter-s);
    display: inline-block;
  }
}
</style>
