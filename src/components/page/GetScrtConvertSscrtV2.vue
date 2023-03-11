<template>
  <div class="page-get-scrt">
    <section class="page-get-scrt__convert-sscrt">
      <div class="page-get-scrt__convert-sscrt__content">
        <div class="page-get-scrt__convert-sscrt__content__image">
          <img
            src="/img/get-scrt/get-scrt-convert-sscrt-brown.png"
            alt="Secret convertion illustartion"
            loading="lazy"
          />
        </div>
        <div class="page-get-scrt__convert-sscrt__content__info">
          <div class="page-get-scrt__convert-sscrt__content__info__text">
            <h3
              class="page-get-scrt__convert-sscrt__content__info__text-title h3-scrt-logo"
            >
              <span>Convert</span>
              <img
                src="/img/icons/getsscrt-icon.svg"
                alt="Sscrt logo"
                loading="lazy"
              />
              <span>sSCRT to</span>
              <img
                src="/img/icons/getscrt-filled-icon.svg"
                alt="Sscrt logo"
                loading="lazy"
              />
              <span>SCRT</span>
            </h3>
            <p
              class="page-get-scrt__convert-sscrt__content__info__text-description"
            >
              After you’ve bridged an asset & swapped it for sSCRT, you can
              freely convert it to SCRT using Keplr’s converter.
            </p>
          </div>
          <btn
            class="page-get-scrt__convert-sscrt__content__info__btn center-text no-arrow"
            url="https://wallet.keplr.app/#/secret/secret-secret"
          >
            Convert sSCRT / SCRT</btn
          >

          <p>
            *Requires you to use
            <a href="https://wallet.keplr.app/#/secret/secret-secret"
              >Keplr Wallet</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-get-scrt__convert-sscrt {
  padding: 36px 0;

  @include respond-to("<=m") {
    padding: 26px 16px;
  }

  &__content {
    max-width: fit-content;
    margin: auto;

    display: grid;
    grid-template-columns: 450px 500px;
    align-items: center;
    gap: 26px;

    @include respond-to("<=m") {
      max-width: 500px;
      margin: auto;
      grid-template-columns: 1fr;
    }

    &__image {
      align-self: center;
      justify-self: center;
    }

    &__info {
      display: grid;
      gap: var(--f-gutter);
      padding: var(--f-gutter) 0;

      & img {
        height: 48px;
        width: 48px;
      }

      &__text {
        display: grid;
        gap: var(--f-gutter);

        &-title {
          margin-bottom: 0;

          @include respond-to("<=xs") {
            line-height: var(--f-h2-line-height);
            font-size: var(--f-h4-text-size);
          }

          @include respond-to("<=xs") {
            & img {
              width: 28px;
              height: 28px;
              margin-left: 8px;
              margin-right: 4px;
            }
          }
        }

        &-description {
          font-size: var(--paragraph-font-size-big);
          line-height: var(--paragraph-line-height-big);
          margin-bottom: 0;
          max-width: 442px;

          @include respond-to("<=m") {
            max-width: 100%;
          }
        }
      }

      &__btn {
        max-width: fit-content !important;
        width: 225px;

        & span {
          letter-spacing: 1px;
        }

        @include respond-to("<=m") {
          max-width: 100% !important;
        }
      }
    }
  }
}
</style>
