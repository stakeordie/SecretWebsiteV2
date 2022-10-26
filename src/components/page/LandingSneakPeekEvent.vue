<template>
  <section class="summit-event">

    <div class="summit-event__content">
      <div class="summit-event__heading">
        <h4 class="summit-event__heading__eyebrow">
          Join us at
        </h4>
        <h2 class="summit-event__heading__title">
          Secret Summit 2022
        </h2>
        <h3 class="summit-event__heading__subtitle">
          Coming in December
        </h3>
      </div>
      <div class="summit-event__description">
        <p class="summit-event__description__paragraph">
          Secret Network’s flagship digital conference with talks, panels, and workshops by Web3 privacy pioneers from
          our ecosystem & beyond. Learn more about:
        </p>
        <div class="summit-event__description__list">
            <img src="../../assets/events/summit/check-circle.svg" alt="">
            <p>Cutting-edge research</p>
            <img src="../../assets/events/summit/check-circle.svg" alt="">
            <p>The possibilities smart contracts unlock</p>
            <img src="../../assets/events/summit/check-circle.svg" alt="">
            <p>Transparent underlying ledger; completely auditable</p>
        </div>
        <p>And of course, we’ll share a few secrets…!
             Let’s talk about the past, present, and future of Web3 privacy together.</p>
        <btn class="no-arrow" url=""> SAVE MY SPOT </btn>
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
  export default {

  }
</script>

<style lang="scss">
  @import "@lkmx/flare/src/functions/respond-to";

  .summit {
    background-image: url('../../assets/events/summit/secret-summit-graphic-2.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;

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
    height: 100vh;
    display: grid;
    grid-auto-rows: min-content;
    gap: 26px;
    align-content: center;
    position: fixed;

    p{
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
    }


    &__content {
      max-width: 640px;
      display: flex;
      align-content: center;
      flex-direction: column;

      @include respond-to('<=s') {
        margin: auto;
        padding: var(--f-gutter);

        // max-width: 328px;
        // text-align: center;
      }
    }

    &__heading {
         @include respond-to('<=s') {
        // margin: auto;
        text-align: center;
      }

      &__eyebrow {
        color: var(--color-ver2-secondary-blue);
    text-transform: uppercase;

     @include respond-to('<=s') {
            font-size: 18px;
            line-height: 30px;
        }
      }

      &__title {
        font-family: montserrat;

         @include respond-to('<=s') {
            font-size: 42px;
            line-height: 48px;
        }
      }

      &__subtitle{
        text-transform: uppercase;

         @include respond-to('<=s') {
            font-size: 22px;
            line-height: 30px;
        }
      }

    }

    &__description {


      &__paragraph {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
      }

      &__list{
        display: grid;
        grid-template-columns: 28px 1fr;
        column-gap: 10px;


      }

      .button {
        background-color: var(--color-ver2-primary-blue) !important;
        width: 204px !important;
        // margin-left: 0 !important;

         @include respond-to('<=s') {
        margin: auto;
        // text-align: center;
      }

        // @include respond-to('<=m') {
        //   max-width: 100% !important;
        // }
      }

    }

    &__countdown__wrapper{

         @include respond-to('<=s') {
            align-self: center;
        }
        

        .countdown-wrap{
            display: grid;
        grid-template-columns: repeat(4, 1fr);

        .paragraph-wrap{
            grid-column: 1 / span 4;
            grid-row: 2;
            display: grid;

            grid-template-columns: repeat(4, 1fr);

            .wrap-day,
            .wrap-hour,
            .wrap-min,
            .wrap-sec{
                grid-row: 1;
                color: var(--color-analog-primary-white);


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


  .countdown-data{
    font-size: 54px;
    font-family: montserrat;
    font-weight: 600;
    order: 1;
    width: 104px ;

    @include respond-to("<=xs"){
        max-width: 74px ;

        font-size: 28px;
    }



    
}
</style>