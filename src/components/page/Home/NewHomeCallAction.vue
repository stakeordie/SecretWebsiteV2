<template>
  <section class="new-home__call">
    <div class="new-home__call__content action1">
      <div class="new-home__call__content__img">
        <img
          src="/img/home/home-buy.svg"
          alt="Secret Network coins"
          loading="lazy"
        />
      </div>
      <div class="new-home__call__content__info">
        <h5 class="new-home__call__content__info-h5">GET STARTED</h5>
        <h2 class="new-home__call__content__info-h2">
          Stake, earn, and secure the network
        </h2>
        <p class="new-home__call__content__info-p">
          Learn how to get SCRT, install a wallet, and start staking your SCRT.
        </p>
        <div class="new-home__call__content__info-btns">
          <btn
            class="text-center no-arrow btn btn-color"
            url="../about/get-scrt"
            >Get SCRT</btn
          >
          <btn class="text-center no-arrow btn" url="../about/get-scrt"
            >Use SCRT</btn
          >
        </div>
      </div>
    </div>

    <div class="new-home__call__content action2">
      <div class="new-home__call__content__info">
        <h5 class="new-home__call__content__info-h5">DEVELOP ON SECRET</h5>
        <h2 class="new-home__call__content__info-h2">
          Build the future with private data, on-chain
        </h2>
        <p class="new-home__call__content__info-p">
          Use Secret’s private-by-default smart contracts to create trailblazing
          apps and drive the adoption of the decentralized web.
        </p>
        <div class="new-home__call__content__info-btns">
          <btn class="text-center no-arrow btn btn-color" url="../developers"
            >START BUILDING</btn
          >
          <!-- <btn class="text-center no-arrow btn" url="../ecosystem/funding">FundING</btn> -->
          <btn class="text-center no-arrow btn" url="../developers/grants"
            >Grants</btn
          >
        </div>
      </div>
      <div class="new-home__call__content__img">
        <img
          src="/img/home/home-build.svg"
          alt="Build illustration"
          loading="lazy"
        />
      </div>
    </div>

    <div class="new-home__call__content action3">
      <div class="new-home__call__content__img">
        <img
          src="/img/home/home-join.svg"
          alt="Hand together illustration"
          loading="lazy"
        />
      </div>
      <div class="new-home__call__content__info">
        <h5 class="new-home__call__content__info-h5">JOIN OUR COMMUNITY</h5>
        <h2 class="new-home__call__content__info-h2">Champion Web3 privacy</h2>
        <p class="new-home__call__content__info-p">
          Become a Secret Agent and collaborate with others to turn a safer and
          more empowering web into reality.
        </p>
        <div class="new-home__call__content__info-btns">
          <btn
            class="text-center no-arrow btn btn-color"
            url="../get-involved/become-secret-agent"
            >Become a Secret agent</btn
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.new-home__call {
  padding-top: 64px;
  // Shared attributes
  &__content {
    padding: 72px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
    }
    &__img {
      align-self: center;

      @include respond-to("<=s") {
        order: 1;
        margin: 0 auto;

        img {
          margin: auto;
          height: 200px !important;
        }
      }
    }

    &__info {
      align-self: center;
      padding: var(--f-gutter);
      max-width: 550px;
      margin: auto;
      @include respond-to("<=s") {
        order: 2;
      }

      &-h5 {
        margin-bottom: 0;
      }
      &-h2 {
        font-family: montserrat;
        font-size: 42px;
        font-weight: 600;
        @include respond-to("<=s") {
          font-size: 36px;
        }
      }
      &-p {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
      }
      &-btns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        @include respond-to("<=m") {
          grid-template-columns: 1fr;
        }
        & .btn {
          padding: 10px 10px !important;
          margin: 0 !important;
          max-width: fit-content !important;
          min-width: 160px;
          justify-content: center;
          @include respond-to("<=m") {
            max-width: 100% !important;
          }
        }
        & .btn-color:hover {
          background-color: var(--color-neutral-dark-mode-02);
        }
      }
    }
  }
  // Individual attributes
  .action1 {
    & h5 {
      color: var(--color-ver2-primary-red);
    }
    & .new-home__call__content__info-btns {
      & .btn-color {
        background-color: var(--color-ver2-primary-red);
        &:hover {
          background-color: var(--color-neutral-dark-mode-02);
        }
      }
    }
  }
  .action2 {
    & h5 {
      color: var(--color-ver2-primary-blue);
    }
    & .new-home__call__content__info-btns {
      & .btn-color {
        background-color: var(--color-ver2-primary-blue);
        &:hover {
          background-color: var(--color-neutral-dark-mode-02);
        }
      }
    }
  }
  .action3 {
    & h5 {
      color: var(--color-analog-secondary-yellow);
    }
    & .new-home__call__content__info-btns {
      & .btn-color {
        background-color: var(--color-ver2-tertiary-yellow);

        padding: 10px 1px !important;
        margin: 0 !important;
        max-width: fit-content !important;
        min-width: 220px;
        transition: 0.5s all;

        @include respond-to("<=m") {
          max-width: 100% !important;
        }
        &:hover {
          background: var(--color-neutral-dark-mode-02);
          span {
            transform: translateY(2px);
            // color: var(--color-analog-primary-white);
          }
        }
        & span {
          transform: translateY(1px);
          // color: var(--color-neutral-dark-mode-01);
        }
      }
    }
  }
}
</style>
