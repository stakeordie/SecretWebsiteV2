<template>
  <column mode="full" class="developers-dapps-page">
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

    <column id="dapps" class="spacer-s bg-black-gradient">
      <block>
        <card-grid-v3
          title="Secret DApps"
          header="Secret DApps"
          collection="dApps"
          :isPaginated="false"
        />
      </block>
    </column>

    <column class="cosystem-pages ecosystem-pages__learn-more">
      <block>
        <p>
          Secret dApps are made with Secret Contracts, private smart contracts
          that encrypt data by default, protecting its user’s data and assets.
        </p>
        <btn class="text-center no-bg" url="/developers">Learn more</btn>
      </block>
    </column>

    <column
      number="2"
      number-m="1"
      number-s="1"
      weight="left"
      class="spacer-s bg-dark view-roadmap"
    >
      <block>
        <h3>See what Secrets we have in store</h3>
      </block>
      <block class="view-roadmap-btn">
        <btn class="text-center no-arrow" url="/ecosystem/ecosystem-roadmap">
          View Roadmap
        </btn>
      </block>
    </column>

    <column class="" number="2" number-m="1" number-s="1">
      <block>
        <general-ctas id="get-started-with-secret" />
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
.--flare-page .developers-dapps-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
