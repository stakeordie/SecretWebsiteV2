<template>
  <default-layout class="learn-article">
    <!-- Hero -->
    <component v-if="hero" :is="hero.comp_name" v-bind="hero" />

    <!-- Main content -->
    <column
      class="bg-black-gradient learn-article__content"
      :class="{ 'empty-nav': !anchorList.length }"
    >
      <block>
        <nav-menu v-if="anchorList.length" :data="anchorList" />
        <div>
          <component
            v-for="(component, index) in contentComponents"
            :is="component.comp_name"
            :key="index"
            v-bind="component"
          >
            {{ component.content ? component.content : "" }}
          </component>
        </div>
      </block>
    </column>
    <!-- Carousel -->
    <column
      mode="full"
      class="bg-black-gradient learn-article__content horizontal-slider learn-carousel"
      v-if="carousel"
    >
      <block>
        <carousel
          :title="carousel.title"
          :subtitle="carousel.subtitle"
          :card_image="carousel.card_image"
          :searchDataset="carousel.searchDataset"
          :dynamic_learn_article_group="carousel.dynamic_learn_article_group"
        />
      </block>
    </column>
    <!-- Swirl bottom -->
    <column class="orange__swirl__bottom" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="../../src/assets/swirl-orange-bottom.svg"
        />
      </block>
    </column>
  </default-layout>
</template>

<script>
import NavMenu from "../components/dynamic/NavMenu.vue";
import Carousel from "../components/dynamic/Carousel.vue";
//heros
import DoubleColumnImage from "../components/dynamic/heros/DoubleColumnImage.vue";
import BasicHero from "../components/dynamic/heros/BasicHero.vue";
import {
  addScrollSmooth,
  pageMetaData,
  metaDataArray,
  canonicalTag,
} from "../utils";

export default {
  data() {
    return {
      anchorList: [],
    };
  },
  components: {
    NavMenu,
    Carousel,
    DoubleColumnImage,
    BasicHero,
  },
  metaInfo() {
    return {
      title: this.getMetaData.title,
      meta: metaDataArray(this.getMetaData),
      link: canonicalTag(this.getMetaData),
    };
  },
  methods: {
    getAnchors() {
      this.anchorList = [];
      if (typeof window === "undefined") return;
      const anchors = document.querySelectorAll('[isAnchor="true"]');
      let lastFirstLevelId = null;
      let lastSecondLevelId = null;
      const navLevels = {
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5,
        sixth: 6,
      };

      if (!anchors.length) return;

      anchors.forEach((elem, index) => {
        const { id, attributes } = elem;
        const titleElem = elem.querySelector("#main_title");
        const data = {
          navLevel: Number(navLevels[attributes.navLevel.value]),
          title: titleElem ? titleElem.textContent : "",
          id: id,
          parentId: "",
          nested: [],
          isOpen: true,
        };

        if (data.navLevel === navLevels.first || index === 0) {
          lastFirstLevelId = id;
          this.anchorList.push(data);
        } else if (data.navLevel === navLevels.second) {
          lastSecondLevelId = id;
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
  },
  computed: {
    carousel() {
      return this.$context.components.find(
        (item) => item.comp_name === "carousel"
      );
    },
    contentComponents() {
      return this.$context.components.filter(
        (item) =>
          item.comp_name !== "carousel" && item.comp_name !== "article-hero"
      );
    },
    getMetaData() {
      return pageMetaData(this.$page, this.$context.route);
    },
    hero() {
      return this.$context.heroComponent;
    },
  },
  mounted() {
    this.getAnchors();
  },
  watch: {
    $route: {
      handler(to, from) {
        addScrollSmooth(to);
        setTimeout(() => this.getAnchors(), 500);
      },
      immediate: true,
    },
  },
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
  $padding-sizes: ("none", "small", "medium", "large");
  --p-none: 0px;
  --p-small: 26px;
  --p-medium: 64px;
  --p-large: 96px;

  .comp-name {
    &__dynamic-breadcrumb {
      .content {
        height: 0;

        .box {
          height: 0;

          .dynamic-breadcrumb {
            position: absolute;
          }
        }
      }
    }

    &__carousel {
      padding-top: 100px;
      padding-bottom: 64px;
    }
  }

  &__content {
    &:not(.learn-hero):not(.learn-carousel) {
      .content {
        .box {
          display: grid;
          grid-template-columns: 272px 1fr;
          gap: 42px;
          @include respond-to("<=m") {
            grid-template-columns: 1fr;
          }
        }
      }

      &.empty-nav {
        .content {
          .box {
            grid-template-columns: 1fr;
          }
        }
      }
    }

    ul {
      list-style: inherit;
    }

    .mover {
      display: none;
    }
  }

  .mover {
    &:not(:nth-child(1)) {
      display: none;
    }
  }

  & .swirl-wrapper-bottom {
    display: none;
  }

  & .simple-footer {
    margin-top: 0;
  }

  .swirl.top.v2 {
    display: none;
  }

  main.--flare-page {
    padding-top: 0;
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
  }
}
</style>
