<template >

  <section class="new-home-hero">
    <div class="new-home-hero__container">
      <h1 class="new-home-hero__container__h1">
        More Privacy <span>Limitless Possibilities</span>
      </h1>
      <p class="new-home-hero__container__p">
        Secret Network is the first blockchain with customizable privacy. You
        get to choose what you share, with whom, and how. This protects users,
        and empowers developers to build a better Web3.
      </p>

      <div class="new-home-hero__container__btns">
          <button class="text-center no-arrow btn-bigger" url="#"> Get SCRT </button>
          <button class="text-center no-arrow btn-bigger" url="#"> Learn More </button>
      </div>
      <div class="new-home-hero__container__logos">
          
      </div>

      
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";



.new-home-hero{
// background-image: url("../../src/assets/brighter-swirl.png");
   
    &__container{
      
        
        height: 705px;
        text-align: center;
        max-width: 742px;
        margin: auto;

        transform: translateY(25%);

        @include respond-to("<=xs"){
            height: 867px;
            transform: translateY(10%);
            padding: 16px;
        }

        &__h1{
            
            text-align: center;
            font-family: var(--f-default-headers-font);
            font-size: 54px;
            line-height: 60px;
            font-weight: 600;

            & span{
                display: block;
                color: var(--color-analog-tertiary-yellow);
            }

            @include respond-to("<=s"){
            font-size: 40px;
        }
        }

        &__p{
            font-size: var(--paragraph-font-size-big);
            line-height: var(--paragraph-line-height-big);
            color: var(--color-neutral-dark-mode-06);
        }

        &__btns{
        
            & button {
                margin: 10px;
                width: 172px;

                @include respond-to("<=xs"){
                    width: 100%;
                    margin: 10px 0;
                }
            }
        }
    }
}

</style>