<template>
  <section class="page-developers">
    <h3 class="page-developers__sub-title">START HERE</h3>
    <h1 class="page-developers__title">Dive in with Secret Pathways</h1>
    <p class="page-developers__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida
      mattis eu sit netus ullamcorper molestie tincidunt. Augue congue convallis
      imperdiet tincidunt.
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developers{
  position: relative;
  text-align: center;
  display: block;
    text-align: center ;
    min-height: 287px;
    top:120px;

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

    &__text{
      text-align: center;
      max-width: 600px;
      margin: auto;
    }
}

</style>