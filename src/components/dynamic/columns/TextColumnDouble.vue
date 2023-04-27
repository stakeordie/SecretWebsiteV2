<template>
  <div>
    <div
      :id="titleId(main_title)"
      :class="['text-column-double', paddingTop, paddingBottom]"
    >
      <DynamicEyebrowTitle
        v-if="eyebrow_title"
        :title="eyebrow_title"
        :alignment="main_title_alignment"
        :color="eyebrow_color"
      />
      <DynamicTitle
        v-if="main_title"
        :title="main_title"
        :weight="main_title_weight"
        :alignment="main_title_alignment"
        :color="component_colors ? component_colors.title_color : ''"
      />
      <div class="text-column-double__content" :style="titlesAlignment">
        <div class="col-1">
          <DynamicImage v-if="first_image" :image="first_image" />
          <h4 v-if="first_paragraph_title" class="title">
            {{ first_paragraph_title }}
          </h4>
          <DynamicBody
            v-if="first_paragraph"
            :text="first_paragraph"
            :align="first_paragraph_alignment"
            :color="component_colors ? component_colors.body_color : ''"
          />
          <DynamicButtons
            v-if="first_paragraph_buttons"
            :buttons="first_paragraph_buttons"
            :position="first_buttons_position"
          />
          <DynamicFooter
            :title="first_footer_title"
            :links="first_footer_links"
          />
        </div>
        <div class="col-2">
          <DynamicImage v-if="second_image" :image="second_image" />
          <h4 v-if="second_paragraph_title" class="title">
            {{ second_paragraph_title }}
          </h4>
          <DynamicBody
            v-if="second_paragraph"
            :text="second_paragraph"
            :align="second_paragraph_alignment"
            :color="component_colors ? component_colors.body_color : ''"
            :isExternalLink="is_external_link"
          />
          <DynamicButtons
            v-if="second_paragraph_buttons"
            :buttons="second_paragraph_buttons"
            :position="second_buttons_position"
          />
          <DynamicFooter
            :title="second_footer_title"
            :links="second_footer_links"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { removeCharacters, sizes } from "@/utils";
import DynamicButtons from "@/components/dynamic/basic/DynamicButtons.vue";
import DynamicEyebrowTitle from "@/components/dynamic/basic/DynamicEyebrowTitle.vue";
import DynamicImage from "@/components/dynamic/basic/DynamicImage.vue";
import DynamicTitle from "@/components/dynamic/basic/DynamicTitle.vue";
import DynamicBody from "@/components/dynamic/basic/DynamicBody.vue";
import DynamicFooter from "@/components/dynamic/basic/DynamicFooter.vue";

export default {
  components: {
    DynamicButtons,
    DynamicImage,
    DynamicTitle,
    DynamicEyebrowTitle,
    DynamicBody,
    DynamicFooter,
  },
  props: {
    main_title: {
      type: String,
      required: false,
      default: "",
    },
    main_title_alignment: {
      type: String,
      required: false,
      default: "left",
    },
    main_title_weight: {
      type: String,
      required: false,
      default: "H2",
    },
    eyebrow_title: {
      type: String,
      required: false,
      default: "",
    },
    eyebrow_color: {
      type: String,
      required: false,
      default: "",
    },
    is_anchor: {
      type: Boolean,
      required: false,
    },
    navigation_level: {
      type: String,
      required: false,
      default: "",
    },
    width: {
      type: String,
      required: false,
      default: "",
    },
    first_paragraph_title: {
      type: String,
      required: false,
      default: "",
    },
    first_paragraph: {
      type: String,
      required: false,
      default: "",
    },
    second_paragraph_title: {
      type: String,
      required: false,
      default: "",
    },
    second_paragraph: {
      type: String,
      required: false,
      default: "",
    },
    first_paragraph_buttons: {
      type: Array,
      required: false,
      default: null,
    },
    first_buttons_position: {
      type: String,
      required: false,
      default: "",
    },
    second_paragraph_buttons: {
      type: Array,
      required: false,
      default: null,
    },
    second_buttons_position: {
      type: String,
      required: false,
      default: "",
    },
    first_image: {
      type: Object,
      required: false,
      default: null,
    },
    second_image: {
      type: Object,
      required: false,
      default: null,
    },
    padding_top: {
      type: String,
      required: false,
      default: "",
    },
    padding_bottom: {
      type: String,
      required: false,
      default: "",
    },
    first_paragraph_alignment: {
      type: String,
      required: false,
      default: "",
    },
    second_paragraph_alignment: {
      type: String,
      required: false,
      default: "",
    },
    component_colors: {
      type: Object,
      required: false,
      default: null,
    },
    is_external_link: {
      type: Boolean,
      required: false,
      default: false,
    },
    first_footer_title: {
      type: String,
      required: false,
      default: "",
    },
    first_footer_links: {
      type: Array,
      required: false,
      default: () => [],
    },
    second_footer_title: {
      type: String,
      required: false,
      default: "",
    },
    second_footer_links: {
      type: Array,
      required: false,
      default: () => [],
    },
    first_title_alignment: {
      type: String,
      required: false,
      default: "left",
    },
    second_title_alignment: {
      type: String,
      required: false,
      default: "left",
    },
  },
  computed: {
    paddingTop() {
      const size = sizes[this.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    },
    titlesAlignment() {
      const first = this.first_title_alignment;
      const second = this.second_title_alignment;
      const alignment = {
        left: "left",
        center: "center",
        right: "right",
      };

      return {
        "--first-title-alignment": alignment[first] || alignment.left,
        "--first-title-alignment": alignment[second] || alignment.left,
      };
    },
  },
  methods: {
    titleId(title) {
      return title ? removeCharacters(title) : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.text-column-double {
  padding-inline: 16px;

  @include respond-to(">=m") {
    padding-inline: 0;
  }

  &__content {
    width: 100%;
    display: grid;
    gap: 26px;
    grid-template-columns: 1fr;

    @include respond-to(">=m") {
      grid-template-columns: repeat(2, 1fr);
    }
    .col {
      &-1 .title {
        text-align: var(--first-title-alignment);
      }

      &-2 .title {
        text-align: var(--second-title-alignment);
      }
    }
  }
}

::v-deep {
  .learn-article__content {
    &.empty-nav {
      .text-column-double {
        margin-inline: auto;
      }
    }
  }
}
</style>
