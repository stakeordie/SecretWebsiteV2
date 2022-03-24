<template>
  <div class="page-ecosystem-funding">
    <section class="page-ecosystem-funding__hero">
      <div class="page-ecosystem-funding__hero__content">
        <div class="page-ecosystem-funding__hero__content__image">
          <img src="../../assets/ecosystem-funding.png" alt="">
        </div>
        <div class="page-ecosystem-funding__hero__content__info">
          <h5 class="page-ecosystem-funding__hero__content__info-label">ECOSYSTEM FUNDING</h5>
          <h2 class="page-ecosystem-funding__hero__content__info-title">Build bigger with our $225M+ fund</h2>
          <p class="page-ecosystem-funding__hero__content__info-description">Get long-term financial and strategic support to build on Secret Network, provided by leading investors in the field.</p>
          <div class="page-ecosystem-funding__hero__content__info-buttons">
            <btn class="text-center no-arrow" url="https://discord.gg/PzdQ9bfvcX">Apply For Funding</btn>
            <btn class="ecosystem text-center no-arrow" url="https://discord.gg/PzdQ9bfvcX">Become a Partner</btn>
          </div>
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

.page-ecosystem-funding {
  &__hero {
    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 0;

      @include respond-to("<=m") {
          grid-template-columns: 1fr;
          justify-items: center;
      }

      &__image {
        @include respond-to("<=m") {
          max-width: 80%;
        }
      }

      &__info {
        padding: var(--f-gutter);
      }

      &__info-buttons {
        display: grid;
        grid-template-columns: auto auto;

        @include respond-to("<=l") {
          grid-template-columns: 1fr;
          justify-items: center;
        }
        .btn {
          height: 64px;
          max-width: 100%;
        }

      //   .content .box .btn {
      //     height: 64px;
      //     max-width: 100%;

      //     &.ecosystem {
      //       justify-content: center;
      //       place-content: center;
      //       pointer-events: auto;

      //       & span {
      //         color: var(--color-newBrand-blue-02);
      //         font-size: 18px;
      //         max-width: 500px;
      //       }
      //     }

      //     &.text-center {
      //     //width: 274px;
      //     padding-left: var(--f-gutter-xl);
      //     padding-right: var(--f-gutter-xl);
      //     margin-right: 0;
      //       & span {
      //       font-size: 18px;
      //       }
      //     }
      //   }
      }

      &__info-label {
        color: var(--color-newBrand-blue-01);
      }

      &__info-title {
        font-family: Montserrat, sans-serif;
        font-size: 54px;
        line-height: 60px;
      }

      &__info-description {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        color: var(--color-neutral-dark-mode-05);
      }
    }
  }

  
}



</style>