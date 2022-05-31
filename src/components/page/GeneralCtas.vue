<template>
  <section class="general-ctas__item">
    <div class="general-ctas__item__card" v-for="(item, index) in ctaContent" :key="index">
      <img class="general-ctas__item__card__img" :src="item.imageUrl" alt="" />
          <h4 class="general-ctas__item__card__h4">{{ item.title }}</h4>
          <p class="general-ctas__item__card__p">{{ item.description }}</p>
          
          <btn class="center-text no-arrow ctas-button" :url="item.url">{{ item.urlTitle }}</btn>
    </div>
  </section>


</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      ctas: [
        {
          ctaId: "get-started",
          imageUrl: "/img/about-secret-network/get-started-img.svg",
          title: "Get Started",
          description:
            "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
          urlTitle: "Get SCRT",
          url: "../about/about-scrt",
        },
        {
          ctaId: "build-on-secret",
          imageUrl: "/img/about-secret-network/build-on-secret-img.svg",
          title: "Build on Secret",
          description:
            "Start building privacy-preserving dApps with Secret smart contracts.  ",
          urlTitle: "START DEVELOPING",
          url: "../developers",
        },
        {
          ctaId: "join-the-community",
          imageUrl: "/img/about-secret-network/join-community-img.svg",
          title: "Join the Community",
          description:
            "Become a Secret Agent and advance a better, more empowering web.  ",
          urlTitle: "GET INVOLVED",
          url: "../get-involved/become-secret-agent",
        },
      ],
      // material: [
      //   {
      //     id: "get-started",
      //     imageUrl: "/img/about-secret-network/get-started-img.svg",
      //     title: "Get Started",
      //     description:
      //       "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
      //     urlTitle: "Get SCRT",
      //     url: "../about/about-scrt",
      //   },
      //   {
      //     imageUrl: "/img/about-secret-network/build-on-secret-img.svg",
      //     title: "Build on Secret",
      //     description:
      //       "Start building privacy-preserving dApps with Secret smart contracts.  ",
      //     urlTitle: "START DEVELOPING",
      //     url: "../developers",
      //   },
      //    {
      //     imageUrl: "/img/about-secret-network/join-community-img.svg",
      //     title: "Join the Community",
      //     description:
      //       "Become a Secret Agent and advance a better, more empowering web.  ",
      //     urlTitle: "GET INVOLVED",
      //     url: "../get-involved/become-secret-agent",
      //   },
      // ],
      ctaContent: []
    };
  },
  methods: {
    getCtaContent(){
      this.ctaContent = this.ctas.filter(
        (it) =>{          
          if(it.ctaId == this.id){
            return it;
          };      
        } 
      )      
    }
  },
  mounted(){
    this.getCtaContent();
  }

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";


.general-ctas__item{
  padding: var(--f-gutter);
  
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


</style>