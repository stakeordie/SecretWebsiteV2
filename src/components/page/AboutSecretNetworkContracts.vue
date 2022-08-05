<template>
  <section class="about-secret-network-contracts">

    <div class="about-secret-network-contracts__header">
      <img src="../../assets/about-secret-network/contract.svg" alt="" class="about-secret-network-contracts__header__img">
      <h2 class="header-h2">
              How Secret Contracts Work
          </h2>
          <p class="header-p">
            Secret’s smart contracts e.g. “Secret Contracts” are private-by-default. Input, output, and state are
            encrypted and can’t be viewed by others, unless they’re given access. This opens up use cases that aren’t
            possible on public-by-default blockchains.
          </p>
          <btn class="no-arrow" url="../../graypaper" >Read the GrayPaper</btn>
    </div>
    
    <div class="about-secret-network-contracts__container">
      <div class="about-secret-network-contracts__container__item">
        <img src="../../assets/about-secret-network/scr-contract-work.svg" alt=""/>
         <h3 class="h3">
           TEEs for computing over encrypted data
         </h3>
         <p class="p">
           Trusted Execution Environments (TEEs) function like a “black box” for data processing, and enable
           nodes to verify transactions within a block without accessing data that’s inside.
           <br>
           <br>
           Every validator on Secret Network runs their code inside a TEE so no one—not even the nodes operating on the
           network—can access the information being decrypted and processed.
           </p>
           <div class="new-home__call__content__info-btns">
            <btn class="text-center no-arrow btn" url="#">read more</btn>
          </div>
      </div>

       <div class="about-secret-network-contracts__container__item">
         <img src="../../assets/about-secret-network/Vault.svg" alt=""/>
         <h3 class="h3">
           Viewing keys for access control
         </h3>
         <p class="p">
           Since data is encrypted and private by default, Secret Network users have viewing keys to access
           their sensitive data.
           <br>
           <br>
           Viewing keys can be shared with third parties like auditors, wallets, and explorers. They allow users to
           maintain control over their data and decide what is shared—and with who.
         </p>
           <div class="new-home__call__content__info-btns">
            <btn class="text-center no-arrow btn" url="#">read more</btn>
          </div>
      </div>
     
    </div>
    <div class="about-secret-network-contracts__logos">
      <div class="logos__item item1">
        <img src="../../assets/about-secret-network/rust-logo.svg" alt=""/>
        <h4 class="logos_item__p">
          Coded in Rust
        </h4>
      </div>

      <div class="logos__item item2">
        <img src="../../assets/about-secret-network/wasm-logo.svg" alt=""/>
        <h4 class="logos_item__p">
          Compiled with WASM
        </h4>
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

.about-secret-network-contracts{
  padding: 120px 0;

    @include respond-to("<=s"){
            padding: 64px var(--f-gutter);
            }
    @include respond-to("<=xs"){
            padding: 82px var(--f-gutter);
            }

    &__header{
        text-align: center;
        padding: var(--f-gutter);
        margin-bottom: 54px;

        @include respond-to("<=m"){
              padding: 48px;
            }
         @include respond-to("<=xs"){
              padding: 16px;
            }

        & img{
          margin: auto;
          margin-bottom: 26px;

          width: 600px;
          height: auto;
        }
        

        & .header-p{
            font-size: var(--paragraph-font-size-big);
            line-height: var(--paragraph-line-height-big);
            //padding: 0 16px;
            max-width: 800px;
            margin: auto;
            margin-bottom: 24px;
            text-align: left;
        }
    }

     &__container{
       padding: 24px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 80px;

        @include respond-to("<=s"){
              grid-template-columns: 1fr;
              gap: 10px;
            }

        @include respond-to("<=m"){
              //grid-template-columns: 1fr;
              gap: 10px;
            }

        &__item{
            //padding: 26px 16px;
            @include respond-to("<=m"){
              padding: var(--f-gutter);
            }

            & h3{
                @include respond-to("<=m"){
                  font-size: 22px;
                }
            }

            & img{
              margin: auto;
              margin-bottom: 26px;
            }

            & .p{
              font-size: var(--paragraph-font-size-big);
            line-height: var(--paragraph-line-height-big);
            }

            & .new-home__call__content__info-btns{

              & .btn{
                grid-column: 2;

                 @include respond-to("<=m"){
                  //grid-template-columns: 1fr;
                  grid-column: 1 / 2;
                }
              }
            }

           
        }
    }

    &__logos{
      padding-top: 64px;

      // display: flex;
      // justify-content: space-evenly;

      display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 80px;

      @include respond-to("<=xs"){
        display: flex;
        flex-direction: column;

        gap: 20px;
        
      }

      & .item1{
        justify-self: flex-end;
      }
      & .item2{
        justify-self: flex-start;
      }


      & .logos__item{
        height: 252px;
        width: 278px;
        padding: 48px 0;
        text-align: center;
        background-color: var(--color-neutral-dark-mode-03);
        border-radius: 10px;

        display: flex;
        flex-direction: column;

        @include respond-to("<=s"){
          margin: auto;
          //padding: 32px 0;
          height: 202px;
        width: 228px;
        }



      }

      
      
      & img{
        //padding: var(--f-gutter);
         margin: auto;
         width: 100px;
         height: 100px;
         margin-bottom: 26px;

          @include respond-to("<=s"){
          //margin: auto;
          margin-bottom: 16px;
          height: 80px;
          width: 100%;
          }

          @include respond-to("<=xs"){
            //margin: auto;

            height: 80px;
            width: 100%;
          }

      }
      & h4{
        @include respond-to("<=s"){
          font-size: var( --f-default-text-size);
        }
        
      }
    }


    
}

</style>