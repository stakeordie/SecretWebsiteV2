<template>
  <column mode="normal">
    <block>
      <div class="sponsors">
        <div class="sponsors__info">
          <h5 class="sponsors__info__title">
            {{ data.title }}
          </h5>
          <h4 class="sponsors__info__subtitle">
            {{ data.subtitle }}
          </h4>
          <p class="sponsors__info__body">
            {{ data.body }}
          </p>
        </div>
        <div class="sponsors__content">
          <a
            v-for="(item, index) in data.sponsors"
            :key="index"
            class="sponsors__content__item"
            :href="item.url"
          >
            <ResponsiveImage
              v-if="item.image"
              :src="item.image"
              :title="item.title"
            />
          </a>
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
  .sponsors {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    padding: 92px 26px;

    @include respond-to(">=m") {
      padding: 92px 26px;
    }

    &__info {
      width: 100%;
      max-width: 768px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        margin-bottom: 5px;
        color: var(--color-ver2-primary-blue);
        text-transform: uppercase;
        @include respond-to(">=m") {
          margin-bottom: 0;
        }
      }

      &__subtitle {
        width: 100%;
        max-width: 545px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        text-align: center;
        color: var(--color-analog-primary-white);

        @include respond-to(">=m") {
          font-size: 42px;
          line-height: 46px;
        }
      }

      &__body {
        font-family: "Hind";
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;

        @include respond-to(">=l") {
          font-size: 20px;
        }
      }
    }

    &__content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      @include respond-to(">=m") {
        grid-template-columns: repeat(3, 1fr);
      }
      @include respond-to(">=l") {
        grid-template-columns: repeat(4, 1fr);
      }
      @include respond-to(">=xl") {
        grid-template-columns: repeat(5, 1fr);
      }

      &__item {
        height: 84px;
        display: flex;
        justify-content: center;
        align-items: center;
        @include respond-to(">=m") {
          padding: 8px;
        }

        img {
          width: 100%;
          max-width: 130px;
        }
      }
    }
  }
}
</style>
