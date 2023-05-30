<template>
  <section class="developers-funding">
    <div class="developers-funding__content">
      <h6 class="developers-funding__content__sub-title">
        FUNDING & GRANTS
      </h6>
      <h4 class="developers-funding__content__title">
        Bring your (biggest) ideas to life
      </h4>
    </div>
    <div class="developers-funding__materials">
      <h6>Grants</h6>
      <p>
        Get non-dilutive capital to get your Secret idea off the ground and
        rapidly gain traction.
      </p>
      <Btn class="no-arrow cta" url="/developers/grants">
        READ MORE
      </Btn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.developers-funding {
  margin: 164px 0;
  display: grid;
  gap: 16px;
  place-items: center;

  &__content {
    display: grid;
    grid-gap: 8px;
    text-align: center;
    max-width: 620px;

    * {
      margin: 0;
    }

    &__sub-title {
      font-family: montserrat;
      text-transform: uppercase;
      font-weight: 500;
      font-size: var(--f-h5-text-size);
      color: var(--color-neutral-dark-mode-05);
      line-height: 24px;

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
  }
}
</style>
