<template>
  <div v-if="title || links.length" class="dynamic-footer">
    <span v-if="title" class="text">Follow us</span>
    <div v-if="links.length" class="links">
      <CardWrapper
        v-for="(item, index) in links"
        :key="index"
        :url="item.url"
        :externalLink="item.is_external_link"
      >
        <ResponsiveImage :src="item.image" />
      </CardWrapper>
    </div>
  </div>
</template>

<script>
import CardWrapper from "@/components/dynamic/cards/CardWrapper.vue";

export default {
  components: { CardWrapper },
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    links: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.dynamic-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 26px;
  align-items: center;

  @include respond-to(">=s") {
    align-items: flex-start;
  }

  .text {
    color: var(--color-neutral-dark-mode-05);
    font-family: "Hind";
    line-height: 24px;
    font-size: 16px;
  }

  .links {
    display: flex;
    gap: 10px;

    a {
      ::v-deep {
        img {
          height: 24px;
          opacity: 0.75;
        }
      }
    }
  }
}
</style>
