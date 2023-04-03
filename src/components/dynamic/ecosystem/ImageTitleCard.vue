<template>
  <CardWrapper
    :url="data.url"
    externalLink
    class="image-title-card"
    :class="{ 'is-column': column }"
  >
    <ResponsiveImage v-if="data.picture" :src="data.picture" />
    <h4 class="title">{{ data.title }}</h4>
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
    },
    column: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.image-title-card {
  display: grid;
  grid-template-columns: 64px 1fr;
  background-color: var(--theme-card-bg-default);
  transition: 0.2s ease;
  border-radius: 10px;
  padding: var(--f-gutter);
  gap: var(--f-gutter);
  align-items: center;

  &:hover {
    background-color: var(--color-neutral-dark-mode-04);
  }

  &:is(a) {
    cursor: pointer;
  }

  * {
    margin: 0;
  }

  ::v-deep {
    .responsive-image {
      border-radius: 10px;
      width: 64px;
      height: 64px;
      overflow: hidden;

      img {
        margin: auto;
        object-fit: contain;
        aspect-ratio: 1/1;
      }
    }
  }

  .title {
    color: #ffffff;
  }

  &.is-column {
    grid-template-columns: 1fr;
    justify-items: center;

    ::v-deep {
      .responsive-image {
        width: 150px;
        height: 150px;
        display: flex;
        background-color: transparent;

        img {
          object-fit: scale-down;
        }
      }
    }
  }
}
</style>
