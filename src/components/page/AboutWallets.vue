<template>
  <section class="about-wallets__wrapper">
    <section class="about-wallets__wrapper__collection">
      <a href="https://wallet.keplr.app/" target="blank"  class="about-wallets__wrapper__collection__wallet">
        <img src="@/assets/icon-keplr.svg" alt="">
        <div class="title">
          <h6>Keplr</h6>
          <p class="recommended">Recommended</p>
        </div>
      </a>
      <a href="https://citadel.one/" target="blank"  class="about-wallets__wrapper__collection__wallet">
        <img src="@/assets/icon-citadelOne.svg" alt="">
        <div class="title">
          <h6>Citadel.One</h6>
        </div>
      </a>
      <a href="https://wallet.cosmostation.io/" target="blank"  class="about-wallets__wrapper__collection__wallet">
        <img src="@/assets/icon-cosmostation.svg" alt="">
        <div class="title">
          <h6>Cosmostation</h6>
        </div>
      </a> 
      <a href="https://www.ledger.com/" target="blank"  class="about-wallets__wrapper__collection__wallet">
        <img src="@/assets/icon-ledger.svg" alt="">
        <div class="title">
          <h6>Ledger</h6>
        </div>
      </a>
    </section>
    <p class="about-wallets__wrapper__note">Note: Keplr is currently the only wallet that integrates with all applications buit on the network.</p>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.about-wallets__wrapper {
  display: grid;
  gap: var(--f-gutter);
  &__collection {
    display: grid;
    gap: var(--f-gutter);
    grid-template-columns: repeat(4, 1fr);
    @include respond-to("<=m") {
      grid-template-columns: repeat(2, 1fr);
    }
    justify-items: stretch;
    align-items: stretch;
    // max-height: 174px;
    * {margin: 0}
    &__wallet {
      padding: 26px;
      background: var(--color-neutral-dark-mode-03);
      display: grid;
      row-gap: var(--f-gutter);
      align-items: center;
      justify-items: center;
      justify-content: center;
      border-radius: 10px;
      transition: 0.2s ease;
      h6 {
        color: white !important;
        font-weight: 600;
      }
      &:hover {
        transform: var(--card-hover-transform);
        box-shadow: var(--card-hover-shadow) var(--accent-gray);
      }
    }
  }
  &__note {
    color: #748BA5;
  }
}
</style>