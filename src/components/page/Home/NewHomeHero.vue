<template>
  <section class="new-home-hero">
    <div class="new-home-hero__container">
      <div class="new-home-hero__container__text">
        <h1 class="new-home-hero__container__h1">
          More Privacy <span><span>Limitless</span> Possibilities</span>
        </h1>
        <p class="new-home-hero__container__p">
          Secret Network is the first blockchain with customizable privacy. You
          get to choose what you share, with whom, and how. This protects users,
          and empowers developers to build a better Web3.
        </p>
        <div class="new-home-hero__container__btns">
          <btn
            class="text-center no-arrow btn-bigger"
            url="../about/about-secret-network/"
          >
            Learn More
          </btn>
          <btn
            class="text-center no-arrow btn-bigger special"
            url="../about/get-scrt"
          >
            <img
              class="special-icon"
              src="/img/icons/getscrt-filled-icon.svg"
              alt="Secret Network logo"
              loading="lazy"
            />
            Get SCRT
          </btn>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
.new-home-hero {
  display: flex;
  margin: 0;
  padding: 174px 0 62px 0;
  overflow: hidden;
  max-width: 100vw;

  @include respond-to("<=s") {
    padding: 120px var(--f-gutter) 62px var(--f-gutter);
  }
  &__container {
    align-self: center;
    text-align: center;
    max-width: 100%;
    min-width: 343px;
    overflow: hidden;
    margin: 0 auto;
    padding: var(--f-gutter);
    @include respond-to("<=xs") {
      transform: translateY(6%);
    }
    &__text {
      max-width: 742px;
      margin: auto;
      padding: 0 var(--f-gutter);
    }
    &__h1 {
      text-align: center;
      margin-bottom: 26px;

      & span {
        display: block;

        & span {
          display: inline;
          color: var(--color-ver2-primary-turquoise);
        }
      }
      @include respond-to("<=xs") {
        font-size: 40px;
        line-height: 46px;
      }
    }
    &__p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      min-width: 311px;
      margin-bottom: 26px;
    }
    &__btns {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      width: 360px;
      margin: auto;
      @include respond-to("<=xs") {
        grid-template-columns: 1fr;
        width: 100%;
      }
      & .btn-bigger {
        width: 172px !important;
        margin: 0 !important;
        max-height: 64px;
        justify-content: center;
        @include respond-to("<=xs") {
          width: 100% !important;
          padding: 10px 0;
        }

        & .themed-image {
          display: none;
        }
        span {
          display: flex;
          vertical-align: middle;

          img {
            transform: translateY(-1px);
            align-self: center;
            margin-right: 6px;
            width: 24px;
            height: 24px;
          }
        }
      }
    }
    &__logos {
      margin-top: 68px;
      max-width: 100%;
      overflow: hidden;
      @include respond-to("<=s") {
        margin-top: 42px;
      }
      & h6 {
        color: var(--color-neutral-dark-mode-05);
        margin-bottom: 24px;
      }
      & .vifnslb-container {
        width: 100%;
        overflow: hidden;
      }
      & .vifnslb-bar {
        overflow: hidden;
        @include respond-to("<=m") {
        }
        & img {
          height: 48px;
        }
      }
    }
  }
  & .partners-logos-container {
    display: inline-flex;

    & .logo-container {
      padding: var(--f-gutter) 54px;
      opacity: 0.7;
      @include respond-to("<=s") {
        padding: var(--f-gutter) 32px;
      }
    }
  }
}
</style>
