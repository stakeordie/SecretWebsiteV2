<template>
  <DefaultLayout class="learn-article" :style="pageBackground">
    <Column mode="full" class="learn-article__wrapper">
      <Block>
        <Swirl v-if="topSwirl" :data="topSwirl" align="top" />

        <component v-if="hero" :is="hero.comp_name" v-bind="hero" />

        <Column v-if="hasAnchors" class="learn-article__content">
          <Block>
            <NavMenu :data="anchorList" />
            <div>
              <component
                v-for="(component, index) in contentComponents"
                :is="component.comp_name"
                :key="index"
                v-bind="component"
              />
            </div>
          </Block>
        </Column>

        <template v-else>
          <Column
            v-for="(component, index) in contentComponents"
            :key="index"
            :mode="columnMode(component.comp_name)"
            :style="backgroundColor(component)"
            class="learn-article__content empty-nav"
          >
            <Block>
              <component :is="component.comp_name" v-bind="component" />
            </Block>
          </Column>
        </template>

        <Block v-if="carousel">
          <Carousel v-bind="carousel" />
        </Block>

        <Swirl v-if="bottomSwirl" :data="bottomSwirl" align="bottom" />
      </Block>
    </Column>
  </DefaultLayout>
</template>

<script>
import NavMenu from "@/components/dynamic/basic/NavMenu.vue";
import Carousel from "@/components/dynamic/carousel/Carousel.vue";
//heros
import DoubleColumnImage from "@/components/dynamic/heros/DoubleColumnImage.vue";
import TitleBlock from "@/components/dynamic/heros/TitleBlock.vue";
import BasicHero from "@/components/dynamic/heros/BasicHero.vue";
import FullImageContent from "@/components/dynamic/heros/FullImageContent.vue";
import FullImageButtonsContent from "@/components/dynamic/heros/FullImageButtonsContent.vue";
//content
import TextColumnSingle from "@/components/dynamic/columns/TextColumnSingle.vue";
import TextColumnDouble from "@/components/dynamic/columns/TextColumnDouble.vue";
import TextImageColumnDouble from "@/components/dynamic/columns/TextImageColumnDouble.vue";
import Divider from "@/components/dynamic/basic/Divider.vue";
import ArticleImage from "@/components/dynamic/basic/ArticleImage.vue";
import ArticleVideo from "@/components/dynamic/basic/ArticleVideo.vue";
import CtaButton from "@/components/dynamic/basic/CtaButton.vue";
import ThreeColumnResource from "@/components/dynamic/columns/ThreeColumnResource.vue";
import Grid from "@/components/dynamic/basic/Grid.vue";
import Swirl from "@/components/dynamic/basic/Swirl.vue";
import CustomCarousel from "@/components/dynamic/carousel/CustomCarousel.vue";

import {
  addScrollSmooth,
  pageMetaData,
  metaDataArray,
  canonicalTag,
  removeCharacters
} from "@/utils";

