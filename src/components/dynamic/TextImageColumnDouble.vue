<template>
  <div class="text-column-double">
      <div class="text-column-double__col-1">
        <h3 class="text-column-double__title">
          {{ this.paragraph_title }}
        </h3>
        <vue-markdown :source="paragraph" class="text-column-double__paragraph">
        </vue-markdown>
      </div>
      <div class="text-column-double__col-2">
        <img :src="image.url" alt="">
        <p>{{this.image_position}}</p>
        <p>{{this.image_description}}</p>
      </div>
  </div>
</template>


<script>
export default {
  props: {
    paragraph_title: String,
    paragraph: String,
    image: Object,
    image_description: String,
    image_position: String,
  }
};
</script>