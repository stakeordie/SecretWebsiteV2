<template>
  <div class="text-column-single" :class="widthArticleClass">
    <div class="text-column__text">
      <!-- <h6 style="color:red">navigation_level: {{this.navigation_level}}</h6> -->
        <h3 
          class="text-column__title title__align-center"
          :id="this.paragraph_title ? this.paragraph_title.toLowerCase().replace(/\s+/g, '-') : ''"
          :is-anchor="this.is_anchor"
          :nav_level="this.navigation_level"
        >
          {{ this.paragraph_title }}
        </h3>
        <h4 
          class="text-column__title"
        >
          {{ this.paragraph_subtitle }}
        </h4>
        <vue-markdown :source="paragraph" class="text-column__paragraph">
        </vue-markdown>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paragraph_title: String,
    paragraph_subtitle: String,
    paragraph: String,
    is_anchor: Boolean,
    width: String,
    navigation_level: String,
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