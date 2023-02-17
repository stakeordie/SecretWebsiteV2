<template>
  <div>
    <div
      class="carousel-group-helper"
      v-for="(carouselObject, index) in carousels"
      :key="index"
    >
      <Carousel v-bind="carouselObject"></Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
export default {
  props: {
    carousels: Array,
  },
  components: {
    Carousel,
  },
};
</script>
