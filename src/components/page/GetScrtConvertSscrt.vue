<template>
  <div class="page-get-scrt">
    <section class="page-get-scrt__convert-sscrt">
      <div class="page-get-scrt__convert-sscrt__content">
        <div class="page-get-scrt__convert-sscrt__content__image">
          <img src="../../assets/get-scrt-convert-sscrt.png" alt="" />
        </div>
        <div class="page-get-scrt__convert-sscrt__content__info">
          <img src="../../assets/keplr_icon.svg" alt="" />
          <div class="page-get-scrt__convert-sscrt__content__info__text">
            <h3 class="page-get-scrt__convert-sscrt__content__info__text-title">Convert sSCRT to SCRT</h3>
            <p class="page-get-scrt__convert-sscrt__content__info__text-description">After you’ve bridged an asset &
              swapped it for sSCRT, you can freely convert it to SCRT using Keplr’s converter.</p>
          </div>
          <btn class="page-get-scrt__convert-sscrt__content__info__btn center-text no-arrow"
            url="https://wallet.keplr.app/#/secret/secret-secret">
            Convert sSCRT / SCRT</btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";


.page-get-scrt__convert-sscrt {
  padding: 36px 0;

      @include respond-to("<=m"){
      
      padding: 26px 16px;
    }

  &__content {

    max-width: fit-content;
    margin: auto;


    display: grid;
    grid-template-columns: 450px 500px;
    align-items: center;
    gap: 26px;

    @include respond-to("<=m"){
      max-width: 500px;
        margin: auto;
      grid-template-columns: 1fr;
     
    }

    &__image {
      align-self: center;
      justify-self: center;

    }

    &__info {
      display: grid;
      gap: var(--f-gutter);
      padding: var(--f-gutter) 0;

      & img {
        height: 48px;
        width: 48px;
      }

      &__text {
        
        display: grid;
        gap: var(--f-gutter);
        

        &-title {
          margin-bottom: 0;

          @include respond-to("<=s") {
            
            line-height: var(--f-h2-line-height);
          }

        }

        &-description {
          font-size: var(--paragraph-font-size-big);
          line-height: var(--paragraph-line-height-big);
          margin-bottom: 0;
          max-width: 442px;
         
         @include respond-to("<=m") {
            
            max-width: 100%;
          }

        }
      }

      &__btn {
        max-width: fit-content !important;
        // max-width: 225px;
        width: 225px;

        //   .content {
        //   .box {
        //     .btn {
        //       background-color: red !important; 
        //       max-width: fit-content;
        //     }
        //   }
        // }

        // .btn {
        //   max-width: fit-content;
        // }

        @include respond-to("<=m") {
          max-width: 100% !important;
        }


      }
    }
  }


}
  
 
</style>