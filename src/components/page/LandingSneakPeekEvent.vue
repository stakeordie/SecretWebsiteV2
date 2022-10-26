<template>
  <section class="summit-event">
    <div class="summit-event__content">
      <div class="summit-event__heading">
        <h4 class="summit-event__heading__eyebrow">Join us at</h4>
        <h2 class="summit-event__heading__title">Secret Summit 2022</h2>
        <h3 class="summit-event__heading__subtitle">Coming in December</h3>
      </div>
      <div class="summit-event__description">
        <p class="summit-event__description__paragraph">
          Secret Network’s flagship digital conference with talks, panels, and
          workshops by Web3 privacy pioneers from our ecosystem & beyond. Learn
          more about:
        </p>
        <ul class="summit-event__description__list">
          <li class="summit-event__description__list--item">
            <img src="../../assets/icon-summit-check.svg" alt="summit" />
            <p>Cutting-edge research</p>
          </li>
          <li class="summit-event__description__list--item">
            <img src="../../assets/icon-summit-check.svg" alt="summit" />
            <p>The possibilities smart contracts unlock</p>
          </li>
          <li class="summit-event__description__list--item">
            <img src="../../assets/icon-summit-check.svg" alt="summit" />
            <p>Transparent underlying ledger; completely auditable</p>
          </li>
        </ul>
        <p>
          And of course, we’ll share a few secrets…! Let’s talk about the past,
          present, and future of Web3 privacy together.
        </p>
        <btn class="no-arrow" url=""> SAVE MY SPOT </btn>
      </div>

      <div class="summit-banner__countdown__wrapper">
        <countdown
          format="days:hours:minutes:seconds"
          separators=""
          end="2022-12-15T06:00:00-0800"
          @countDownEnd="homePageRemoveCountdown"
        >
        </countdown>
      </div>
    </div>
    <!-- <img src="../../assets/events/summit/secret-summit-graphic-2.svg" alt="" class="summit-event__bg-img"> -->
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.summit {
  background-image: url("../../assets/events/summit/secret-summit-graphic-2.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  .swirl-wrapper,
  .swirl-wrapper-bottom {
    display: none;
  }

  .simple-footer,
  .legal {
    display: none;
  }
}

.summit-event {
  height: 100vh;
  display: grid;
  grid-auto-rows: min-content;
  gap: 26px;
  align-content: center;
  position: fixed;

  &__content {
    max-width: 640px;
    display: flex;
    align-content: center;
    flex-direction: column;

    @include respond-to("<=m") {
      margin: auto;
      text-align: center;
    }
  }

  &__heading {
    * {
      margin: 0;
    }
    &__eyebrow {
      color: var(--color-ver2-secondary-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    &__title {
      font-family: montserrat;
      margin-bottom: 10px;
    }
    &__subtitle {
      text-transform: uppercase;
      margin-bottom: var(--f-gutter);
    }
  }

  &__description {
    * {
        color: #ffffff;
        font-size: 18px;
    }
    &__list {
			padding-left: 0;
			margin-bottom: var(--f-gutter);
        li {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
          align-items: flex-end;
          *{margin: 0;}
        }
    }
    &__paragraph {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
    }

    .button {
      background-color: var(--color-ver2-primary-blue) !important;
      width: 204px !important;
      margin-left: 0 !important;
    	margin-top: 26px;
    	margin-bottom: 26px;
      @include respond-to("<=m") {
        max-width: 100% !important;
      }
    }
  }
}
</style>
