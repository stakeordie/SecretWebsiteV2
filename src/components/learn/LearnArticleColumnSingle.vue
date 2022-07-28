<template>
  <div class="learn-article-column-single">

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
    paragraph: String
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-column-single {
  max-width: 710px;
  margin: auto;

//   @include respond-to("<=s") {
//     padding: var(--f-gutter);
//   }

  .title__align-center {
    text-align: center;
  }
}
</style>