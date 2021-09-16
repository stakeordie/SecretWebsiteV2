<template>
  <section class="about-get-started">
    <div class="about-get-started__left">
      <h6>Get Started</h6>
      <h2>About Secret (SCRT)</h2>
      <p>Secret (SCRT) is a cryptocurrency and the native coin of the Secret Network blockchain. Just like Ethereum (ETH) and Bitcoin (BTC), you hold your Secret (SCRT) in a wallet and spend it when you want to use Secret Network.</p>
      <nav>
        <a href="#purchase">Buy SCRT</a>
        <span>•</span>
        <a href="#store">Store SCRT</a>
        <span>•</span>
        <a href="#stake-scrt">Stake SCRT</a>
        <span>•</span>
        <a href="#scrt-governance">SCRT Governance</a>
        <span>•</span>
        <a href="#apps">SCRT Apps</a>
      </nav>
    </div>
    <div class="about-get-started__right">
      <img src="@/assets/illustration-logo-scrt-3d.svg" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.about-get-started {
  display: grid;
  grid-template-columns: 66% 1fr;
  @include respond-to("<=m") {
    grid-template-columns: 1fr;
    gap: var(--f-gutter-xl);
  }
  align-items: center;
  padding-top: 36px;
  padding-top: 56px;
  &__left {
    display: grid;
    gap: 8px;
    @include respond-to("<=m") {
      order: 2;
    }
    * {margin: 0;}
    h6 {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: var(--color-highkey-secondary-yellow)
    }
    h2 {
      font-weight: 600;
      font-size: 36px;
      line-height: 48px;
    }
    p {
      font-size: 20px;
      line-height: 28px;
    }
    nav {
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
      width: max-content;
      @include respond-to("<=m") {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
      }
    }
  }
  &__right {
    display: grid;
    justify-content: center;
  }
}
</style>