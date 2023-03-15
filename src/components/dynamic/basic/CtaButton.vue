<template>
  <div class="cta-button" :style="buttonStyles">
    <a
      class="button"
      :class="margins"
      :href="url"
      :target="is_external_link ? '_blank' : '_self'"
      :rel="is_external_link ? 'noopener noreferrer' : ''"
    >
      <ResponsiveImage v-if="icon" :src="icon" class="button__icon" />
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
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    margin_top: {
      type: String,
      required: true
    },
    margin_bottom: {
      type: String,
      required: true
    },
    button_position: {
      type: String,
      required: true
    },
    icon: {
      type: Object,
      required: false
    },
    background_color: {
      type: String,
      required: false
    },
    text_color: {
      type: String,
      required: false
    },
    is_external_link: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    buttonStyles() {
      const alignment = {
        left: "flex-start",
        center: "center",
        right: "flex-end"
      };
      const color = this.background_color;
      const buttonColor = color || "var(--theme-card-button-bg)";
      const buttonHover = color || "var(--color-neutral-dark-mode-02)";
      const textColor = this.text_color || "var(--color-analog-primary-white)";
      const align = alignment[this.button_position] || alignment.center;

      return {
        "--text-color": textColor,
        "--button-color": buttonColor,
        "--button-hover": buttonHover,
        "--button-alignment": align
      };
    },
    margins() {
      const top = sizes[this.margin_top] || sizes.none;
      const bottom = sizes[this.margin_bottom] || sizes.none;
      return [`m-${top}-top`, `m-${bottom}-bottom`];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.cta-button {
  display: flex;
  width: 100%;
  justify-content: var(--button-alignment);

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
      color: var(--text-color);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 16px;
      padding-top: 2px;
      line-height: 24px;
    }
  }
}
</style>
