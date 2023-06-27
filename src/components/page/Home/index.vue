<template>
  <column mode="full" class="home-page">
    <!-- Home Hero-->
    <column class="new-home__cover" mode="full">
      <block class="new-home__cover__full-w">
        <new-home-hero />
      </block>
    </column>

    <!-- Logo Carousel -->
    <logo-carousel />

    <column class="spacer-s">
      <block>
        <new-home-contracts />
      </block>
    </column>

    <!-- Controlls  -->
    <column number="2" class="page-developers__horizontal-scroll">
      <block class="new-home__block-header">
        <h4>Apps live on mainnet</h4>
      </block>
      <block class="justify-right">
        <scroll-horizontal sliderId="cool-stuff" />
      </block>
    </column>

    <!-- Horizontal Scroll -->
    <column class="page-developers__cool-stuff horizontal-slider-cool-stuff" mode="full">
      <block>
        <developers-cool-stuff />
      </block>
    </column>

    <column>
      <block style="text-align: center" class="new-home__side-spacer">
        <btn class="no-arrow new-home__slider-btn" url="../ecosystem/dapps">
          Explore the Ecosystem
        </btn>
      </block>
    </column>

    <column class="spacer-s">
      <block>
        <new-home-call-action />
      </block>
    </column>

    <column class="new-home__bg__top">
      <block class="no-padding">
        <new-home-announcement location="top" />
      </block>
    </column>

    <!-- Blog cards -->
    <column class="new-home__bg">
      <block>
        <new-blog-posts class="latest-blog-cards" />
      </block>
    </column>

    <!-- Home featured media -->
    <column class="new-home__bg__bottom space-top new-home__block-header">
      <block>
        <new-media-featured-home-v2 />
      </block>
    </column>

    <!-- Upcoming Events - Controls -->
    <column v-if="showUpcomingEvent" number="2" class="new-home__bg space-top">
      <block>
        <h4>Upcoming Events</h4>
      </block>
      <block class="justify-right">
        <scroll-horizontal sliderId="upcoming-events"/>
      </block>
    </column>

     <!-- Horizontal Scroll -->
    <column 
      v-if="showUpcomingEvent"
      class="new-home__bg__bottom page-developers__upcoming-events horizontal-slider-upcoming-events"
    >
      <block>
        <upcoming-events />
      </block>
    </column>

    <column class="spacer-s">
      <block>
        <new-home-mission />
      </block>
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
  </column>
</template>

<script>
import NewHomeHero from "@/components/page/Home/NewHomeHero.vue";
import NewHomeContracts from "@/components/page/Home/NewHomeContracts.vue";
import NewHomeCallAction from "@/components/page/Home/NewHomeCallAction.vue";
import NewHomeMission from "@/components/page/Home/NewHomeMission.vue";
import NewHomeAnnouncement from "@/components/page/Home/NewHomeAnnouncement.vue";
import NewMediaFeaturedHomeV2 from "@/components/cards/NewMediaFeaturedHomeV2.vue";
import ScrollHorizontal from "@/components/content/ScrollHorizontal.vue";
import DevelopersCoolStuff from "@/components/cards/DevelopersCoolStuff.vue";
import NewBlogPosts from "@/components/blog/NewBlogPosts.vue";
import UpcomingEvents from "@/components/page/Home/UpcomingEvents.vue";

export default {
  components: {
    NewHomeHero,
    NewHomeContracts,
    NewHomeCallAction,
    NewHomeMission,
    NewHomeAnnouncement,
    NewMediaFeaturedHomeV2,
    ScrollHorizontal,
    DevelopersCoolStuff,
    NewBlogPosts,
    UpcomingEvents,
  },
  data: {
    showUpcomingEvent: false,
  }
};
</script>

<style lang="scss">
.--flare-page .home-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
