<template>
  <div class="learn-breadcrumbs">
    <div class="learn-breadcrumbs__content">
      <a href="../about/learn-portal">Learn Portal</a>
      <p>/</p>
      <dynamic-breadcrumb :route="$context.route" />
      <a href="#">Tag</a>
      <p>/</p>
      <a href="#">Category</a>
      <p>/</p>
      <a href="#">Article </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-breadcrumbs {
  padding: 26px 42px 0 42px;

  &__content {
    padding: var(--f-gutter);
    display: flex;
    gap: var(--f-gutter);

    @include respond-to("<=s") {
      padding: 32px 0 16px 0;
      justify-content: center;
    }
    & a {
      font-size: 16px;
      margin-bottom: 0;
      color: var(--color-neutral-dark-mode-05);

      @include respond-to("<=s") {
        font-size: 12px;
      }
      &:hover {
        color: var(--color-ver2-tertiary-turquoise);
      }
    }
  }
}
</style>
