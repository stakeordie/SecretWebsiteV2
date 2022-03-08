<template>
  <section class="service-status__alert">
      <div class="service-status__alert__stable">
          <img src="../../assets/icon-check.svg" alt="" class="service-status__alert__stable__icon">
          <div class="service-status__alert__stable__content">
              <h6 class="service-status__alert__stable__content__title" >Network is stable</h6>
              <p class="service-status__alert__stable__content__text">If you suspect there is an issue occuring contact us here <a class="service-status__alert__stable__content__text__link">contact us here.</a></p>
          </div>
      </div>

      <div class="service-status__alert__issues">
          <img src="../../assets/icon-exclamation.svg" alt="" class="service-status__alert__issues-icon">
          <div class="service-status__alert__issues__content">
              <h6 class="service-status__alert__issues__content__title" >Network is experiencing performance issues</h6>
              <p class="service-status__alert__issues__content__text">Currently the network is experiencing some performance issues caused by the Shade Airdrop. <a class="service-status__alert__issues__content__text__link">Read more.</a></p>
          </div>
      </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.service-status__alert{

//infividual styles

    &__stable{
        border: 1px solid var(--color-analog-secondary-green);

        &__content{

            &__title{
                color: var(--color-analog-tertiary-green);
            }
        } 
    }

    &__issues{
        border: 1px solid var(--color-analog-tertiary-yellow); 
         
         &__content{

            &__title{
                color: var(--color-analog-tertiary-yellow);
            }
        }
    }


//Shared styles

    &__stable,
    &__issues{
        display: grid;
        grid-template-columns: 24px 1fr;
        grid-gap: 16px;

        border-radius: 10px;

        padding: var(--f-gutter);
        margin: var(--f-gutter-xl) 0;

        &__content{
            display: grid;
            gap: 10px;
            
            &__title{
                margin-bottom: 0;
                
            }
        }
    }
}

</style>