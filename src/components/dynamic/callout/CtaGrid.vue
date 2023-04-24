<template>
  <section
    class="cta-grid"
    :class="[
      'cta-grid-columns__c' + columns,
      ctaGroupColumns > 3 && ctaGroupColumns < 6 ? 'center-middle' : '',
    ]"
  >
    <div
      v-for="(item, index) in ctaGroup"
      :key="index"
      class="cta-grid__item__card"
    >
      <ResponsiveImage
        :src="
          !item.create_custom
            ? item.preconfiged_cta.cta.image
            : item.custom_cta.image
        "
        classes="cta-grid__item__card__img"
      />
      <h4 class="cta-grid__item__card__h4">
        {{
          !item.create_custom
            ? item.preconfiged_cta.cta.title
            : item.custom_cta.title
        }}
      </h4>
      <p class="cta-grid__item__card__p">
        {{
          !item.create_custom
            ? item.preconfiged_cta.cta.subtitle
            : item.custom_cta.subtitle
        }}
      </p>

      <btn
        class="center-text no-arrow ctas-button"
        :url="
          !item.create_custom
            ? item.preconfiged_cta.cta.button.link
            : item.custom_cta.button.link
        "
      >
        {{
          !item.create_custom
            ? item.preconfiged_cta.cta.button.text
            : item.custom_cta.button.text
        }}
      </btn>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    ctas: Array,
    columns: Number,
  },
  data() {
    return {
      ctaGroup: "",
      ctaGroupColumns: "",
    };
  },
  beforeMount() {
    this.getCtaContent();
  },
  methods: {
    getCtaContent() {
      this.ctaGroup = this.ctas;
      this.ctaGroupColumns = this.ctaGroup.length;
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.cta-grid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: var(--f-gutter-xl);
  &.cta-grid-columns__ {
    background: blue;
    &c1 {
      grid-template-columns: 1fr;
    }
    &c2 {
      grid-template-columns: repeat(2, 1fr);
    }
    &c3 {
      grid-template-columns: repeat(3, 1fr);
      @include respond-to("<=m") {
        grid-template-columns: repeat(2, 1fr);
      }
      @include respond-to("<=s") {
        grid-template-columns: 1fr;
      }
    }
  }
  @include respond-to("<=s") {
    padding: var(--f-gutter);
  }
  &__item {
    &__card {
      padding: 16px;
      text-align: center;
      max-width: 360px;
      @include respond-to("l") {
        padding: 0;
      }

      &__img {
        display: inline-flex;
        margin: auto;
        margin-bottom: 16px;
        height: 150px;
        width: auto;
      }

      & h4 {
        text-transform: none;
        letter-spacing: 0;
        font-family: var(--f-default-headers-font);
        margin-bottom: 10px;
      }

      & .ctas-button {
        margin-right: 0 !important;
        padding-left: 0;
      }
    }
  }
}
</style>
