<template>
  <section class="about-secret-network-hero">
    <div class="about-secret-network-hero__img">
      <img
        src="../../assets/about-secret-network/about-secret-network-hero-img.svg"
        alt=""
        class="hero-img"
      />
    </div>

    <div class="about-secret-network-hero__content">
      <h4 class="about-secret-network-hero__content__h5">
        About SECRET NETWORK
      </h4>
      <h1 class="about-secret-network-hero__content__h1">
        Powering Web3 Privacy
      </h1>
      <p class="about-secret-network-hero__content__p">
        Secret Network is the first mainnet blockchain with privacy-preserving
        smart contracts launched in 2020. This makes it possible to build apps
        that are decentralized and permissionless—yet private.
      </p>
      <div class="about-secret-network-hero__content__list">
        <div class="list-item">
          <img
            src="../../assets/about-secret-network/check-circle-green.svg"
            alt=""
            class="list-icon"
          />
          <p class="list-info">Privacy-preserving smart contracts</p>
        </div>
        <div class="list-item">
          <img
            src="../../assets/about-secret-network/check-circle-green.svg"
            alt=""
            class="list-icon"
          />
          <p class="list-info">
            Encrypted inputs, outputs, and state by default
          </p>
        </div>
        <div class="list-item">
          <img
            src="../../assets/about-secret-network/check-circle-green.svg"
            alt=""
            class="list-icon"
          />
          <p class="list-info">
            Transparent underlying ledger; completely auditable
          </p>
        </div>
      </div>
      <btn class="text-center no-arrow btn" url="../../ecosystem/dapps">
        EXPLORE OUR ECOSYSTEM</btn
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.about-secret-network-hero {
  padding: 62px 0 120px 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 26px;

  @include respond-to("<=m") {
    grid-template-columns: 1fr;
    padding: 60px var(--f-gutter);
  }

  &__content {
    max-width: 504px;
    //padding: 20px;

    display: grid;
    row-gap: var(--f-gutter);
    margin: auto;

    @include respond-to("<=s") {
      padding: var(--f-gutter);
    }

    &__h5 {
      color: var(--color-ver2-primary-turquoise);
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 0;
      font-family: var(--f-default-text-font);
      letter-spacing: 1px;
    }
    &__h1 {
      // margin-bottom: 0;
      font-family: var(--f-default-headers-font);
      font-weight: 600;
      font-size: 54px;
      line-height: 60px;

      // @include respond-to("<=l") {
      //   font-size: 54px;
      //   line-height: 60px;
      // }

      @include respond-to("<=s") {
        // font-size: 36px;
        // line-height: 50px;
      }
    }

    & p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
    }

    &__list {
      display: grid;
      row-gap: 10px;
      margin-bottom: 10px;

      & .list-item {
        display: flex;
        gap: 10px;
        align-items: center;
        //font-size: var(--f-default-text-size);

        & p {
          font-size: var(--paragraph-font-size-big);
          line-height: var(--paragraph-line-height-big);
          margin-bottom: 0;
        }
      }

      & .list-icon {
        width: 24px;
        height: 24px;
        padding: 2px;
        // margin-right: 10px;
      }
    }
  }

  &__img {
    align-self: center;

    @include respond-to("<=m") {
      //order: 2;
      display: none;
    }

    img {
      width: 600px;
      //max-height: 395px;
      margin: auto;
    }
  }

  & .btn {
    padding: 10px 10px;
    margin: 0;

    max-width: 349px !important;
    min-width: 160px;

    justify-content: center;

    @include respond-to("<=m") {
      max-width: 100% !important;
    }

    span {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;

      @include respond-to("<=s") {
        font-size: 16px;
      }
    }
  }
}
</style>
