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
        <div>
          <div v-for="(component, index) in $context.components" :key="index">
            <component
              v-if="component.comp_name === 'article-hero'"
              id="example-content"
              :is="component.comp_name"
              v-bind="component"
            >
              {{ component.content ? component.content : "" }}
            </component>
          </div>
        </div>
      </block>
    </column>

    <!-- Main content -->
    <column
      class="bg-black-gradient learn-article__content"
      :class="{ 'empty-nav': !anchorListFinal.length }"
    >
      <block>
        <nav-menu :data="anchorListFinal"></nav-menu>
        <div>
          <template v-for="(component, index) in $context.components">
            <component
              v-if="
                component.comp_name !== 'carousel' &&
                component.comp_name !== 'article-hero'
              "
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
        <div>
          <div v-for="(component, index) in $context.components" :key="index">
            <component
              v-if="component.comp_name === 'carousel'"
              id="example-content"
              :is="component.comp_name"
              v-bind="component"
            >
              {{ component.content ? component.content : "" }}
            </component>
          </div>
        </div>
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

export default {
  data() {
    return {
      anchorListFinal: [],
    };
  },
  components: {
    NavMenu,
  },
  methods: {
    getAnchors() {
      const anchors = document.querySelectorAll('[isAnchor="true"]');
      let lastSecondLevelId = null;
      let lastThirdLevelId = null;
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
        const title = elem.querySelector("#main_title")
          ? elem.querySelector("#main_title").textContent
          : "";

        const navLevel = Number(navLevels[attributes.navLevel.value]);
        const anchorBefore = anchors[index - 1];
        const anchorBeforeId = anchorBefore ? anchorBefore.id : "";

        const anchorbeforeLevel = anchorBefore
          ? Number(navLevels[anchorBefore.attributes.navLevel.value])
          : 0;

        const isSecondLevel =
          navLevel === navLevels.second &&
          anchorbeforeLevel === navLevels.third;

        const isThirdLevel =
          navLevel === navLevels.third &&
          anchorbeforeLevel === navLevels.second;

        if (isSecondLevel) {
          lastSecondLevelId = anchorBeforeId;
        } else if (isThirdLevel) {
          lastThirdLevelId = anchorBeforeId;
        }

        const idParent =
          navLevel > navLevels.first
            ? index > 0 && navLevel === navLevels.second
              ? lastSecondLevelId
                ? lastSecondLevelId
                : anchorBeforeId
              : lastThirdLevelId
              ? lastThirdLevelId
              : ""
            : "";

        const data = {
          navLevel,
          title,
          id,
          idParent,
          nested: [],
          isOpen: true,
        };

        if (data.navLevel === navLevels.first || index === 0) {
          console.log("one");
          this.anchorListFinal.push(data);
        } else if (data.navLevel === navLevels.second) {
          console.log("two");
          this.insertIntoSecond(data);
        } else if (data.navLevel === navLevels.third) {
          console.log("three");
          this.insertIntoThird(data);
        }
      });
    },
    insertIntoSecond(data) {
      console.log("data 2", data);
      const { idParent } = data;
      const anchorMatch = this.anchorListFinal.find(
        ({ id }) => id === idParent
      );
      anchorMatch.nested.push(data);
    },
    insertIntoThird(data) {
      console.log("data 3", data);
      const { idParent } = data;
      this.anchorListFinal.forEach(({ nested }) => {
        const anchorMatch = nested.find(({ id }) => id === idParent);
        anchorMatch.nested.push(data);
      });
    },
  },
  mounted() {
    this.getAnchors();
    console.log(this.anchorListFinal);
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article {
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
          gap: 26px;
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
}
</style>
