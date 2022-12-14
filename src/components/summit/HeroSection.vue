<template>
  <div class="hero">
    <column>
      <block>
        <div class="hero__wrapper">
          <div class="hero__content">
            <div class="hero__info">
              <h4 class="hero__info__eyebrow">{{ data.subtitle }}</h4>
              <h2 class="hero__info__title">{{ data.title }}</h2>
              <p>{{ data.body }}</p>
            </div>
            <a
              class="hero__cta"
              :href="data.cta_button.url"
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
      </block>
    </column>
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
    margin-top: var(--header-height);
    min-height: calc(100vh - var(--sum-heights));
    background-image: url("../../assets/events/summit/secret-summit-graphic-3-mobile.svg");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.2s ease;

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
      padding-top: 25px;
      padding-bottom: 22px;
      border-radius: 100px;
      font-size: 20px !important;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 0;
      font-family: "Hind";

      &:visited:hover,
      &:hover {
        background-color: var(--color-newBrand-blue-04);
        color: var(--color-analog-primary-white);
      }
    }

    &__wrapper {
      width: 100%;
      min-height: calc(100vh - var(--sum-heights));
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 26px;

      @include respond-to(">=l") {
        justify-content: flex-start;
      }

      @include respond-to(">=xl") {
        padding: 16px;
        justify-content: flex-start;
      }
    }

    &__content {
      width: 100%;
      max-width: 640px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 26px;

      @include respond-to(">=l") {
        align-items: flex-start;
      }

      @include respond-to(">=xl") {
        align-items: flex-start;
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

        @include respond-to(">=l") {
          font-size: 22px;
          line-height: 30px;
        }
      }

      &__title {
        font-family: montserrat;
        font-weight: 700;
        font-size: 42px;
        line-height: 48px;
        padding-bottom: 10px;

        @include respond-to(">=l") {
          font-size: 54px;
          line-height: 60px;
        }
      }

      p {
        font-size: 18px;
        font-weight: 400;
        color: var(--color-analog-primary-white);
        line-height: var(--paragraph-line-height-big);

        @include respond-to(">=l") {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }

    .countdown__wrapper {
      margin: 0;
    }
  }
}
</style>
