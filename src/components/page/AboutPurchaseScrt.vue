<template>
  <section class="about-purchase-scrt">
    <!-- Beginner -->
    <div class="about-purchase-scrt__method">
      <img src="@/assets/icon-beginner.svg" alt="">
      <div class="about-purchase-scrt__title">
        <h6>BEGINNER</h6>
        <h3>Buy Directly</h3>
      </div>
      <p>
        Depending on your jurisdiction, you may be able to buy SCRT using your
        bank account or credit card with this service:
      </p>
      <section class="resources">
        <nav>
          <a href="https://global.transak.com/" target="blank"><img src="@/assets/icon-transak.svg" alt=""><span>Transak</span></a>
        </nav>
      </section>
      <p class="note">
        Note: Direct purchase is currently unavaible in the U.S. Make sure you
        are aware of restrictions and waiting periods.
      </p>
    </div>
    <!-- Intermediate -->
    <div class="about-purchase-scrt__method">
      <img src="@/assets/icon-intermediate.svg" alt="">
      <div class="about-purchase-scrt__title">
        <h6>INTERMEDIATE</h6>
        <h3>Centralized Exchanges</h3>
      </div> 
      <p>
        Depending on your jurisdiction, you can buy SCRT on these centralized
        exchanges operated by traditional businesses:
      </p>
      <section class="resources">
        <nav>
          <a href="https://www.binance.com/en" target="blank"><img src="@/assets/icon-binance.svg" alt=""><span>Binance</span></a>
          <a href="https://www.bitmart.com/" target="blank"><img src="@/assets/icon-bitmart.svg" alt=""><span>Bitmart</span></a>
          <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwil6O2C1f3yAhVxCn0KHSJ5AgwYABAAGgJwdg&ae=2&ohost=www.google.com&cid=CAESQeD2OvgDb5p4MSCspu5Sz5m48C9jMQLSamCA4M4vBMEcudIGv6ZN1gk20P315f3nsAlUTsvO74R22KbzKNhLK3ky&sig=AOD64_1bFMEKjThuAY41LrKWdnr9qi2fzw&q&adurl&ved=2ahUKEwiNl-WC1f3yAhXP7Z4KHT83CEAQ0Qx6BAgCEAE" target="blank"><img src="@/assets/icon-coinex.svg" alt=""><span>CoinEx</span></a>
        </nav>
        <nav>
          <a href="https://www.mexc.com/" target="blank"><img src="@/assets/icon-mexc.svg" alt=""><span>MEXC</span></a>
          <a href="https://www.gate.io/" target="blank"><img src="@/assets/icon-gateio.svg" alt=""><span>Gate.io</span></a>
        </nav>
      </section>
    </div>
    <!-- Decentralized -->
    <div class="about-purchase-scrt__method">
      <img src="@/assets/icon-advanced.svg" alt="">
      <div class="about-purchase-scrt__title">
        <h6>ADVANCED</h6>
        <h3>Decentralized Exchanges</h3>
      </div>
      <p>You can buy mainnet SCRT from DEXes on Secret Network or a wrapped version of Secret from DEXes on Ethereum.</p>
      <section class="resources">
        <nav>
          <h6>On Secret Network</h6>
          <a href="https://secretswap.io/" target="blank"><img src="@/assets/icon-secretSwap.svg" alt=""><span>Secret Swap</span></a>
          <a href="https://sienna.network/" target="blank"><img src="@/assets/icon-sienna.svg" alt=""><span>Sienna</span></a>
        </nav>
        <nav>
          <h6>On Ethereum</h6>
          <a href="https://sushi.com/" target="blank"><img src="@/assets/icon-sushiSwap.svg" alt=""><span>SushiSwap</span></a>
          <a href="https://uniswap.org/" target="blank"><img src="@/assets/icon-uniswap.svg" alt=""><span>Uniswap</span></a>
        </nav>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.about-purchase-scrt {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @include respond-to("<=m") {
    grid-template-columns: 1fr 1fr;
  }
  @include respond-to("<=s") {
    grid-template-columns: 1fr;
  }
  gap: 36px;
  h6 {
    color: #748BA5;
  }
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  .note {
    color: #748BA5;
  }
  &__method {
    display: grid;
    gap: 14px;
    margin-bottom: 121px;
    *{margin: 0;}
    .resources {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 48px;
      width: max-content;
      nav {
        display: grid;
        width: max-content;
        align-content: start;
        row-gap: var(--f-gutter);
        h6 {
          color: #D4DCE3;
        }
        a {
          display: grid;
          grid-auto-flow: column;
          align-items: self-start;
          justify-content: start;
          gap: 6px;
          *{margin: 0;}
        }
      }
    }
  }
}
</style>
