<template>
  <column mode="full" class="media-features-page">
    <!-- swirl -->
    <column class="purple__swirl__top" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-purple-top.svg"
          alt="Purple swirl top graphic"
          loading="lazy"
        />
      </block>
    </column>

    <column>
      <block>
        <!-- Hero -->
        <hero-title>
          <h2>Featured Media</h2>
        </hero-title>
      </block>
    </column>

    <column number="2">
      <block>
        <h3>Featured</h3>
      </block>
      <block class="justify-right">
        <scroll-horizontal sliderId="featured-media"/>
      </block>
    </column>

    <!-- All Media -->
    <column 
      class="new-media-featured spacer-s horizontal-slider-featured-media" 
      mode="full"
    >
      <block>
        <new-media-featured />
      </block>
    </column>

    <!-- All Media -->
    <column class="spacer-s">
      <block>
        <new-media />
      </block>
    </column>

    <!-- swirl -->
    <column class="purple__swirl__bottom" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-purple-bottom.svg"
          alt="Purple swirl bottom graphic"
          loading="lazy"
        />
      </block>
    </column>
  </column>
</template>

<script>
import NewMedia from "@/components/cards/NewMedia.vue";
import ScrollHorizontal from "@/components/content/ScrollHorizontal.vue";
import NewMediaFeatured from "@/components/cards/NewMediaFeatured.vue";

export default {
  components: { NewMedia, ScrollHorizontal, NewMediaFeatured }
};
</script>

<style lang="scss">
.--flare-page .media-features-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
