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
        <card-grid-partners
          header="Partners"
          title="Partners"
          collection="ecosystemPartners"
          :isPaginated="false"
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
import CardGridPartners from "@/components/page/Ecosystem/Partners/CardGridPartners.vue";
export default {
  components: { CardGridPartners }
};
</script>

<style lang="scss">
.--flare-page .ecosystem-partners-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
