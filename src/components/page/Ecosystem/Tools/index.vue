<template>
  <Column mode="full" class="ecosystem-tools-page">
    <!-- swirl -->
    <Column class="ecosystem__green-swirl__top" mode="full">
      <Block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-green-top.svg"
          alt="Green swirl top graphic"
          loading="lazy"
        />
      </Block>
    </Column>

    <!-- Tools -->
    <Column class="spacer-s bg-black-gradient">
      <Block>
        <Ecosystem
          collection="Tools"
          padding_bottom="none"
          padding_top="small"
        />
      </Block>
    </Column>

    <!-- General CTAs -->
    <Column class="spacer-s" number="2" number-m="2" number-s="1">
      <Block>
        <general-ctas id="get-started" />
      </Block>
      <Block>
        <general-ctas id="build-on-secret" />
      </Block>
    </Column>

    <!-- swirl -->
    <Column class="ecosystem__green-swirl__bottom" mode="full">
      <Block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-green-bottom.svg"
          alt="Green swirl bottom graphic"
          loading="lazy"
        />
      </Block>
    </Column>
  </Column>
</template>

<script>
import Ecosystem from "@/components/dynamic/ecosystem/Ecosystem.vue";

export default {
  components: { Ecosystem }
};
</script>

<style lang="scss">
.--flare-page .ecosystem-tools-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
