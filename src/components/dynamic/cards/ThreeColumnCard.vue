<template>
  <a
    :class="['cta-card', imagePosition]"
    :href="data.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img class="cta-card__img" :src="getImage" alt="Resource icon" />
    <div class="cta-card__details">
      <h6 v-if="data.title">{{ data.title }}</h6>
      <p v-if="data.body">{{ data.body }}</p>
      <btn v-if="data.url" class="link-arrow" :url="data.url">
        {{ data.cta_text }}
      </btn>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getImage() {
      return this.data.image
        ? this.data.image.url
        : require("../../../assets/icon-features-file.svg");
    },
    imagePosition() {
      return this.data.icon_position === "top" ? "image-top" : "image-left";
    },
  },
};
</script>

<style lang="scss" scoped>
.cta-card {
  border-radius: 10px;
  gap: 10px;
  padding: var(--f-gutter);
  margin: 0;
  transition: 0.5s;

  &:hover {
    background: var(--color-neutral-dark-mode-04);
    cursor: pointer;
  }

  &.image-left {
    display: grid;
    grid-template-columns: 24px 1fr;
  }

  &.image-top {
    display: flex;
    flex-direction: column;
  }

  img {
    width: fit-content;
    max-width: 55px;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 4px;

    h6 {
      font-size: var(--f-h5-text-size);
      margin-bottom: 0;
      color: white;
    }

    p {
      margin-bottom: 0;
    }
  }
}
</style>
