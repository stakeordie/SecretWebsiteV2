<template>
  <section class="about-secret-network-technology">
    <div class="about-secret-network-technology__header">
      <div class="about-secret-network-technology__header__info">
        <div class="about-secret-network-technology__header__info__content">
          <div
            class="about-secret-network-technology__header__info__content__header"
          >
            <h4 class="">TECHNOLOGY</h4>
            <h1 class="">How Secret Contracts work</h1>
          </div>
          <p class="">
            Secret Network is the first blockchain with privacy-preserving smart
            contracts. This makes it possible to build apps that are
            decentralized and permissionless—yet private.
          </p>
        </div>
        <div class="about-secret-network-technology__header__logos">
          <div class="logos__item item1">
            <img src="../../assets/about-secret-network/rust-logo.svg" alt="" />
            <h6 class="logos_item__p">Coded in Rust</h6>
          </div>
          <div class="logos__item item2">
            <img src="../../assets/about-secret-network/wasm-logo.svg" alt="" />
            <h6 class="logos_item__p">Compiled with WASM</h6>
          </div>
        </div>
        <btn class="center-text no-arrow ctas-button" url="../../graypaper">
          Read the GrayPaper</btn
        >
      </div>
      <img src="../../assets/about-secret-network/contract-img.svg" alt="" />
    </div>

    <div class="about-secret-network-technology__content">
      <div class="about-secret-network-technology__content__item">
        <div class="about-secret-network-technology__content__item__header">
          <img src="../../assets/about-secret-network/chip-icon.svg" alt="" />
          <h4>TEEs for computing over encrypted data</h4>
        </div>
        <div class="item-text">
          <p>
            Trusted Execution Environments (TEEs) function like a “black box”
            for data processing, and enable nodes to verify transactions within
            a block without accessing data that’s inside.
            <br />
            <br />
            Every validator on Secret Network runs their code inside a TEE so no
            one—not even the nodes operating on the network—can access the
            information being decrypted and processed.
          </p>
        </div>
      </div>
      <div class="about-secret-network-technology__content__item">
        <div class="about-secret-network-technology__content__item__header">
          <img src="../../assets/about-secret-network/key-icon.svg" alt="" />
          <h4>Viewing keys for access control</h4>
        </div>
        <div class="item-text">
          <p>
            Since data is encrypted and private by default, Secret Network users
            have viewing keys to access their sensitive data.
            <br />
            <br />
            Viewing keys can be shared with third parties like auditors,
            wallets, and explorers. They allow users to maintain control over
            their data and decide what is shared—and with who.
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

.about-secret-network-technology {
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
    grid-template-columns: 2fr 1fr;
    gap: 64px;
    padding: 64px 0;

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
    }

    &__info {
      display: grid;
      gap: 26px;

      &__content {
        display: grid;
        gap: var(--f-gutter);
        &__header {
          display: grid;
          gap: var(--f-gutter-xxs);
          * {
            margin: 0;
          }
          & h1 {
            display: grid;
            font-size: 36px;
            line-height: 42px;
          }
          & h4 {
            color: var(--color-ver2-primary-red);
          }
        }
      }
    }

    &__logos {
      display: flex;
      gap: 64px;

      .logos__item {
        display: flex;
        align-items: center;
        gap: 10px;

        & img {
          width: 36px;
          height: 36px;
          opacity: 0.3;
        }

        & h6 {
          font-size: 16px;
          margin-bottom: 0;
          color: var(--color-neutral-dark-mode-05);
          font-weight: 400;
          font-family: var(--blog-text-font-family);
        }
      }
    }

    & img {
      align-self: center;
      margin: auto;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 42px 0;
    gap: 36px;
    align-items: flex-start;
    @include respond-to("<=s") {
      grid-template-columns: 1fr;
    }

    &__item {
      display: grid;
      gap: 16px;
      padding: var(--f-gutter);

      @include respond-to("<=m") {
        padding: 32px;
      }

      @include respond-to("<=xs") {
        padding: var(--f-gutter);
      }
      &__header {
        display: grid;
        gap: var(--f-gutter);
        * {
          margin: 0;
        }
        img {
          width: 36px;
          height: 36px;
        }
      }

      .item-text {
        display: grid;
        gap: 16px;
        align-content: baseline;
        & h4 {
          text-transform: none;
          letter-spacing: 0;
        }
      }
    }
  }
}
</style>
