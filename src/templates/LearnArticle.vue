<template>
  <default-layout class="learn-article">
    <column class="spacer-s bg-black-gradient learn-article__content">
      <div v-for="component in $context.components">
        <block>
          <component :is="component.comp_name" v-bind="component">
            {{ component.content ? component.content : "" }}
          </component>
        </block>
      </div>
    </column>

    <column number="2" class="page-developers__horizontal-scroll">
      <block class="new-home__block-header">
        <h3>Learn More</h3>
        <p>
          New to Secret? Not for long — start with these guides and explainers
        </p>
      </block>

      <block class="justify-right">
        <scroll-horizontal></scroll-horizontal>
      </block>
    </column>

    <column class="page-developers__cool-stuff horizontal-slider" mode="full">
      <block class="bucket"></block>
    </column>

    <!-- Swirl bottom -->
    <column class="blue__swirl__bottom" mode="full">
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
    setTimeout(() => {
      this.moving();
    }, 1000);
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article {
  &__content {
    ul {
      list-style: inherit;
    }
    .text-column-single {
      max-width: 742px;
      &--narrow {
        max-width: 485px;
      }
      &--standard {
        max-width: 600px;
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
      padding: 0 42px;

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
    .mover {
      display: none;
    }
  }
  .mover {
    &:not(:nth-child(1)) {
      display: none;
    }
  }
  &__carouselItem {
    white-space: nowrap;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;

    &::-webkit-scrollbar {
      display: none;
    }
    .card-element {
      border-radius: var(--f-radius);
      overflow: hidden;
      background: var(--theme-card-bg-default);
      transition: 0.2s ease;
      display: inline-flex;
      text-align: center;
      border-radius: 10px;
      max-width: 400px;
      min-width: 400px;

      margin-right: var(--f-gutter-l);

      white-space: normal;
      justify-content: space-between;
      vertical-align: top;
      position: relative;
      * {
        margin: 0;
      }
      &__overall-link {
        display: grid;
        gap: 10px;
        padding: var(--f-gutter);
      }
      &__header {
        display: grid;
        grid-template-columns: 1fr;
        align-items: start;
        gap: 4px;
      }
      &__title-desc {
        display: grid;
        gap: 8px;
        text-align: left;
        &__header {
          display: grid;
          gap: 0;
          align-content: start;
        }
        .element-grid {
          &-main-tag {
            font-family: "Hind";
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: #fbc998;
            display: flex;
            align-items: center;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          &-title {
            color: white;
          }
        }
      }
      &.hidden {
        display: none;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 206px;
      }
      &:hover {
        background: var(--color-neutral-dark-mode-04);
      }

      * {
        margin: 0;
      }

      h6 {
        color: var(--theme-fg);
      }

      p {
        &.tag {
          text-transform: capitalize;
        }
      }
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
