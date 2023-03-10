<template>
  <column mode="full" class="developers-page">
    <column class="page-developers__hero-container">
      <block>
        <developers-hero />
      </block>
    </column>

    <column>
      <block>
        <developers-features />
      </block>
    </column>

    <column mode="full">
      <block>
        <developers-university />
      </block>
    </column>

    <column>
      <block>
        <developers-start-here />
      </block>
    </column>

    <column>
      <block>
        <developers-pathway pathId="1" />
        <developers-pathway pathId="2" />
        <developers-pathway pathId="3" />
      </block>
    </column>

    <column>
      <block>
        <developers-help-new-devs />
      </block>
    </column>

    <column>
      <block>
        <developers-card-resources />
      </block>
    </column>

    <column>
      <block>
        <developers-advanced />
      </block>
    </column>

    <column>
      <block>
        <developers-funding />
      </block>
    </column>

    <column class="page-developers__dev-questions">
      <block>
        <developers-questions />
      </block>
    </column>

    <!-- Controlls  -->
    <column number="2" class="page-developers__horizontal-scroll">
      <block>
        <h3>Cool stuff others built (on Secret)</h3>
      </block>
      <block class="justify-right">
        <scroll-horizontal />
      </block>
    </column>

    <!-- Horizontal Scroll -->
    <column
      class="page-developers__cool-stuff spacer-s horizontal-slider"
      mode="full"
    >
      <block>
        <developers-cool-stuff></developers-cool-stuff>
      </block>
    </column>

    <!-- General CTAs -->
    <column class="spacer-s" number="2" number-m="2" number-s="1">
      <block>
        <general-ctas id="get-started"></general-ctas>
      </block>
      <block>
        <general-ctas id="join-the-community"></general-ctas>
      </block>
    </column>

    <!-- swirl -->
    <column class="developers__swirl__bottom" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-dev-blue-bottom.svg"
          alt="Blue swirl bottom graphic"
          loading="lazy"
        />
      </block>
    </column>
  </column>
</template>

<script>
import DevelopersHero from "@/components/page/Developers/DevelopersHero";
import DevelopersFeatures from "@/components/page/Developers/DevelopersFeatures";
import DevelopersStartHere from "@/components/page/Developers/DevelopersStartHere";
import DevelopersPathway from "@/components/page/Developers/DevelopersPathway";
import DevelopersHelpNewDevs from "@/components/page/Developers/DevelopersHelpNewDevs";
import DevelopersCardResources from "@/components/page/Developers/DevelopersCardResources";
import DevelopersAdvanced from "@/components/page/Developers/DevelopersAdvanced";
import DevelopersQuestions from "@/components/page/Developers/DevelopersQuestions";
import DevelopersFunding from "@/components/page/Developers/DevelopersFunding";
import DevelopersCoolStuff from "@/components/page/Developers/DevelopersCoolStuff";
import DevelopersUniversity from "@/components/page/Developers/DevelopersUniversity";
import ScrollHorizontal from "@/components/content/ScrollHorizontal.vue";

export default {
  components: {
    DevelopersHero,
    DevelopersFeatures,
    DevelopersStartHere,
    DevelopersPathway,
    DevelopersHelpNewDevs,
    DevelopersCardResources,
    DevelopersAdvanced,
    DevelopersQuestions,
    DevelopersFunding,
    DevelopersCoolStuff,
    DevelopersUniversity,
    ScrollHorizontal
  }
};
</script>

<style lang="scss">
.--flare-page .developers-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
