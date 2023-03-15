<template>
  <column mode="full" class="ecosystem-tools-page">
    <!-- swirl -->
    <column class="ecosystem__green-swirl__top" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-green-top.svg"
          alt="Green swirl top graphic"
          loading="lazy"
        />
      </block>
    </column>

    <!-- Tools -->
    <column class="spacer-s bg-black-gradient">
      <block>
        <card-grid-v3
          header="Tools"
          title="Tools"
          collection="toolsAndWallets"
          :isPaginated="false"
        />
      </block>
    </column>

    <!-- General CTAs -->
    <column class="spacer-s" number="2" number-m="2" number-s="1">
      <block>
        <general-ctas id="get-started" />
      </block>
      <block>
        <general-ctas id="build-on-secret" />
      </block>
    </column>

    <!-- swirl -->
    <column class="ecosystem__green-swirl__bottom" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-green-bottom.svg"
          alt="Green swirl bottom graphic"
          loading="lazy"
        />
      </block>
    </column>
  </column>
</template>

<script>
import CardGridV3 from "@/components/cards/CardGridV3.vue";
export default {
  components: { CardGridV3 }
};
</script>

<style lang="scss">
.--flare-page .ecosystem-tools-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
