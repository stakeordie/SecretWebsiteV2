<template>
  <Column
    v-if="swirlBottomIsVisible"
    class="swirl-wrapper-bottom swirl-v1 swirl-v2"
  >
    <Block>
      <div class="swirl bottom v2">
        <ThemedImage>
          <img
            v-if="swirlSpecial"
            dark-colored
            light-colored
            src="@/assets/swirl-about-top.svg"
            alt="swirl"
            width="100"
            height="100"
            loading="lazy"
          />
          <img
            v-if="!swirlSpecial"
            dark-colored
            light-colored
            src="@/assets/swirl-about-top.svg"
            alt="swirl"
            width="100"
            height="100"
            loading="lazy"
          />
          <img
            dark
            src="@/assets/swirl-about-top.svg"
            alt="swirl"
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
export default {
  props: {
    swirlSpecial: {
      type: Boolean,
      required: true
    },
    swirlBottomIsVisible: {
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

  &.bottom {
    left: 0;
    bottom: -300px;

    &.v2 {
      height: 148px;
      bottom: -196px;
    }

    @include respond-to("<=s") {
      bottom: -300px;
    }

    img {
      transform: rotate(180deg);
      bottom: 0;

      &.special-mod {
        height: 274px;
        object-fit: fill;
        object-position: center bottom;
        transform: rotate(0);
      }
    }
  }
}
</style>
