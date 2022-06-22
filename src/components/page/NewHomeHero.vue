<template>
  <section class="new-home-hero">
    <div class="new-home-hero__container">
      <div class="new-home-hero__container__text">
        <h1 class="new-home-hero__container__h1">
          More Privacy <span>Limitless Possibilities</span>
        </h1>
        <p class="new-home-hero__container__p">
          Secret Network is the first blockchain with customizable privacy. You
          get to choose what you share, with whom, and how. This protects users,
          and empowers developers to build a better Web3.
        </p>
        <div class="new-home-hero__container__btns">
          <btn class="text-center no-arrow btn-bigger special" url="../about/about-scrt">
          <img class="special-icon" src="../../assets/getscrt-filled-icon.svg" />
            Get SCRT
          </btn>
          <btn class="text-center no-arrow btn-bigger" url="../about/about-secret-network/">
            Learn More
          </btn>
        </div>
      </div>
      <div class="new-home-hero__container__logos">
        <h6>Supported by</h6>
        <infinite-slide-bar
          duration="220s"
          :barStyle="{ background: '', padding: '5px 0' }"
        >
        <partners-logos header="Partners" title="Partners" collection="ecosystemPartners" :isPaginated="false"></partners-logos>
          <!-- <div
            v-for="(investor, index) in secretInvestors"
            :key="index"
            class="card-secret-agent">
            
          </div> -->
          <!-- </div> <div
            v-for="(investor, index) in secretInvestors"
            :key="index"
            class="card-secret-agent">
            <partners-logos></partners-logos>
            <g-image :src="investor.image" />
          </div> -->
        </infinite-slide-bar>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      secretInvestors: [
        { image: "/img/investor-Alameda.png" },
        { image: "/img/investor-Arca.png" },
        { image: "/img/investor-Arkstream.png" },
        { image: "/img/investor-Arrington.png" },
        { image: "/img/investor-Bison.png" },
        { image: "/img/investor-Blacktower.png" },
        { image: "/img/investor-Coinfund.png" },
        { image: "/img/investor-Defiance.png" },
        { image: "/img/investor-Dragonly.png" },
        { image: "/img/investor-Fenbushi.png" },
        { image: "/img/investor-Figment.png" },
        { image: "/img/investor-GalaxyDigital.png" },
        { image: "/img/investor-Hartman.png" },
        { image: "/img/investor-Hashed.png" },
        { image: "/img/investor-HashkeyGroup.png" },
        { image: "/img/investor-Huobi.png" },
        { image: "/img/investor-Iconium.png" },
        { image: "/img/investor-Kucoin.png" },
        { image: "/img/investor-Magnus.png" },
        { image: "/img/investor-NGC.png" },
        { image: "/img/investor-Sanctor.png" },
        { image: "/img/investor-SCRTLabs.png" },
        { image: "/img/investor-Shima.png" },
        { image: "/img/investor-Skynet.png" },
        { image: "/img/investor-Skyvision.png" },
      ],
    };
  },
};
</script>

<style lang="scss">@import "@lkmx/flare/src/functions/respond-to";

.new-home-hero {
  display: flex;
  margin: 0;
  padding: 0;
  height: 705px;
  overflow: hidden;
  max-width: 100vw;

  @include respond-to(">=xxl") {
    height: 800px;

  }
   @include respond-to(">=xxxl") {
    height: 8900px;

  }
  

  @include respond-to("<=xs") {
    height: 900px;

  }

  &__container {

    align-self: center;
    text-align: center;
    max-width: 100%;
    min-width: 343px;
    overflow: hidden;
    margin: 0 auto;
    transform: translateY(10%);



    //padding: var(--f-gutter);

    //transform: translateY(24%);

    @include respond-to("<=xs") {

      transform: translateY(6%);
    }

    &__text {
      max-width: 742px;
      margin: auto;
      padding: 0 var(--f-gutter);

    }

    &__h1 {
      text-align: center;
      font-family: var(--f-default-headers-font);
      font-size: 54px;
      line-height: 60px;
      font-weight: 600;
      margin-bottom: 26px;

      & span {
        display: block;
        color: var(--color-analog-tertiary-yellow);
      }

      @include respond-to("<=s") {
        font-size: 40px;
        margin-bottom: 10px;
      }

    }

    &__p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      color: var(--color-neutral-dark-mode-06);
      min-width: 311px;
      margin-bottom: 26px;


    }

    &__btns {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      width: 360px;
      margin: auto;

      @include respond-to("<=xs") {
        grid-template-columns: 1fr;
        width: 100%;


      }

      & .btn-bigger {

        width: 172px !important;
        margin: 0 !important;
        max-height: 64px;
        justify-content: center;


        @include respond-to("<=xs") {
          width: 100% !important;
          padding: 10px 0;

        }
        
        & .themed-image{
            display: none;
          }
        span{
          display: flex;
          vertical-align: middle;
          
          

          img{
            transform: translateY(-1px);
            align-self: center;
            margin-right: 6px;
            width: 24px;
            height: 24px;
          }

          
        }

        // &.special-icon{
        //       vertical-align: middle;
              
        //     }


      }
    }

    &__logos {
      margin-top: 68px;
      max-width: 100%;
      overflow: hidden;

      @include respond-to("<=s") {
        margin-top: 42px;
      }


      & h6 {
        color: var(--color-neutral-dark-mode-05);
        margin-bottom: 24px;

      }

      & .vifnslb-container {
        width: 100%;
        overflow: hidden;
      }

      & .vifnslb-bar {
        //gap: 96px;
        //margin-right: 96px;
        overflow: hidden;

        @include respond-to("<=m") {
          //gap: 64px;
          //margin-right: 64px;
        }

        & img {
          height: 48px;
        }
      }

    }
  }

  & .partners-logos-container{
  display: inline-flex;
  

  & .logo-container{
    padding: var(--f-gutter) 54px;
   // width: 120px;
   opacity: 0.7;

      @include respond-to("<=s") {
        padding: var(--f-gutter) 32px;
    }
  }
}
}



</style>
