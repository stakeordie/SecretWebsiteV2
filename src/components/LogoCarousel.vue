<template>
  <section class="logo-carousel__container">
      <div class="logo-carousel__container__logos">
          <!-- <h6>Supported by</h6> -->
          <infinite-slide-bar duration="150s" :barStyle="{ background: '', padding: '5px 0' }">
          <div v-for="(investor, index) in secretInvestors" :key="index" class="card-secret-agent">
            <g-image :src="investor.image" />
          </div>
          </infinite-slide-bar>
        </div>
  </section>
  
</template>

<script>
export default {
    data: function () {
    return {
      secretInvestors: [
        { image: "/img/scentral-afterparty-supporters/alter-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/blackbox-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/btn-group-ogo.svg" },
        { image: "/img/scentral-afterparty-supporters/digiline-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/hydro-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/legendao-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/jackal-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/secret-swap-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/shade-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/sienna-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/stakeasy-logo.svg" },
        { image: "/img/scentral-afterparty-supporters/stash-logo.svg" },




        // { image: "/img/investor-Alameda.png" },
        // { image: "/img/investor-Arca.png" },
        // { image: "/img/investor-Arkstream.png" },
        // { image: "/img/investor-Arrington.png" },
        // { image: "/img/investor-Bison.png" },
        // { image: "/img/investor-Blacktower.png" },
        // { image: "/img/investor-Coinfund.png" },
        // { image: "/img/investor-Defiance.png" },
        // { image: "/img/investor-Dragonly.png" },
        // { image: "/img/investor-Fenbushi.png" },
        // { image: "/img/investor-Figment.png" },
        // { image: "/img/investor-GalaxyDigital.png" },
        // { image: "/img/investor-Hartman.png" },
        // { image: "/img/investor-Hashed.png" },
        // { image: "/img/investor-HashkeyGroup.png" },
        // { image: "/img/investor-Huobi.png" },
        // { image: "/img/investor-Iconium.png" },
        // { image: "/img/investor-Kucoin.png" },
        // { image: "/img/investor-Magnus.png" },
        // { image: "/img/investor-NGC.png" },
        // { image: "/img/investor-Sanctor.png" },
        // { image: "/img/investor-SCRTLabs.png" },
        // { image: "/img/investor-Shima.png" },
        // { image: "/img/investor-Skynet.png" },
        // { image: "/img/investor-Skyvision.png" },
      ],
    };
  },

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.logo-carousel__container{
    padding: 42px 0;

    &__logos {
      //margin-top: 68px;
      max-width: 100%;
      overflow: hidden;

      @include respond-to("<=s") {
        //margin-top: 42px;
      }


      & h6 {
        color: var(--color-neutral-dark-mode-05);
        margin-bottom: 24px;
        text-align: center;

      }

      & .vifnslb-container {
        width: 100%;
        overflow: hidden;
      }

      & .vifnslb-bar {
        gap: 96px;
        margin-right: 96px;
        overflow: hidden;

        @include respond-to("<=m") {
          gap: 64px;
          margin-right: 64px;
        }

        & img {
          height: 48px;
        }
      }

    }
}




</style>