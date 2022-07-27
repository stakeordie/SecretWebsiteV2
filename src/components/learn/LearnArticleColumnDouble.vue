<template>
  <div class="learn-article-column-double">


    <!-- **DOUBLE PARAGRAPH -->

      <div class="learn-article-column-double__paragraph">
        <div class="learn-article-column__text">
          <h3 class="learn-article-column__title">H3 Title</h3>
          <p class="learn-article-column__paragraph">
            Facilisi nunc sapien velit sollicitudin viverra enim nec. Ornare
            blandit interdum quisque sed habitasse augue orci. Volutpat amet ut
            nisi, in mauris sagittis scelerisque quis. Sit sed felis egestas
            mollis risus aliquam vitae, eget adipiscing. At aenean lorem tellus
            arcu id tincidunt. Mattis neque morbi eget eget ultrices sed
            aliquet. Porttitor amet, urna et in venenatis. Tortor metus, non
            pulvinar sit ut.
            <br />
                <br />
                Massa lectus at aliquet mauris habitant elementum purus. Aliquam dui
                diam fermentum libero magna suspendisse sed tristique mi. Praesent ut
                ultricies dignissim mi nunc in sit ac. Aliquet purus posuere ac justo,
                condimentum lorem. Risus sit aenean nisl nibh id dictum. Enim rhoncus
                vehicula vel sodales velit. Enim sit sit non at nulla. Tellus ultrices
                enim elit nulla faucibus. Mi nunc, leo commodo leo rhoncus  placerat.
          </p>
        </div>
        <div class="learn-article-column__text">
          <h3 class="learn-article-column__title">H3 Title</h3>
          <p class="learn-article-column__paragraph">
            Facilisi nunc sapien velit sollicitudin viverra enim nec. Ornare
            blandit interdum quisque sed habitasse augue orci. Volutpat amet ut
            nisi, in mauris sagittis scelerisque quis. Sit sed felis egestas
            mollis risus aliquam vitae, eget adipiscing. At aenean lorem tellus
            arcu id tincidunt. Mattis neque morbi eget eget ultrices sed
            aliquet. Porttitor amet, urna et in venenatis. Tortor metus, non
            pulvinar sit ut.
            <br />
                <br />
                Massa lectus at aliquet mauris habitant elementum purus. Aliquam dui
                diam fermentum libero magna suspendisse sed tristique mi. Praesent ut
                ultricies dignissim mi nunc in sit ac. Aliquet purus posuere ac justo,
                condimentum lorem. Risus sit aenean nisl nibh id dictum. Enim rhoncus
                vehicula vel sodales velit. Enim sit sit non at nulla. Tellus ultrices
                enim elit nulla faucibus. Mi nunc, leo commodo leo rhoncus  placerat.
          </p>
        </div>
      </div>


    <!-- ** PARAGRAPH + IMAGE-->

      <div class="learn-article-column-double__paragraph-img">
        <div class="learn-article-column__text">
          <h3 class="learn-article-column__title">H3 Title</h3>
          <p class="learn-article-column__paragraph">
            Facilisi nunc sapien velit sollicitudin viverra enim nec. Ornare
            blandit interdum quisque sed habitasse augue orci. Volutpat amet ut
            nisi, in mauris sagittis scelerisque quis. Sit sed felis egestas
            mollis risus aliquam vitae, eget adipiscing. At aenean lorem tellus
            arcu id tincidunt. Mattis neque morbi eget eget ultrices sed
            aliquet. Porttitor amet, urna et in venenatis. Tortor metus, non
            pulvinar sit ut.
          </p>
        </div>

        <block class="">
            <learn-article-image> </learn-article-image>
        </block>
      </div>


      <!-- ** IMAGE + PARAGRAPH -->

      <div class="learn-article-column-double__paragraph-img">
        <block class="">
            <learn-article-image> </learn-article-image>
        </block>
        <div class="learn-article-column__text">
          <h3 class="learn-article-column__title">H3 Title</h3>
          <p class="learn-article-column__paragraph">
            Facilisi nunc sapien velit sollicitudin viverra enim nec. Ornare
            blandit interdum quisque sed habitasse augue orci. Volutpat amet ut
            nisi, in mauris sagittis scelerisque quis. Sit sed felis egestas
            mollis risus aliquam vitae, eget adipiscing. At aenean lorem tellus
            arcu id tincidunt. Mattis neque morbi eget eget ultrices sed
            aliquet. Porttitor amet, urna et in venenatis. Tortor metus, non
            pulvinar sit ut.
          </p>
        </div>
      </div>


  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-column-double {
    display: grid;
    gap: 80px;

    &__paragraph,
    &__paragraph-img{
        display: grid;
        gap: 52px;
        grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));

        .learn-article-column__text{
            display: grid;
            gap: 26px;
        }

        & .content {
            width: 100%;

            & .box {
            padding: 0;
            }
        }
    }

    &__paragraph-img{

        @include respond-to("<=s") {
            
            .learn-article-column__text{
                order: 1;
            }
        }
        
        .learn-article-column__text{
            align-self: center;
        }
    }
//   display: grid;
//   gap: 52px;
//   grid-template-columns: repeat(auto-fit, minmax(355px, 1fr));
//   //   padding: var(--f-gutter);

//   //   @include respond-to("<=s") {
//   //     padding: var(--f-gutter);
//   //   }

//   .learn-article-column {
//     // align-self: center;
//     display: grid;
//     gap: 16px;

//     &__text {
//       display: grid;

//       align-content: baseline;
//       // grid-template-rows: 36.5px auto;

//       @include respond-to(">=l") {
//         grid-template-rows: 36.5px auto;
//         gap: 26px;
//       }

//       @include respond-to("<=s") {
//       }
//     }
//   }

//   & .content {
//     width: 100%;

//     & .box {
//       padding: 0;
//     }
//   }
}
</style>