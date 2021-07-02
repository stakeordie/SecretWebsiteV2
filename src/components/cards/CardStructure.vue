<template>
  <div>
    <div class="scrt-structure">
      <div class="ethereum bc">
        <img src="../../../content/img/logo-ethereum.svg" alt="" />
        <h5>Ethereum's smart contacts</h5>
      </div>
      <div class="plus icon">
        <img src="../../../content/img/icon-plus.svg" alt="" />
      </div>
      <div class="monero bc">
        <img src="../../../content/img/logo-monero.svg" alt="" />
        <h5>Monero’s Privacy by Default</h5>
      </div>
      <div class="plus icon">
        <img src="../../../content/img/icon-plus.svg" alt="" />
      </div>
      <div class="cosmos bc">
        <img src="../../../content/img/logo-cosmos.svg" alt="" />
        <h5>Cosmos' scalability and interoperability</h5>
      </div>
      <div class="equal icon">
        <img src="../../../content/img/icon-equal.svg" alt="" />
      </div>
      <div class="scrt-network bc">
        <img src="../../../content/img/logo-secret-network.svg" alt="" />
        <h5 class="scrt">Secret Network</h5>
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
  --icon-height: 121px;
  --separator-height: 36px;

  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-column-gap: 28px;
  margin-bottom: 51px;

  @include respond-to("<=l") {
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 0;
    grid-row-gap: var(--f-gutter);

    h5 {
      margin-bottom: 0;
      width: 160px;
    }
  }

  .bc {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    align-items: center;
    grid-column-gap: 12px;

    h5 {
      max-width: 160px;
      text-align: left;
      margin: 0;
      &:not(.scrt) {
        opacity: 0.75;
      }
    }

    &:last-child {
      h5 {
        &:last-child {
          max-width: 200px;
        }
      }
    }

    img {
      width: 48px;
      height: 48px;
    }
  }

  .icon {
    width: 29px;
    align-self: center;
    &.plus {
    
    }
  }

  img {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
