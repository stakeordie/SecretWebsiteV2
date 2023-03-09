<template>
  <div class="hero-title">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.--flare {
  --f-h2-text-size: 54px;
  --f-h2-text-size-s: 22px;
  --f-h2-text-line-height: 50px;

  .content {
    .box {
      .hero-title {
        padding: var(--f-gutter-xl);
        background: var(--theme-card-bg-default);
        display: inline-block;
        margin-bottom: var(--f-gutter-xxxl);
        gap: var(--f-gutter-xl);
        @include respond-to("<=s") {
          margin-bottom: var(--f-gutter-l);
          padding: var(--f-gutter);

          h2 {
            font-size: var(--f-h2-text-size-s);
          }
        }
        h1,
        h2 {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
