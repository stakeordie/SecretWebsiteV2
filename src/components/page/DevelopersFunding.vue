<template>
  <section class="page-developers-funding">
    <div class="page-developers-funding__content">
      <h6 class="page-developers-funding__content__sub-title">
        FUNDING & GRANTS
      </h6>
      <h4 class="page-developers-funding__content__title">
        Bring your (biggest) ideas to life
      </h4>
      <p class="page-developers-funding__content__text">
        We’re offering 400M+ in funding with over 30 partners and contributors
        to both starting and scaling builders.
      </p>
    </div>
    <div class="page-developers-funding__materials">
      <h6>Grants</h6>
      <p>
        Get non-dilutive capital to get your Secret idea off the ground and
        rapidly gain traction.
      </p>
      <btn class="no-arrow cta" url="/developers/grants">READ MORE</btn>
    </div>
  </section>
</template>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developers-funding {
  margin: 164px 0;
  display: grid;
  gap: 16px;
  place-items: center;

  &__content {
    display: grid;
    grid-gap: 8px;
    text-align: center;
    max-width: 620px;

    &__sub-title {
      font-family: montserrat;
      text-transform: uppercase;
      font-weight: 500;
      font-size: var(--f-h5-text-size);
      color: var(--color-neutral-dark-mode-05);
      line-height: 24px;
      margin: 0;

      @include respond-to("<=s") {
        font-size: var(--f-h6-text-size);
      }
    }
    &__title {
      font-family: montserrat;
      font-size: var(--f-h3-text-size);
      line-height: 30px;

      @include respond-to("<=s") {
        font-size: var(--f-h4-text-size);
      }
    }

    &__text {
      font-size: var(--paragraph-font-size-big);
    }
  }

  &__materials {
    display: grid;
    grid-gap: 4px;
    text-align: center;
    place-items: center;
    max-width: 500px;
    padding: var(--f-gutter);

    h6 {
      font-size: var(--f-h4-text-size);
      margin-bottom: 0;
    }

    .btn.cta {
      margin: 0;
    }
  }
}
</style>
