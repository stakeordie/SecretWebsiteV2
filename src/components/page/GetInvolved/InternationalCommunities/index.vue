<template>
  <column mode="full" class="international-communities-page">
    <!-- swirl -->
    <column class="get-involved__swirl__top" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-yellow-top.svg"
          alt="Yellow swirl top graphic"
          loading="lazy"
        />
      </block>
    </column>

    <!-- Filter-->
    <column class="spacer-s ">
      <block class="international-communities__card-grid">
        <Ecosystem
          collection="Communities"
          padding_bottom="none"
          padding_top="none"
        />
      </block>
    </column>

    <column class="spacer-s" number="2" number-m="1" number-s="1">
      <block>
        <general-ctas id="get-started-with-secret" />
      </block>
      <block>
        <general-ctas id="champion-privacy-on-web3" />
      </block>
    </column>

    <!-- swirl -->
    <column class="get-involved__swirl__bottom">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-yellow-bottom.svg"
          alt="Yellow swirl bottom graphic"
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
.--flare-page
  .international-communities-page
  > .--flare-block
  > .content
  > .box {
  padding: 0;
}
</style>
