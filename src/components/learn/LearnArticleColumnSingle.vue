<template>
  <div class="learn-article-column-single" :class="widthArticleClass">
    <div class="learn-article-column__text">
        <h3 class="learn-article-column__title title__align-center">
          {{ this.paragraph_title }}
        </h3>
        <h4 class="learn-article-column__title">
          {{ this.paragraph_subtitle }}
        </h4>
        <p class="learn-article-column__paragraph">
          {{ this.paragraph }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paragraph_title: String,
    paragraph_subtitle: String,
    paragraph: String,
    width: String
  },
  computed: {
    widthArticleClass()  {
      return {
        'learn-article-column-single--narrow': this.width && this.width === 'narrow',
        'learn-article-column-single--wide': this.width && this.width === 'wide'
      }
    }
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-column-single {
  max-width: 742px;
  &--narrow {
    max-width: 485px;
  }
  &--wide {
    max-width: 843px;
  }
  margin: auto;
  padding: var(--f-gutter);
  .title__align-center {
    text-align: center;
  }
  p {
    max-width: auto;
    width: 100%;
    line-height: 28px;
    color: var(--color-analog-primary-white);
  }
  h3 {
    max-width: auto;
    width: 100%;
    font-size: 28px;
    line-height: 36.4px;
  }
}
</style>