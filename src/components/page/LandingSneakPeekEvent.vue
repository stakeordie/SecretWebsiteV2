<template>
  <section class="summit-event">
    <div class="summit-event__content">
      <div class="summit-event__heading">
        <h4 class="summit-event__heading__eyebrow">Join us at</h4>
        <h2 class="summit-event__heading__title">Secret Summit 2022</h2>
        <h3 class="summit-event__heading__subtitle">Coming in December</h3>
      </div>
      <div class="summit-event__description">
        <p class="summit-event__description__paragraph">
          Secret Network’s flagship digital conference with talks, panels, and
          workshops by Web3 privacy pioneers from our ecosystem & beyond. Learn
          more about:
        </p>
        <ul class="summit-event__description__list">
          <li class="summit-event__description__list--item">
            <img src="../../assets/events/summit/check-circle.svg" alt="summit" />
            <p>Cutting-edge research</p>
          </li>
          <li class="summit-event__description__list--item">
            <img src="../../assets/events/summit/check-circle.svg" alt="summit" />
            <p>The possibilities smart contracts unlock</p>
          </li>
          <li class="summit-event__description__list--item">
            <img src="../../assets/events/summit/check-circle.svg" alt="summit" />
            <p>Transparent underlying ledger; completely auditable</p>
          </li>
        </ul>
        <p class="summit-event__description__paragraph">
          And of course, we’ll share a few secrets…! 
          <br>
          Let’s talk about the past,
          present, and future of Web3 privacy together.
        </p>
        <btn class="no-arrow" url="https://secretsummit2022.eventbrite.com">SAVE MY SPOT</btn>
      </div>

      <div class="summit-event__countdown__wrapper">
        <countdown format="days:hours:minutes:seconds" separators="" end="2022-12-15T06:00:00-0800"
          @countDownEnd="homePageRemoveCountdown">

          <div class="paragraph-wrap">
            <p class="wrap-day">
              DAYS
            </p>
            <div class=""> </div>
            <p class="wrap-hour">
              HOURS
            </p>
            <div class=""> </div>
            <p class="wrap-min">
              MIN
            </p>
            <div class=""> </div>
            <p class="wrap-sec">
              SEC
            </p>
          </div>

        </countdown>
        
      </div>

      
    </div>
    <!-- <img src="../../assets/events/summit/secret-summit-graphic-2.svg" alt="" class="summit-event__bg-img"> -->
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">@import "@lkmx/flare/src/functions/respond-to";