export default {
  components: {
    //Heros
    DoubleColumnImage,
    TitleBlock,
    DoubleColumnImage,
    BasicHero,
    FullImageContent,
    FullImageButtonsContent,
    //Content
    NavMenu,
    Carousel,
    CtaButton,
    TextColumnSingle,
    TextColumnDouble,
    TextImageColumnDouble,
    Divider,
    ArticleImage,
    ArticleVideo,
    ThreeColumnResource,
    Grid,
    Swirl,
    CustomCarousel
  },
  metaInfo() {
    return {
      title: this.getMetaData.title,
      meta: metaDataArray(this.getMetaData),
      link: canonicalTag(this.getMetaData)
    };
  },
  data() {
    return {
      anchorList: []
    };
  },
  methods: {
    getAnchors() {
      this.anchorList = [];
      const anchors = this.contentComponents.filter(item => item.is_anchor);
      let lastFirstLevelId = null;
      let lastSecondLevelId = null;
      const navLevels = {
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5,
        sixth: 6
      };

      if (!anchors.length) return;

      anchors.forEach((elem, index) => {
        const title = elem.paragraph_title || elem.main_title;
        const data = {
          navLevel: Number(navLevels[elem.navigation_level]) || 1,
          title,
          id: title ? removeCharacters(title) : "",
          parentId: "",
          nested: [],
          isOpen: true
        };

        if (data.navLevel === navLevels.first || index === 0) {
          lastFirstLevelId = data.id;
          this.anchorList.push(data);
        } else if (data.navLevel === navLevels.second) {
          lastSecondLevelId = data.id;
          data.parentId = lastFirstLevelId;
          this.insertSecondLevel(data);
        } else if (data.navLevel === navLevels.third) {
          data.parentId = lastSecondLevelId;
          this.insertThirdLevel(data, lastFirstLevelId);
        }
      });
    },
    insertSecondLevel(data) {
      const { parentId } = data;
      const parent = this.anchorList.find(({ id }) => id === parentId);
      parent.nested.push(data);
    },
    insertThirdLevel(data, firstLevelId) {
      const { parentId } = data;
      const parent = this.anchorList.find(({ id }) => id === firstLevelId);
      const child = parent.nested.find(({ id }) => id === parentId);
      child.nested.push(data);
    },
    heroHeight() {
      const header = document.querySelector(".mega-header");
      const alertBar = document.querySelector(".alert-bar");
      const dynamicPage = document.querySelector(".learn-article");
      const headerHeight = alertBar
        ? alertBar.offsetHeight + header.offsetHeight
        : header.offsetHeight;

      dynamicPage.style.setProperty("--sum-heights", `${headerHeight}px`);
      dynamicPage.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
      );
    },
    columnMode(compName) {
      return compName === "custom-carousel" ? "full" : "normal";
    },
    backgroundColor(comp) {
      const excludeComp = ["cta-button"];
      if (excludeComp.includes(comp.comp_name)) return "";

      const defaultColor = "transparent";
      const color =
        comp.component_colors?.background_color || comp.background_color;
      return { backgroundColor: color ? color : defaultColor };
    }
  },
  computed: {
    hasAnchors() {
      return [...this.contentComponents].some(item => item.is_anchor);
    },
    carousel() {
      return this.$context.components.find(
        item => item.comp_name === "carousel"
      );
    },
    contentComponents() {
      return this.$context.components.filter(
        item =>
          item.comp_name !== "carousel" && item.comp_name !== "article-hero"
      );
    },
    getMetaData() {
      return pageMetaData(this.$page, this.$context.route);
    },
    hero() {
      return this.$context.heroComponent;
    },
    topSwirl() {
      return this.$context.swirls?.top_swirl || {};
    },
    bottomSwirl() {
      return this.$context.swirls?.bottom_swirl || {};
    },
    pageBackground() {
      const defaultColor = "var(--theme-bg)";
      const color = this.$context.backgroundColor || defaultColor;
      return {
        "--bg-dynamic-page": color
      };
    }
  },
  mounted() {
    this.getAnchors();
    this.heroHeight();
  },
  watch: {
    $route: {
      handler(to) {
        addScrollSmooth(to);
        setTimeout(() => this.getAnchors(), 500);
      },
      immediate: true
    }
  }
};
</script>

<page-query>
query {
  strapiPages: allStrapiPage {
    edges {
      node {
        name
        title
        route
        og_description
        og_image {
          url
        }
        og_title
        meta_description
        canonical_url
      }
    }
  }
}
</page-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article {
  background-color: var(--bg-dynamic-page);
  $padding-sizes: ("none", "small", "medium", "large");
  --p-none: 0px;
  --p-small: 26px;
  --p-medium: 64px;
  --p-large: 96px;

  &__wrapper > .--flare-block > .content > .box {
    padding: 0;
  }

  &__content {
    .content > .box {
      display: grid;
      gap: 42px;
      grid-template-columns: 1fr;

      @include respond-to(">=l") {
        grid-template-columns: 272px 1fr;
      }
    }

    &.empty-nav {
      .content > .box {
        grid-template-columns: 1fr;
        padding-block: 0;
      }
    }

    ul {
      list-style: inherit;
    }
  }

  .swirl-wrapper-bottom,
  .swirl.top.v2 {
    display: none;
  }

  .simple-footer {
    margin-top: 0;
  }

  main.--flare-page {
    padding-top: 0;
    position: relative;
  }

  @each $name in $padding-sizes {
    .#{$name} {
      &-top {
        padding-top: var(--p-#{$name});
      }
      &-bottom {
        padding-bottom: var(--p-#{$name});
      }
    }
    .m-#{$name} {
      &-top {
        margin-top: var(--p-#{$name});
      }
      &-bottom {
        margin-bottom: var(--p-#{$name});
      }
    }
  }
}
</style>
