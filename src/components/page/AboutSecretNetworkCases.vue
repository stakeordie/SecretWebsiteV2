<template>
  <section class="about-secret-network-cases">
    <div class="about-secret-network-cases__header">
      <div class="header-content">
        <div class="header">
          <h4 class="about-secret-network-header__h5">USE CASES</h4>
          <h1 class="about-secret-network-header__h1">
            The possibilities <span>Secret Contracts unlock</span>
          </h1>
        </div>
        <p class="about-secret-network-header__p">
          Secret’s smart contracts e.g. “Secret Contracts” are
          private-by-default. Input, output, and state are encrypted and can’t
          be viewed by others, unless they’re given access. This opens up use
          cases that aren’t possible on public-by-default blockchains.
        </p>
      </div>
    </div>

    <div class="about-secret-network-cases__content">
      <div
        class="about-secret-network-cases__content__topic"
        v-for="(item, index) in material"
        :key="index" >
        <img :src="item.imageUrl" alt="" />
        <div class="about-secret-network-cases__title">
          <h5>{{ item.eyebrow }}</h5>
          <h2>{{ item.title }}</h2>
        </div>
        <p>
          {{ item.description }}
        </p>
        <btn v-if="item.url" class="center-text no-arrow ctas-button" :url="item.url ? item.url : ''"> READ MORE</btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      material: [
        {
          imageUrl: "/img/about-secret-network/bridges-img.svg",
          eyebrow: "SECRET TOKENS",
          title: "Hold and use your tokens in privacy",
          description:
            "With Secret Bridges and the SNIP-20 standard you can bridge over and make any token privacy-preserving. Once your tokens are Secret, balances, transaction details, and token metadata can only be accessed with a viewing key. ",
          url: "../secret-tokens-bridges",
        },
        {
          imageUrl: "/img/about-secret-network/learn-defi-img.svg",
          eyebrow: "SECRET DEFI",
          title: "Stay safe while spending, saving, and trading.",
          description:
            "DeFi apps built with Secret’s privacy-preserving smart contracts provide MEV-resistance by default and protect its users from hackers and front-runners. This includes exchanges, market makers, lending protocols, and more. ",
          url: "../secret-finance",
        },
        {
          imageUrl: "/img/about-secret-network/nft-purple-img.svg",
          eyebrow: "SECRET NFTS",
          title: "Fully own all of your creative work",
          description:
            "With Secret NFTs’ private metadata and ownership, creators can control who can access their content and in what way, protect the identity of their fans, and create art and entertainment not possible elsewhere.",
          url: "../secret-nfts",
        },
        {
          imageUrl: "/img/about-secret-network/game-img.svg",
          eyebrow: "SECRET GAMING",
          title: "Design & play with true randomness",
          description:
            "With Secret NFTs, game designers can build in true randomness without having to move off-chain. This powers real competitive gaming—instead of a game of chain analysis—and opens up a world of new design possibilities.",
          url: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.about-secret-network-cases {
  
  &__title {
    display: grid;
    gap: var(--f-gutter-s);
    *{margin: 0;}
  }
    & h4,
    & h5 {
        color: var(--color-ver2-primary-orange);
      }
      & p {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
      }
  &__header {
    border-bottom: solid 1px var(--color-neutral-dark-mode-04);
    padding: 42px 0;

    .header-content {
      padding: var(--f-gutter);

      @include respond-to(">=l") {
        max-width: 800px;
      }

      & h4,
    & h5 {
        color: var(--color-ver2-primary-orange);
      }

      & h1 {
        display: grid;
      }
      
    }
  }

  &__content{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(354px, 1fr));
    gap: 54px;

    padding: 42px 0;
    align-items: baseline;

    @include respond-to(">=xxl"){
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        gap: 36px;
    }


    @include respond-to("<=m"){
        grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
        gap: 36px;

            &__topic{
        padding: var(--f-gutter);

        & img{
            margin: auto;
            height: 200px !important;
        }

     }
    }

    &__topic{
        
        display: grid;
        gap: var(--f-gutter-l);
        padding: var(--f-gutter);
        align-self: stretch;  
        & img{
            margin: auto;
            height: 300px;
            padding: var(--f-gutter);
        }

    }
  }
}
</style>