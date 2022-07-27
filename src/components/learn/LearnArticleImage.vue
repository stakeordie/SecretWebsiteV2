<template>
  <div class="learn-article-image">
    <img src="../../assets/learn-image.jpg" alt="" class="learn-post__img" />
    <figcaption class="img-caption">
      Caption text caption text caption text caption text caption text caption
      text caption text caption text caption text caption text caption text
      caption text caption text caption text caption text caption text
    </figcaption>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-image{
    display: grid;
    gap: 16px;

    padding: var(--f-gutter);

}
</style>