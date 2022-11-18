<template>
  <div class="welcome">
    <div class="welcome__content">
      <div class="welcome__info">
        <h4 class="welcome__info__eyebrow">Welcome to</h4>
        <h2 class="welcome__info__title">Secret Summit 2022</h2>
        <p>
          Secret Network’s flagship digital conference with talks, panels, and
          workshops by Web3 privacy pioneers from our ecosystem & beyond.
        </p>
      </div>
      <a
        href="/agenda"
        target="_blank"
        rel="noopener noreferrer"
        class="welcome__cta"
      >
        <span>VIEW FULL AGENDA</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.summit_content {
  .welcome {
    margin-top: var(--header-height);
    min-height: calc(100vh - var(--sum-heights));
    background-image: url("../../assets/events/summit/secret-summit-graphic-3-mobile.svg");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.2s ease;
    display: flex;
    /* align-items: center; */

    &__content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 26px;
      padding: 0 26px;

      @include respond-to(">=m") {
        padding: 0;
      }
    }

    &__info {
      text-align: center;
      width: 100%;
      max-width: 640px;

      * {
        margin: 0;
      }

      &__eyebrow {
        color: var(--color-ver2-secondary-blue);
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 22px;
      }

      &__title {
        font-family: montserrat;
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
        padding-bottom: 16px;

        @include respond-to(">=l") {
          font-size: 54px;
          line-height: 60px;
        }
      }

      p {
        font-family: Hind;
        font-size: 18px;
        font-weight: 400;
        color: var(--color-neutral-dark-mode-06);
        line-height: var(--paragraph-line-height-big);

        @include respond-to(">=l") {
          font-size: 20px;
        }
      }
    }

    &__cta {
      border-radius: 10px;
      padding: 10px 39px;
      width: 100%;
      display: flex;
      background: var(--theme-card-button-bg);
      color: var(--theme-fg);
      justify-content: center;
      text-transform: uppercase;
      font-size: 16px;
      font-family: "Hind";
      height: 46px;
      transition: 0.2s ease;

      @include respond-to(">=s") {
        width: max-content;
      }

      &:visited:hover,
      &:hover {
        color: inherit;
        background-color: var(--color-neutral-dark-mode-02);
      }

      span {
        padding-top: 2px;
        font-weight: 700;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
