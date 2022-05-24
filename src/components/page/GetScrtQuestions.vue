<template>
  <section class="get-scrt-questions">
    <div class="get-scrt-questions__banner">
      <div class="get-scrt-questions__banner__img">
        <img src="../../assets/have-questions.png" alt="Have questions" />
      </div>
      <div class="get-scrt-questions__banner__content">
        <div class="get-scrt-questions__banner__content__text">
          <h5 class="text-h5">SUPPORT</h5>
          <h4 class="text-h4">Get help from the community</h4>
          <p class="text-p">
            Got stuck? Join one of our channels and reach out to our support
            team.
          </p>
        </div>
        <div class="get-scrt-questions__banner__content__btns">
          <btn
            class="btn-blue text-center no-arrow special-icon"
            url="https://discord.com/invite/SJK32GY"
            ><img
              class="special-icon"
              src="../../assets/icon-social-discord.svg"
            />
            Join our Discord</btn
          >
          <btn
            class="text-center no-arrow special-icon"
            url="https://forum.scrt.network/"
            ><img
              class="special-icon"
              src="../../assets/icon-social-forum.svg"
            />Post on forums</btn
          >
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

.get-scrt-questions {
  background: var(--color-neutral-dark-mode-03);
  border-radius: 10px;
  padding: 26px;

  

  @include respond-to("<=m") {
    padding: 26px 16px;
  }

  &__banner {
    justify-content: center;

    display: grid;
    grid-template-columns: 261px 500px;
    gap: 56px;
    // display: flex;
    align-items: center;

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }

    &__img {
      margin: auto;

      & img {
        object-fit: contain;
        align-self: center;
      }
    }

    &__content {
      max-width: 500px;
      margin: auto;

      &__text {
         & h5{
            color: var(--color-analog-secondary-yellow) !important;
        }
       
      }

      &__btns {
        display: inline-grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        //min-width: 100%;
        //margin: auto;

        @include respond-to("<=m") {
          grid-template-columns: 1fr;
          display: grid;
        }

        & btn {
          max-width: fit-content;
          min-width: fit-content;

          @include respond-to("<=m") {
            max-width: 100%;
            min-width: 100%;
          }
        }

        & .btn-blue {
          background-color: var(--color-analog-secondary-yellow) !important;
          

          & .btn-text{
            color: var(--color-neutral-dark-mode-02) !important;

            & img {
              -webkit-filter: invert(100%);
              filter: invert(100%)
            };
          }

          &:hover{
            background-color: var(--color-neutral-dark-mode-02) !important;

            & .btn-text{
            color: var(--color-neutral-dark-mode-06) !important;

              & img {
                -webkit-filter: invert(0%);
                filter: invert(0%)
              };
            }
          }
        }
      }
    }
  }
}

</style>