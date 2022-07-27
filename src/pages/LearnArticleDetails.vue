<template>
  <default-layout class="learn-article-details about-learn-portal learn-post">
    <column>

      <block class="">
        <breadcrumbs> </breadcrumbs>
      </block>
    </column>


    <column class="learn-article-details__content spacer-s">

      <block class="">
        <learn-article-hero> </learn-article-hero>
      </block>
      
      <block class="">
        <learn-article-column-single> </learn-article-column-single>
      </block>
      
      <block class="">
        <learn-article-image> </learn-article-image>
      </block>
      
      <block class="">
        <learn-article-column-double> </learn-article-column-double>
      </block>

      <block class="">
        <learn-article-column-single> </learn-article-column-single>
      </block>
      

    </column>


    <!-- SLIDER 1 -->
    <column number="2" number-s="1" class="learn-featured-tag__header">
      <block class="learn-featured-tag__header-left">
        <h2>Learn More About NFTs</h2>
        <p>
          New to Secret? Not for long — start with these guides and explainers
        </p>
      </block>

      <block class="justify-right learn-featured-tag__header-right">
        <scroll-horizontal-v2 tagSlug="dev"></scroll-horizontal-v2>
      </block>
    </column>

    <column class="spacer-s horizontal-slider dev" tagSlug="dev" mode="full">
      <block>
        <learn-featured-tag></learn-featured-tag>
      </block>
    </column>

    <!-- swirl -->
    <column class="learn-portal__green-swirl__bottom">
      <block>
        <img
          class="get-scrt__align-img"
          src="../../src/assets/swirl-orange-bottom.svg"
        />
      </block>
    </column>
  </default-layout>
</template>

<script>
import LearnArticleColumnSingle from '../components/learn/LearnArticleColumnSingle.vue';
import LearnArticleHero from '../components/learn/LearnArticleHero.vue';
export default {
  components: { LearnArticleHero, LearnArticleColumnSingle },};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-details {

  &__content {
    display: grid;
    gap: 80px;

    @include respond-to("<=s"){
      padding: 32px;
    }

    @include respond-to("<=s"){
      gap: 40px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul {
      max-width: auto;
      width: 100%;
      margin: 0;
    }

    h1 {
      line-height: 60px;
      font-size: 54px;
      @include respond-to("<=m") {
        font-size: var(--f-h2-text-size);
        line-height: var(--f-h2-line-height);
      }
    }

    h2 {
      font-size: 40px;
      line-height: var(--f-h2-line-height);
    }

    h3 {
      font-size: 28px;
      line-height: 36.4px;
    }

    p,
    blockquote {
      line-height: 28px;
      color: var(--color-analog-primary-white);
    }

    ul {
      li {
        list-style: disc;
      }
    }

    blockquote {
    }
    
    figcaption {
      font-size: 16px;
      color: var(--theme-card-text-color);

      text-align: center;
      max-width: 710px;
      margin: auto;
      line-height: 24px;

      @include respond-to("<=m"){
        font-size: 12px;
        line-height: 20px;
      }
    }

    a {
      color: var(--color-ver2-primary-turquoise);

      &:hover {
        color: var(--color-ver2-tertiary-turquoise);
      }
    }

  }

  ///////////////////////////////
  // SLIDER

  .learn-featured-tag__header {
    &-left {
      h2 {
        font-size: var(--f-h3-text-size);
        margin-bottom: 0;
      }
    }
  }

  & .learn-tag__slider {
  }
}
</style>