<template>
  <div class="hero-title">
    <slot></slot>
  </div>
</template>

<script>
  export default {


  }

</script>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  .--flare {
    .content {
      .box {
        .hero-title {
          padding: var(--f-gutter-xl);
          background: var(--theme-card-bg-variant);
          display: inline-block;
          margin-bottom: var(--f-gutter-xxxl);
          gap: var(--f-gutter-xl);

          h2 {
            margin-bottom: 0;
          }
        }
      }
    }
  }

</style>
