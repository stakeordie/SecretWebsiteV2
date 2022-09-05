<template>
  <default-layout class="learn-subpage">
    <dynamic-breadcrumb :route="$context.route" />
    <column
      class="page-developers__cool-stuff horizontal-slider"
      mode="full"
      v-for="(component, index) in $context.components"
      :key="index"
    >
      <block class="">
        <component :is="component.comp_name" v-bind="component">
          {{ component.content ? component.content : "" }}
        </component>
      </block>
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

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.learn-subpage {
  & .swirl-wrapper-bottom {
    display: none;
  }

  & .simple-footer {
    margin-top: 0;
  }
}

// .learn-article {
//   &__carouselItem {
//     white-space: nowrap;
//     display: grid;
//     grid-auto-flow: column;
//     justify-content: start;

//     &::-webkit-scrollbar {
//       display: none;
//     }
//     .card-element {
//       border-radius: var(--f-radius);
//       overflow: hidden;
//       background: var(--theme-card-bg-default);
//       transition: 0.2s ease;
//       display: inline-flex;
//       text-align: center;
//       border-radius: 10px;
//       max-width: 400px;
//       min-width: 400px;

//       margin-right: var(--f-gutter-l);

//       white-space: normal;
//       justify-content: space-between;
//       vertical-align: top;
//       position: relative;
//       * {
//         margin: 0;
//       }
//       &__overall-link {
//         display: grid;
//         gap: 10px;
//         padding: var(--f-gutter);
//       }
//       &__header {
//         display: grid;
//         grid-template-columns: 1fr;
//         align-items: start;
//         gap: 4px;
//       }
//       &__title-desc {
//         display: grid;
//         gap: 8px;
//         text-align: left;
//         &__header {
//           display: grid;
//           gap: 0;
//           align-content: start;
//         }
//         .element-grid {
//           &-main-tag {
//             font-family: "Hind";
//             font-style: normal;
//             font-weight: 700;
//             font-size: 16px;
//             line-height: 24px;
//             color: #fbc998;
//             display: flex;
//             align-items: center;
//             letter-spacing: 1px;
//             text-transform: uppercase;
//           }
//           &-title {
//             color: white;
//           }
//         }
//       }
//       &.hidden {
//         display: none;
//       }

//       img {
//         object-fit: cover;
//         width: 100%;
//         height: 206px;
//       }
//       &:hover {
//         background: var(--color-neutral-dark-mode-04);
//       }

//       * {
//         margin: 0;
//       }

//       h6 {
//         color: var(--theme-fg);
//       }

//       p {
//         &.tag {
//           text-transform: capitalize;
//         }
//       }
//     }
//   }
// }
</style>
