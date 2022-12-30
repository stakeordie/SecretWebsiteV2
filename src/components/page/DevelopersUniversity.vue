<template>
  <div class="secret-university-wrapper">
    <div class="secret-university">
      <div class="secret-university__image">
        <img
          src="../../assets/secret-university-img.svg"
          alt="Secret University img"
        />
      </div>
      <div class="secret-university__info">
        <h5 class="secret-university__info__title">SECRET UNIVERSITY</h5>
        <h4 class="secret-university__info__subtitle">
          Jumpstart Your Secret Dev Journey
        </h4>
        <p class="secret-university__info__body">
          Find everything you need to build your first (or second!) Secret app:
          targeted courses, pre-built starter applications, and curated Secret
          dev resources—all in one place.
        </p>
        <a
          class="secret-university__info__cta"
          href="https://scrt.university/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../assets/secret-university-icon.svg" alt="Icon" />
          <span>Get STARTED</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.secret-university-wrapper {
  background-color: var(--color-neutral-dark-mode-03);
  margin: -16px;
  padding: 64px 0;

  .secret-university {
    display: grid;
    width: 100%;
    max-width: 1200px;
    place-items: center;
    grid-template-columns: 1fr;
    gap: 32px;
    margin: 0 auto;

    @include respond-to(">=m") {
      grid-template-columns: repeat(2, 1fr);
      gap: 64px;
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 26px;

      @include respond-to(">=m") {
        padding: 0;
        padding-left: 86px;
      }
    }

    &__info {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 26px;

      @include respond-to(">=m") {
        /* padding: 16px; */
        align-items: flex-start;
        text-align: left;
      }

      &__title {
        font-size: 16px;
        margin-bottom: 5px;
        text-transform: uppercase;
        color: var(--color-newBrand-blue-05);

        @include respond-to(">=m") {
          font-size: 18px;
          margin-bottom: 0;
        }
      }

      &__subtitle {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        font-size: 38px;
        color: var(--color-analog-primary-white);

        @include respond-to(">=l") {
          font-size: 42px;
          line-height: 46px;
        }
      }

      &__body {
        font-family: "Hind";
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 26px;

        @include respond-to(">=m") {
          font-size: 20px;
        }
      }

      &__cta {
        background-color: var(--color-ver2-primary-blue);
        color: var(--color-analog-primary-white);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 12px 58px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.2s ease;

        &:visited:hover,
        &:hover {
          opacity: 0.7;
          color: inherit;
        }

        span {
          padding-top: 3px;
        }
      }
    }
  }
}
</style>
