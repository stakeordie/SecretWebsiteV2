<template>
  <div class="developer-resource-card">
    <a :href="cardInfo.url" class="developer-resource-card__box__card">
      <img :src="cardInfo.imageUrl" :alt="cardInfo.title" loading="lazy" />
      <div class="developer-resource-card__box__card__content">
        <h6>{{ cardInfo.title }}</h6>
        <p>{{ cardInfo.description }}</p>
        <btn class="link-arrow" :url="cardInfo.url">{{
          cardInfo.urlTitle
        }}</btn>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.developer-resource-card {
  &__box {
    &__card {
      display: grid;
      grid-template-columns: 24px 1fr;
      grid-gap: 10px;
      border-radius: 10px;
      padding: var(--f-gutter);

      &:hover {
        background: var(--color-neutral-dark-mode-04);
      }

      &__content {
        h6 {
          font-size: var(--f-h6-text-size);
          font-family: var(--f-default-headers-font);
          color: white;
          margin-bottom:4px;
        }
        p {
          margin: 0px;
          font-size: var(--f-default-text-size);
        }
        .link-arrow {
          padding: 15px;
          margin-top: 0%;
        }
      }
    }
  }
}
</style>
