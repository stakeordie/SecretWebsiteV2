<template>
  <div class="learn-header">
    <p>{{sub_title}}</p>
    <p>{{title}}</p>
    <p>{{about_text}}</p>
    <p>{{background_image}}</p>
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