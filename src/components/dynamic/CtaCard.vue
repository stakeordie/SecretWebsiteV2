<template>
  <a
    :class="['cta-card', imagesSize]"
    :href="data.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img class="cta-card__img" :src="getImage" alt="Resource icon" />
    <div class="cta-card__details">
      <h6>{{ data.title }}</h6>
      <p>{{ data.body }}</p>
      <btn class="link-arrow" :url="data.url">
        {{ data.cta_text }}
      </btn>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    data: Object,
    iconSize: String,
  },
  computed: {
    getImage() {
      return this.data.image
        ? this.data.image.url
        : require("../../assets/icon-features-file.svg");
    },
    imagesSize() {
      return this.iconSize === "big" ? "big-image" : "small-image";
    },
  },
};
</script>

<style lang="scss" scoped>
.cta-card {
  border-radius: 10px;
  display: grid;
  gap: 10px;
  padding: var(--f-gutter);
  margin: 0;

  &:hover {
    background: var(--color-neutral-dark-mode-04);
    cursor: pointer;
  }

  &__img {
    height: 51px;
    width: 51px;
  }

  &__details {
    display: grid;
    grid-gap: 4px;

    h6 {
      font-size: var(--f-h5-text-size);
      margin-bottom: 0;
      color: white;
    }

    p {
      margin-bottom: 0;
    }
  }

  &.small-image {
    grid-template-columns: 24px 1fr;
  }

  &.big-image {
    grid-template-columns: 1fr;
  }
}
</style>
