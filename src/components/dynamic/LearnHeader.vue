<template>
  <div class="learn-header">
    <p class="learn-header__subtitle">{{sub_title}}</p>
    <h1 class="learn-header__title">{{title}}</h1>
    <p class="learn-header__about-text">{{about_text}}</p>
    <img class="learn-header__image" :src="background_image.data.formats.medium.url"/>
  </div>
</template>

<script>
export default {
  props: {
    sub_title: String,
    title: String,
    about_text: String,
    background_image: Object,
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