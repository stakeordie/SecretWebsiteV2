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
        <nav class="learn-anchors" v-if="anchorListFinal.length">
          <div
            v-for="(anchor_lvl_1, index) in anchorListFinal"
            :key="index"
            class="learn-anchors__grid"
          >
            <div :class="'lvl--0' + anchor_lvl_1.nav_level" class="anchor">
              <a class="anchor__title" :href="'#' + anchor_lvl_1.id">
                {{ anchor_lvl_1.title }}
              </a>
              <button
                type="button"
                class="anchor__control"
                @click="anchor_lvl_1.isOpen = !anchor_lvl_1.isOpen"
              >
                <img
                  :class="
                    anchor_lvl_1.isOpen
                      ? 'anchor__control--is-open'
                      : 'anchor__control--is-closed'
                  "
                  v-show="anchor_lvl_1.nested !== 0"
                  src="../assets/chev-learn.svg"
                  alt=""
                />
              </button>
            </div>
            <div
              v-show="anchor_lvl_1.isOpen"
              v-for="(anchor_lvl_2, index) in anchor_lvl_1.nested"
              :key="index"
              class="parent-control"
              :class="'parent-' + anchor_lvl_2.idParent"
            >
              <div :class="'lvl--0' + anchor_lvl_2.nav_level" class="anchor">
                <a
                  class="anchor__title"
                  :href="'#' + anchor_lvl_2.id"
                  :class="'anchor__title-0' + anchor_lvl_2.nav_level"
                >
                  {{ anchor_lvl_2.title }}
                </a>
                <button
                  type="button"
                  class="anchor__control"
                  v-on:click="anchor_lvl_2.isOpen = !anchor_lvl_2.isOpen"
                >
                  <img
                    :class="
                      anchor_lvl_2.isOpen
                        ? 'anchor__control--is-open'
                        : 'anchor__control--is-closed'
                    "
                    v-show="anchor_lvl_2.nested.length !== 0"
                    src="../assets/chev-learn.svg"
                    alt=""
                  />
                </button>
              </div>
              <div
                v-show="anchor_lvl_2.isOpen"
                v-for="(anchor_lvl_3, index) in anchor_lvl_2.nested"
                :key="index"
                class="parent-control"
                :class="'parent-' + anchor_lvl_3.idParent"
              >
                <div :class="'lvl--0' + anchor_lvl_3.nav_level" class="anchor">
                  <a
                    class="anchor__title"
                    :href="'#' + anchor_lvl_3.id"
                    :class="'anchor__title-0' + anchor_lvl_3.nav_level"
                  >
                    {{ anchor_lvl_3.title }}
                  </a>
                  <a href="" class="anchor__control"> </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div v-for="(component, index) in $context.components" :key="index">
            <component
              v-if="
                component.comp_name !== 'carousel' &&
                component.comp_name !== 'article-hero'
              "
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
export default {
  data: function () {
    return {
      anchorListFinal: [],
      submenuIsOpen: true,
    };
  },
  methods: {
    getAnchors() {
      const matches = document.querySelectorAll('[is-anchor="true"]');
      const anchors = [...matches];
      const anchorList = [];

      if (!anchors.length) return;

      let lastSecondLevelId = null;
      let lastThirdLevelId = null;

      for (let i = 0; i < anchors.length; i++) {
        const currentAnchor = Number(anchors[i].attributes.nav_level.value);
        const anchorBefore = Number(anchors[i - 1].attributes.nav_level.value);
        const anchorBeforeId = anchors[i - 1].id;

        if (currentAnchor === 2 && anchorBefore === 1) {
          lastSecondLevelId = anchorBeforeId;
        } else if (currentAnchor === 3 && anchorBefore === 2) {
          lastThirdLevelId = anchorBeforeId;
        }

        const idSpecial =
          currentAnchor > 1
            ? i > 0 && currentAnchor === 2
              ? lastSecondLevelId
                ? lastSecondLevelId
                : anchorBeforeId
              : lastThirdLevelId
              ? lastThirdLevelId
              : ""
            : "";

        anchorList.push({
          nav_level: currentAnchor,
          title: anchors[i].innerText,
          id: anchors[i].id,
          idParent: idSpecial,
          nested: [],
          isOpen: true,
        });
      }

      anchorList.forEach((a) => {
        const { nav_level, idParent } = a;

        if (nav_level === 1) {
          this.anchorListFinal.push(a);
        } else if (nav_level === 2) {
          this.anchorListFinal.find(({ id }) => id === idParent).nested.push(a);
        } else if (nav_level === 3) {
          this.anchorListFinal.forEach(({ nested }) => {
            nested.find(({ id }) => id === idParent).nested.push(a);
          });
        }
      });
    },
  },
  mounted() {
    this.getAnchors();
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article {
  .learn-anchors {
    position: sticky;
    top: 150px;
    display: grid;
    gap: 10px;
    align-self: baseline;
    background: #1a2128;
    border-radius: 10px;
    padding: var(--f-gutter);
    @include respond-to("<=m") {
      position: inherit;
    }
    &__grid {
      display: grid;
      gap: 0;
      .parent-control {
        transition: 0.2s ease;
        height: auto;
        max-height: 600px;
        &.hidding {
          opacity: 0;
          max-height: 0px;
        }
        &.erased {
          display: none;
        }
      }
    }
    .anchor {
      display: grid;
      grid-template-columns: 1fr 24px;
      gap: var(--f-gutter-xl);
      min-height: 32px;
      justify-content: space-between;
      &__title {
        font-family: "Hind";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #d1d5db;
        display: flex;
        align-items: center;
        &-02 {
          padding-left: 11px;
          border-left: 2px solid #b2bfcd;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        &-03 {
          margin-left: 22px;
          padding-left: 11px;
          border-left: 2px solid #b2bfcd;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        &:hover {
          color: #ffffff;
        }
        &:focus {
          color: #ffffff;
          font-weight: 700;
        }
      }
      &__control {
        display: flex;
        background: transparent;
        margin: 0;
        padding: 0;
        align-self: center;
        transition: 0.2s ease;
        &--is-open {
          transition: 0.2s ease;
          transform: rotate(0);
        }
        &--is-closed {
          transition: 0.2s ease;
          transform: rotate(180deg);
        }
      }
      &.lvl {
        &--01 {
          padding-left: 0;
        }

        &--02 {
          padding-left: 11px;
        }

        &--03 {
          margin-left: 11px;
          margin-top: 0;
          padding-left: 11px;
          border-left: 2px solid #b2bfcd;
        }
      }
    }
  }

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

    .text-column-single {
      padding: var(--f-gutter) 26px;

      .title__align-center {
        text-align: center;
      }

      p {
        max-width: auto;
        width: 100%;
        line-height: 28px;
        color: var(--color-analog-primary-white);
      }

      h3 {
        max-width: auto;
        width: 100%;
        font-size: 28px;
        line-height: 36.4px;
        padding-top: 6em;
        margin-top: -6em;
      }
    }

    .text-column-double {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(2, 1fr);
      @include respond-to("<=m") {
        grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));
      }

      &__col-1,
      &__col-2 {
        padding: var(--f-gutter) 26px;
      }

      p {
        max-width: auto;
        width: 100%;
        line-height: 28px;
        color: var(--color-analog-primary-white);
      }

      h3 {
        max-width: auto;
        width: 100%;
        font-size: 28px;
        line-height: 36.4px;
      }
    }

    .text-image-column-double {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(auto-fit, minmax(385px, 1fr));

      @include respond-to("<=m") {
        grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
      }

      &.right {
        .text-image-column-double__col-1 {
          order: 1;
        }

        .text-image-column-double__col-2 {
          order: 2;
        }
      }

      &.left {
        .text-image-column-double__col-1 {
          order: 2;
        }

        .text-image-column-double__col-2 {
          order: 1;
        }
      }

      &__col-1,
      &__col-2 {
        padding: var(--f-gutter);
        align-self: center;
      }

      p {
        max-width: auto;
        width: 100%;
        line-height: 28px;
        color: var(--color-analog-primary-white);
      }

      h3 {
        max-width: auto;
        width: 100%;
        font-size: 28px;
        line-height: 36.4px;
      }

      .img-caption {
        font-size: 16px;
        color: var(--theme-card-text-color);
        text-align: center;
        max-width: 710px;
        margin: auto;
        margin-top: 16px;
        line-height: 24px;
      }
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

    .article-image {
      display: grid;
      gap: 16px;
      padding: var(--f-gutter);

      .img-caption {
        font-size: 16px;
        color: var(--theme-card-text-color);

        text-align: center;
        max-width: 710px;
        margin: auto;
        line-height: 24px;

        @include respond-to("<=m") {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }

    .article-video {
      display: grid;
      gap: 16px;
      padding: var(--f-gutter);
      justify-content: center;

      video {
        width: 100%;
        height: auto;
        max-width: 710px;
      }

      .img-caption {
        font-size: 16px;
        color: var(--theme-card-text-color);

        text-align: center;
        max-width: 710px;
        margin: auto;
        line-height: 24px;

        @include respond-to("<=m") {
          font-size: 12px;
          line-height: 20px;
        }
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
