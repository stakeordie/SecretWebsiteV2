<template>
  <column mode="full" class="ecosystem-roadmap-page">
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

    <!-- PDF -->
    <column class="ecosystem-roadmap-page__pdf">
      <block>
        <ecosystem-roadmap-pdf />
      </block>
    </column>

    <column class="ecosystem-roadmap-page__your-project">
      <block>
        <ecosystem-roadmap-your-project />
      </block>
    </column>

    <!-- General CTAs -->
    <column class="spacer-s" number="3" number-m="1" number-s="1">
      <block></block>
      <block>
        <general-ctas id="see-whats-been-built" />
      </block>
      <block></block>
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
import EcosystemRoadmapPdf from "@/components/page/Ecosystem/Roadmap/EcosystemRoadmapPdf.vue";
import EcosystemRoadmapYourProject from "@/components/page/Ecosystem/Roadmap/EcosystemRoadmapYourProject.vue";

export default {
  components: { EcosystemRoadmapYourProject, EcosystemRoadmapPdf }
};
</script>

<style lang="scss">
.--flare-page .ecosystem-roadmap-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
