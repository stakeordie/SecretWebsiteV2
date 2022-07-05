<template>
  <section class="learn-portal-hero__container">
      <img src="../../assets/learn-portal/learn-hero-img.svg" alt="" class="learn-portal-hero__img">
    <div class="learn-portal-hero__container__content">
      <h4 class="learn-portal__eyebrow">SECRET LEARN PORTAL</h4>
      <h1 class="learn-portal__title">
        Everything You Need to know to Start Using Secret
      </h1>
      <p class="learn-portal__p">
        Diam amet, sed habitasse mattis scelerisque tellus. Ullamcorper
        vulputate nibh vel sapien pellentesque faucibus a, diam at.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-portal-hero__container{
    position: relative;
    

    // @include respond-to('<=2'){
    //             height: ;
    //         }

     .learn-portal-hero__img{
        position: absolute;
        //height: 413px;
        // left: -153px ;
        top: 20px ;
        mix-blend-mode: soft-light;
        z-index: 1;

         @include respond-to('<=m'){
                height: 380px;
                //top: 20px ;
                left: -100px;
            }
    }

    &__content{
        text-align: center;
        display: grid;
        gap: 16px;
        grid-template-rows: max-content;
        align-content: center;
        justify-items: center;
        //padding: var(--f-gutter);

        position: relative;
        z-index: 2;
        padding: 120px var(--f-gutter);
    min-height: 620px;
        // top:20%;    
        @include respond-to('<=m'){

                padding: 120px 64px;
            }
        @include respond-to('<=s'){

                padding: 120px 32px;
          }

        .learn-portal__eyebrow{
            color: var(--color-analog-secondary-orange);
            margin: 0;
            font-weight: 700;
            
            @include respond-to('<=xs'){
                font-size: 18px;
                line-height: 25px;
            }
        }

        .learn-portal__title{
            max-width: 800px;
            margin: 0;
            font-family: var(--f-default-headers-font);
            font-size: 54px;
            line-height: var(--f-h1-text-size);

            // @include respond-to('<=m'){
            //     font-size: 46px;
            //     line-height: var(--f-h2-text-size);
            // }

            @include respond-to('<=s'){
                font-size: 40px;
                line-height: var(--f-h2-text-size);
            }
            
            // @include respond-to('<=xs'){
            //     font-size: 32px;
            //     line-height: 42px;
            // }
             
        }
        .learn-portal__p{
            max-width: 590px;
            margin: 0;
            font-size: var(--paragraph-font-size-big);
            line-height: var( --paragraph-line-height-big);
        }
    }
}
</style>