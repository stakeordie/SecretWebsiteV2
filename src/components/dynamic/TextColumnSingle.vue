<template>
  <div class="text-column-single" :class="widthArticleClass">
    <div class="text-column__text">
        <h3 class="text-column__title title__align-center">
          {{ this.paragraph_title }}
        </h3>
        <h4 class="text-column__title">
          {{ this.paragraph_subtitle }}
        </h4>
        <p class="text-column__paragraph">
          {{ this.paragraph }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paragraph_title: String,
    paragraph_subtitle: String,
    paragraph: String,
    width: String
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