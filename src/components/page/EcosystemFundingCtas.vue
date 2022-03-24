<template>
  <div class="page-ecosystem-funding">
    <section class="page-ecosystem-funding__ctas">
      <div class="page-ecosystem-funding__ctas__content">
        <div class="page-ecosystem-funding__ctas__content__item">
          <div class="page-ecosystem-funding__ctas__content__item-icon-box">
            
          </div>
          <h4>Get Started</h4>
          <p>Install a wallet, get SCRT, and stake it to earn rewards while securing the network.</p>
          <btn class="text-center no-arrow" url="https://discord.gg/PzdQ9bfvcX">Get SCRT</btn>

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
  &__ctas {
    
    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: var(--f-gutter-l);
      padding-top: var(--f-gutter-xxl);
      padding-bottom: var(--f-gutter-xxl);

      @include respond-to("<=l") {
        padding-top: var(--f-gutter-l);
        padding-bottom: var(--f-gutter-l);
      }
      

      

      
    }
  }
}
</style>