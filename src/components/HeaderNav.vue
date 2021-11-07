<template>
  <nav :class="navigation" class="flui-header-nav">
    <ul class="flui-header-nav__items">
      <li
        v-for="(item, index) in navigation"
        :key="index"
        class="flui-header-nav__items__single-item"
      >
        <a class="flui-header-nav__items__single-item__top-anchor">
          {{ item.title }}
          <svg
            class="flui-header-nav__items__single-item__top-anchor__chevron"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <ul class="flui-header-nav__items__single-item__dropdown">
          <li
            v-for="(dropdownItem, index) in item.nav_items"
            :key="index"
            class="flui-header-nav__items__single-item__dropdown__single-item"
          >
            <g-link
              class="flui-header-nav__items__single-item__dropdown__single-item__anchor"
              :title="dropdownItem.nav_item.text"
              :to="$tp(dropdownItem.nav_item.page.route)"
              >{{ dropdownItem.nav_item.text }}</g-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    setNav() {
      const topAnchorEl = document.querySelectorAll(
        ".flui-header-nav__items__single-item__top-anchor"
      );
      topAnchorEl.forEach((anchor) => {
        let dropdownIsOpen = false;

        anchor.addEventListener("click", function (e) {
          // Getting elements
          const dropdownEl = anchor.nextElementSibling;
          const parentEl = anchor.parentElement;
          const chevronEl = anchor.firstElementChild;

          // general functions
          const smoothEnter = function (el) {
            el.classList.add("dropdown-is-open");
            el.classList.add("nav-enter");
            chevronEl.classList.add("rotate");
            setTimeout(() => {
              el.classList.remove("nav-enter");
            }, 400);
          };

          const smoothLeave = function (el) {
            el.classList.add("nav-leave");
            chevronEl.classList.remove("rotate");
            setTimeout(() => {
              el.classList.remove("nav-leave");
              el.classList.remove("dropdown-is-open");
            }, 400);
          };

          // Boolean toggle
          dropdownIsOpen = !dropdownIsOpen;

          // dropdown only appears when anchor hasn't href value and dropdownIsOpen boolean is true
          e.preventDefault();
          if (dropdownIsOpen) {
            smoothEnter(dropdownEl);
          } else if (!dropdownIsOpen) {
            smoothLeave(dropdownEl);
          }

          // dropdown dissappears when mouse leaves
          parentEl.addEventListener("mouseleave", function (e) {
            dropdownIsOpen = false;
            smoothLeave(dropdownEl);
          });
        });
      });
    },
  },
  computed: {
    navigation() {
      const content = this.$static.navHeader.edges.map(
        (it) => it.node.nav_groups
      );
      return content[0];
    },
  },
  mounted() {
    this.setNav();
  },
};
</script>

<static-query>
query {
  navHeader: allStrapiNavHeader {
    edges {
      node {
        nav_groups {
          title
          nav_items {
            nav_item {
              text
              page {
                name
                title
                route
                locale
              }
              locale
              external_link
            }
            sort_name
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
@import "../sass/functions/theme";
:root {
  --flui-header-nav-background-color: transparent;
  --flui-header-nav-height: 68px;
  --flui-header-nav-top-anchor-text-color: white;
  --flui-header-nav-top-anchor-background-color: transparent;
  --flui-header-nav-top-dropdown-top-position: 56px;
  --flui-header-nav-dropdown-background-color: white;
  --flui-header-nav-dropdown-border-radius: var(--f-gutter-xs);
  --flui-header-nav-dropdown-zindex: 9;
  --flui-header-nav-dropdown-box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  --flui-header-nav-dropdown-text-color: black;
  --flui-header-nav-transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

body {
  .flui-header-nav {
    display: grid;
    background: var(--flui-header-nav-background-color);
    height: var(--flui-header-nav-height);
    @include respond-to("<=m") {
      height: auto;
    }
    * {
      margin: 0;
      height: 100%;
    }
    &__items {
      display: inline-grid;
      grid-auto-flow: column;
      padding-left: 0;
      @include respond-to("<=m") {
        grid-auto-flow: row;
        gap: var(--f-gutter-xl);
      }
      &__single-item {
        display: grid;
        align-items: center;
        justify-items: center;
        position: relative;
        @include respond-to("<=m") {
          width: 100%;
        }
        &__top-anchor {
          display: grid;
          grid-auto-flow: column;
          align-content: center;
          justify-content: center;
          gap: var(--f-gutter-s);
          width: 100%;
          color: var(--flui-header-nav-top-anchor-text-color);
          text-align: center;
          cursor: pointer;
          &:hover {
            background-color: var(
              --flui-header-nav-top-anchor-background-color
            );
          }
          @include respond-to("<=m") {
            justify-content: start;
            pointer-events: none;
            &:hover {
              background-color: transparent;
            }
          }
          &__chevron {
            transition: var(--flui-header-nav-transition);
            @include respond-to("<=m") {
              display: none;
            }
            &.rotate {
              transform: rotate(-180deg);
            }
          }
        }
        &__dropdown {
          position: absolute;
          left: 0;
          padding-left: 0;
          top: var(--flui-header-nav-top-dropdown-top-position);
          background-color: var(--flui-header-nav-dropdown-background-color);
          border-radius: var(--flui-header-nav-dropdown-border-radius);
          z-index: var(--flui-header-nav-dropdown-zindex);
          box-shadow: var(--flui-header-nav-dropdown-box-shadow);
          display: none;
          @include respond-to("<=m") {
            display: grid;
            position: relative;
            top: 0;
            background-color: transparent;
            box-shadow: none;
            width: 100%;
            border-radius: 0;
          }
          * {
            margin: 0;
          }
          &.dropdown-is-open {
            display: grid;
            height: auto;
          }
          &__single-item {
            &__anchor {
              white-space: nowrap;
              display: inline-block;
              flex: auto;
              white-space: nowrap;
              color: var(--theme-bg);
              padding: var(--f-gutter-s) var(--f-gutter) !important;
              &:hover {
                font-weight: 600;

                color: black;
              }
              &:before {
                display: block;
                content: attr(title);
                font-weight: bold;
                height: 0;
                overflow: hidden;
                visibility: hidden;
              }
              @include respond-to("<=m") {
                color: var(--color-analog-tertiary-blue);
                padding-left: var(--f-gutter-l) !important;
                &:hover {
                color: inherit;
              }
              }
            }
          }
        }
      }
    }
    .nav-enter {
      -webkit-animation: fade-in-top var(--flui-header-nav-transition) both;
      animation: fade-in-top var(--flui-header-nav-transition) both;
    }

    .nav-leave {
      -webkit-animation: fade-out-top var(--flui-header-nav-transition) both;
      animation: fade-out-top var(--flui-header-nav-transition) both;
    }

    //  * animation fade-in-top

    @-webkit-keyframes fade-in-top {
      0% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
        opacity: 0;
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fade-in-top {
      0% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
        opacity: 0;
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }

    //  * animation fade-out-top

    @-webkit-keyframes fade-out-top {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }

      100% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
        opacity: 0;
      }
    }

    @keyframes fade-out-top {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }

      100% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
        opacity: 0;
      }
    }
  }
}
</style>
