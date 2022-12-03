<template>
  <section class="home-event-countdown">
    <div class="home-event-countdown__content">
      <event-countdown></event-countdown>
      <h3>until Secret Summit</h3>
      <h4>COMING IN DECEMBER</h4>
    </div>
    <a class="home-event-countdown__cta" href="/summit">
      <span>FIND OUT MORE</span>
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.event-banner {
  text-align: center;
  background: url("../assets/events/summit/secret-summit-background-circle-home.svg")
      bottom no-repeat,
    url("../assets/events/summit/secret-summit-background.svg") center no-repeat;
  background-size: cover;

  .summit-banner__countdown {
    background: url("../assets/events/summit/secret-summit-graphic-home.svg")
      center no-repeat;
    background-size: cover;

    @include respond-to("<=m") {
      background-image: url("../assets/events/summit/secret-summit-graphic-home-mobile.svg");
      background-size: cover;
    }
  }

  .home-event-countdown {
    height: 303px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    h3,
    h4 {
      margin: 0;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &__cta {
      margin: 0;
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
        color: var(--color-analog-primary-white);
      }

      span {
        padding-top: 3px;
      }
    }

    .countdown__wrapper {
      .date_info {
        @include respond-to(">l") {
          display: none;
        }
      }
    }
  }
}
</style>
