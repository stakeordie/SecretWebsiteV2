<template>
  <section class="cta-grid" :class="'cta-grid-columns__c' + ctaGroupColumns">
    <div
      v-for="(item, index) in ctaGroup"
      :key="index"
      class="cta-grid__item__card"
    >
    <!-- <p>{{ctas}}</p> -->
      <div v-for="(el, index) in item.preconfiged_cta" :key="index">
        <img 
          :src="el.cta.image.data.url"
          class="cta-grid__item__card__img" 
          alt="" />
        <h4 class="cta-grid__item__card__h4">
          {{ el.cta.title }}
        </h4>
        <p class="cta-grid__item__card__p">
          {{ el.cta.subtitle }}
        </p>

        <btn class="center-text no-arrow ctas-button" :url="el.cta.button.link">{{ el.cta.button.text }}</btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    ctas: Array,
  },
  data() {
    return {
      ctaGroup: "",
      ctaGroupColumns: "",
    };
  },
  methods: {
    getCtaContent() {
      this.ctaGroup = this.ctas;
      this.ctaGroupColumns = this.ctaGroup.length;
    },
  },
  beforeMount() {
    this.getCtaContent();
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.cta-grid {
  display: grid;
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
      margin: auto;
      @include respond-to("l") {
        padding: 0;
      }

      &__img {
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
