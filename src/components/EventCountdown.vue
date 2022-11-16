<template>
  <div class="countdown__wrapper">
    <countdown
      format="days:hours:minutes:seconds"
      separators=""
      :end="$static.summit.edges[0].node.Summit_hero.start_date"
      @countDownEnd="homePageRemoveCountdown"
    >
      <span class="date_info">DAYS</span>
      <span class="date_info">HOURS</span>
      <span class="date_info">MIN</span>
      <span class="date_info">SEC</span>
    </countdown>
  </div>
</template>

<static-query>
query {
  summit: allStrapiSummit {
    edges {
      node {
        Summit_hero {
          start_date
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

:root {
  --countdown-item-height: 60px;
  --countdown-item-height-mobile: 40px;
}

.countdown__wrapper {
  width: 380px;

  @include respond-to("<=l") {
    width: 240px;
    margin: 0 auto;
  }

  .countdown-wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .countdown-data {
      font-size: 54px;
      font-family: montserrat;
      font-weight: 600;
      display: flex;
      position: relative;
      justify-content: center;
      height: var(--countdown-item-height);

      @include respond-to("<=l") {
        font-size: 28px;
        height: var(--countdown-item-height-mobile);
      }

      &__date-part {
        display: flex;
        align-items: center;
      }

      &:after {
        content: ":";
        display: flex;
        align-items: center;
        position: absolute;
        height: var(--countdown-item-height);
        right: -7px;

        @include respond-to("<=l") {
          height: var(--countdown-item-height-mobile);
          right: -4px;
        }
      }

      &:last-child {
        &::after {
          content: "";
          display: none;
        }
      }
    }

    .date_info {
      opacity: 0.8;
      grid-row: 2;
      color: var(--color-analog-primary-white);
      font-weight: 400;
      text-align: center;
      font-size: 16px;
      font-family: "hind";

      @include respond-to("<=l") {
        font-size: 14px;
      }
    }
  }
}
</style>
