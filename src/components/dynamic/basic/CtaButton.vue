<template>
  <div
    class="cta-button"
    :class="{ 'align-content': align, 'full-button': full }"
  >
    <a
      class="button"
      :class="[marginTop, marginBottom]"
      :href="url"
      :target="isExternal ? '_blank' : ''"
      :rel="isExternal ? 'noopener noreferrer' : ''"
      :style="buttonColor"
    >
      <ResponsiveImage v-if="icon" :src="icon" classes="button__icon" />
      <span class="button__text">
        {{ title }}
      </span>
    </a>
  </div>
</template>

<script>
import { sizes } from "@/utils";
export default {
  props: {
    align: {
      type: Boolean,
      required: false,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    margin_top: {
      type: String,
      required: true,
    },
    margin_bottom: {
      type: String,
      required: true,
    },
    button_position: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: false,
    },
    background_color: {
      type: String,
      required: false,
    },
    full: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isExternal() {
      const [urlSplit] = this.url.split(":");
      return urlSplit == "https" || urlSplit == "http";
    },
    buttonColor() {
      const color = this.background_color;
      const buttonColor = color ? color : "var(--theme-card-button-bg)";
      const buttonHover = color ? color : "var(--color-neutral-dark-mode-02)";
      return {
        "--button-color": buttonColor,
        "--button-hover": buttonHover,
      };
    },
    marginTop() {
      const size = sizes[this.margin_top];
      return `m-${size ? size : sizes.none}-top`;
    },
    marginBottom() {
      const size = sizes[this.margin_top];
      return `m-${size ? size : sizes.none}-bottom`;
    },
  },
};
</script>

<style lang="scss">
.cta-button {
  width: fit-content;

  &.align-content {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .button {
    display: flex;
    background-color: var(--button-color);
    gap: var(--f-gutter-xs);
    align-items: center;
    padding: 10px 26px;
    transition: 0.3s ease-in;
    cursor: pointer;
    width: fit-content;
    height: 46px;

    &:hover {
      background-color: var(--button-hover);

      .button__icon,
      .button__text {
        transform: translateY(2px);
      }
    }

    &__icon {
      transition: 0.3s ease-in;
      width: 24px;
      flex-shrink: 0;
    }

    &__text {
      flex: 1;
      transition: 0.3s ease-in;
      color: var(--color-analog-primary-white);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 16px;
      padding-top: 2px;
      line-height: 24px;
    }
  }

  &.full-button {
    width: 50%;

    .button {
      width: 100%;
    }
  }
}
</style>
