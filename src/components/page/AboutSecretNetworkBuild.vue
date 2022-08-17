<template>
  <section class="about-secret-network-vision">
    <div class="about-secret-network-vision__header">
      <div class="about-secret-network-vision__header__info">
        <div class="about-secret-network-vision__header__info__content">
          <div
            class="about-secret-network-vision__header__info__content__header"
          >
            <h4 class="">OUR VISION</h4>
            <h4 class="">
              Building to become the Web3 <span>privacy hub</span>
            </h4>
          </div>
          <p class="">
            How we’re optimizing for interoperability, scalability, and
            decentralization.
          </p>
        </div>
      </div>
      <img src="../../assets/about-secret-network/vision-img.png" alt="" />
    </div>

    <div class="about-secret-network-vision__content">
      <div class="about-secret-network-vision__content__item">
        <img
          src="../../assets/about-secret-network/cosmos-blue-icon.svg"
          alt=""
        />
        <div class="item-text">
          <h4>Cosmos IBC-enabled</h4>
          <p>
            Secret Network is built using CosmWasm, enabling it to run on
            multiple chains using IBC and interact with the Cosmos ecosystem.
          </p>
        </div>
      </div>
      <div class="about-secret-network-vision__content__item">
        <img
          src="../../assets/about-secret-network/delegated-blue-icon.svg"
          alt=""
        />
        <div class="item-text">
          <h4>Private data, public ledger</h4>
          <p>
            While data is private, Secret’s code and native coin (SCRT) are
            public—making it permissionless and providing complete auditability
            of the blockchain.
          </p>
        </div>
      </div>
      <div class="about-secret-network-vision__content__item">
        <img
          src="../../assets/about-secret-network/private-public-blue-icon.svg"
          alt=""
        />
        <div class="item-text">
          <h4>Delegated Proof-of-Stake consensus</h4>
          <p>
            With DPoS, Secret can process close to 10,000 transactions per
            second with a block time of only 6-7 seconds. It makes the
            blockchain more environmentally friendly, and allows any token
            holder to participate in governance.
          </p>
        </div>
      </div>
      <div class="about-secret-network-vision__content__item">
        <img
          src="../../assets/about-secret-network/consensus-blue-icon.svg"
          alt=""
        />
        <div class="item-text">
          <h4>Independent consensus layer</h4>
          <p>
            With its own set of validators + requirements, Secret Network can
            optimize for privacy and performance, while maintaining the
            flexibility to upgrade and improve continuously.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.about-secret-network-vision {
  padding: 64px 0;
  @include respond-to("<=s") {
    padding: 64px var(--f-gutter);
  }

  & p {
    font-size: var(--paragraph-font-size-big);
    line-height: var(--paragraph-line-height-big);
    margin-bottom: 0;
  }
  &__header {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 63px;
    padding: 64px 0;

    @include respond-to("<=m") {
      grid-template-columns: 2fr 1fr;
      gap: 32px;
    }

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
    }

    &__info {
      display: grid;
      gap: 26px;

      &__content {
        &__header {
          display: grid;
          gap: var(--f-gutter-xxs);
          & h1 {
            display: grid;
            font-size: 36px;
            line-height: 42px;
            @include respond-to("<=m") {
              display: block;
            }
          }
          & h4 {
            color: var(--color-ver2-primary-blue);
          }
        }
      }
    }

    & img {
      align-self: center;
      margin: auto;
      // height: 495px;
      // width: auto;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    padding: 42px 0;
    gap: 36px;

    &__item {
      display: flex;
      gap: 16px;
      padding: var(--f-gutter);

      @include respond-to("<=m") {
        padding: 32px;
      }

      @include respond-to("<=xs") {
        padding: var(--f-gutter);
      }

      img {
        width: 36px;
        height: 36px;
      }

      .item-text {
        display: grid;
        gap: 10px;
        align-content: baseline;
        *{margin: 0;}
        & h4 {
          text-transform: none;
          letter-spacing: 0;
        }
      }
    }
  }
}
</style>
