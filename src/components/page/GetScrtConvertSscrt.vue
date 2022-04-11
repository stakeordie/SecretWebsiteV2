<template>
  <div class="page-get-scrt">
    <section class="page-get-scrt__convert-sscrt">
      <div class="page-get-scrt__convert-sscrt__content">
        <div class="page-get-scrt__convert-sscrt__content__image">
          <img src="../../assets/get-scrt-convert-sscrt.png" alt="">
        </div>
        <div class="page-get-scrt__convert-sscrt__content__info">
          <img src="../../assets/keplr_icon.svg" alt="" />
          <div class="page-get-scrt__convert-sscrt__content__info__text">
            <h3 class="page-get-scrt__convert-sscrt__content__info__text-title">Convert sSCRT to SCRT</h3>
            <p class="page-get-scrt__convert-sscrt__content__info__text-description">After you’ve bridged an asset & swapped it for sSCRT, you can freely convert it to SCRT using Keplr’s converter.</p>
          </div>
          <btn
            class="page-get-scrt__convert-sscrt__content__info__btn center-text no-arrow"
            url="https://scrt.network/blog/secret-network-400m-ecosystem-funding-new-investors">
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


  .about-get-scrt {
    .content {
      .box {

        .page-get-scrt {
          &__convert-sscrt__content__info__btn {
            // background-color: red;
            max-width: fit-content;

            @include respond-to("<=m") {
            max-width: 100%;
          }
          }

          padding-top: var(--f-gutter-xxxl);

          @include respond-to("<=m") {
            padding-top: var(--f-gutter-xxl);
          }

          @include respond-to("<=s") {
            padding-top: var(--f-gutter-xl);
          }



          &__convert-sscrt {
            &__content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: center;
              gap: var(--f-gutter-l);

              @include respond-to("<=m") {
                grid-template-columns: 1fr;
                justify-items: center;
              }

              &__image {
                display: grid;
                padding-top: var(--f-gutter-l);
                justify-items: right;

                @include respond-to("<=m") {
                  max-width: 80%;
                }
              }

              &__info {
                padding: var(--f-gutter);
                gap: var(--f-gutter);
                display: grid;
                // width: fit-content;

                // a {
                //   max-width: fit-content;
                //   min-width: fit-content;
                // }

                .btn .button .page-get-scrt__convert-sscrt__content__info__btn .center-text .no-arrow {
                  max-width: fit-content;
                  min-width: fit-content;
                }


                &__text {
                  display: grid;
                  gap: var(--f-gutter-xs);
                  width: 468px;
                }

                &__text-title {
                  margin-bottom: 0;

                  @include respond-to("<=s") {
                    font-size: 40px;
                    line-height: var(--f-h2-line-height);
                  }
                }

                &__text-description {
                  font-size: var(--paragraph-font-size-big);
                  line-height: var(--paragraph-line-height-big);
                  margin-bottom: 0;
                  color: var(--color-neutral-dark-mode-05);
                }

                &__btn {
                  // max-width: fit-content !important;
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
                    width: 100%;
                  }


                }



              }
            }
          }
        }

      }
    }
  }

  
 
</style>