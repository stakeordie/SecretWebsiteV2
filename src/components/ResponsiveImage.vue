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
import { uppercaseAllFirstLetter, replaceWithSpace } from "@/utils";

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
    altName() {
      const name = replaceWithSpace(this.src.name.split(".")[0]);
      return uppercaseAllFirstLetter(name);
    },
    allImages() {
      const { ext, url, formats } = this.src;
      const isSvg = ext === ".svg";

      if (isSvg || !formats) {
        return [{ url, media: "" }];
      }

      const imageSpecs = [
        { size: "thumbnail", media: "(max-width: 350px)" },
        { size: "small", media: "(max-width: 768px)" },
        { size: "medium", media: "(max-width: 1199px)" }
      ];

      const images = imageSpecs
        .map(spec => {
          const format = formats[spec.size];
          return format ? { url: format.url, media: spec.media } : null;
        })
        .filter(Boolean);

      images.push({ url: formats.large ? formats.large.url : url, media: "" });
      return images;
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
