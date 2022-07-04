<template>
  <section class="learn-featured-tag">

      <div class="learn-card-slider ">
        <learn-card></learn-card>
        <learn-card></learn-card>
        <learn-card></learn-card>
        <learn-card></learn-card>
        <learn-card></learn-card>
        <learn-card></learn-card>
        <learn-card></learn-card>
      </div>
    
    
    <!-- <column number="2" number-s="1" class="learn-featured-tag__header">
      <block class="learn-featured-tag__header-left">
        <h2>Secret Basics</h2>
        <p>New to Secret? Not for long — start with these guides and explainers</p>
      </block>

      <block class="justify-right learn-featured-tag__header-right">
        <scroll-horizontal-v2 tagSlug="dev"></scroll-horizontal-v2>
      </block>
    </column>

    <column class="learn-featured-tag__slider horizontal-slider dev spacer-s" mode="full">
      <block>
        <div class="learn-card-slider ">
              <learn-card></learn-card>
              <learn-card></learn-card>
              <learn-card></learn-card>
              <learn-card></learn-card>
              <learn-card></learn-card>
              <learn-card></learn-card>
          </div>
      </block>
    </column> -->

  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";


.learn-featured-tag{
  width: 100vw;

  



  .learn-card-slider{
            display: flex;
            gap: 26px;

            @include respond-to("<=s"){
                    gap: 18px;
                }
            
            

            padding: 0 var(--f-gutter);

            & .learn-card{
                min-width: 400px;
                @include respond-to("<=s"){
                    min-width: 280px;
                }
            }
        }
}

// .learn-featured-tag{
//   //width: 99vw;

//   & .content{
//     //overflow: visible;

//       }

//     &__header{
//         max-width: 1200px;
//         margin: auto;
//         display: grid;
//         grid-template-columns: 2fr 1fr ;
//         padding: var(--f-gutter);

//         @include respond-to("<=xs"){
//             grid-template-columns: auto ;
//         }

//         &-left{
//             justify-items: baseline;

//             @include respond-to("<=s"){
//               //padding:  var(--f-gutter);
//             }

//             & p{
//                 font-size: var(--paragraph-font-size-big);
//             }
//         }

//         &-right{
            

//             & .content{

//               & .box{
                
//                 & .actions{
//                   justify-self: flex-end;
//                   align-self: center;
//                 }
//               }
//             }
//         }
//     }

//     &__slider{
//         overflow: hidden;

//         @include respond-to("<=m"){
//             padding: 0;
//         }
        
//         .learn-card-slider{
//             display: flex;
//             gap: 26px;
            
//             width: 100vw;

//             padding: 0 var(--f-gutter);

//             & .learn-card{
//                 min-width: 400px;
//                 @include respond-to("<=s"){
//                     min-width: 280px;
//                 }
//             }
//         }
//     }
// }

</style>