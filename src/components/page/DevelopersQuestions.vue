<template>
  <section class="page-developer-questions">
    <div class="page-developer-questions__banner">
      <div class="page-developer-questions__banner__image">
        <img src="/temp/have-questions.png" alt="Have questions" />
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
            class="
              page-developer-questions__banner__content__buttons__blue-button
            "
          >
            <btn class="text-center no-arrow" url="https://discord.com/invite/SJK32GY">Join our Discord</btn>
          </div>
          <div
            class="
              page-developer-questions__banner__content__buttons__dark-button
            "
          >
            <btn class="text-center no-arrow" url="https://forum.scrt.network/">Post on forums</btn>
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
    margin: 100px 0;

  &__banner {
    display: grid;
    grid-template-columns: 1fr 2fr;
    background: var(--color-neutral-dark-mode-03);
    padding: var(--f-gutter);
    border-radius: 10px;

    @include respond-to("<=s"){
        grid-template-columns: 1fr;
    }

    &__image {
      padding: var(--f-gutter-l);
      width: 260px;
      margin: auto;
    }

    &__content {
        margin: auto 0;
      &__title {
          font-size: var(--f-h4-text-size);
          
      }


      &__buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 4px;

         @include respond-to("<=xs"){
        grid-template-columns: 1fr;
    }

        &__blue-button {
          .text-center {
            background-color: #4195c4 !important;
            font-size: var(--f-default-text-size);
            letter-spacing: 1px;
          }
        }
      }
    }
  }
}
</style>