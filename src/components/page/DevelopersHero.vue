<template>
  <section class="page-developers__hero">
    <div class="page-developers__hero__content">
      <div class="page-developers__hero__content__title">
        <h4>Develop on Secret Network</h4>
        <h1>Build more with <span class="title--blue">privacy</span></h1>
      </div>
      <div class="page-developers__hero__content__info">
        <p>
          Secret Network is the first blockchain with private-by-default smart
          contracts. Encrypted inputs, outputs, and state can be revealed at
          will, opening up an entirely new design space for dApps.
        </p>
        <btn class="text-center no-arrow" url="/">Join our Dev Community</btn>
      </div>
    </div>
    <div class="page-developers__hero__bg-img">
      <img src="../../assets/resources-bg-image.png" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developers__hero {

  min-height: 494px;
  padding: var(--f-gutter-xxl);

  @include respond-to("<=s") {
    height: 634px;
    padding: var(--f-gutter);
  }

  justify-content: center;
  text-align: center;
  display: block;

  &__content {
    display: grid;
    z-index: 5;
    position: relative;
    padding: var(--f-gutter);
    margin: auto;
    top:24px;

    @include respond-to("<=s") {
      padding: 0;
    }

    &__title {
      display: grid;
    grid-gap:20px;
      text-align: center;
      h1 {
        font-family: var(--f-default-headers-font);
        font-size: 54px;
        
        line-height: 60px;
        letter-spacing: 0.5px;
        

        span {
          color: #4195c4;
        }
      }

      h4 {
        font-family: var(--f-default-headers-font);
        text-transform: uppercase;
        font-weight: 500;
        font-size: var(--f-h4-text-size);
        letter-spacing: 0.2px;
        color: var(--color-neutral-dark-mode-05);
        line-height: 24px;
        text-align: center;
        margin: auto;

        @include respond-to("<=s") {
          font-size: 16px;
        }
      }
    }

    &__info {
      display: grid;
      justify-content: center;
      align-items: center;
      justify-items: center;

      p {
        font-size: var(--paragraph-font-size-big);
        line-height: 28px;
        font-weight: 100;
        text-align: center;
        max-width: 590px;

        span {
          display: block;
        }
      }

      a{
        margin-right: 0;
      }
       .text-center{
        background-color: #4195c4 !important;
        width:400px;
        margin-right: 0;
        padding: 0;

        &::before{
          margin: 0;
        }

        .btn-text{
          letter-spacing: 1px;
          font-size: var(--f-h6-text-size);
        }
      }
    }
  }

  &__bg-img {
    display: grid;
    justify-content: end;
    position: absolute;
    opacity: 0.3;
    mix-blend-mode: screen;
    z-index: 0;
    transform: translate(70px, 0px);
    right: 0;
    top: 0;
    width: 700px;

    @include respond-to("<=s") {
      width: 480px;
      left: 30%;
    }
     @include respond-to("<=xs") {
      width: 480px;
      left: 12%;
    }
  }
}
</style>
