<template>
  <div class="learn-article-image">
    <img :src="imgUrl" :alt="imgTitle" class="learn-post__img" />
    <figcaption class="img-caption">
      {{imgCaption}}
    </figcaption>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      imgUrl: "img/learn-cover.jpg",
      imgTitle: "Image title",
      imgCaption: "Cillum non aliquip ad esse dolore quis pariatur. Esse velit dolor eu aute. Cillum non aliquip ad esse dolore quis pariatur. Esse velit dolor eu aute.",
    }
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-image{
    display: grid;
    gap: 16px;

    padding: var(--f-gutter);

}
</style>