<template>
  <section class="about-secret-network-ctas">
      <div class="about-secret-network-ctas__cards" >
        <div class="about-secret-network-ctas__cards__card" v-for="(item, index) in material" :key="index">
          <img class="about-secret-network-ctas__cards__card__img" :src="item.imageUrl" alt="" />
          <h4 class="about-secret-network-ctas__cards__card__h4">{{ item.title }}</h4>
          <p class="about-secret-network-ctas__cards__card__p">{{ item.description }}</p>
          
          <btn class="center-text no-arrow ctas-button" :url="item.url">{{ item.urlTitle }}</btn>
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
          imageUrl: "/img/about-secret-network/get-started-img.svg",
          title: "Get Started",
          description:
            "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
          urlTitle: "Get SCRT",
          url: "../about/about-scrt",
        },
        {
          imageUrl: "/img/about-secret-network/build-on-secret-img.svg",
          title: "Build on Secret",
          description:
            "Start building privacy-preserving dApps with Secret smart contracts.  ",
          urlTitle: "START DEVELOPING",
          url: "../developers",
        },
         {
          imageUrl: "/img/about-secret-network/join-community-img.svg",
          title: "Join the Community",
          description:
            "Become a Secret Agent and advance a better, more empowering web.  ",
          urlTitle: "GET INVOLVED",
          url: "../get-involved/become-secret-agent",
        },
      ],
    };
  },

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.about-secret-network-ctas{
  

  &__cards{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 48px;

      @include respond-to("<=m"){
        grid-gap: 16px;
      }

      @include respond-to("<=s"){
        grid-template-columns: repeat(2, 1fr);
        padding: var(--f-gutter);
      }

      @include respond-to("<=xs"){
        grid-template-columns: 1fr;
        grid-gap: 48px;
        
      }

    &__card{
    
      padding: 16px;
      text-align: center;
      max-width: 360px;
      margin: auto;

      &__img{
        margin: auto;
        margin-bottom: 16px;
        height: 150px;
        width: auto;
      }

      

      &.cta-button{
        margin-left:0;
        padding-left: 0;
      }
      
      
      
    }
    
  }
}

</style>