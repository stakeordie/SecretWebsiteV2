<template>
  <div class="page-grants">
    <section class="page-grants__hero">
      <div class="page-grants__hero__content">
        <div class="page-grants__hero__content__image">
          <img src="../../assets/grants-hero.png" alt="">
        </div>
        <div class="page-grants__hero__content__info">
          <h5 class="page-grants__hero__content__info-label">GRANTS</h5>
          <h2 class="page-grants__hero__content__info-title">Kickstart your Secret project</h2>
          <p class="page-grants__hero__content__info-description">Get long-term financial and strategic support to build on Secret Network, provided by leading investors in the field.</p>
          <a target="blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfyjl_vJ2PJa0TiHuENfaXqB8q57D9nL7zOrBXV1cXoHLhoiA/viewform" class="page-grants__hero__content__info-btn">Find Out More</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-grants {
  padding-top: var(--f-gutter-xxxl);
  
      @include respond-to("<=m") {
        padding-top: var(--f-gutter-xxl);
      }
      
      @include respond-to("<=s") {
        padding-top: var(--f-gutter-xl);
      }

      

  &__hero {
    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;

      @include respond-to("<=m") {
          grid-template-columns: 1fr;
          justify-items: center;
      }

      &__image {
        display: grid;
        padding-top: var(--f-gutter-l);
        justify-items: center;
        @include respond-to("<=m") {
          max-width: 80%;
        }
      }

      &__info {
        padding: var(--f-gutter);
        display: grid;

        a {
          color: white;
        }
      }

      &__info-label {
        color: var(--color-newBrand-blue-01);
      }

      &__info-title {
        font-family: Montserrat, sans-serif;
        font-size: 54px;
        line-height: 60px;

        @include respond-to("<=s"){
          font-size: 40px;
        line-height: var(--f-h2-line-height);
        }
      }

      &__info-description {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        color: var(--color-neutral-dark-mode-05);
      }
      
      &__info-btn {
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        font-weight: 600;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        width: fit-content;
        color: white;
        background: var(--theme-card-button-bg);
        padding: 18px 42px 17px 42px;
        border-radius: var(--f-gutter-s);
        margin-bottom: 0;

        @include respond-to("<=m") {
          width: 100%;
        }
            
        &:hover {
          background: var(--color-neutral-dark-mode-02);
          color: white;
        }
      }
    }

      

      
      
    }
  } 
</style>