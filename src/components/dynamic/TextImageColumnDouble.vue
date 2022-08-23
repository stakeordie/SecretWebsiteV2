<template>
  <div class="text-image-column-double "  :class="image_position">
      <div class="text-image-column-double__col-1 ">
        <h3 class="text-image-column-double__title">
          {{ this.paragraph_title }}
        </h3>
        <vue-markdown :source="paragraph" class="text-image-column-double__paragraph">
        </vue-markdown>
        
      </div>
      <div class="text-image-column-double__col-2" >
        <img :src="image.url" alt="">
        <p class="img-caption">{{this.image_description}}</p>
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
  },

};
</script>