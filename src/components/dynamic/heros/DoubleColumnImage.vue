<template>
  <column>
    <block>
      <section
        class="double-column-image-hero"
        :class="[imagePosition, paddingTop, paddingBottom]"
      >
        <div class="hero-image col-1">
          <ResponsiveImage v-if="image" :src="image" high-quality />
        </div>

        <div class="content-hero col-2" v-if="content">
          <div class="content-hero__header">
            <DynamicEyebrowTitle
              v-if="content.eyebrow_title"
              :title="content.eyebrow_title"
              :alignment="sizes.title_alignment"
              :color="content.eyebrow_color"
            />
            <DynamicTitle
              v-if="content.title && !content.custom_title"
              :title="content.title"
              :weight="sizes.title_weight"
              :alignment="sizes.title_alignment"
            />
            <DynamicCustomTitle
              v-else-if="content.custom_title"
              :content="content"
              :sizes="sizes"
            />
          </div>
          <DynamicBody
            v-if="content.body"
            :text="content.body"
            :align="sizes.body_alignment"
            class="content-hero__body"
          />
          <DynamicButtons :buttons="buttons" :position="buttons_position" />
        </div>
      </section>
    </block>
  </column>
</template>

<script>
import { sizes } from "@/utils";
import DynamicButtons from "@/components/dynamic/basic/DynamicButtons.vue";
import DynamicCustomTitle from "@/components/dynamic/basic/DynamicCustomTitle.vue";
import DynamicEyebrowTitle from "@/components/dynamic/basic/DynamicEyebrowTitle.vue";
import DynamicBody from "@/components/dynamic/basic/DynamicBody.vue";

export default {
  components: {
    DynamicButtons,
    DynamicEyebrowTitle,
    DynamicCustomTitle,
    DynamicBody
  },
  props: {
    image: {
      type: Object,
      required: true
    },
    image_position: {
      type: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    },
    sizes: {
      type: Object,
      required: true
    },
    buttons: {
      type: Array,
      required: false
    },
    buttons_position: {
      type: String,
      required: false
    }
  },
  computed: {
    imagePosition() {
      return this.image_position === "right" ? "image-right" : "image-left";
    },
    paddingTop() {
      const size = sizes[this.sizes.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.sizes.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    }
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.double-column-image-hero {
  padding: var(--f-gutter);
  display: grid;
  grid-template-columns: 1fr;
  gap: 54px;
  min-height: 55vh;

  @include respond-to(">=m") {
    gap: 26px;
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-image {
    display: flex;
    justify-content: center;
    order: 1;

    img {
      object-fit: contain;
    }
  }

  .content-hero {
    display: grid;
    gap: var(--f-gutter);
    margin: auto;
    order: 2;

    @include respond-to("<=s") {
      padding: var(--f-gutter);
    }

    &__header {
      display: flex;
      flex-direction: column;
      gap: 10px;

      * {
        margin: 0;
      }
    }

    &__body {
      display: grid;
      gap: var(--f-gutter);
      color: var(--theme-card-text-color);

      p {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        margin: 0;
      }

      ul {
        display: grid;
        row-gap: 10px;
        padding-left: 0;
        margin-bottom: 0;

        li {
          display: flex;
          align-items: center;
          font-size: var(--paragraph-font-size-big);
          line-height: var(--paragraph-line-height-big);
          margin-bottom: 0;
          position: relative;
          padding-left: 34px;

          &::before {
            content: "";
            background-image: url("/img/about-secret-network/check-circle-green.svg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 2px;
          }
        }
      }
    }

    &__buttons {
      display: flex;
      gap: var(--f-gutter);
      flex-direction: column;

      @include respond-to(">=s") {
        flex-direction: row;
      }
    }

    .title {
      &-25:is(h2) {
        font-size: var(--f-h2_5-text-size);
        line-height: var(--f-h2_5-line-height);
      }

      &-left {
        text-align: left;
      }

      &-center {
        text-align: center;
      }

      &-right {
        text-align: right;
      }
    }
  }

  &.image-right {
    .col-1 {
      order: 1;

      @include respond-to(">=m") {
        order: 2;
      }
    }

    .col-2 {
      order: 2;
      @include respond-to(">=m") {
        order: 1;
      }
    }
  }
}
</style>
