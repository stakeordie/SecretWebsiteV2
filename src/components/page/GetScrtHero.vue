<template>
  <section class="get-scrt__hero">
      <div class="get-scrt__hero__content">
          <div class="get-scrt__hero__content__info">
              <h5>Get SCRT</h5>
              <h1>How to buy & store Secret</h1>
              <p>Get your hands on some SCRT using direct pay, exchanges, or bridging over your assets, and learn what wallet to get.</p>
          </div>
          <div class="get-scrt__hero__content__price-box get-scrt__price-box" >
              <div class="price-title">
                 <img src="../../assets/getscrt-icon.svg" alt="" />
                  <h3>SCRT price</h3>
              </div>
              <h1>$6.44 USD</h1>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.get-scrt__hero{
     padding: var(--f-gutter-xxxl) 0;

     @include respond-to("<=s"){
            padding: var(--f-gutter-xxxl) var(--f-gutter);
        }

    &__content{
        display: grid;
        grid-template-columns: 1fr 400px;
        gap: 36px;

        @include respond-to("<=l"){
            //grid-template-columns: 1fr 1fr;
        }

         @include respond-to("<=m"){
            grid-template-columns: 1fr ;
        }

        @include respond-to("<=s"){
            grid-template-columns: 1fr ;
        }
        
        &__info{
            display: grid;
            gap: 16px;
            align-self: center;

            @include respond-to("<=s"){
                //order: 2;
            }
           
           & h5{
                color: var(--color-analog-tertiary-yellow);
                margin-bottom: 0;
            }

            & h1{
                margin-bottom: 0;
                line-height: 60px;
            }

            & p{
                font-size: var( --paragraph-font-size-big);
                line-height: var(--paragraph-line-height-big);
                color: var(--color-neutral-dark-mode-06);
            }

        }

        &__price-box{
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center ;
            text-align: center;
            align-self: center;
            align-content: center;
            color: var(--color-neutral-dark-mode-01);

             @include respond-to("<=s"){
                //order: 1;
            }
            
            .price-title{
                display: flex;
                justify-content: center;
                align-items: center;

                & img{
                    width: 48px;
                    height: 48px;
                    background: #fff;
                    border-radius: 50%;
                    margin-right: 10px;
                }

                & h3{
                    margin-bottom: 0;
                }
            }

            & h1{
                font-family: Montserrat;
                font-weight: 600;
                font-size: 54px;
                margin-bottom: 0;
            }

        }
    }
}

</style>