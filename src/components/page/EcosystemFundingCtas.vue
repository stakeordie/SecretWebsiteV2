<template>
  <section class="page-ecosystem__ctas">
      <div class="page-ecosystem__ctas__cards" >
        <div class="page-ecosystem__ctas__cards__card" v-for="(item, index) in material" :key="index">
          <img class="page-ecosystem__ctas__cards__card__img" :src="item.imageUrl" alt="" />
          <h4 class="page-ecosystem__ctas__cards__card__h4">{{ item.title }}</h4>
          <p class="page-ecosystem__ctas__cards__card__p">{{ item.description }}</p>
          <btn class="center-text no-arrow" :url="item.url">{{ item.urlTitle }}</btn>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      material: [
        {
          imageUrl: "/temp/funding/icon-funding-getscrt.svg",
          title: "Get Started",
          description:
            "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
          urlTitle: "Get SCRT",
          url: "https://docs.scrt.network/node-guides/run-full-node-mainnet.html",
        },
        {
          imageUrl: "/temp/funding/icon-funding-developing.svg",
          title: "Build on Secret",
          description:
            "Read the official documentation on Secret contracts, clients, protocols, and more. ",
          urlTitle: "START DEVELOPING",
          url: "https://docs.scrt.network/relayers/setting-up-hermes.html",
        },
         {
          imageUrl: "/temp/funding/icon-funding-community.svg",
          title: "Join the Community",
          description:
            "Join our community of privacy pioneers to create a better, more empowering web. ",
          urlTitle: "BECOME A SECRET AGENT",
          url: "https://docs.scrt.network/relayers/setting-up-hermes.html",
        },
      ],
    };
  },

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-ecosystem__ctas{
  margin: 64px auto;

  &__cards{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 48px;

      @include respond-to("<=s"){
        grid-template-columns: 1fr;
      }

    &__card{
      padding: 16px;

      &__img{

        margin-bottom: 16px;
      }
      
    }
    
  }
}

</style>