<template>
  <section class="page-ecosystem__grant">
    <div class="page-ecosystem__grant__content">
      <h3 class="page-ecosystem__grant__content__h3">
        Looking for early stage support?
      </h3>
      <p class="page-ecosystem__grant__content__p">
        You can also apply for one of our grants to get your Secret project off
        the ground.
      </p>
      <btn
        class="page-ecosystem__grant__content__btn center-text no-arrow"
        url="../blog/announcing-secret-network-grant-program"
      >
        GET A GRANT
      </btn>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-ecosystem__grant {
  text-align: center;

  &__content {
    max-width: 742px;
    margin: 42px auto;
    padding: 16px;

    &__p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      color: var(--color-neutral-dark-mode-06);
    }
  }
}
</style>
