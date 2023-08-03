<template>
  <a :href="url" class="media__featured__card" target="blank">
    <ResponsiveImage :src="pictureSrc" />
    <div class="media__featured__card__body">
      <span>{{ category }}</span>
      <h6>{{ title }}</h6>
    </div>
  </a>
</template>

<script>
import ResponsiveImage from "@/components/content/ResponsiveImage.vue";

export default {
  components: { ResponsiveImage },
  props: {
    url: {
      type: String,
      required: false,
    },
    pictureSrc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.media__featured__card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  background: var(--color-neutral-dark-mode-03);
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
    background: var(--color-neutral-dark-mode-04);
  }

  img {
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    object-fit: cover;
    aspect-ratio: 16 / 9;
  }

  &__body {
    padding: 16px;
    span {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      white-space: normal;
      color:var(--color-neutral-dark-mode-05);
    }

    h6 {
      margin-bottom: 0;
      color: var(--color-analog-primary-white);
      white-space: normal;
    }
  }
}
</style>
