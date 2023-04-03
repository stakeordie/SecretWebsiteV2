<template>
  <column mode="full" class="ecosystem-partners-page">
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
        <Ecosystem
          collection="Partners"
          padding_bottom="none"
          padding_top="small"
        />
      </block>
    </column>

    <column class="spacer-s" number="2" number-m="1" number-s="1">
      <block>
        <general-ctas id="get-started-with-secret" />
      </block>
      <block>
        <general-ctas id="contribute-to-secret" />
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
import Ecosystem from "@/components/dynamic/ecosystem/Ecosystem.vue";

export default {
  components: { Ecosystem }
};
</script>

<style lang="scss">
.--flare-page .ecosystem-partners-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
