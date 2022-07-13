<template>
  <section class="about-secret-network-details">

      <!-- Secret Tokens -->
      <div class="about-secret-network-details__container about-1">
        <div class="about-secret-network-details__container__img">
          <img src="../../assets/about-secret-network/defi-img.svg" alt="" class="about-img">
        </div>
        <div class="about-secret-network-details__container__content ">
          <h5 class="about-secret-network-details__container__content__h5"> Secret tokens</h5>
          <h2 class="about-secret-network-details__container__content__h2">Hold and use your tokens in privacy</h2>
          <p class="about-secret-network-details__container__content__p">
            With Secret Bridges and the SNIP-20 standard you can bridge over and make any token privacy-preserving. Once
            your tokens are Secret, balances, transaction details, and token metadata can only be accessed with a
            viewing key.
          </p>
          <div class="about-secret-network-details__container__content__btns">
            <btn class="text-center no-arrow btn" url="../secret-tokens-bridges">read more</btn>
            <btn class="text-center no-arrow btn" url="../get-scrt">Use SCRT</btn>
          </div>
        </div>
      </div>

<!-- DEFI -->
      <div class="about-secret-network-details__container about-2">
        <div class="about-secret-network-details__container__content ">
          <h5 class="about-secret-network-details__container__content__h5">
               DEFI
               </h5>
          <h2 class="about-secret-network-details__container__content__h2">
              Stay safe while spending, saving, and trading
              </h2>
          <p class="about-secret-network-details__container__content__p">
            DeFi apps built with Secret’s privacy-preserving smart contracts provide MEV-resistance by default and
            protect its users from hackers and front-runners. This includes exchanges, market makers, lending protocols,
            and more.
          </p>
          <div class="about-secret-network-details__container__content__btns">
            <btn class="text-center no-arrow btn" url="../secret-finance">read more</btn>
          </div>
        </div>
        <div class="about-secret-network-details__container__img">
          <img src="../../assets/get-scrt/get-scrt-coin.png" alt="" class="about-img">
          
        </div>
        </div>
       
<!-- NFTs -->
      <div class="about-secret-network-details__container about-3">
         <div class="about-secret-network-details__container__img">
          <img src="../../assets/about-secret-network/nfts-img.svg" alt="" class="about-img">
        </div>
        <div class="about-secret-network-details__container__content ">
          <h5 class="about-secret-network-details__container__content__h5">
               NFTS
               </h5>
          <h2 class="about-secret-network-details__container__content__h2">
              Fully own your creative work
              </h2>
          <p class="about-secret-network-details__container__content__p">
            With Secret NFTs’ private metadata and ownership, creators can control who can access their content and in
            what way, protect the identity of their fans, and create art and entertainment not possible elsewhere.
          </p>
          <div class="about-secret-network-details__container__content__btns">
            <btn class="text-center no-arrow btn" url="../secret-nfts">read more</btn>
          </div>
        </div>
      </div>

<!-- Gaming -->
      <div class="about-secret-network-details__container about-4">
        
        <div class="about-secret-network-details__container__content ">
          <h5 class="about-secret-network-details__container__content__h5">
               Gaming
               </h5>
          <h2 class="about-secret-network-details__container__content__h2">
              Design & play with (true) randomness
              </h2>
          <p class="about-secret-network-details__container__content__p">
            With Secret NFTs, game designers can build in true randomness without having to move off-chain. This powers
            real competitive gaming—instead of a game of chain analysis—and opens up a world of new design
            possibilities.
          </p>
          <div class="about-secret-network-details__container__content__btns">
            <btn class="text-center no-arrow btn" url="#">read more</btn>
          </div>
        </div>
        <div class="about-secret-network-details__container__img">
          <img src="../../assets/about-secret-network/gaming-img.svg" alt="" class="about-img">
        </div>
        
      </div>

  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.about-secret-network-details{
    //padding: 60px 0;
    display: grid;
    //row-gap: ;
    @include respond-to("<=s"){
            padding: var(--f-gutter);
            row-gap: 64px;
          }

    

    &__container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 64px;
        row-gap: 24px;
        padding: 64px 0;

         @include respond-to("<=m"){
            grid-template-columns: 1fr;
            justify-items: center;

            &__content{
              order: 2;
            }

            &__img{
              order: 1;
            }
          }

          @include respond-to("<=s"){
            padding: var(--f-gutter);
          }
        
        &__content{
            align-self: center;
            max-width: 550px;
            padding: var(--f-gutter);

            &__h5{
                text-transform: uppercase;
                font-weight: 700;
                margin-bottom: 0;
                color: var(--about-color-orange);
            }
            & h2{
                //margin-bottom: 0;
                font-size: 42px;
                font-family: montserrat;


                 @include respond-to("<=s"){
                  font-size: 32px !important;
                  line-height: 42px;
                }

            }

            &__p{
                font-size: var(--paragraph-font-size-big);
                line-height: var(--paragraph-line-height-big);
                //margin-bottom: 0;
                
            }

            &__btns{
              
              display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;

                @include respond-to ("<=m"){
                    grid-template-columns: 1fr;
                    
                }

                & .btn{
                    padding: 10px 10px ;
                    margin: 0 ;

                    max-width: fit-content ;
                    min-width: 160px;

                    justify-content: center;

                    @include respond-to("<=m"){
                        max-width: 100% ;
                    }

                    span{
                  font-size: 20px;
                  font-weight: 700;
                  letter-spacing: 1px;
                }
                }

                & .btn-color:hover{
                  
                    background-color: var(--color-neutral-dark-mode-02);
                
                }

                
              
            }
        }
        
        &__img {
            max-height: 450px;
            align-self: center;

            img {
                align-self: center;
                margin: auto;
                


            }
        }

 
    }

    
}




// .about-1{

//     & .about-secret-network-details__container__content{

//         h5{
//             color: #C3C4D1;
//         }
//     }
// }

// .about-2{

//     & .about-secret-network-details__container__content{

//         h5{
//             color: #7BBD75;
//         }
//     }
// }

// .about-3{

//     & .about-secret-network-details__container__content{

//         h5{
//             color: #8B7AB0;
//         }
//     }

//     & .about-secret-network-details__container__img{
//         object-fit: cover;
//         height: auto;
//         width: auto;
//     }
// }

// .about-4{

//     & .about-secret-network-details__container__content{

      
// }

</style>