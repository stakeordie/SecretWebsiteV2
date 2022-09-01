<template>
  <default-layout class="learn-portal">
    <!-- Hero -->
    <column class="learn-portal__hero spacer-s" mode="full">
      <block>
        <learn-portal-hero></learn-portal-hero>
      </block>
    </column>

    <!-- Secret Basics -->
    <column number="2" number-s="1" class="learn-featured-tag__header">
      <block class="learn-featured-tag__header-left">
        <h2>Secret Basics</h2>
        <p>
          New to Secret? Not for long — start with these guides and explainers
        </p>
      </block>

      <block class="justify-right">
        <scroll-horizontal-v2 tagSlug="dev"></scroll-horizontal-v2>
      </block>
    </column>

    <column class="spacer-s horizontal-slider dev" tagSlug="dev" mode="full">
      <block>
        <learn-featured-tag></learn-featured-tag>
      </block>
    </column>

    <!-- Other topics -->
    <column class="learn-portal__center" mode="slim">
      <block>
        <h5 class="learn-portal__eyebrow">EYEBROW TEXT</h5>
        <h2>Other Topics</h2>
      </block>
    </column>

    <column class="learn-portal__topics-l" number="3" number-m="2" number-s="1">
      <block>
        <general-ctas id="secret-network"></general-ctas>
      </block>

      <block>
        <general-ctas id="scrt-token"></general-ctas>
      </block>

      <block>
        <general-ctas id="defi"></general-ctas>
      </block>
    </column>

    <column
      class="learn-portal__topics-l spacer-s"
      number="2"
      number-m="2"
      number-s="1"
    >
      <block>
        <general-ctas id="creative-work"></general-ctas>
      </block>

      <block>
        <general-ctas id="privacy"></general-ctas>
      </block>
    </column>

    <column class="learn-portal__topics-s spacer-s" number="2">
      <block>
        <general-ctas id="secret-defi"></general-ctas>
        <general-ctas id="why-privacy-matters"></general-ctas>
        <general-ctas id="sapp-guides"></general-ctas>
      </block>

      <block>
        <general-ctas id="secret-nfts"></general-ctas>
        <general-ctas id="secret-tech"></general-ctas>
      </block>
    </column>

    <!-- All Topics -->
    <column class="spacer-s">
      <block>
        <learn-filter></learn-filter>
      </block>
    </column>

    <!-- SUPPORT -->
    <column class="spacer-s page-developers__dev-questions">
      <block>
        <get-scrt-questions></get-scrt-questions>
      </block>
    </column>

    <!-- CTAS -->
    <column class="" number="3" number-m="2" number-s="1">
      <block>
        <general-ctas id="get-started"></general-ctas>
      </block>

      <block>
        <general-ctas id="build-on-secret"></general-ctas>
      </block>

      <block>
        <general-ctas id="join-the-community"></general-ctas>
      </block>
    </column>

    <!-- swirl -->
    <column class="learn-portal__green-swirl__bottom">
      <block>
        <img
          class="get-scrt__align-img"
          src="../../src/assets/swirl-orange-bottom.svg"
        />
      </block>
    </column>
  </default-layout>
</template>

<style lang="scss">
.learn-portal {
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
  }
}
</style>
