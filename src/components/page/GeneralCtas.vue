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

        //BOTTOM CTAs
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
          ctaId: "get-started-with-secret",
          imageUrl: "/img/about-secret-network/get-started-img.svg",
          title: "Get started with Secret",
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
        {
          ctaId: "contribute-to-secret",
          imageUrl: "/img/about-secret-network/join-community-img.svg",
          title: "Contribute to Secret",
          description:
            "Become a Secret Agent and advance a better, more empowering web.  ",
          urlTitle: "GET INVOLVED",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "champion-privacy-on-web3",
          imageUrl: "/img/about-secret-network/join-community-img.svg",
          title: "Champion privacy on Web3",
          description:
            "Become a Secret Agent and advance a better, more empowering web.  ",
          urlTitle: "GET INVOLVED",
          url: "../get-involved/become-secret-agent",
        },

        {
          ctaId: "the-partners-supporting-us",
          imageUrl: "/img/about-secret-network/partners-supporting-img.png",
          title: "The partners supporting us",
          description:
            "Meet the people supporting Secret’s mission and helping drive it’s growth and adoption.  ",
          urlTitle: "VIEW PARTNERS",
          url: "../get-involved/become-secret-agent",
        },

        // LEARN PORTAL
        {
          ctaId: "secret-defi",
          imageUrl: "/img/about-secret-network/learn-defi-img.svg",
          title: "Secret DeFi",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "secret-nfts",
          imageUrl: "/img/about-secret-network/nfts-img.svg",
          title: "Secret NFTs",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "why-privacy-matters",
          imageUrl: "/img/about-secret-network/dao-img.svg",
          title: "Why Privacy Matters",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "secret-tech",
          imageUrl: "/img/about-secret-network/learn-tech-img.svg",
          title: "Secret Tech",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "sapp-guides",
          imageUrl: "/img/about-secret-network/contract-img.svg",
          title: "Dapp Guides",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
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