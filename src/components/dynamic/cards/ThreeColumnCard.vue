<template>
  <a
    :class="['cta-card', imagePosition]"
    :href="data.url"
    :target="data.is_external_link ? 'is_blank' : '_self'"
    :rel="data.is_external_link ? 'noopener noreferrer' : ''"
  >
    <ResponsiveImage
      v-if="data.image"
      classes="cta-card__img"
      :src="data.image"
    />
    <div class="cta-card__details">
      <h6 v-if="data.title">{{ data.title }}</h6>
      <p v-if="data.body">{{ data.body }}</p>
      <div v-if="data.url" class="link">
        <span> {{ data.cta_text }}</span>
        <img src="/img/icons/icon-arrow-external-light.svg" alt="Arrow icon" />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    imagePosition() {
      console.log(this.data);
      const positions = {
        left: "image-left",
        top: "image-top"
      };
      const hasImage = this.data.image;
      const match = positions[this.data.icon_position];
      return hasImage && match ? match : positions.top;
    }
  }
};
</script>

<style lang="scss">
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

  &__img {
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

    .link {
      display: flex;
      padding: var(--f-gutter-s) 0;
      gap: 8px;
      align-items: center;
      line-height: normal;

      span {
        transform: translateY(1px);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
