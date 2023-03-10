<template>
  <column class="ecosystem-funding-page">
    <!-- Tools -->
    <column class="spacer-s">
      <block>
        <ecosystem-funding-hero> </ecosystem-funding-hero>
      </block>
    </column>

    <column class="spacer-s">
      <block>
        <ecosystem-funding-why-build> </ecosystem-funding-why-build>
      </block>
    </column>

    <column class="spacer-s">
      <ecosystem-funding-app-verticals> </ecosystem-funding-app-verticals>
    </column>

    <column class="spacer-s">
      <ecosystem-funding-contributors> </ecosystem-funding-contributors>
    </column>

    <column class="spacer-s">
      <block>
        <ecosystem-funding-slider></ecosystem-funding-slider>
      </block>
    </column>

    <column class="spacer-s page-ecosystem__apply">
      <ecosystem-funding-apply> </ecosystem-funding-apply>
    </column>

    <column class="spacer-s ">
      <ecosystem-funding-grant> </ecosystem-funding-grant>
    </column>

    <column class="spacer-s">
      <block>
        <ecosystem-funding-ctas> </ecosystem-funding-ctas>
      </block>
    </column>
  </column>
</template>

<script>
import EcosystemFundingApply from "@/components/page/Ecosystem/Funding/EcosystemFundingApply.vue";
import EcosystemFundingAppVerticals from "@/components/page/Ecosystem/Funding/EcosystemFundingAppVerticals.vue";
import EcosystemFundingContributors from "@/components/page/Ecosystem/Funding/EcosystemFundingContributors.vue";
import EcosystemFundingCtas from "@/components/page/Ecosystem/Funding/EcosystemFundingCtas.vue";
import EcosystemFundingGrant from "@/components/page/Ecosystem/Funding/EcosystemFundingGrant.vue";
import EcosystemFundingHero from "@/components/page/Ecosystem/Funding/EcosystemFundingHero.vue";
import EcosystemFundingSlider from "@/components/page/Ecosystem/Funding/EcosystemFundingSlider.vue";
import EcosystemFundingWhyBuild from "@/components/content/EcosystemFundingWhyBuild.vue";

export default {
  components: {
    EcosystemFundingApply,
    EcosystemFundingAppVerticals,
    EcosystemFundingContributors,
    EcosystemFundingCtas,
    EcosystemFundingGrant,
    EcosystemFundingHero,
    EcosystemFundingSlider,
    EcosystemFundingWhyBuild
  }
};
</script>
