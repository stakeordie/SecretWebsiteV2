<template>
  <Column class="swirl-wrapper swirl-v1 swirl-v2">
    <Block>
      <div class="swirl top v2">
        <ThemedImage>
          <img
            v-if="swirlSpecial"
            dark-colored
            light-colored
            class="special-mod"
            src="/img/icons/swirl-about-top.svg"
            alt="Swirl colors top graphic"
            width="100"
            height="100"
            loading="lazy"
          />
          <img
            v-if="!swirlSpecial"
            dark-colored
            light-colored
            src="/img/icons/swirl-about-top.svg"
            alt="Swirl colors top graphic"
            width="100"
            height="100"
            loading="lazy"
          />
          <img
            dark
            src="/img/icons/swirl-about-top.svg"
            alt="Swirl colors top graphic"
            width="100"
            height="100"
            loading="lazy"
          />
        </ThemedImage>
      </div>
    </Block>
  </Column>
</template>

<script>
import ThemedImage from "@/components/content/ThemedImage.vue";

export default {
  components: { ThemedImage },
  props: {
    swirlSpecial: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.swirl-wrapper {
  height: var(--f-header-height);
}
.swirl {
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 148px !important;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    overflow: hidden;
    object-fit: contain;
    object-position: bottom;
  }

  &.top {
    left: 0;
    top: 68px;

    &.v2 {
      height: 148px;
    }

    img {
      &.special-mod {
        height: 148px;
        object-fit: fill;
        object-position: center bottom;
      }
    }
  }
}
</style>
