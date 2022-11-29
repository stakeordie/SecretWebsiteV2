<template>
  <column mode="normal">
    <block>
      <div class="description">
        <div class="description__info">
          <h4 class="description__info__title">
            {{ data.title }}
          </h4>
          <p class="description__info__subtitle">
            {{ data.subtitle }}
          </p>
        </div>
        <div class="description__cards">
          <div
            v-for="(description, index) in data.descriptions"
            :key="index"
            class="card"
          >
            <div class="card__icon">
              <img :src="description.icon.url" alt="icon" />
            </div>
            <p>{{ description.body }}</p>
          </div>
        </div>
      </div>
    </block>
  </column>
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
  .description {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 26px;
    padding: 136px 26px;

    @include respond-to(">=m") {
      padding: 136px 32px;
    }

    @include respond-to(">=l") {
      padding: 136px 16px;
      grid-template-columns: 342px 1fr;
      gap: 42px;
    }

    &__info {
      padding: 0;
      @include respond-to(">=l") {
        padding: 32px 16px;
      }

      &__subtitle {
        color: var(--color-neutral-dark-mode-06);
        font-weight: 400;
        font-size: 18px;
        font-family: Hind;
        line-height: 30px;

        @include respond-to(">=l") {
          font-size: 20px;
        }
      }
    }

    &__cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 42px 58px;

      @include respond-to(">=m") {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-to(">=l") {
        padding-left: 42px;
        border-left: 2px solid var(--color-neutral-gray-08);
      }

      .card {
        display: flex;
        flex-direction: column;
        gap: var(--f-gutter);

        &__icon {
          width: 48px;
          height: 48px;
          border-radius: 100%;
          background-color: var(--color-newBrand-blue-03);
          display: grid;
          place-items: center;

          img {
            width: 24px;
          }
        }

        p {
          margin: 0;
          font-size: 18px;
          color: var(--color-analog-primary-white);
          font-family: Hind;
          font-weight: 400;
          line-height: 30px;

          @include respond-to(">=l") {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
