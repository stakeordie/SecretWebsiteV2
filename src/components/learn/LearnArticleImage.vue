<template>
  <div class="learn-article-image">
    <img :src="image.url" alt="" class="learn-post__img" />
    <figcaption class="img-caption">
      {{ caption }}
    </figcaption>
  </div>
</template>

<script>
export default {
  props: {
    image: Object,
    caption: String
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-image{
    

    display: grid;
    gap: 16px;

    

    // figcaption {
    //   font-size: 16px;
    //   color: var(--theme-card-text-color);

    //   text-align: center;
    //   max-width: 710px;
    //   margin: auto;
    //   line-height: 24px;

    //   @include respond-to("<=m"){
    //     font-size: 12px;
    //     line-height: 20px;
    //   }
    // }
}
</style>