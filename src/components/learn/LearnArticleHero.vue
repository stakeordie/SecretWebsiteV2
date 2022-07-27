<template>
  <div class="learn-article-hero">
    <img :src="featuredImgUrl" :alt="articleTitle" class="learn-post__img" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      featuredImgUrl: "img/learn-cover.jpg",
      articleTitle: "Article title"
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-hero {
  padding: 42px;

  @include respond-to("<=s") {
    padding: 0 0;
  }
}
</style>
