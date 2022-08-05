<template>
  <figure class="learn-article-image">
    <img :src="image.url" alt="" class="learn-post__img" />
    <figcaption class="img-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    image: Object,
    caption: String
  }
};
</script>