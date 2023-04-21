<template>
  <div class="cta-button" :style="buttonStyles">
    <a
      v-if="!is_event_button"
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
    <ClientOnly v-else>
      <button :id="buttonId" class="button">
        <ResponsiveImage v-if="icon" :src="icon" class="button__icon" />
        <span class="button__text">
          {{ title }}
        </span>
      </button>
    </ClientOnly>
  </div>
</template>

<script>
import { generateUUID, sizes } from "@/utils";

export default {
  props: {
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
      default: null,
    },
    background_color: {
      type: String,
      required: false,
      default: "",
    },
    text_color: {
      type: String,
      required: false,
      default: "",
    },
    is_external_link: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_event_button: {
      type: Boolean,
      required: true,
      default: false,
    },
    event_id: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      buttonId: generateUUID(),
    };
  },
  computed: {
    buttonStyles() {
      const alignment = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
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
        "--button-alignment": align,
      };
    },
    margins() {
      const top = sizes[this.margin_top] || sizes.none;
      const bottom = sizes[this.margin_bottom] || sizes.none;
      return [`m-${top}-top`, `m-${bottom}-bottom`];
    },
  },
  mounted() {
    this.addEventScript();
  },
  methods: {
    addEventScript() {
      if (!process.isClient || !this.is_event_button) return;

      //Imports the Eventbrite widget into a script tag only if needed
      const eventbrite = document.createElement("script");
      eventbrite.type = "text/javascript";
      eventbrite.src =
        "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      document.head.appendChild(eventbrite);

      //Open the Eventbrite modal widget
      setTimeout(() => {
        let clientId;
        const scrtDomain = "https://scrt.network";
        const isHttp = String(this.url).startsWith("http");
        const redirectUrl = isHttp ? this.url : scrtDomain + this.url;

        const exampleCallback = () => {
          setTimeout(() => window.open(redirectUrl, "_self"), 500);
        };

        ga((tracker) => {
          clientId = tracker.get("clientId");
        });

        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: this.event_id || "",
          googleAnalyticsClientId: clientId,
          modal: true,
          modalTriggerElementId: this.buttonId,
          onOrderComplete: exampleCallback,
        });
      }, 500);
    },
  },
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
      font-family: "Hind";
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 16px;
      padding-top: 2px;
      line-height: 24px;
    }
  }
}
</style>