.summit {
  background-image: url('../../assets/events/summit/secret-summit-graphic-2.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
	background-position-y: -63px;
	@include respond-to("<=s") {
		background-image: url("../../assets/events/summit/secret-summit-graphic-2-mobile.svg");
	}
  .swirl-wrapper,
  .swirl-wrapper-bottom {
    display: none;
  }

  .simple-footer,
  .legal {
    display: none;
  }
}

.summit-event {
  display: grid;
  grid-auto-rows: min-content;
  gap: 26px;
  align-content: center;
  @include respond-to(">=m") {
    height: 100vh;
    position: fixed;
  }

   @include respond-to('<=m') {
     

    }

  p {
    font-size: 18px;
    line-height: 27px;
    color: var(--color-neutral-dark-mode-06);
  }


  &__content {
    max-width: 640px;
    display: flex;
    align-content: center;
    flex-direction: column;
    gap: 16px;

    @include respond-to('<=m') {
      margin: auto;
      text-align: left;
    }
  }

  &__heading {
    * {
      margin: 0;
      margin: auto;
      text-align: left;
    }

    @include respond-to('<=m') {
      // margin: auto;
      text-align: center;
    }

    &__eyebrow {
      color: var(--color-ver2-secondary-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
			margin-top: 39px;
      @include respond-to("<=s") {
        margin-top: 39px;
      }
    }

    &__title {
      font-family: montserrat;
      margin-bottom: 10px;
      @include respond-to("<=s") {
        font-size: 42px;
        line-height: 48px;
      }
    }

    &__subtitle {
      text-transform: uppercase;
      margin-bottom: var(--f-gutter);
      @include respond-to("<=s") {
        font-size: 22px;
        line-height: 36.5px;
      }
    }

  }

  &__description {
    * {
      color: #ffffff;
      font-size: 18px;
    }
    &__list {
      padding-left: 0;
      margin-bottom: var(--f-gutter);
      li {
        display: grid;
        grid-template-columns: 28px 1fr;
        gap: 12px;
        align-items: flex-end;
        * {
          margin: 0;
        }
      }
    }
    &__paragraph {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
    }

    &__list {
      padding-left: 0;
      margin-bottom: var(--f-gutter);

      li {
        display: grid;
        grid-template-columns: 28px 1fr;
        gap: 12px;
        align-items: flex-end;

        * {
          margin: 0;
        }
      }
    }

    .button {
      background-color: var(--color-ver2-primary-blue) !important;
      width: 204px !important;
      margin-left: 0 !important;
      // margin-top: 26px;
      margin-bottom: 26px !important;
			span {
				font-size: 16px !important;
			}
      @include respond-to("<=m") {
        // width: 100% !important;
      }
			@include respond-to("<=s") {
        margin-left: auto !important;
        margin-right: auto !important;
				display: block !important;
      }
    }


  }

  &__countdown__wrapper {
    max-width: 416px;

      @include respond-to('<=s') {
        align-self: center;
        // max-width: 180px;
      }


      .countdown-wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        .paragraph-wrap {
          grid-column: 1 / span 4;
          grid-row: 2;
          display: grid;
          opacity: 0.8;
          grid-template-columns: repeat(4, 1fr);
          margin-top: -4px;

          .wrap-day,
          .wrap-hour,
          .wrap-min,
          .wrap-sec {
            grid-row: 1;
            color: var(--color-analog-primary-white);
            text-align: center;
            margin-right: 10px;
            margin-bottom: 0;
            font-size: 16px;

            @include respond-to("<=s") {

              font-size: 14px;
              margin-right: 8px;
            }


          }

        }

        .countdown-data:not(:first-child) {
          //margin-left: 4px;

        }


        .countdown-data:after {
          content: ":";
          margin: 0 0px 0 10px;
        }

        .countdown-data:last-child:after {
          opacity: 0;

        }

      }

    }
}





.countdown-wrap{
  @include respond-to("<=s") {
    max-width: 345px;
    margin: auto;
    }
  .countdown-data {
    font-size: 54px;
    font-family: montserrat;
    font-weight: 600;
    order: 1;
    width: 104px;
    text-align: end;

    @include respond-to("<=s") {
    max-width: 70px;

      font-size: 28px;
      text-align: center;
    }

  }
}


.summit-banner{

  .summit-banner__countdown{
    margin: 26px auto 26px auto ;
  }
  

  h3{
    margin: 0;
  }
background-image: url("../../assets/events/summit/secret-summit-graphic-home.svg");
// background-position:top ;
background-size: cover;
// height: 303px;

text-align: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
	//  background-position-y: 00px;
	@include respond-to("<=s") {
		background-image: linear-gradient(rgba(26, 27, 40, 0.6), rgba(26, 27, 40, 0.6)), 
    url("../../assets/events/summit/secret-summit-graphic-home-mobile.svg");
    // background-position-y: 0;
    // background-position: right;
	}


  .summit-event__countdown__wrapper{
    margin: auto;
    margin-bottom: 8px;


    .countdown-data {
  font-size: 54px;
  font-family: montserrat;
  font-weight: 600;
  order: 1;
  width: 104px;
  text-align: end;

  @include respond-to("<=s") {
   max-width: 70px;

    font-size: 28px;
    text-align: end;
  }




}
  }

  .button {
      background-color: var(--color-ver2-primary-blue) !important;
      width: 204px !important;
      margin-left: 0 !important;
      // margin-top: 26px;
      margin-bottom: 26px !important;
			span {
				font-size: 16px !important;
			}
      // @include respond-to("<=m") {
      //   // width: 100% !important;
      // }
			// @include respond-to("<=s") {
      //   margin-left: auto !important;
      //   margin-right: auto !important;
			// 	display: block !important;
      // }
    }


}

</style>
