<template>
  <div class="learn-article-column-single" :class="widthArticleClass">
    <div class="learn-article-column__text">
        <h3 class="learn-article-column__title title__align-center">
          {{ this.paragraph_title }}
        </h3>
        <h4 class="learn-article-column__title">
          {{ this.paragraph_subtitle }}
        </h4>
        <p class="learn-article-column__paragraph">
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
        'learn-article-column-single--narrow': this.width && this.width === 'narrow',
        'learn-article-column-single--wide': this.width && this.width === 'wide'
      }
    }
  }
};
</script>