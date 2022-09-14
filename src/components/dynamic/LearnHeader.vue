<template>
  <div class="learn-header">
    <p class="learn-header__subtitle">{{eyebrow_text}}</p>
    <h1 class="learn-header__title">{{title}}</h1>
    <p class="learn-header__about-text">{{subtitle}}</p>
    <img v-if="background_image.data.url" class="learn-header__image" :src="background_image.data.url"/>
  </div>
</template>

<script>
export default {
  props: {
    eyebrow_text: String,
    title: String,
    subtitle: String,
    background_image: Object
  },
  computed: {
    widthArticleClass()  {
      return {
        'text-column-single--narrow': this.width && this.width === 'narrow',
        'text-column-single--standard': this.width && this.width === 'standard',
        'text-column-single--wide': this.width && this.width === 'wide'
      }
    }
  }
};
</script>