<template>
  <CardWrapper
    v-if="data.picture"
    :url="data.url"
    externalLink
    class="image-card"
  >
    <ResponsiveImage :src="data.picture" class="image" />
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
  }
};
</script>

<style lang="scss" scoped>
.image-card {
  display: grid;
  place-items: center;
  background-color: var(--theme-card-bg-default);
  transition: 0.2s ease;
  border-radius: 10px;
  padding: var(--f-gutter);

  &:is(a) {
    cursor: pointer;

    &:hover {
      background-color: var(--color-neutral-dark-mode-04);
    }
  }

  .image {
    max-height: 64px;
  }
}
</style>
