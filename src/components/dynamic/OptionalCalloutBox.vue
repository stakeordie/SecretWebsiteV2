<template>
  <section class="page-developer-questions">
    <div class="learn-callout" v-if="!custom_callout_box">
      <div class="learn-callout__image">
        <img :src="calloutBox.image.data.url" />
      </div>
      <div class="learn-callout__content">
        <h6 class="learn-callout__content__eyebrow">
          {{ calloutBox.title }}
        </h6>
        <h4 class="learn-callout__content__title">
          {{ calloutBox.subtitle }}
        </h4>
        <p class="learn-callout__content__text">
          {{ calloutBox.cta_text }}
        </p>
        <div class="learn-callout__content__buttons">
          <div v-for="(button, index) in calloutBox.button" :key="index">
            <btn
              class="text-center no-arrow"
              :class="button.is_primary ? 'main-btn' : ''"
              :url="button.link"
            >
              <img
                class="special-icon"
                v-if="button.icon.data"
                :src="button.icon.data.url"
                alt=""
              />
              {{ button.text }}</btn
            >
          </div>
        </div>
      </div>
    </div>
    <div class="learn-callout" v-if="custom_callout_box">
      <div class="learn-callout__image">
        <img :src="calloutBoxCustom.image.data.url" />
      </div>
      <div class="learn-callout__content">
        <h6 class="learn-callout__content__eyebrow">
          {{ calloutBoxCustom.title }}
        </h6>
        <h4 class="learn-callout__content__title">
          {{ calloutBoxCustom.subtitle }}
        </h4>
        <p class="learn-callout__content__text">
          {{ calloutBoxCustom.cta_text }}
        </p>
        <div class="learn-callout__content__buttons">
          <div v-for="(button, index) in calloutBoxCustom.button" :key="index">
            <btn
              class="text-center no-arrow"
              :class="button.is_primary ? 'main-btn' : ''"
              :url="button.link"
            >
              <img
                class="special-icon"
                v-if="button.icon.data"
                :src="button.icon.data.url"
                alt=""
              />
              {{ button.text }}</btn
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    preconfiged_callout_box: Object,
    custom_callout_box: Object,
  },
  data: function () {
    return {
      calloutBox: "",
    };
  },
  methods: {
    calloutItems() {
      this.calloutBox = this.preconfiged_callout_box.data.callout_box;
      this.calloutBoxCustom = this.custom_callout_box;
      // console.log(this.calloutBox2)
      return this.calloutBox;
    },
  },
  beforeMount() {
    this.calloutItems();
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.learn-callout {
  margin: 124px 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  background: var(--color-neutral-dark-mode-03);
  padding: var(--f-gutter);
  border-radius: 10px;
  justify-content: center;

  @include respond-to("<=s") {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }

  &__image {
    padding: var(--f-gutter-l);
    width: 260px;
    margin: auto;
  }

  &__content {
    display: grid;
    gap: 10px;
    align-content: center;
    max-width: 500px;
    * {
      margin: 0;
    }
    &__eyebrow {
      color: var(--color-analog-secondary-orange);
      text-transform: uppercase;
    }
    &__title {
      font-size: var(--f-h4-text-size);
    }

    &__buttons {
      display: inline-grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
      min-width: 100%;
      margin: auto;

      @include respond-to("<=xs") {
        grid-template-columns: 1fr;
        grid-gap: 0px;
      }
      .main-btn {
        background: #d35a17 !important;
        &:hover {
          background: var(--color-neutral-dark-mode-02) !important;
        }
      }
      .btn-text {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
}
</style>
