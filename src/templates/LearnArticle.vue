<template>
  <default-layout class="learn-article">
    <!-- Breadcrumb -->
    <column>
      <block>
        <dynamic-breadcrumb :route="$context.route" />
      </block>
    </column>
    <!-- Hero -->
    <column class="bg-black-gradient learn-article__content learn-hero">
      <block>
        <component
          v-if="heroComponent.comp_name === 'article-hero'"
          v-bind="heroComponent"
          :is="heroComponent.comp_name"
        >
          {{ heroComponent.content ? heroComponent.content : "" }}
        </component>
      </block>
    </column>

    <!-- Main content -->
    <column
      class="bg-black-gradient learn-article__content"
      :class="{ 'empty-nav': !anchorList.length }"
    >
      <block>
        <nav-menu :data="anchorList"></nav-menu>
        <div>
          <template v-for="(component, index) in contentComponents">
            <component
              :is="component.comp_name"
              :key="index"
              v-bind="component"
            >
              {{ component.content ? component.content : "" }}
            </component>
          </template>
        </div>
      </block>
    </column>
    <!-- Carousel -->
    <column
      mode="full"
      class="bg-black-gradient learn-article__content horizontal-slider learn-carousel"
    >
      <block>
        <component :is="carouselComponent.comp_name" v-bind="carouselComponent">
          {{ carouselComponent.content ? carouselComponent.content : "" }}
        </component>
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
import { learnPortalMetaData, metaDataArray } from "../utils";

export default {
  data() {
    return {
      anchorList: [],
    };
  },
  components: {
    NavMenu,
  },
  metaInfo() {
    return {
      title: this.getMetaData.title,
      meta: metaDataArray(this.getMetaData),
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
    heroComponent() {
      return this.$context.components.find(
        (item) => item.comp_name === "article-hero"
      );
    },
    carouselComponent() {
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
      return learnPortalMetaData(this.$page, this.$context);
    },
  },
  mounted() {
    this.getAnchors();
  },
  watch: {
    $route() {
      setTimeout(() => this.getAnchors(), 500);
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

    .article-hero {
      .learn-post__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @include respond-to("<=s") {
        padding: 0 0;
      }
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
