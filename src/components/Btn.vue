<template>
  <a class="btn button" :href="url">
    <slot></slot>
    <themed-image>
      <img dark-colored dark src="../assets/icon-arrow-right-light.svg" alt="" />
      <img light light-colored src="../assets/icon-arrow-right-dark.svg" alt="" />
    </themed-image>
  </a>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: false
      }
    }
  }

</script>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";


  @include theme("light") {
    p {
      display: none;
    }
  }

  body {

    .btn {
      display: inline-flex;
      background: var(--theme-card-button-bg);
      color: var(--theme-fg);
      cursor: pointer;
      align-items: center;
      gap: var(--f-gutter-xs);
      margin-right: var(--f-gutter);
      margin-bottom: 0;
      padding: var(--f-gutter-s) var(--f-gutter);

      &.text-center {
        justify-content: center;
      }

      &.no-arrow {
        img {
          display: none !important;
        }
      }

      &.full {
        width: 100%;
        justify-content: space-between;
      }
    }
  }

</style>
