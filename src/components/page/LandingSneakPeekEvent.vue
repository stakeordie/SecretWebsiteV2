<template>
  <section class="landing-event-sneak-peek">
    <div class="landing-event-sneak-peek__content">
      <div class="landing-event-sneak-peek__heading">
        <h4 class="landing-event-sneak-peek__heading__eyebrow">Join us at</h4>
        <h2 class="landing-event-sneak-peek__heading__title">
          Secret Summit 2022
        </h2>
        <h3 class="landing-event-sneak-peek__heading__subtitle">
          Coming in December
        </h3>
      </div>
      <div class="landing-event-sneak-peek__description">
        <p class="landing-event-sneak-peek__description__paragraph">
          Secret Network’s flagship digital conference with talks, panels, and
          workshops by Web3 privacy pioneers from our ecosystem & beyond. Learn
          more about:
        </p>
        <ul class="landing-event-sneak-peek__description__list">
          <li class="landing-event-sneak-peek__description__list--item">
            <img
              src="../../assets/events/summit/check-circle.svg"
              alt="summit"
            />
            <p>The possibilities private smart contracts unlock</p>
          </li>
          <li class="landing-event-sneak-peek__description__list--item">
            <img
              src="../../assets/events/summit/check-circle.svg"
              alt="summit"
            />
            <p>Cutting-edge cryptography research</p>
          </li>
          <li class="landing-event-sneak-peek__description__list--item">
            <img
              src="../../assets/events/summit/check-circle.svg"
              alt="summit"
            />
            <p>What dApps are building on Secret right now</p>
          </li>
        </ul>
        <p class="landing-event-sneak-peek__description__paragraph">
          And of course, we’ll share a few secrets…!
          <br />
          Let’s talk about the past, present, and future of Web3 privacy
          together.
        </p>
        <btn class="no-arrow" url="https://secretsummit2022.eventbrite.com"
          >SAVE MY SPOT</btn
        >
      </div>

    <event-countdown></event-countdown>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    sneakPeek() {
      let sumHeights = 0;
      let swirlTop = document.querySelector(".swirl-wrapper");
      let swirlBottom = document.querySelector(".swirl-wrapper-bottom");
      let header = document.querySelector(".mega-header");
      let alertBar = document.querySelector(".alert-bar");
      let sneakPeek = document.querySelector(".landing-event-sneak-peek");

      swirlTop.classList.add("remove");
      swirlBottom.classList.add("remove");

      if(alertBar) {
        sumHeights = [header][0].previousSibling.offsetHeight + [header][0].offsetHeight;
      }
      if(!alertBar) {
        sumHeights = [header][0].offsetHeight;
        console.log('test')
      }
      sneakPeek.style.setProperty("--sum-heights", sumHeights + "px");
      sneakPeek.style.setProperty(
        "--headerHeight",
        [header][0].offsetHeight + "px"
      );

      // setTimeout(() => {
        sneakPeek.classList.add("visible")
      // }, 500);

      console.log(sumHeights);
      console.log([header][0].offsetHeight)
      console.log([header][0].previousSibling.offsetHeight)
      // console.log([header][0].previousSibling.className)
    },
  },
  mounted() {
    setTimeout(() => {
      this.sneakPeek();
    }, 100);
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
@mixin bgSpecs {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  // background-position-y: 69px;
}
.summit {
  .landing-event-sneak-peek {
    transition: 0.2s ease;
    opacity: 0;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - var(--sum-heights));
    margin-top: var(--headerHeight);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../../assets/events/summit/secret-summit-graphic-2.svg");
    &.visible {
      opacity: 1;
    }
    @include respond-to("<=s") {
      overflow-y: scroll;
      padding-top: calc(230px + var(--sum-heights));
      padding-bottom: 33px;
      background: url("../../assets/events/summit/secret-summit-graphic-2-mobile.svg");
       @include bgSpecs();
    }
    @include bgSpecs();
    @include respond-to("<=m") {
      background: url("../../assets/events/summit/secret-summit-graphic-2-medium-portrait.svg");
      @include bgSpecs();
      background-position-x: right;
      background-position-y: 69px;
    }
    @include respond-to(">=l") {
      background: url("../../assets/events/summit/secret-summit-graphic-landscape.svg");
      overflow-y: scroll;
      padding-top: calc(var(--sum-heights));
      padding-bottom: 50px;
      &::-webkit-scrollbar {
      // display: none;
    }
      @include bgSpecs();
    }
    @include respond-to(">=xl") {
      background: url("../../assets/events/summit/secret-summit-graphic-2.svg");
      overflow-y: scroll;
      padding-top: calc(var(--sum-heights));
      padding-bottom: 50px;
      &::-webkit-scrollbar {
      // display: none;
    }
      @include bgSpecs();
    }
    display: grid;
    grid-auto-rows: min-content;
    gap: 26px;
    align-content: center;

    p {
      font-size: 18px;
      line-height: 27px;
      color: var(--color-neutral-dark-mode-06);
    }

    &__content {
      max-width: 640px;
      display: flex;
      // align-content: center;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
      background: rgba(26, 29, 40, 0.6);
      backdrop-filter: blur(5px);

      border-radius: 16px;

      // transform: translateX(-240px);


      @include respond-to("<=l") {
        margin: auto;
        max-width: 544px !important;
        // text-align: left;

        // transform: translateX(0px);
      }
      @include respond-to("<=s") {
        max-width: calc(100% - 16px) !important;
      }
      
      @include respond-to("<=m") {
       transform: translateX(0);
      }

      @include respond-to(">=l") {
       transform: translateX(-200px);
      }

      @include respond-to(">=xl") {
       transform: translateX(-250px);
      }

      @include respond-to(">=xxl") {
       transform: translateX(-300px);
      }
    }

    &__heading {
      * {
        margin: 0;
        margin: auto;
        // text-align: left;
      }

      @include respond-to("<=l") {
        // margin: auto;
        text-align: center;
      }

      &__eyebrow {
        color: var(--color-ver2-secondary-blue);
        text-transform: uppercase;
        margin-bottom: 4px;
        // margin-top: 20px;
       
       @include respond-to("<=s") {
          margin-top: 0;
        }

         @include respond-to("<=l") {
          font-size: 18px;
        }
      }

      &__title {
        font-family: montserrat;
        margin-bottom: 10px;
        @include respond-to("<=l") {
          font-size: 42px;
          line-height: 48px;
        }
      }

      &__subtitle {
        text-transform: uppercase;
        margin-bottom: var(--f-gutter);
        @include respond-to("<=l") {
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
          align-items: center;


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
        // margin-bottom: 26px !important;
        span {
          font-size: 16px !important;
        }
        @include respond-to("<=m") {
          // width: 100% !important;
        }
        @include respond-to("<=l") {
          margin-left: auto !important;
          margin-right: auto !important;
          display: block !important;
        }
      }
    }

   
    &__content {
      max-width: 700px;
      padding: var(--f-gutter);
    }
  }
  .swirl-wrapper,
  .swirl-wrapper-bottom {
    display: none;
  }
  .simple-footer,
  .legal {
    display: none;
  }
  .no-padding {
    margin-bottom: 0;
    .content {
      .box {
        padding: 0;
        height: fit-content;

        @include respond-to("<=s") {
          // padding: 8px;
        }
      }
    }
  }

  .event__countdown__wrapper{

    @include respond-to('<=l') {
        // align-self: center;
        width: 240px;
        align-self: center;
      }
   .countdown-wrap{

          .wrap-day,
          .wrap-hour,
          .wrap-min,
          .wrap-sec {

            @include respond-to("<=l") 
            {

              font-size: 14px;
              margin-right: 8px;
            }


          }

          .countdown-data{

           @include respond-to("<=l") {
            height: 40px;
            font-size: 28px ;
            }

          }
        }
   } 

  }





</style>
