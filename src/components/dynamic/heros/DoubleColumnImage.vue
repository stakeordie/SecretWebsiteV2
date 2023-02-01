<template>
  <column mode="full">
    <block>
      <section class="double-column-image-hero" :class="[imagePosition]">
        <div class="hero-image col-1">
          <img v-if="image" :src="image.url" />
        </div>

        <div class="content col-2">
          <div class="content__header">
            <h4 class="content__header__eyebrow">{{ eyebrowTitle }}</h4>
            <h1 class="content__header__title">{{ title }}</h1>
          </div>
          <vue-markdown v-if="body" :source="body" class="content__body" />
          <div class="content__buttons" v-if="cta_button || cta_button_second">
            <btn
              v-if="buttonTitle && buttonUrl"
              class="no-arrow"
              :url="buttonUrl"
            >
              {{ buttonTitle }}
            </btn>
            <btn
              v-if="secondButtonTitle && secondButtonUrl"
              class="no-arrow"
              :url="secondButtonUrl"
            >
              {{ secondButtonTitle }}
            </btn>
          </div>
        </div>
      </section>
    </block>
  </column>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
    image_position: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
    sizes: {
      type: Object,
      required: true,
    },
    cta_button: {
      type: Object,
      required: true,
    },
    cta_button_second: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      //content
      title: String(this.content.title),
      eyebrowTitle: String(this.content.eyebrow_title),
      eyebrowColor: String(this.content.eyebrow_color),
      body: this.content.body ? String(this.content.body) : "",
      //sizes
      titleWeight: String(this.sizes.title_weight),
      titleAlignment: String(this.sizes.title_alignment),
      paddingTop: String(this.sizes.padding_top),
      paddingBottom: String(this.sizes.padding_bottom),
      //buttons
      buttonTitle: String(this.cta_button.title),
      buttonUrl: String(this.cta_button.url),
      buttonWidth: String(this.cta_button.width),
      secondButtonTitle: this.cta_button_second
        ? String(this.cta_button_second.title)
        : "",
      secondButtonUrl: this.cta_button_second
        ? String(this.cta_button_second.url)
        : "",
      secondButtonWidth: this.cta_button_second
        ? String(this.cta_button_second.width)
        : "",
    };
  },
  computed: {
    imagePosition() {
      return this.image_position === "right" ? "image-right" : "image-left";
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.double-column-image-hero {
  padding: 120px 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 54px;

  @include respond-to(">=m") {
    gap: 26px;
    grid-template-columns: repeat(2, 1fr);
  }

  .col-1 {
    order: 1;
  }
  .col-2 {
    order: 2;
  }

  &.image-right {
    .col-1 {
      order: 2;
    }

    .col-2 {
      order: 1;
    }
  }

  .hero-image {
    display: flex;
    justify-content: center;

    img {
      object-fit: contain;
    }
  }

  .content {
    display: grid;
    row-gap: var(--f-gutter);
    margin: auto;

    @include respond-to("<=s") {
      padding: var(--f-gutter);
    }
    &__header {
      * {
        margin: 0;
      }

      &__eyebrow {
        color: var(--color-ver2-primary-turquoise);
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
            background-image: url("../../../assets/about-secret-network/check-circle-green.svg");
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
  }
}
</style>
