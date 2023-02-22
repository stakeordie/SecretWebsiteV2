<template>
  <column
    number="2"
    number-m="1"
    number-s="1"
    weight="right"
    class="content-navigator"
  >
    <block class="content-navigation">
      <Sidebar />
    </block>

    <block class="content-body">
      <slot> </slot>
    </block>
  </column>
</template>

<script>
import Sidebar from "@/components/docs/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data: function () {
    return {
      showVideo: false,
      isFaqOpen: true,
    };
  },
  props: {
    accent: {
      type: String,
      required: false,
    },
  },
  methods: {
    toggleFaq() {
      this.isFaqOpen = !this.isFaqOpen;
    },
  },
  mounted() {},
  computed: {},
};
</script>

<static-query>

</static-query>

<style lang="scss">
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.content-navigator {
  padding-top: var(--f-gutter-xl);
  .content-navigation {
    nav {
      position: sticky;
      top: 150px;
      display: grid;
      gap: 10px;

      a {
        font-family: var(--f-default-headers-font);
        font-weight: 600;
        @include theme(dark dark-colored) {
          color: var(--color-analog-primary-white);
          &:hover {
            color: var(--color-analog-secondary-orange);
          }
        }
        &:hover {
          color: var(--color-analog-secondary-orange);
        }
      }

      .chevron {
        @include respond-to(">=l") {
          display: none;
        }
        @include respond-to("<=m") {
          position: absolute;
          width: 24px;
          height: 24px;
          right: var(--f-gutter);
          top: 18px;
        }
      }

      @include respond-to("<=m") {
        background: var(--theme-card-bg-default);
        padding: var(--f-gutter);
      }
      &.content-navigator-items-is-open {
        @include respond-to("<=m") {
          gap: var(--f-gutter-l);

          li {
            display: block !important;
          }
        }
      }
    }
  }

  .content-body {
    .content {
      .box {
        h3 {
          margin-bottom: var(--f-gutter-l);
        }
        h4 {
          scroll-margin-top: 200px;
          top: 200px;
          // &:first-of-type {
          //   color: var(--color-analog-secondary-yellow);
          // }
        }
        hr {
          width: 120px;
          height: 4px;
          background: var(--color-analog-secondary-yellow);
        }
      }
    }
  }
}
</style>
