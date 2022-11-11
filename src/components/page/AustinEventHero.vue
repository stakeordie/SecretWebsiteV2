<template>
  <section class="austin-event-hero">
    <div class="austin-event-hero__container">
      <div class="austin-event-hero__container__header">
        <img
          class="event-scrt-logo"
          src="../../assets/new-secret-logo.svg"
          alt=""
        />
        <h1 class="event-h1">DCentral Afterparty</h1>
        <p class="event-p">
          Music, drinks, and sneak peeks—join us for a special DCentral
          afterparty with legendary filmmaker Kevin Smith.
        </p>
      </div>

      <div class="austin-event-hero__container__info">
        <!-- <div class="austin-event-hero__container__info__vip">
          <img
            src="../../assets/events/calendar.svg"
            alt=""
            class="event-icon date-icon"
          />
          <p class="event-date">
            VIP NFT Screening <br />
            7PM - 9AM
          </p>
        </div> -->

        <div class="austin-event-hero__container__info__date">
          <img
            src="../../assets/events/calendar-green.svg"
            alt=""
            class="event-icon date-icon"
          />
          <p class="event-date">
            Wednesday, June 8 <br />
            9PM - 2AM
          </p>
        </div>

        <div class="austin-event-hero__container__info__location">
          <img
            src="../../assets/events/location-green.svg"
            alt=""
            class="event-icon location-icon"
          />
          <p class="event-location">
            The Venue
            <a
              href="https://www.eventbrite.com/e/the-secret-after-party-with-kevin-smith-tickets-343052458137"
              target="_blank"
              >map</a
            >
            <br />
            516 E 6th St, Austin, TX
          </p>
        </div>
      </div>
      <div class="austin-event-hero__container__button">
        <btn
          class="center-text no-arrow event-button"
          url="https://www.eventbrite.com/e/the-secret-after-party-with-kevin-smith-tickets-343052458137"
          >Get tickets</btn
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.austin-event-hero {
  //padding: 68px 0;

  &__container {
    //display: grid;
    //gap: var(--f-gutter);
    padding: 120px 0;
    max-width: 591px;
    margin: auto;

    @include respond-to("<=xs") {
      padding: 80px var(--f-gutter) 120px var(--f-gutter);
    }

    & .event-scrt-logo {
      height: 100px;
      margin: auto;
      margin-bottom: 16px;

      @include respond-to("<=s") {
        height: 60px;
      }
    }

    & p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
    }

    &__header {
      text-align: center;

      .event-h3 {
        color: var(--austin-event-color-accent-01);
        text-transform: uppercase;
        font-weight: 700px;
        font-family: var(--f-default-text-font);
        margin-bottom: 0;
      }

      .event-h1 {
        font-family: var(--f-default-headers-font);
        font-size: 54px;

        @include respond-to("<=s") {
          // font-size: 50px;
          // line-height: 62px;
        }
      }
    }

    &__info {
      display: flex;
      //max-width: 480px;
      margin: auto;
      justify-content: space-between;
      margin-bottom: 16px;

      @include respond-to("<=s") {
        flex-direction: column;
      }

      &__vip,
      &__date,
      &__location {
        display: flex;
        align-items: flex-start;
        //padding: var(--f-gutter);
        margin: auto;

        padding: var(--f-gutter);

        & p {
          margin-bottom: 0;

          @include respond-to("<=xs") {
            //font-size: var(--f-default-text-size);
          }
        }

        & img {
          //   padding: 6px;
          //   margin-right: 4px;
          margin-right: 10px;
          padding: 2px 1px;
          width: 30px;
          height: 30px;

          @include respond-to("<=xs") {
            //margin-right: 2px;
          }
        }
      }
    }

    &__button {
      text-align: center;

      & .event-button {
        // margin-right: 0 !important;
        background-color: var(--austin-event-color-turquoice) !important;
        height: 46px;
        // width: 187px !important;

        // text-transform: uppercase;
        // font-weight: 700px;
        // font-size: var(--f-default-text-size);

        padding: 10px 10px !important;
        margin: 0 !important;

        max-width: fit-content !important;
        min-width: 160px;

        justify-content: center;

        @include respond-to("<=m") {
          max-width: 100% !important;
        }
      }

      & .event-button:hover {
        background-color: var(--color-neutral-dark-mode-02) !important;
      }
    }
  }
}
</style>
