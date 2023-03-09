<template>
  <column mode="full" class="developers-grants-page">
    <column class="blue__swirl__top" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-blue-top.svg"
          alt="Blue swirl top graphic"
          loading="lazy"
        />
      </block>
    </column>

    <!-- Tools -->
    <column class="spacer-s">
      <block>
        <grants-hero />
      </block>
    </column>

    <column class="spacer-s">
      <block>
        <ecosystem-funding-why-build />
      </block>
    </column>

    <column class="spacer-s">
      <grants-build />
    </column>

    <!-- General CTAs -->
    <column class="spacer-s" number="3" number-m="2" number-s="1">
      <block>
        <general-ctas id="get-started" />
      </block>
      <block>
        <general-ctas id="build-on-secret" />
      </block>
      <block>
        <general-ctas id="join-the-community" />
      </block>
    </column>

    <column class="blue__swirl__bottom" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-blue-bottom.svg"
          alt="Blue swirl bottom graphic"
          loading="lazy"
        />
      </block>
    </column>
  </column>
</template>

<script>
import EcosystemFundingWhyBuild from "@/components/page/Ecosystem/Funding/EcosystemFundingWhyBuild.vue";
import GrantsBuild from "@/components/page/Developers/Grants/GrantsBuild.vue";
import GrantsHero from "@/components/page/Developers/Grants/GrantsHero.vue";

export default {
  components: {
    GrantsBuild,
    GrantsHero,
    EcosystemFundingWhyBuild
  }
};
</script>
