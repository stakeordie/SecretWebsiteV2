<template>
  <div :class="['column-resource', paddingTop, paddingBottom]">
    <div class="column-resource__description">
      <DynamicEyebrowTitle
        v-if="eyebrow_title"
        :color="eyebrow_color"
        :title="eyebrow_title"
      />
      <h4 v-if="title">{{ title }}</h4>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
    <div class="column-resource__content">
      <ThreeColumnCard
        v-for="(resource, index) in cta_cards"
        :key="index"
        :data="resource"
      />
    </div>
  </div>
</template>

<script>
import ThreeColumnCard from "../cards/ThreeColumnCard.vue";
import { sizes } from "../../../utils";
import DynamicEyebrowTitle from "../basic/DynamicEyebrowTitle.vue";

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    eyebrow_title: {
      type: String,
      required: false,
    },
    eyebrow_color: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
    cta_cards: {
      type: Array,
      required: false,
    },
    padding_top: {
      type: String,
      required: true,
    },
    padding_bottom: {
      type: String,
      required: true,
    },
  },
  components: {
    ThreeColumnCard,
    DynamicEyebrowTitle,
  },
  computed: {
    paddingTop() {
      const size = sizes[this.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.column-resource {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 0 16px;

  @include respond-to(">=m") {
    padding: 0;
  }

  @include respond-to(">=l") {
    grid-template-columns: 360px 1fr;
    gap: 36px;
  }

  &__description {
    border-bottom: solid 1px var(--color-neutral-dark-mode-04);

    @include respond-to(">=l") {
      border-bottom: none;
      padding: var(--f-gutter-xl) 0;
      padding-right: 28px;
      border-right: solid 1px var(--color-neutral-dark-mode-04);
    }

    p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px 32px;
    align-self: start;

    @include respond-to(">=s") {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
