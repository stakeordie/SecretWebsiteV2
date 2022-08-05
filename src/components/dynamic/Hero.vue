<template>
  <div class="hero">
    <img :src="image.url" alt="" class="learn-post__img" />
  </div>
</template>

<script>
export default {
  props: {
    image: Object
  }
}
</script>