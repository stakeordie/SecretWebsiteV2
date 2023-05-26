<template>
  <section class="new-home__mission">
    <div class="new-home__mission__content">
      <h5 class="new-home__mission__content-h5">
        OUR MISSION
      </h5>
      <h1 class="new-home__mission__content-h1">
        A better internet starts with privacy
      </h1>
      <p class="new-home__mission__content-p">
        Blockchain technology is our chance to create a more inclusive and
        democratic internet. But today, blockchains expose their users' data to
        all, and are too risky to use for everything—blocking the widespread
        adoption of the decentralized web. Our mission is to fix this by giving
        everyone the freedom to choose what they share.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.new-home__mission {
  padding-top: 128px;

  @include respond-to("<=s") {
    padding-top: 32px;
  }

  &__content {
    max-width: 800px;
    margin: auto;
    padding: var(--f-gutter);

    &-h5,
    &-h1 {
      text-align: center;
      letter-spacing: 1px;
      max-width: 768px;
    }

    &-h5 {
      color: var(--color-neutral-dark-mode-05);
    }

    &-h1 {
      padding: 0 var(--f-gutter-xxl);

      @include respond-to("<=s") {
        padding: 0;
        //font-size: var(--f-h2-text-size);
        font-size: 42px;
        line-height: 50px;
      }
    }

    &-p {
      font-size: 26px;
      line-height: 39px;
      font-weight: 100;

      @include respond-to("<=s") {
        text-align: center;
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
      }
    }
  }
}
</style>
