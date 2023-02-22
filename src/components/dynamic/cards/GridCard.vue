<template>
  <a
    v-if="data.url"
    :href="data.url"
    :target="data.is_external_link ? '_blank' : ''"
    :rel="data.is_external_link ? 'noopener noreferrer' : ''"
    class="grid-card"
  >
    <div v-if="data.image" class="grid-card__image">
      <ResponsiveImage :src="data.image" />
    </div>
    <div class="grid-card__info" v-if="data.title || data.description">
      <span v-if="data.title" class="grid-card__info__title">
        {{ data.title }}
      </span>
      <span v-if="data.description" class="grid-card__info__description">
        {{ data.description }}
      </span>
    </div>
  </a>
  <article v-else class="grid-card">
    <div v-if="data.image" class="grid-card__image">
      <ResponsiveImage :src="data.image" />
    </div>
    <div class="grid-card__info" v-if="data.title || data.description">
      <span v-if="data.title" class="grid-card__info__title">
        {{ data.title }}
      </span>
      <span v-if="data.description" class="grid-card__info__description">
        {{ data.description }}
      </span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  transition: 0.5s;

  &:is(a):hover {
    background-color: var(--color-neutral-dark-mode-04);
  }

  &__image {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    text-align: center;

    &__title {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      color: var(--color-neutral-dark-mode-06);
    }

    &__description {
      font-family: "Hind";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: var(--color-neutral-dark-mode-05);
    }
  }
}
</style>
