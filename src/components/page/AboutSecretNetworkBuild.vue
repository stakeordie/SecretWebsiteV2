<template>
  <section class="about-secret-network-build">
      <div class="about-secret-network-build__header">
          <h3 class="header-h4">
              Building to become the web3 privacy hub
          </h3>
          <p class="header-p">
              How we’re optimizing for interoperability, scalability, and decentralization.
          </p>
      </div>
      <div class="about-secret-network-build__container">
          <div class="about-secret-network-build__container__item" v-for="(item, index) in reasons" :key="index">
              <img :src="item.imageUrl" alt=""  class="about-secret-network-build__container__item__icon" />
                <h4 class="about-secret-network-build__container__item__name">{{ item.title }}</h4>
                <p class="about-secret-network-build__container__item__p">
                {{ item.description }}
                </p>
          </div>

      </div>
  </section>
</template>

<script>
export default {
    data() {
    return {
      reasons: [
        {
          imageUrl: "/img/about-secret-network/cosmos-small-icon.svg", 
          title: "Cosmos IBC-enabled",
          description: "Secret Network is built using CosmWasm, enabling it to run on multiple chains using IBC and interact with the Cosmos ecosystem.",
        },
         {
          imageUrl: "/img/about-secret-network/file-icon.svg",
          title: "Private data, public ledger",
          description: "While data is private, Secret’s code and native coin (SCRT) are public—making it permissionless and providing complete auditability of the blockchain.",
        },
         {
          imageUrl: "/img/about-secret-network/bars-icon.svg",
          title: "Delegated Proof-of-Stake consensus",
          description: "With DPoS, Secret can process close to 10,000 transactions per second with a block time of only 6-7 seconds. It makes the blockchain more environmentally friendly, and allows any token holder to participate in governance.",
        },
         {
          imageUrl: "/img/about-secret-network/layer-icon.svg",
          title: "Independent consensus layer",
          description: "With its own set of validators + requirements, Secret Network can optimize for privacy and performance, while maintaining the flexibility to upgrade and improve continuously.",
        },
      ],
    };
  },
}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.about-secret-network-build{
    padding: 128px 0;

    @include respond-to("<=s"){
            padding: 128px var(--f-gutter);
            }

    &__header{
        //width: 600px;
        
        text-align: center;
        margin-bottom: 48px;

        & .header-p{
            font-size: var(--paragraph-font-size-big);
            //padding: 0 16px;
            max-width: 600px;
            margin: auto;
        }
    }

    &__container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 26px;

        @include respond-to("<=s"){
              grid-template-columns: 1fr;
              gap: 10px;
            }

        &__item{
            padding: 26px 16px;

            &__icon{
                margin-bottom: 12px;
                background-color: var(--about-color-orange);
                border-radius: 6px;
                width: 48px;
                height: 48px;
                padding: 12px;
                
            }
        }
    }
}

</style>