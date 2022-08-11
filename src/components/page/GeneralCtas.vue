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
          url: "../get-scrt",
        },
        {
          ctaId: "get-started-v2",
          imageUrl: "/img/about-secret-network/get-started-img.svg",
          title: "Get Started",
          description:
            "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
          urlTitle: "Get SCRT",
          url: "../about/get-scrt",
        },
        {
          ctaId: "get-started-with-secret",
          imageUrl: "/img/about-secret-network/get-started-img.svg",
          title: "Get started with Secret",
          description:
            "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
          urlTitle: "Get SCRT",
          url: "../about/get-scrt",
        },

        {
          ctaId: "build-on-secret",
          imageUrl: "/img/about-secret-network/build-on-secret-img.svg",
          title: "Build on Secret",
          description:
            "Start building privacy-preserving dApps with Secret smart contracts.  ",
          urlTitle: "START BUILDING",
          url: "../../developers",
        },

        

        {
          ctaId: "join-the-community",
          imageUrl: "/img/about-secret-network/join-community-img.svg",
          title: "Join the Community",
          description:
            "Become a Secret Agent and advance a better, more empowering web.  ",
          urlTitle: "GET INVOLVED",
          url: "https://discord.com/invite/SJK32GY",
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

        // Ver 2
         {
          ctaId: "get-started2",
          imageUrl: "/img/about-secret-network/get-started-img.svg",
          title: "Get Started",
          description:
            "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
          urlTitle: "Get SCRT",
          url: "../about/get-scrt",
        },
        {
          ctaId: "build-on-secret2",
          imageUrl: "/img/about-secret-network/build-on-secret-img.svg",
          title: "Build on Secret",
          description:
            "Start building privacy-preserving dApps with Secret smart contracts.  ",
          urlTitle: "START DEVELOPING",
          url: "../../developers",
        },

        {
          ctaId: "join-the-community2",
          imageUrl: "/img/about-secret-network/join-community-img.svg",
          title: "Join the Community",
          description:
            "Become a Secret Agent and advance a better, more empowering web.  ",
          urlTitle: "GET INVOLVED",
          url: "https://forum.scrt.network/",
        },


        // LEARN PORTAL
        {
          ctaId: "secret-network",
          imageUrl: "/img/about-secret-network/secret-network-learn-img.svg",
          title: "Secret Network",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "scrt-token",
          imageUrl: "/img/about-secret-network/coin-img.svg",
          title: "SCRT Token",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "defi",
          imageUrl: "/img/about-secret-network/learn-defi-img.svg",
          title: "DeFi",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "creative-work",
          imageUrl: "/img/about-secret-network/nfts-img.svg",
          title: "Creative Work",
          description:
            "Volutpat in feugiat suscipit accumsan egestas scelerisque cras faucibus mi. ",
          urlTitle: "LEARN MORE",
          url: "../get-involved/become-secret-agent",
        },
        {
          ctaId: "privacy",
          imageUrl: "/img/about-secret-network/dao-img.svg",
          title: "Privacy",
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

        // ECOSYSTEM
        {
          ctaId: "see-whats-been-built",
          imageUrl: "/img/about-secret-network/ecosystem-cta-img.png",
          title: "See what’s been built",
          description:
            "Check out the current ecosystem of Secret Network DApps, tools, and products.",
          urlTitle: "View All SECRET DAPPS",
          url: "../ecosystem/dapps",
        },
        
      ],
      
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
  

  @include respond-to("<=s"){
    padding: var(--f-gutter);
  }

    &__card{
    
      padding: 16px;
      text-align: center;
      max-width: 360px;
      margin: auto;
       @include respond-to("l"){
      padding: 0;
    }

      &__img{
        margin: auto;
        margin-bottom: 16px;
        height: 150px;
        width: auto;
      }

       & h4 {
          text-transform: none;
          letter-spacing: 0;
          font-family: var(--f-default-headers-font);
          margin-bottom: 10px;
        }

      & .ctas-button{
        margin-right: 0 !important;
        padding-left: 0;
      }
        
    }
    
}


</style>