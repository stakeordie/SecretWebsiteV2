<template>
  <section class="austin-event-partnership">
    <h5>IN PARTNERSHIP WITH</h5>

    <div class="austin-event-partnership__container">
      <div class="austin-event-partnership__container__cont labs">
        <div class="by__img">
          <img
            src="../../assets/about-secret-network/scrt-labs-pink-logo.svg"
            alt=""
          />
        </div>
        <p class="by__p">
          SCRT Labs is the core dev team and driving force behind Secret
          Network, and one of the leading experts in building private computing
          solutions.
        </p>
        <div class="by__links">
          <a
            href="https://scrtlabs.com/"
            target="_blank"
            class="by__links__link"
          >
            SCRTLABS.COM
            <img src="../../assets/events/arrow-left.svg" alt=""
          /></a>
        </div>
      </div>

      <div class="austin-event-partnership__container__cont foundation">
        <div class="by__img">
          <img src="../../assets/events/logos/legendao-logo.png" alt="" />
        </div>
        <p class="by__p">
          Legendao is the first-ever NFT Mint Lab designed to be its own
          universe, providing users with a gamified experience and enabling them
          to obtain unique and exclusive Secret NFTs.
        </p>
        <div class="by__links">
          <a
            href="https://legendao.io/"
            target="_blank"
            class="by__links__link"
          >
            LEGENDAO.IO
            <img src="../../assets/events/arrow-left.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.austin-event-partnership {
  padding: 64px 0;

  & h5 {
    text-align: center;
    margin-bottom: 52px;
    text-transform: uppercase;
    //font-family: var(--f-default-headers-font);
    color: var(--austin-event-color-blue);
    font-weight: 500;
    letter-spacing: 1px;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
    max-width: 1164px;
    margin: auto;
    padding: var(--f-gutter);

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      padding: var(--f-gutter);
    }

    &__cont {
      padding: 0 16px;
      max-width: 548px;
      margin: 0 auto;

      & .by__img {
        max-height: 60px;
        margin-bottom: 12px;

        @include respond-to("<=s") {
          height: 70px;
        }

        & img {
          height: 60px;
          //margin: auto;
        }
      }

      .by__links {
        &__link {
          display: flex;
          color: var(--color-neutral-dark-mode-05) !important;
          font-weight: 700;

          &:hover {
            color: var(--theme-links-hover) !important;
          }

          & img {
            margin-left: 12px;
          }
        }
      }
    }
  }
}
</style>
