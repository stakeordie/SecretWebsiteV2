<template>
  <section class="page-developers__hero">
    <div class="page-developers__hero__content">
      <div class="page-developers__hero__content__title">
        <h4>Develop on Secret Network</h4>
        <h1>Build more with <span class="title--blue">privacy</span></h1>
      </div>
      <div class="page-developers__hero__content__info">
        <p>
          Secret Network is the first blockchain with private-by-default smart
          contracts. Encrypted inputs, outputs, and state can be revealed at
          will, opening up an entirely new design space for dApps.
        </p>
        <div class="page-developers__hero__content__info__ctas">
          <btn
            class="text-center no-arrow"
            url="https://docs.scrt.network/secret-network-documentation/development/getting-started"
          >
            GET STARTED
          </btn>
          <btn
            class="text-center no-arrow join"
            url="https://discord.gg/PzdQ9bfvcX"
          >
            Join our Dev Community
          </btn>
        </div>
      </div>
    </div>
    <div class="page-developers__hero__bg-img">
      <img
        src="/img/icons/universe.png"
        alt="Universe graphic"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developers__hero {
  min-height: 494px;
  padding: var(--f-gutter-xxl);

  @include respond-to("<=s") {
    height: 634px;
    padding: var(--f-gutter);
  }

  justify-content: center;
  text-align: center;
  display: block;

  &__content {
    z-index: 5;
    position: relative;
    padding: var(--f-gutter);
    margin: auto;
    top: 24px;

    @include respond-to("<=s") {
      padding: 0;
    }

    &__title {
      display: grid;
      grid-gap: 4px;
      text-align: center;
      h1 {
        font-family: var(--f-default-headers-font);
        font-size: 54px;

        line-height: 60px;

        span {
          color: var(--color-newBrand-blue-02);
        }
      }

      h4 {
        font-family: var(--f-default-headers-font);
        text-transform: uppercase;
        font-weight: 500;
        font-size: var(--f-h4-text-size);
        letter-spacing: 0.2px;
        color: #94a4b8;
        line-height: 30px;
        text-align: center;
        margin: auto;

        @include respond-to("<=s") {
          font-size: 16px;
        }
      }
    }

    &__info {
      display: grid;
      justify-content: center;
      align-items: center;
      justify-items: center;
      gap: 26px;

      p {
        font-size: var(--paragraph-font-size-big);
        line-height: 28px;
        font-weight: 100;
        text-align: center;
        max-width: 590px;

        span {
          display: block;
        }
      }

      a {
        margin-right: 0;
      }
      .text-center {
        background-color: var(--color-newBrand-blue-01) !important;
        max-width: 400px;
        margin-right: 0;
        padding: 0;

        &::before {
          margin: 0;
        }
      }
      &__ctas {
        display: flex;
        gap: var(--f-gutter);

        @include respond-to("<=s") {
          flex-direction: column;
        }
        .btn {
          min-width: 300px;
          &.join {
            background: var(--color-neutral-dark-mode-04) !important;
          }
          &-text {
            letter-spacing: 1px;
            font-size: var(--f-h6-text-size);
          }
        }
      }
    }
  }

  &__bg-img {
    display: grid;
    position: absolute;
    opacity: 0.3;
    mix-blend-mode: screen;
    z-index: 0;
    transform: translate(70px, 0px);
    right: 0;
    top: 0;
    width: 700px;

    @include respond-to("<=s") {
      width: 480px;
      left: 30%;
    }
    @include respond-to("<=xs") {
      width: 480px;
      left: 12%;
    }

    img {
      width: 100%;
    }
  }
}
</style>
