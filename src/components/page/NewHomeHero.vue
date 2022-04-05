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
          <button class="text-center no-arrow btn-bigger" url="#">
            Get SCRT
          </button>
          <button class="text-center no-arrow btn-bigger" url="#">
            Learn More
          </button>
        </div>
      </div>
      <div class="new-home-hero__container__logos">
        <h6>Supported by</h6>
        <infinite-slide-bar
          duration="150s"
          :barStyle="{ background: '', padding: '5px 0' }"
        >
          <div
            v-for="(investor, index) in secretInvestors"
            :key="index"
            class="card-secret-agent"
          >
            <g-image :src="investor.image" />
          </div>
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

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
.new-home-hero {
  &__container {
  
    height: 705px;
    text-align: center;
    max-width: 1280px;
    margin: auto;
    padding: var(--f-gutter);

    transform: translateY(15%);

    @include respond-to("<=xs") {
      height: 900px;
      //transform: translateY(12%);
      padding: 0;
    }

    &__text{
      max-width: 742px;
      margin: auto;
      margin-bottom: 26px;
      padding: var(--f-gutter);
    }

    &__h1 {
      text-align: center;
      font-family: var(--f-default-headers-font);
      font-size: 54px;
      line-height: 60px;
      font-weight: 600;

      & span {
        display: block;
        color: var(--color-analog-tertiary-yellow);
      }

      @include respond-to("<=s") {
        font-size: 40px;
      }
    }

    &__p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      color: var(--color-neutral-dark-mode-06);
    }

    &__btns {
      & button {
        margin: 10px;
        width: 172px;

        @include respond-to("<=xs") {
          width: 100%;
          padding: 16px 0;
          margin: 10px 0;
        }

        
      }
    }
    &__logos {
      margin: auto;

      @include respond-to("<=l"){
        width: 1000px;
      }

       @include respond-to("<=m"){
        width: 900px;
      }

             @include respond-to("<=s"){
        width: 620px;
      }
            @include respond-to("<=xs"){
        width: 320px;
      }

      & h6{
        color: var(--color-neutral-dark-mode-05);
        margin-bottom: 24px;
        
      }

      & .vifnslb-bar{
        gap: 96px;

        @include respond-to("<=m"){
        gap: 64px;
      }

        & img{
          height: 48px;
        }
      }

    }
  }
}
</style>
