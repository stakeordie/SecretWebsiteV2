<template>
  <section class="page-developer-questions">
    <div class="page-developer-questions__banner">
      <div class="page-developer-questions__banner__image">
        <img src="../../assets/have-questions.png" alt="Have questions" />
      </div>
      <div class="page-developer-questions__banner__content">
        <h3 class="page-developer-questions__banner__content__title">
          Have Questions?
        </h3>
        <p class="page-developer-questions__banner__content__text">
          We have a dedicated community ready to help guide you along.
        </p>
        <div class="page-developer-questions__banner__content__buttons">
          <div
            class="page-developer-questions__banner__content__buttons__blue-button">
            
            <btn class="text-center no-arrow special"  url="https://discord.com/invite/SJK32GY"><img class="special-icon" src="../../assets/icon-social-discord.svg" /> Join our Discord</btn>
          </div>
          <div
            class="
              page-developer-questions__banner__content__buttons__dark-button
            "
          >
            <btn class="text-center no-arrow special" url="https://forum.scrt.network/"><img class="special-icon" src="../../assets/icon-social-forum.svg" />Post on forums</btn>
          </div>
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

.page-developer-questions {
    margin: 124px 0;

    

  &__banner {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 16px;
    background: var(--color-neutral-dark-mode-03);
    padding: var(--f-gutter);
    border-radius: 10px;

    @include respond-to("<=s"){
        grid-template-columns: 1fr;
        grid-gap: 0px;
    }

    &__image {
      padding: var(--f-gutter-l);
      width: 260px;
      margin: auto;
    }

    &__content {
        margin: auto ;
      &__title {
          font-size: var(--f-h4-text-size);
          
      }


      &__buttons {
        display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    min-width: 100%;
    margin: auto;
    

         @include respond-to("<=xs"){
        grid-template-columns: 1fr;
        grid-gap: 0px;
    }

        &__blue-button {
          .text-center {
            background-color: var(--color-newBrand-blue-01) !important; 
            font-size: var(--f-default-text-size);
            letter-spacing: 1px;
            &.special-icon{
              img{
                display: inline-block !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>