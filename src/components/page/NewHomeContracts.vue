<template>
  <section class="new-home-contracts">
      <div class="new-home-contracts__header">
          <h5 class="new-home-contracts__header-h5">
              THE SECRET OF SECRET NETWORK
          </h5>
          <h3 class="new-home-contracts__header-h3">
              We made smart contracts private
          </h3>
          <p class="new-home-contracts__header-p">
            Secret contracts encrypt input, output, and state—hiding data even from the nodes on the network. So you
            can:
          </p>
      </div>
      <div class="new-home-contracts__features"  >
          <div class="new-home-contracts__features__feature" v-for="(item, index) in reasons" :key="index">
              <a :href="item.btnUrl" class="feature-cont">
                  <img :src="item.imageUrl" alt="" />
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                  <a  href="#" class="">{{item.btn}}</a>
              </a>
          </div>
      </div>
      <btn class="text-center no-arrow btn-bigger" url="../about/about-scrt">
            Learn more
          </btn>
  </section>
</template>

<script>
export default {
    data() {
    return {
      reasons: [
        {
          imageUrl: "/temp/home/icon-home-exchange.svg",
          title: "Stay safe while spending, saving, and trading",
          description: "Control access to your assets and data with Secret Tokens and Apps, while avoiding hacks and front-running. ",
          btn: "ABOUT SECRET DEFI",
          btnUrl: "../about/secret-finance"
        },
        {
          imageUrl: "/temp/home/icon-home-creativity.svg",
          title: "Take full control of your creativity",
          description: "Selectively reveal content and ownership with Secret NFTs to control access, create hidden features, and make art and entertainment not possible elsewhere.  ",
          btn: "ABOUT SECRET NFTS",
          btnUrl: "../about/secret-nfts"
        },
        {
          imageUrl: "/temp/home/icon-home-explore.svg",
          title: "Explore and expand  the frontiers of Web3",
          description: "Enter the new design space customizable privacy opens up, and build groundbreaking apps in areas ranging from finance to communication to gaming. ",
          btn: "START BUILDING",
          btnUrl: "https://scrt.network/developers"
        },
       
      ]
    }
    }

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.new-home-contracts{
    text-align: center;
    padding: 64px 0;
    @include respond-to ("<=s"){
            padding: 64px var(--f-gutter);
        }

    &__header{
        padding-bottom: 56px;

        & h5{
            color: var(--color-neutral-dark-mode-05);
            padding-bottom: 0;
            margin-bottom: 0;
        }
        & h3{
            margin-bottom: 10px;
        }

        &-p{
            font-size: var(--paragraph-font-size-big);
            line-height: var(--paragraph-line-height-big);
            max-width: 600px;
            margin: auto;
        }
    }

    &__features{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 36px;
        padding-bottom: 48px;
        width: 100%;

        

        @include respond-to ("<=s"){
            grid-template-columns: 1fr;
        }

        &__feature{
            padding: var(--f-gutter);
            border-radius: 10px;
            
            
            

            @include respond-to ("m"){
                padding: var(--f-gutter-l) 0;
            }

            @include respond-to ("s"){
                padding: 0 var(--f-gutter-xxxl) ;
            }

            &:hover{
                background: var(--color-neutral-dark-mode-04);

                a {
                    color: var(--color-newBrand-blue-01);
                }
            }

            .feature-cont{
                display: grid;
                grid-template-rows: repeat(3, 1fr);
                gap: 10px;
                max-height: 390px;
            }

            & img{
                margin: auto;
                margin-bottom: 12px;
                width: 100px;
                height: 100px;
            }

           & h4{
               color: #D4DCE3;
               font-family: montserrat;
               letter-spacing: 0;
               margin-bottom: 0;

               @include respond-to("<=m"){
                   font-size: 22px;
               }
           }

           & p{
               color: var(--color-neutral-dark-mode-05);
               font-family: var(--f-default-text-font);
               font-size: var(--f-default-text-size) ;
               letter-spacing: 0;
               margin-bottom: 0;
           }

           & a{
             
               display: inline-block;
               //padding: 12px 0;
               width: 100%;
               
               font-weight: 700;
               letter-spacing: 1px;
               padding: 10px 0;
           }
        }    
    }

     & .btn-bigger {
            
            padding: 10px 0 !important;
            width: 200px !important;
            font-size: 18px !important;

            @include respond-to("<=m") {
            width: 100%;
            margin: 10px 0;
            }
      }
}


</style>