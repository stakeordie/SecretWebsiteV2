<template>
  <div>
    <div class="scrt-structure">
      <div class="etherium">
        <img src="../../../content/img/logo-etherium.svg" alt="" />
        <h5>Etherium's smart contacts</h5>
      </div>
      <div class="plus-1 icon">
        <img src="../../../content/img/icon-plus.svg" alt="" />
      </div>
      <div class="monero">
        <img src="../../../content/img/logo-monero.svg" alt="" />
        <h5>Monero's privacy by default design</h5>
      </div>
      <div class="plus-2 icon">
        <img src="../../../content/img/icon-plus.svg" alt="" />
      </div>
      <div class="cosmos">
        <img src="../../../content/img/logo-cosmos.svg" alt="" />
        <h5>Cosmos' scalability and interoperability</h5>
      </div>
      <div class="equal icon">
        <img src="../../../content/img/icon-equal.svg" alt="" />
      </div>
      <div class="scrt-network">
        <img src="../../../content/img/logo-secret-network.svg" alt="" />
        <h5>
          Secret Network: the first & only privacy-preserving smart contract
          blockchain.
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.scrt-structure {
  display: grid;
  grid-template-columns: repeat(7, auto);
  gap: var(--f-gutter);
  text-align: center;

  @include respond-to("<=s") {
    grid-template-columns: 1fr;

    h5 {
      margin-bottom: 0;
    }
  }

  img {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }

  .icon {
    margin: auto;

    img {
      margin: 0;
    }
  }
}
</style>