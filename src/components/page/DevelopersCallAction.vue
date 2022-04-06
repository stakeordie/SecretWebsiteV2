<template>
  <section class="page-developers__call-action">
      <div class="page-developers__call-action__cards" >
        <div class="page-developers__call-action__cards__card" v-for="(item, index) in material" :key="index">
          <img class="page-developers__call-action__cards__card__img" :src="item.imageUrl" alt="" />
          <h4 class="page-developers__call-action__cards__card__h4">{{ item.title }}</h4>
          <p class="page-developers__call-action__cards__card__p">{{ item.description }}</p>
          
          <btn class="center-text no-arrow call-action-button" :url="item.url">{{ item.urlTitle }}</btn>
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
          imageUrl: "/img/developers/icon-funding-getscrt.svg",
          title: "Get Started",
          description:
            "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
          urlTitle: "Get SCRT",
          url: "https://docs.scrt.network/node-guides/run-full-node-mainnet.html",
        },
         {
          imageUrl: "/img/developers/icon-funding-community.svg",
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

.page-developers__call-action {
  

  &__cards{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 48px;

      @include respond-to("<=m"){
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-to("<=s"){
        grid-template-columns: 1fr;
      }

    &__card{
      padding: 16px;

      &__img{

        margin-bottom: 16px;
      }

      

      &.cta-button{
        margin-left:0;
        padding-left: 0;
      }
      
      
      
    }
    
  }
}
</style>