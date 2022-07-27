<template>
  <div class="learn-article-column-single">
    <div class="learn-article-column-single__content">
      <vue-markdown>
        {{ data }}
      </vue-markdown>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      data: `
### H3 Title

[Secret Network](#) is a unique layer 1 blockchain that features “secret” smart contracts - privacy-preserving smart contracts that allow decentralized applications to run with encrypted inputs, outputs, and state. SCRT is the native coin of Secret Network, used for all network fees, staking, and on-chain governance of the protocol. (Note that this is governance of Secret Network itself, not of applications built on the network.) You can think of the relationship between SCRT and Secret Network as similar to the relationship between ETH and Ethereum.  


Similar to how Ethereum has ERC-20 tokens (a fungible token standard for Ethereum), Secret Network has SNIP-20 tokens, or Secret Tokens, based on a fungible token standard for Secret Network. That means that secret tokens, just like ERC-20 tokens, can have many different types of functionality and represent many different types of assets. For example, currently there are $85M worth of Ethereum assets wrapped on Secret Network as secret tokens, which can be viewed on the Secret Ethereum Bridge. Note that SCRT itself is not a privacy coin (its use is transparent on-chain) but secret tokens are privacy-preserving.
`,
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-column-single {
  max-width: 742px;
  margin: auto;
  padding: var(--f-gutter);


    & .content {
      width: 100%;

      & .box {
        padding: 0;
      }
    }
}
</style>
