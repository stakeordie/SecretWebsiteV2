<template>
  <div>
    <div class="card-current-price">
      <h6 class="current">Current SCRT Price</h6>
      <p class="price">$ 2.89</p>
      <h4 class="percentage">0.12% &#8599; (Last 24 hours)</h4>
    </div>

    <div class="btn-container">
      <div class="btn-support">
        <button>Supported Wallets &#8594;</button>
      </div>
      <div class="btn-get">
        <button>Get SCRT</button>
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

.card-current-price {
  border-radius: var(--f-radius);
  padding: var(--f-gutter-l);
  background: var(--theme-card-bg-default);
  height: 100%;
  display: grid;
  transition: 0.2s ease;
  margin-bottom: 26px;
  text-align: center;

  .current {
    color: var(--theme-card-text-color);
  }

  .price {
    font-family: Montserrat;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0px;
    color: rgba(90, 163, 97, 1);
  }

  .percentage {
    color: var(--theme-card-text-color);
  }
}

.btn-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;

  @include respond-to("<=s") {
    grid-template-columns: 1fr;
  }

  button {
    width: 100%;
  }

  .btn-support {
    button {
      background-color: var(--theme-card-button-bg);
      color: var(--theme-fg);
      font-weight: 700;
    }
  }

  .btn-get {
    button {
      background-color: var(--theme-fg);
      color: var(--theme-bg);
      font-weight: 700;
    }
  }
}
</style>