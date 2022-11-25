<template>
  <column>
    <block>
      <div class="about">
        <div class="about__image">
          <img
            src="../../assets/about-secret-network/about-secret-network-hero-img.svg"
          />
        </div>
        <div class="about__info">
          <h5 class="about__info__title">
            {{ data.title }}
          </h5>
          <h4 class="about__info__subtitle">
            {{ data.subtitle }}
          </h4>
          <p class="about__info__body">
            {{ data.body }}
          </p>
          <a
            class="about__info__cta"
            :href="data.cta_button.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{{ data.cta_button.title }}</span>
          </a>
        </div>
      </div>
    </block>
    <block>
      <div class="ctas">
        <general-ctas id="get-started"></general-ctas>
        <general-ctas id="build-on-secret"></general-ctas>
        <general-ctas id="join-the-community"></general-ctas>
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
  .about {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 128px 0;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    gap: 32px;

    @include respond-to(">=l") {
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 26px;

      @include respond-to(">=m") {
        padding: 16px;
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
        padding: 16px;
      }

      @include respond-to(">=l") {
        align-items: flex-start;
        text-align: left;
      }

      &__title {
        margin-bottom: 5px;
        text-transform: uppercase;
        color: var(--color-newBrand-blue-05);

        @include respond-to(">=m") {
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

        @include respond-to(">=m") {
          font-size: 42px;
          line-height: 46px;
        }

        @include respond-to(">=l") {
          font-size: 54px;
        }
      }

      &__body {
        font-family: "Hind";
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 26px;

        @include respond-to(">=l") {
          font-size: 20px;
        }
      }

      &__cta {
        background-color: var(--color-newBrand-blue-06);
        color: var(--color-analog-primary-white);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        padding: 12px 66px;
        border-radius: 100px;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.2s ease;

        @include respond-to(">=s") {
          width: max-content;
        }

        &:visited:hover,
        &:hover {
          background-color: var(--color-newBrand-blue-04);
          color: inherit;
        }

        span {
          padding-top: 2px;
        }
      }
    }
  }

  .ctas {
    width: 100%;
    max-width: 1200px;
    padding: 64px 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;

    @include respond-to(">=m") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(">=l") {
      grid-template-columns: repeat(3, 1fr);
    }

    a.button {
      border-radius: 100px;
      padding: 10px 16px;
      max-width: 250px;

      span {
        font-size: 16px;
      }
    }
  }
}
</style>
