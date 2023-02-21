<template>
  <div class="announcement">
    <div class="announcement__content">
      <span class="announcement__content__title">{{ data.title }}</span>
      <a
        class="announcement__content__cta"
        :href="data.cta_button.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../assets/events/summit/check-circle-light.svg"
          alt="Blue check icon"
          loading="lazy"
        />
        <span>{{ data.cta_button.title }}</span>
      </a>
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
  .announcement {
    width: 100%;
    background-color: var(--color-newBrand-blue-03);
    padding: 128px 26px;

    &__content {
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;

      @include respond-to(">=m") {
        flex-direction: row;
        gap: 80px;
      }
      @include respond-to(">=l") {
        gap: 139px;
      }

      &__title {
        font-family: "Montserrat";
        font-weight: 600;
        line-height: 30px;
        font-size: 20px;
        text-align: center;

        @include respond-to(">=m") {
          text-align: left;
          font-size: 26px;
          line-height: 42px;
        }
        @include respond-to(">=l") {
          font-size: 36px;
        }
      }

      &__cta {
        background-color: var(--color-analog-primary-white);
        color: var(--color-newBrand-blue-03);
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
        font-family: "Hind";
        margin-bottom: 0;

        &:visited:hover,
        &:hover {
          color: var(--color-newBrand-blue-03);
        }

        span {
          padding-top: 3px;
        }
      }
    }
  }
}
</style>
