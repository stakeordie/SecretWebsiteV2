<template>
  <CardWrapper :url="data.url" externalLink class="content-card">
    <div class="content-card__header">
      <ResponsiveImage v-if="data.picture" :src="data.picture" />
      <div class="tags" v-if="data.types.length">
        <span v-for="(category, id) in data.types" :key="id">
          {{ formatCategory(category.name) }}
        </span>
      </div>
    </div>
    <div class="content-card__body">
      <h4>{{ data.title }}</h4>
      <p v-if="data.description">{{ data.description }}</p>
    </div>
  </CardWrapper>
</template>

<script>
import CardWrapper from "@/components/dynamic/cards/CardWrapper.vue";

export default {
  components: { CardWrapper },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatCategory(category = "") {
      return category.includes("_") ? category.replace("_", " ") : category;
    }
  }
};
</script>

<style lang="scss" scoped>
.content-card {
  display: flex;
  flex-direction: column;
  background-color: var(--theme-card-bg-default);
  transition: 0.2s ease;
  border-radius: 10px;
  padding: var(--f-gutter);
  gap: var(--f-gutter);

  &:hover {
    background-color: var(--color-neutral-dark-mode-04);

    .tags span {
      border: 1px solid var(--color-neutral-dark-mode-02);
    }
  }

  &:is(a) {
    cursor: pointer;
  }

  * {
    margin: 0;
  }

  &__header {
    display: grid;
    grid-template-columns: 64px 1fr;
    align-items: start;
    gap: 4px;

    ::v-deep {
      .responsive-image {
        border-radius: 10px;
        padding: 0;
        object-fit: contain;
        width: 64px;
        height: 64px;
        background-color: var(--color-neutral-dark-mode-04);
        overflow: hidden;

        img {
          object-fit: cover;
          aspect-ratio: 1/1;
        }
      }
    }

    .tags {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      justify-content: flex-end;

      span {
        height: 30px;
        line-height: 16px;
        font-size: 14px;
        text-transform: capitalize;
        border-radius: 20px;
        padding: 7px 8px;
        border: 1px solid var(--color-neutral-dark-mode-04);
        color: var(--theme-card-text-color);
        transition: 0.3s ease;
      }
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
      color: #ffffff;
    }
  }
}
</style>
