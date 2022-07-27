<template>
  <div class="learn-article-hero">
     
          <img src="../../assets/blog-cover.jpg" alt="" class="learn-post__img" />

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-hero{
    padding: 0 42px;

    @include respond-to("<=s"){
      padding: 0 0;
    }
}
</style>