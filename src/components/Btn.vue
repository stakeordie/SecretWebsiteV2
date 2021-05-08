<template>
  <a class="btn button" :href="url" :target="isExternal ? '_blank': ''" >
    <span class="btn-text">
      <slot></slot>
    </span>
    <themed-image>
      <img dark-colored dark :src="lightArrow" alt="arrow" width="20" height="20" />
      <img light light-colored :src="darkArrow" alt="arrow" width="20" height="20" />
    </themed-image>
  </a>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: false
      }
    },
    computed: {
      isExternal() {
        const urlSplit = this.url.split(":");
        if(urlSplit[0] == "https" || urlSplit[0] == "http") {
          return true
        }
        return false;
      },
      darkArrow() {
        let darkArrow = "/assets/img/icon-arrow-right-dark.svg";
        if(this.isExternal) {
          darkArrow = "/assets/img/icon-arrow-external-dark.svg";
        }
        return darkArrow;
      },
      lightArrow() {
        let darkArrow = "/assets/img/icon-arrow-right-light.svg";
        if(this.isExternal) {
          darkArrow = "/assets/img/icon-arrow-external-light.svg";
        }
        return darkArrow;
      }
    }
  }
</script>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";


  @include theme("light") {
    p {
      display: none;
    }
  }

.content {
    .box {

    .btn {
      display: inline-flex;
      background: var(--theme-card-button-bg);
      color: var(--theme-fg);
      cursor: pointer;
      align-items: center;
      gap: var(--f-gutter-xs);
      margin-right: var(--f-gutter);
      margin-bottom: 0;
      padding: var(--f-gutter-s) var(--f-gutter);
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 14px;
      p {
        margin-bottom: 0;
      }

      &.text-center {
        justify-content: center;
      }
      &.bg-invert {
        background: var(--theme-fg);
        &:hover {
          background: var(--color-neutral-dark-mode-01);
          @include theme(light light-colored) {
            background: var(--color-neutral-dark-mode-04);
          }
        }
        span {
          color: var(--theme-bg);
        }
      }
      &:hover {
        background: var(--color-neutral-dark-mode-02);
        span {
          transform: translateY(2px);
          color: var(--color-analog-primary-white);
        }  
        img {
          @include theme(light light-colored) {
            filter: invert(1);
          }
        }
      }

      .btn-text {
        transform: translateY(2px);
        color: var(--theme-fg);
      }

      &.no-arrow {
        img {
          display: none !important;
        }
      }

      &.full {
        width: 100%;
        justify-content: space-between;
      }
    }
  }
}

</style>
