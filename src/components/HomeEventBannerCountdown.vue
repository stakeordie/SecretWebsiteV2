<template>
  <section class="home-event-countdown">
    <div>
      <event-countdown></event-countdown>
      <h3>until Secret Summit</h3>
      <h4>COMING IN DECEMBER</h4>
    </div>
    <a
      class="button"
      href="http://secretsummit2022.eventbrite.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="../assets/events/summit/check-circle-lightest.svg"
        alt="check icon"
      />
      <span>Save my spot</span>
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

@mixin bg_specs {
  background-repeat: no-repeat;
  background-size: cover;
}

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

    .button {
      margin: 0;
      background: var(--color-newBrand-blue-03);
      color: #ffffff;
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
        color: inherit;
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
