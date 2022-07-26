<template>
  <div class="learn-article-column-single">

    <div class="learn-article-column__text">
        <h3 class="learn-article-column__title title__align-center">
        H3 Title
        </h3>
        <h3 class="learn-article-column__title">H3 Title</h3>

        <p class="learn-article-column__paragraph">
        <a href="#">Secret Network</a> is a unique layer 1 blockchain that features “secret” smart
        contracts - privacy-preserving smart contracts that allow decentralized
        applications to run with encrypted inputs, outputs, and state. SCRT is the
        native coin of Secret Network, used for all network fees, staking, and
        on-chain governance of the protocol. (Note that this is governance of
        Secret Network itself, not of applications built on the network.) You can
        think of the relationship between SCRT and Secret Network as similar to
        the relationship between ETH and Ethereum. 
        <br />
        <br />
        Similar to how Ethereum has
        ERC-20 tokens (a fungible token standard for Ethereum), Secret Network has
        SNIP-20 tokens, or <a href="">Secret Tokens</a>, based on a fungible token standard for
        Secret Network. That means that secret tokens, just like ERC-20 tokens,
        can have many different types of functionality and represent many
        different types of assets. For example, currently there are $85M worth of
        Ethereum assets wrapped on Secret Network as secret tokens, which can be
        viewed on the <a href="">Secret Ethereum Bridge</a>. Note that SCRT itself is not a
        privacy coin (its use is transparent on-chain) but secret tokens are
        privacy-preserving.
        </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-column-single {
  max-width: 710px;
  margin: auto;

//   @include respond-to("<=s") {
//     padding: var(--f-gutter);
//   }

  .title__align-center {
    text-align: center;
  }
}
</style>