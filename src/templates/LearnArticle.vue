<template>
  <default-layout class="learn-article">
    <column>
      <block>
        <dynamic-breadcrumb :route="$context.route" />
      </block>
    </column>
    <column
      class="bg-black-gradient learn-article__content"
      :class="component.comp_name === 'carousel' ? 'horizontal-slider' : ''"
      :mode="component.comp_name === 'carousel' ? 'full' : 'normal'"
      v-for="(component, index) in $context.components"
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
        />
      </block>
    </column>
  </default-layout>
</template>

<script>
export default {
  methods: {
    moving() {
      const newNode = document.querySelector(".mover");
      const parentDiv = document.querySelector(".bucket > .content > .box");

      parentDiv.insertBefore(newNode, parentDiv.firstElementChild);
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.moving();
    // }, 1000);
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
    ul {
      list-style: inherit;
    }
    .text-column-single {
      max-width: 742px;
      &--narrow {
        max-width: 742px;
      }
      &--standard {
        max-width: 742px;
      }
      &--wide {
        max-width: 843px;
      }
      margin: auto;
      padding: var(--f-gutter);
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
      }
    }
    .text-column-double {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(auto-fit, minmax(385px, 1fr));
      @include respond-to("<=m") {
        grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));
      }
      &__col-1,
      &__col-2 {
        padding: var(--f-gutter);
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
      // padding: 0 42px;
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
