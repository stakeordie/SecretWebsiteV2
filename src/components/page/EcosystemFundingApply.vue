<template>
  <section class="page-ecosystem__apply">
      <div class="page-ecosystem__apply__content">
          <h3 class="page-ecosystem__apply__content__h3">
              Get ready to go big
          </h3>
          <p class="page-ecosystem__apply__content__p">
              Apply for our Ecosystem Fund and get the financial and strategic support you need to seriously scale your project.
          </p>
          <btn class="page-ecosystem__apply__content__btn center-text no-arrow" url="#" >APPLY FOR FUNDING</btn>
      </div>
      
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-ecosystem__apply{
    text-align: center;
    background: var(--color-neutral-dark-mode-02);

    &__content{
        width: 742px;
        margin: auto;
        padding: 16px;

        &__btn{
            width: 300px;
        }

    }
}
</style>