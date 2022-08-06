<template>
  <div class="learn-article-column-double">
      <div class="learn-article-column-double__col-1">
        <h3 class="learn-article-column-double__title">
          {{ first_paragraph_title }}
        </h3>
        <p class="learn-article-column-double__paragraph">
          {{ first_paragraph }}
        </p>
      </div>
      <div class="learn-article-column-double__col-2">
        <h3 class="learn-article-column-double__title">
          {{ second_paragraph_title }}
        </h3>
        <p class="learn-article-column-double__paragraph" >
          {{ second_paragraph }}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    first_paragraph_title: String,
    first_paragraph: String,
    second_paragraph_title: String,
    second_paragraph: String
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-column-double {
    display: grid;
    gap: 26px;
    grid-template-columns: repeat(auto-fit, minmax(385px, 1fr));
    @include respond-to("<=m") {
      grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));
    }
    &__col-1,
    &__col-2 {
      padding: var(--f-gutter);
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