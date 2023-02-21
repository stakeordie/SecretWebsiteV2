<template>
  <default-layout class="learn-subpage">
    <column
      v-for="(component, index) in $context.components"
      class="bg-black-gradient learn-subpage__content"
      :class="[`comp-name__${component.comp_name}`]"
      :mode="getColumnMode(component.comp_name)"
      :key="index"
    >
      <block>
        <component :is="component.comp_name" v-bind="component">
          {{ component.content ? component.content : "" }}
        </component>
      </block>
    </column>
    <!-- Swirl bottom -->
    <column class="orange__swirl__bottom" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="../../src/assets/swirl-orange-bottom.svg"
          alt="Orange swirl bottom graphic"
          loading="lazy"
        />
      </block>
    </column>
  </default-layout>
</template>

<script>
import { addScrollSmooth, pageMetaData, metaDataArray, canonicalTag } from "../utils";

export default {
  metaInfo() {
    return {
      title: this.getMetaData.title,
      meta: metaDataArray(this.getMetaData),
      link: canonicalTag(this.getMetaData),
    };
  },
  methods: {
    getColumnMode(compName) {
      return compName === "carousel" || compName === "learn-header"
        ? "full"
        : "normal";
    },
  },
  computed: {
    getMetaData() {
      return pageMetaData(this.$page, this.$context.route);
    },
  },
  watch: {
    $route: {
      handler(to, from) {
        addScrollSmooth(to);
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

.learn-subpage {
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
    &__learn-header {
      .box {
        padding: 0;
      }
    }
    &__carousel {
      overflow: hidden;
      .content {
        .box {
          padding-top: 64px;
          padding-bottom: 64px;
          scrollbar-width: none;
          overflow-x: scroll;
          overflow: auto;
          scroll-behavior: smooth;
          margin: auto;
          &::-webkit-scrollbar {
            display: none;
          }
          .learn-carousel {
            &__header {
              &__description {
                p {
                  font-size: var(--paragraph-font-size-big);
                  line-height: var(--paragraph-line-height-big);
                }
              }
            }
          }
        }
      }
    }
  }
  .learn-header {
    display: grid;
    gap: var(--f-gutter);
    justify-items: center;
    text-align: center;
    height: 572px;
    align-content: center;
    background: #11151a;
    position: relative;
    overflow: hidden;
    * {
      margin: 0;
    }
    &__subtitle {
      font-family: "Hind";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--color-ver2-primary-orange);
      z-index: 1;
    }
    &__title {
      font-family: "montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 54px;
      line-height: 60px;
      z-index: 1;
    }
    &__about-text {
      max-width: 591px;
      z-index: 1;
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
    }
    &__image {
      position: absolute;
      top: 0;
      right: -10%;
      z-index: 0;
      opacity: 0.3;
      height: 110%;
      width: auto;
      @include respond-to("<=s") {
        height: auto;
        width: 100%;
        bottom: 0;
        top: initial;
      }
    }
  }
  & .swirl-wrapper {
    .top {
      opacity: 0;
    }
  }
  & .swirl-wrapper-bottom {
    display: none;
  }
  & .simple-footer {
    margin-top: 0;
  }
  [comp_name~="cta-grid"],
  [comp_name~="card-search"] {
    padding-bottom: 64px;
  }
}
</style>
