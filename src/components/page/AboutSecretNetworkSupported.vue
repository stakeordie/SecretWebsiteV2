<template>
  <section class="about-secret-network-supported">
    <h3>Supported By</h3>

    <div class="about-secret-network-supported__container">
      <div class="about-secret-network-supported__container__cont labs">
        <div class="by__img">
          <img
            src="../../assets/about-secret-network/scrt-labs-pink-logo.svg"
            alt=""
          />
        </div>
        <p class="by__p">
          SCRT Labs is the driving force and the founding core development team
          behind Secret Network. Their mission is to create products and systems
          that accelerate the adoption of privacy-first, decentralized
          technologies.
        </p>
      </div>
      <div class="about-secret-network-supported__container__cont foundation">
        <div class="by__img">
          <img
            src="../../assets/about-secret-network/secret-foundation-logo.svg"
            alt=""
          />
        </div>
        <p class="by__p">
          The foundation that supports Secret and fosters the adoption of
          open-source, privacy-centric technologies and networks that serve the
          public good.
        </p>
      </div>
    </div>
    <div class="supported__btns">
      <btn
        class="center-text no-arrow ctas-button"
        url="../../ecosystem/contributors"
      >
        VIEW ALL CONTRIBUTORS</btn
      >
      <btn
        class="center-text no-arrow ctas-button"
        url="../../ecosystem/partners"
      >
        VIEW ALL PARTNERS</btn
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.about-secret-network-supported {
  padding: 64px 0 16px 0;
  display: grid;
  grid-template-columns: 227px 1fr;
  gap: 24px;
  row-gap: 64px;

  @include respond-to("<=m") {
    grid-template-columns: 1fr;
    gap: 10px;
    row-gap: 0;
  }

  & h3 {
    text-align: center;
    margin-bottom: 52px;
    //padding: var(--f-gutter);

    @include respond-to("<=m") {
    margin-bottom: 10px;
  }
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
     gap: 28px;
    //max-width: 800px;
    margin: auto;
    border-left: solid 1px var(--color-neutral-dark-mode-04);
    padding-left: 42px;

    @include respond-to("<=xs") {
      grid-template-columns: 1fr;
      padding: var(--f-gutter);
    }

    @include respond-to("<=m") {
      padding: var(--f-gutter);
      border-left: none;
      gap: 10px;
    }

    &__cont {
      //padding: 0 16px;
      @include respond-to("<=s") {
        padding: var(--f-gutter);
      }

      & .by__img {
        //max-height: 55px;
        margin-bottom: 12px;

        @include respond-to("<=s") {
          //height: 70px;
        }

        & img {
          height: 55px;
          //margin: auto;
        }
      }

      .by__links {
        display: flex;
        justify-content: space-between;

        @include respond-to("<=xs") {
          flex-direction: column;
        }
      }
    }
  }

  & .supported__btns {
    grid-column: 1 / span 2;
    display: flex;
    justify-content: center;

    @include respond-to("<=m") {
      grid-column: 1 ;
      padding: var(--f-gutter);
    }

    @include respond-to("<=s") {
      flex-direction: column;

      btn{
        width: 100%;
      }
    }
    a {
      @include respond-to(">=l") {
        min-width: 342px;
      }
    }
  }
}
</style>