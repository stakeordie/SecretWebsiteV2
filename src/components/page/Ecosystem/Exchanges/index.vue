<template>
  <column mode="full" class="ecosystem-exchanges-page">
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

    <!-- Explore -->
    <column class="spacer-s ">
      <block>
        <Ecosystem
          collection="Exchanges"
          padding_bottom="none"
          padding_top="small"
        />
      </block>
    </column>

    <column class="spacer-s" number-s="1">
      <block>
        <ecosystem-experiencing-issues />
      </block>
    </column>

    <column class="spacer-s" number-s="1">
      <block>
        <general-ctas id="get-started-with-secret" />
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
import EcosystemExperiencingIssues from "@/components/page/Ecosystem/Exchanges/EcosystemExperiencingIssues.vue";
import Ecosystem from "@/components/dynamic/ecosystem/Ecosystem.vue";

export default {
  components: { EcosystemExperiencingIssues, Ecosystem }
};
</script>

<style lang="scss">
.--flare-page .ecosystem-exchanges-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
