<template>
  <section class="page-developers-funding">
    <div class="page-developers-funding__content">
      <h6 class="page-developers-funding__content__sub-title">
          FUNDING & GRANTS
          </h6>
      <h4 class="page-developers-funding__content__title">
        Bring your (biggest) ideas to life
      </h4>
      <p class="page-developers-funding__content__text">
        We’re offering 400M+ in funding with over 30 partners and contributorsto both starting and scaling builders.
      </p>
      <div class="page-developers-funding__content__buttons">
        <btn class="text-center no-arrow" url="/">View ECOSYSTEM FUND</btn>
        <div class="page-developers-funding__content__buttons__blue-button">
        <btn class="text-center no-arrow" url="/">View Grants</btn>  
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developers-funding{
    margin: 56px 0;

    &__content{
        text-align: center;
        max-width: 742px;
        margin: auto;

        &__sub-title{
            font-family: montserrat;
            text-transform: uppercase;
            font-weight: 100;
            font-size: var(--f-h4-text-size);
            color: var(--color-neutral-dark-mode-05);
            line-height: 24px;

          @include respond-to("<=s") {
            font-size: var(--f-h6-text-size);
          }
        }
        &__title{
            font-family: montserrat;
        font-size: var(--f-h3-text-size);
        line-height: 30px;
         
        @include respond-to("<=s") {
            font-size: var(--f-h4-text-size);
          }
        }

        &__buttons{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 16px;

            @include respond-to("<=xs"){
                grid-template-columns: 1fr;
            }

        }
    }
}




</style>