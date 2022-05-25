<template>
  <div class="page-ecosystem-funding">
    <section class="page-ecosystem-funding__why-build">
      <div class="page-ecosystem-funding__why-build__content">
        <h3 class="page-ecosystem-funding__why-build__content__title">Why build on Secret?</h3>
        <div class="page-ecosystem-funding__why-build__content__reasons">
          <div class="page-ecosystem-funding__why-build__content__reasons-item">
            <h4 class="page-ecosystem-funding__why-build__content__reasons-title">Make an Impact</h4>
            <p class="page-ecosystem-funding__why-build__content__reasons-description">Build applications that can’t be built elsewhere using private data on-chain—from finance to gaming to communication tools.</p>
          </div>
          <div class="page-ecosystem-funding__why-build__content__reasons-item">
            <h4 class="page-ecosystem-funding__why-build__content__reasons-title">Have interoperability built-in</h4>
            <p class="page-ecosystem-funding__why-build__content__reasons-description">With Cosmos IBC integrated plus bridges to 4+ ecosystems (and counting), apps built on Secret Network can be used all across Web3.</p>
          </div>
          <div class="page-ecosystem-funding__why-build__content__reasons-item">
            <h4 class="page-ecosystem-funding__why-build__content__reasons-title">Access our thriving user base</h4>
            <p class="page-ecosystem-funding__why-build__content__reasons-description">Tap into Secret Network’s bustling ecosystem with 100,000+ users, over 50 applications, and billions of dollars in historical volume.</p>
          </div>
          <div class="page-ecosystem-funding__why-build__content__reasons-item">
            <h4 class="page-ecosystem-funding__why-build__content__reasons-title">Join a first mover</h4>
            <p class="page-ecosystem-funding__why-build__content__reasons-description">Our privacy-preserving smart contracts have been live on mainnet since 2020, and we’ve been racing ever since.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-ecosystem-funding {
  &__why-build {
    
    &__content {
      display: grid;
      gap: var(--f-gutter-m);
      padding-top: var(--f-gutter-xl) ;
      // padding-top: var(--f-gutter-xxl);
      // padding-bottom: var(--f-gutter-xxl);

      @include respond-to("<=l") {
        padding-top: var(--f-gutter-l);
        padding-bottom: var(--f-gutter-l);
      }

      &__title {
      text-align: center;
      }

      &__reasons {
        display: grid;
        column-gap: var(--f-gutter-xl);
        row-gap: 0;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;

        @include respond-to("<=s") {
          grid-template-columns: 1fr;
        }
      }
      &__reasons-item {
        display: grid;
        padding: var(--f-gutter-l) var(--f-gutter);

      }

      &__reasons-title {
        color: rgba(212, 220, 227, 1);
      }

      &__reasons-description {
        color: var(--color-neutral-dark-mode-05);
      }
    }
  }
}
</style>