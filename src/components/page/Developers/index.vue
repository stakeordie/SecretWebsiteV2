<template>
  <Column mode="full" class="developers-page">
    <Column class="page-developers__hero-container">
      <Block>
        <DevelopersHero />
      </Block>
    </Column>

    <Column>
      <Block>
        <DevelopersFeatures />
      </Block>
    </Column>

    <Column mode="full">
      <Block>
        <DevelopersUniversity />
      </Block>
    </Column>

    <Column>
      <Block>
        <DevelopersStartHere />
      </Block>
    </Column>

    <Column>
      <Block>
        <DevelopersPathway pathId="1" />
        <DevelopersPathway pathId="2" />
        <DevelopersPathway pathId="3" />
      </Block>
    </Column>

    <Column>
      <Block>
        <Developers-help-new-devs />
      </Block>
    </Column>

    <Column>
      <Block>
        <Developers-card-resources />
      </Block>
    </Column>

    <Column>
      <Block>
        <Developers-advanced />
      </Block>
    </Column>
    
    <Column>
      <Block>
        <Developers-pass />
      </Block>
    </Column>

    <Column>
      <Block>
        <Developers-funding />
      </Block>
    </Column>

    <Column class="page-developers__dev-questions">
      <Block>
        <Developers-questions />
      </Block>
    </Column>

    <!-- Controlls  -->
    <Column number="2" class="page-developers__horizontal-scroll">
      <Block>
        <h3>Cool stuff others built (on Secret)</h3>
      </Block>
      <Block class="justify-right">
        <ScrollHorizontal sliderId="cool-stuff"/>
      </Block>
    </Column>

    <!-- Horizontal Scroll -->
    <Column
      class="page-developers__cool-stuff spacer-s horizontal-slider-cool-stuff"
      mode="full"
    >
      <Block>
        <Developers-cool-stuff />
      </Block>
    </Column>

    <!-- General CTAs -->
    <Column class="spacer-s" number="2" number-m="2" number-s="1">
      <Block>
        <GeneralCtas id="get-started" />
      </Block>
      <Block>
        <GeneralCtas id="join-the-community" />
      </Block>
    </Column>

    <!-- swirl -->
    <Column class="developers__swirl__bottom" mode="full">
      <Block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-dev-blue-bottom.svg"
          alt="Blue swirl bottom graphic"
          loading="lazy"
        />
      </Block>
    </Column>
  </Column>
</template>

<script>
import DevelopersHero from "@/components/page/Developers/DevelopersHero.vue";
import DevelopersFeatures from "@/components/page/Developers/DevelopersFeatures.vue";
import DevelopersStartHere from "@/components/page/Developers/DevelopersStartHere.vue";
import DevelopersPathway from "@/components/page/Developers/DevelopersPathway.vue";
import DevelopersHelpNewDevs from "@/components/page/Developers/DevelopersHelpNewDevs.vue";
import DevelopersCardResources from "@/components/page/Developers/DevelopersCardResources.vue";
import DevelopersAdvanced from "@/components/page/Developers/DevelopersAdvanced.vue";
import DevelopersQuestions from "@/components/page/Developers/DevelopersQuestions.vue";
import DevelopersFunding from "@/components/page/Developers/DevelopersFunding.vue";
import DevelopersCoolStuff from "@/components/cards/DevelopersCoolStuff.vue";
import DevelopersUniversity from "@/components/page/Developers/DevelopersUniversity.vue";
import DevelopersPass from "@/components/page/Developers/DevelopersPass.vue";
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
    ScrollHorizontal,
    DevelopersPass,
  },
};
</script>

<style lang="scss">
.--flare-page .developers-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
