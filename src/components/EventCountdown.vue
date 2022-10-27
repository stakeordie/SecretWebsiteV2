<template>
  <div class="event__countdown__wrapper">
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
</template>

<script>
export default {

}
</script>

<style lang="scss"> 
@import "@lkmx/flare/src/functions/respond-to";

.event{

&__countdown__wrapper {
    max-width: 416px;

      @include respond-to('<=s') {
        // align-self: center;
        width: 240px;
      }


      .countdown-wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;

        @include respond-to("<=s") {

              
            }

        .paragraph-wrap {
          grid-column: 1 / span 4;
          grid-row: 2;
          display: grid;
          opacity: 0.8;
          grid-template-columns: repeat(4, 1fr);
          // margin-top: -4px;

          .wrap-day,
          .wrap-hour,
          .wrap-min,
          .wrap-sec {
            grid-row: 1;
            color: var(--color-analog-primary-white);
            text-align: center;
             margin-right: 24px;
            margin-bottom: 0;
            font-size: 16px;

            @include respond-to("<=s") {

              font-size: 14px;
              margin-right: 8px;
            }


          }

        }

        .countdown-data{
          font-size: 54px;
          font-family: montserrat;
          font-weight: 600;
          order: 1;
           max-width: 100px;
          text-align: end;
          height: 72px;

          @include respond-to("<=s") {
          //  max-width: 70px;

            font-size: 28px;
            // text-align: center;
          }

           @include respond-to("<=s") {
            height: 40px;
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




</style>