<template>
  <column>
    <block>
      <div class="summit_banner">
        <div v-html="data.title" class="summit_banner__content"></div>
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
  .summit_banner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 256px 26px;
    background: url("../../assets/events/summit/background-glow.svg") center
      no-repeat;
    background-size: 150%;

    @include respond-to(">=m") {
      background-size: 100%;
    }

    @include respond-to(">=l") {
      background-size: contain;
    }

    &__content {
      div {
        font-family: "Montserrat";
        font-weight: 600;
        line-height: 30px;
        font-size: 20px;
        text-align: center;

        @include respond-to(">=s") {
          line-height: 35px;
          font-size: 32px;
        }
        @include respond-to(">=m") {
          line-height: 45px;
          font-size: 36px;
        }
        @include respond-to(">=l") {
          line-height: 60px;
          font-size: 54px;
        }

        color: var(--color-analog-primary-white);
        b {
          color: var(--color-newBrand-blue-02);
        }
      }
    }
  }
}
</style>
