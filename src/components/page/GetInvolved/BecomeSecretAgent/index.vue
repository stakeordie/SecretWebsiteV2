<template>
  <column mode="full" class="become-secret-agent-page">
    <column class="get-involved-become-secret-agent__hero">
      <block>
        <secret-agent-hero />
      </block>
    </column>

    <column class="get-involved-become-secret-agent__briefing">
      <block>
        <content-columns contentID="1" />
      </block>
    </column>

    <column class="get-involved-become-secret-agent__mission">
      <block>
        <content-columns contentID="2" />
      </block>
    </column>

    <column class="get-involved-become-secret-agent__rise">
      <block>
        <content-columns contentID="3" />
      </block>
    </column>

    <column class="get-involved-become-secret-agent__access">
      <block>
        <content-columns contentID="4" />
      </block>
    </column>

    <column class="get-involved-become-secret-agent__earn">
      <block>
        <content-columns contentID="5" />
      </block>
    </column>

    <column class=" get-involved-become-secret-agent__join-mission">
      <block>
        <secret-agent-email-form-banner />
      </block>
    </column>

    <column class="get-involved-become-secret-agent__brochure">
      <block>
        <content-switcher />
      </block>
    </column>

    <!-- Swirl bottom -->
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
import ContentColumns from "@/components/content/ContentColumns.vue";
import ContentSwitcher from "@/components/content/ContentSwitcher.vue";
import SecretAgentHero from "@/components/content/SecretAgentHero.vue";
import SecretAgentEmailFormBanner from "@/components/content/SecretAgentEmailFormBanner.vue";
export default {
  components: {
    ContentColumns,
    ContentSwitcher,
    SecretAgentHero,
    SecretAgentEmailFormBanner
  }
};
</script>

<style lang="scss">
.--flare-page .become-secret-agent-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
