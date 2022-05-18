<template>
  <section class="austin-event-meet">
    <div class="austin-event-meet__container">
      <div class="austin-event-meet__container__image">
        <img src="../../assets/events/kevin-smith.png" alt="Have questions" />
      </div>
      <div class="austin-event-meet__container__content">
        <h4 class="text-h4">Meet Kevin Smith</h4>
        <p class="text-p">
          Acclaimed Filmaker, Actor, Comedian and Directof of Killroy Was Here,
          the first feature-film NFT, powered by Secret.
        </p>

        <div class="austin-event-meet__container__content__btns">
          <btn
            class="btn-blue text-center no-arrow special-icon"
            url="https://discord.com/invite/SJK32GY"
          >
            <img class="special-icon" src="../../assets/icon-social-discord.svg" />
            Join our Discord
          </btn>
          <btn  class="text-center no-arrow special-icon" url="https://forum.scrt.network/">
            <img
              class="special-icon"
              src="../../assets/icon-social-forum.svg"
            />
            Post on forums
          </btn>
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

.austin-event-meet {
    padding: 64px 0;

  &__container {
    background: var(--color-neutral-dark-mode-03);
    border-radius: 10px;
    padding: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    @include respond-to("<=s"){
        flex-direction: column;
    }

    &__image{
        margin-right: 56px;
        @include respond-to("<=s"){
        margin-right: 0;
        margin-bottom: 56px;
    }
    }

    &__content {
      max-width: 627px;

      &__btns {
        display: inline-grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        //min-width: 100%;
        //margin: auto;

        @include respond-to("<=s") {
          grid-template-columns: 1fr;
          display: grid;
        }

        & a {
          max-width: fit-content;
          min-width: fit-content;

          @include respond-to("<=m") {
            max-width: 100%;
            min-width: 100%;
          }
          & span{
              align-items: center;
              
              & img{
                  vertical-align: sub;
              }
          }
        }

        & .btn-blue {
          background-color: var(--color-newBrand-blue-01) !important;
        }

        & .btn-blue:hover{
            background-color: var(--color-neutral-dark-mode-02) !important;
        }
      }
    }
  }
}
</style>