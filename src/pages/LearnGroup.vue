<template>
  <default-layout class="about-learn-portal learn-post">
    <!-- HERO -->
    <column class="spacer-s learn-tag-hero learn-portal__hero">
      <block>
        <div class="learn-portal__breadcrumb">
          <a href="../about/learn-portal">Learn Portal</a>
          <p>/</p>
          <a href="#">Tag</a>
        </div>
        <!-- <img src="../assets/learn-portal/defi-hero-img.svg" alt="" class="learn-tag-hero__img learn-tag-hero__img-defi "> -->
        <!-- <img  src="../assets/learn-portal/nft-hero-img.svg" alt="" class="learn-tag-hero__img learn-tag-hero__img-nft" /> -->
        <!-- <img src="../assets/learn-portal/secret-tech-hero-img.svg" alt="" class="learn-tag-hero__img learn-tag-hero__img-tech "> -->
        <img
          src="../assets/learn-portal/dapp-guides-hero-img.svg"
          alt=""
          class="learn-tag-hero__img learn-tag-hero__img-dapp"
        />
        <div class="learn-tag-hero__content">
          <h4 class="learn-tag-hero__eyebrow">Eyebrow</h4>
          <h1 class="learn-tag-hero__title">Learn Tag Title</h1>
          <p class="learn-tag-hero__p">
            Secret Network is the first blockchain with private-by-default smart
            contracts. Encrypted inputs, outputs, and state can be revealed at
            will, opening up an entirely new design space for dApps.
          </p>
        </div>
      </block>
    </column>

        <carousel></carousel>

    <!-- SLIDER 1 -->
    <column number="2" number-s="1" class="learn-featured-tag__header">
      <block class="learn-featured-tag__header-left">
        <h2>How to Use Secret DeFi</h2>
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

    <!-- SLIDER 1 -->
    <column number="2" number-s="1" class="learn-featured-tag__header">
      <block class="learn-featured-tag__header-left">
        <h2>Bridge Tutorials</h2>
        <p>
          New to Secret? Not for long — start with these guides and explainers
        </p>
      </block>

      <block class="justify-right learn-featured-tag__header-right">
        <scroll-horizontal-v2 tagSlug="devs"></scroll-horizontal-v2>
      </block>
    </column>

    <column class="spacer-s horizontal-slider devs" tagSlug="devs" mode="full">
      <block>
        <learn-featured-tag></learn-featured-tag>
      </block>
    </column>

    <!-- SUPPORT -->
    <column class="spacer-s page-developers__dev-questions learn-tag-support">
      <block>
        <get-scrt-questions></get-scrt-questions>
      </block>
    </column>

    <!-- CTAS -->
    <column class="spacer-s" number="3" number-m="2" number-s="1">
      <block>
        <general-ctas id="get-started"></general-ctas>
      </block>

      <block>
        <general-ctas id="build-on-secret"></general-ctas>
      </block>

      <block>
        <general-ctas id="join-the-community"></general-ctas>
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
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-tag-page,
.learn-post {
  ///////////////////////////////
  // HERO

  .learn-tag-hero {
    position: relative;
    padding: 16px 32px 64px 32px;
    min-height: 450px;

    &__content {
      text-align: center;
      display: grid;
      gap: 16px;
      justify-items: center;
      padding: 64px 32px;

      position: relative;
      z-index: 2;

      @include respond-to("<=s") {
        padding: 64px var(--f-gutter);
      }
    }

    &__img {
      //top: -20px;
      position: absolute;
      height: 100%;
      width: auto;
      z-index: 1;
      opacity: 0.18;
      bottom: 0;

      &-defi {
        top: -10px;
        left: 10px;
        height: auto;

        @include respond-to("<=l") {
          left: -50px;
        }

        @include respond-to("<=xs") {
          left: -10px;
          top: 45px;
        }
      }

      &-nft {
        right: -80px;

        @include respond-to("<=m") {
          right: -120px;
        }
      }

      &-tech {
        height: 428px;
        top: 45px;

        @include respond-to("<=l") {
          left: -50px;
        }

        @include respond-to("<=s") {
          left: -110px;
        }
      }

      &-dapp {
        right: 0;
        height: 418px;
        top: 45px;

        @include respond-to("<=m") {
          //right: -120px;
        }
      }
    }

    &__eyebrow {
      color: var(--color-neutral-dark-mode-05);
      margin: 0;
      font-weight: 700;
      text-transform: uppercase;

      @include respond-to("<=xs") {
        font-size: 18px;
        line-height: 25px;
      }
    }

    &__title {
      max-width: 800px;
      margin: 0;
      font-family: var(--f-default-headers-font);
      font-size: 54px;
      line-height: var(--f-h1-text-size);

      @include respond-to("<=s") {
        font-size: 40px;
        line-height: var(--f-h2-text-size);
      }
    }

    &__p {
      max-width: 590px;
      margin: auto;
      text-align: left;

      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
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

  ///////////////////////////////
  // SUPPORT

  .learn-tag-support {
    padding: var(--f-gutter);
  }
}
</style>
