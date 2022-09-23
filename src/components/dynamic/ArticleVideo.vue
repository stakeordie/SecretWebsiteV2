<template>
  <figure class="article-video">
    <video controls width="250">
      <source :src="video.data.url" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <figcaption class="img-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    video: Object,
    caption: String,
  },
};
</script>
