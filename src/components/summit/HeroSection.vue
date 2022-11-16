<template>
  <div class="hero">
    <div class="hero__content">
      <div class="hero__info">
        <h4 class="hero__info__eyebrow">{{ data.subtitle }}</h4>
        <h2 class="hero__info__title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>
      <a
        class="hero__cta"
        :href="data.cta_button.title"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../assets/events/summit/check-circle-lightest.svg"
          alt="check icon"
        />
        <span>{{ data.cta_button.title }}</span>
      </a>
      <event-countdown></event-countdown>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.summit_content {
  .hero {
    min-height: calc(100vh - var(--sum-heights));
    background-image: url("../../assets/events/summit/secret-summit-graphic-3-mobile.svg");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    @include respond-to(">=l") {
      background-image: url("../../assets/events/summit/secret-summit-graphic.svg");
      background-position: top center;
    }

    &__cta {
      background-color: var(--color-newBrand-blue-03);
      color: var(--color-analog-primary-white);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: 100%;
      max-width: 261px;
      padding: 22px 0;
      border-radius: 100px;
      font-size: 20px !important;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;

      &:hover {
        background-color: var(--color-newBrand-blue-04);
      }

      span {
        padding-top: 3px;
      }
    }

    &__content {
      width: 100%;
      max-width: 544px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 26px;
      padding: 24px;

      @include respond-to(">=l") {
        align-items: flex-start;
        transform: translateX(-200px);
      }

      @include respond-to(">=xl") {
        transform: translateX(-250px);
      }

      @include respond-to(">=xxl") {
        transform: translateX(-300px);
      }
    }

    &__info {
      text-align: center;
      @include respond-to(">=l") {
        text-align: left;
      }

      * {
        margin: 0;
      }

      &__eyebrow {
        color: var(--color-ver2-secondary-blue);
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 18px;
        font-family: Hind;
      }

      &__title {
        font-family: montserrat;
        font-weight: bold;
        font-size: 42px;
        line-height: 48px;
        padding-bottom: 10px;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        color: var(--color-analog-primary-white);
        line-height: var(--paragraph-line-height-big);
      }
    }

    .countdown__wrapper {
      margin: 0;
    }
  }
}
</style>
