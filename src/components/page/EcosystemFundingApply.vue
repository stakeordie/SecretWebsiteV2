<template>
  <section class="page-ecosystem__apply">
      <div class="page-ecosystem__apply__content">
        <h3 class="page-ecosystem__apply__content__h3">
          Get ready to go big
        </h3>
        <p class="page-ecosystem__apply__content__p">
          Apply for our Ecosystem Fund and get the financial and strategic support you need to seriously scale your
          project.
        </p>
        <btn class="page-ecosystem__apply__content__btn center-text no-arrow"
          url="https://docs.google.com/forms/d/e/1FAIpQLSfyjl_vJ2PJa0TiHuENfaXqB8q57D9nL7zOrBXV1cXoHLhoiA/viewform">APPLY FOR FUNDING</btn>
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
        max-width: 742px;
        margin: var(--f-gutter-l) auto;
        padding: 16px;

        

        &__p{
            font-size: var(--paragraph-font-size-big);
            line-height: var(--paragraph-line-height-big);
            color: var(--color-neutral-dark-mode-06);
        }


    }
}
</style>