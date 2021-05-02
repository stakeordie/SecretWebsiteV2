<template>
  <a class="btn button" :href="url">
    <span class="btn-text">
      <slot></slot>
    </span>
    <themed-image>
      <img dark-colored dark src="../assets/icon-arrow-right-light.svg" alt="arrow" width="20" height="20" />
      <img light light-colored src="../assets/icon-arrow-right-dark.svg" alt="arrow" width="20" height="20" />
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
