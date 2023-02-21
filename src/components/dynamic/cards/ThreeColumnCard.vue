<template>
  <a
    :class="['cta-card', imagePosition]"
    :href="data.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      v-if="data.image"
      class="cta-card__img"
      :src="data.image.url"
      alt="Resource icon"
      loading="lazy"
    />
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
    imagePosition() {
      const positions = {
        left: "image-left",
        top: "image-top",
      };
      const hasImage = this.data.image;
      const match = positions[this.data.icon_position];
      return hasImage && match ? match : positions.top;
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

  &.image-top {
    display: flex;
    flex-direction: column;
  }

  &.image-left {
    display: grid;
    grid-template-columns: 24px 1fr;
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
