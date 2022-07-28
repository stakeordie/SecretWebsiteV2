<template>
  <div class="learn-article-column-double">
      <div class="learn-article-column-double__paragraph">
        <div class="learn-article-column__text">
          <h3 class="learn-article-column__title">{{ first_paragraph_title }}</h3>
          <p class="learn-article-column__paragraph">
            {{ this.first_paragraph }}
          </p>
        </div>
        <div class="learn-article-column__text">
          <h3 class="learn-article-column__title">{{ this.second_paragraph_title }}</h3>
          <p class="learn-article-column__paragraph">
            {{ this.second_paragraph }}
          </p>
        </div>
      </div>
    <!-- ** PARAGRAPH + IMAGE-->

      <!-- <div class="learn-article-column-double__paragraph-img">
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
      </div> -->


      <!-- ** IMAGE + PARAGRAPH -->

      <!-- <div class="learn-article-column-double__paragraph-img">
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
      </div> -->


  </div>
</template>

<script>
export default {
  props: {
    first_paragraph_title: String,
    first_paragraph: String,
    second_paragraph_title: String,
    second_paragraph: String
  }
};
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