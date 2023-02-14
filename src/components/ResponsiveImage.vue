<template>
  <picture class="responsive-image" :class="pictureClass">
    <source
      v-for="(img, index) in allImages"
      :key="index"
      :srcset="img.url"
      :media="img.media"
    />
    <img
      :alt="alt ? alt : 'Responsive Image'"
      loading="lazy"
      :class="imgClass"
    />
  </picture>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      required: false,
    },
    classes: {
      required: false,
    },
    imageClass: {
      required: false,
    },
  },
  computed: {
    allImages() {
      const mobile = this.images.formats.medium
        ? this.images.formats.medium
        : this.images.formats.large;
      const tablet = this.images.formats.large
        ? this.images.formats.large
        : this.images.formats.medium;

      return [
        {
          url: mobile.url,
          media: "(max-width: 500px)",
        },
        {
          url: tablet.url,
          media: "(max-width: 1999px)",
        },
        {
          url: this.images.url,
          media: "(min-width: 1200px)",
        },
      ];
    },
    pictureClass() {
      return this.classes ? this.classes : "";
    },
    imgClass() {
      return this.imageClass ? this.imageClass : "";
    },
  },
};
</script>

<style lang="scss">
.responsive-image {
  img {
    width: 100%;
  }
}
</style>
