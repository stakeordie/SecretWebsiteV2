<template>
  <picture v-if="src" class="responsive-image" :class="pictureClass">
    <source
      v-for="(img, index) in allImages"
      :key="index"
      :srcset="img.url"
      :media="img.media"
    />
    <img :alt="altName" loading="lazy" :class="imgClass" />
  </picture>
</template>

<script>
import { uppercaseAllFirstLetter, replaceWithSpace } from "../utils";

export default {
  props: {
    src: {
      type: Object,
      required: true
    },
    classes: {
      required: false
    },
    imageClass: {
      required: false
    }
  },
  computed: {
    isSvg() {
      return this.src.ext === ".svg";
    },
    altName() {
      const name = replaceWithSpace(this.src.name.split(".")[0]);
      return uppercaseAllFirstLetter(name);
    },
    allImages() {
      if (this.isSvg) {
        return [{ url: this.src.url, media: "" }];
      }

      const mobile = this.src.formats.medium
        ? this.src.formats.medium
        : this.src.formats.large;
      const tablet = this.src.formats.large
        ? this.src.formats.large
        : this.src.formats.medium;

      return [
        {
          url: mobile.url,
          media: "(max-width: 500px)"
        },
        {
          url: tablet.url,
          media: "(max-width: 1999px)"
        },
        {
          url: this.src.url,
          media: "(min-width: 1200px)"
        }
      ];
    },
    pictureClass() {
      return this.classes ? this.classes : "";
    },
    imgClass() {
      return this.imageClass ? this.imageClass : "";
    }
  }
};
</script>

<style lang="scss">
.responsive-image {
  img {
    width: 100%;
  }
}
</style>
