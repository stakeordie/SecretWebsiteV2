<template>
  <div class="about-secret-network">
    <section class="about-secret-network-hero">
      <div class="about-secret-network-hero__img">
        <img
          src="/img/about-secret-network/about-secret-network-hero-img.svg"
          alt="Secret Network logo graphic"
          class="hero-img"
          loading="lazy"
        />
      </div>

      <div class="about-secret-network-hero__content">
        <div class="about-secret-network-hero__content__header">
          <h4 class="about-secret-network__eyebrow">About SECRET NETWORK</h4>
          <h1 class="about-secret-network-hero__content__header__h1">
            Powering Web3 Privacy
          </h1>
        </div>
        <p class="about-secret-network-hero__content__p">
          Secret Network is the first mainnet blockchain with privacy-preserving
          smart contracts, launched in 2020. This makes it possible to build
          apps that are decentralized and permissionless—yet private.
        </p>
        <div class="about-secret-network-hero__content__list">
          <div class="list-item">
            <img
              src="/img/about-secret-network/check-circle-green.svg"
              alt="Green check"
              class="list-icon"
              loading="lazy"
            />
            <p class="list-info">Privacy-preserving smart contracts</p>
          </div>
          <div class="list-item">
            <img
              src="/img/about-secret-network/check-circle-green.svg"
              alt="Green check"
              class="list-icon"
              loading="lazy"
            />
            <p class="list-info">
              Encrypted inputs, outputs, and state by default
            </p>
          </div>
          <div class="list-item">
            <img
              src="/img/about-secret-network/check-circle-green.svg"
              alt="Green check"
              class="list-icon"
              loading="lazy"
            />
            <p class="list-info">
              Transparent underlying ledger; completely auditable
            </p>
          </div>
        </div>
        <btn
          class="text-center no-arrow about-secret-network__btn"
          url="../../ecosystem/dapps"
        >
          EXPLORE OUR ECOSYSTEM</btn
        >
      </div>
    </section>

    <section class="about-secret-network-essential spacer-s">
      <div class="about-content">
        <div class="about-secret-network-essential__intro">
          <div class="about-secret-network-essential__intro__header">
            <h4 class="about-secret-network__eyebrow">ESSENTIAL FOR WEB3</h4>
            <h2 class="intro__title">Why we need privacy</h2>
          </div>
          <p class="intro__p">
            Ethereum’s big innovation was to put smart contracts on the
            blockchain: pieces of code that execute automatically once pre-set
            conditions are met. This made it possible to not only create
            decentralized payment systems like Bitcoin, but also decentralized
            applications.
            <br />
            <br />
            However, <strong>most blockchains are public by default</strong> .
            All transactions and smart contract interactions can be looked up by
            anyone. And for some applications and use cases, this isn’t an
            option. Like when sharing sensitive health data with your doctor, or
            financial details with your accountant.
          </p>
        </div>
        <div class="about-secret-network-essential__img">
          <img
            src="/img/icons/why-more-privacy-img.svg"
            alt="Chameleon art"
            class="hero-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="about-secret-network-cases">
      <div class="about-secret-network-cases__header">
        <div class="header">
          <h4 class="about-secret-network__eyebrow">USE CASES</h4>
          <h2 class="about-secret-network-header__h2">
            The possibilities Secret Contracts unlock
          </h2>
        </div>
        <p class="about-secret-network-header__p">
          Secret’s smart contracts e.g. “Secret Contracts” are
          private-by-default. Input, output, and state are encrypted and can’t
          be viewed by others, unless they’re given access. This opens up use
          cases that aren’t possible on public-by-default blockchains.
        </p>
      </div>

      <div class="about-secret-network-cases__content">
        <div
          class="about-secret-network-cases__content__topic"
          v-for="(item, index) in material"
          :key="index"
        >
          <img :src="item.imageUrl" alt="" loading="lazy"/>
          <div class="about-secret-network-cases__title">
            <h5>{{ item.eyebrow }}</h5>
            <h3>{{ item.title }}</h3>
          </div>
          <p>
            {{ item.description }}
          </p>
          <btn
            v-if="item.url"
            class="center-text no-arrow ctas-button"
            :url="item.url ? item.url : ''"
          >
            READ MORE
          </btn>
        </div>
      </div>
    </section>

    <section class="about-secret-network-technology tech-n-vision">
      <div class="about-content">
        <div
          class="about-secret-network-technology__header tech-n-vision__header"
        >
          <div class="header-left">
            <div class="header">
              <h4 class="about-secret-network__eyebrow">TECHNOLOGY</h4>
              <h2 class="">How Secret Contracts work</h2>
            </div>
            <p class="">
              Secret Network is the first blockchain with privacy-preserving
              smart contracts. This makes it possible to build apps that are
              decentralized and permissionless—yet private.
            </p>
            <div class="logos">
              <div class="logos__item item1">
                <img
                  src="/img/about-secret-network/rust-logo.svg"
                  alt="Rust logo"
                  loading="lazy"
                />
                <h6 class="logos_item__p">Coded in Rust</h6>
              </div>
              <div class="logos__item item2">
                <img
                  src="/img/about-secret-network/wasm-logo.svg"
                  alt="Wasm logo"
                  loading="lazy"
                />
                <h6 class="logos_item__p">Compiled with WASM</h6>
              </div>
            </div>
            <btn class="center-text no-arrow ctas-button" url="../../graypaper">
              Read the GrayPaper</btn
            >
          </div>
          <div class="header-right">
            <img
              src="/img/about-secret-network/contract-img.svg"
              alt="Draw graphic"
              loading="lazy"
            />
          </div>
        </div>

        <div
          class="about-secret-network-technology__content tech-n-vision__content"
        >
          <div
            class="about-secret-network-technology__content__item tech-n-vision__content__item"
            v-for="(item, index) in technology"
            :key="index"
          >
            <img :src="item.imageUrl" alt="Technology icon" loading="lazy"/>
            <div class="item-description">
              <h4>{{ item.title }}</h4>
              <p class="item-text">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-secret-network-vision tech-n-vision">
      <div class="about-content">
        <div class="about-secret-network-vision__header tech-n-vision__header">
          <div class="header-left">
            <div class="header">
              <h4 class="about-secret-network__eyebrow">OUR VISION</h4>
              <h2 class="">Building to become the Web3 privacy hub</h2>
            </div>
            <p class="">
              How we’re optimizing for interoperability, scalability, and
              decentralization.
            </p>
          </div>
          <div class="header-right">
            <img
              src="/img/icons/universe.png"
              alt="Universe graphic"
              loading="lazy"
            />
          </div>
        </div>

        <div
          class="about-secret-network-vision__content tech-n-vision__content"
        >
          <div
            class="about-secret-network-vision__content__item tech-n-vision__content__item"
            v-for="(item, index) in vision"
            :key="index"
          >
            <img :src="item.imageUrl" alt="" loading="lazy"/>
            <div class="item-description">
              <h4>{{ item.title }}</h4>
              <p class="">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-secret-network-supported">
      <div class="about-content">
        <div class="supported-header">
          <h3>Supported By</h3>
        </div>
        <div class="about-secret-network-supported__container">
          <div class="about-secret-network-supported__container__cont labs">
            <div class="by__img">
              <img
                src="/img/about-secret-network/scrt-labs-pink-logo.svg"
                alt="Secret Labs logo"
                loading="lazy"
              />
            </div>
            <p class="by__p">
              SCRT Labs is the driving force and the founding core development
              team behind Secret Network. Their mission is to create products
              and systems that accelerate the adoption of privacy-first,
              decentralized technologies.
            </p>
          </div>
          <div
            class="about-secret-network-supported__container__cont foundation"
          >
            <div class="by__img">
              <img
                src="/img/about-secret-network/secret-foundation-logo.svg"
                alt="Secret Foundation logo"
                loading="lazy"
              />
            </div>
            <p class="by__p">
              The foundation supporting Secret Network's global presence,
              community, and fosters the adoption of open-source,
              privacy-centric technologies and networks that serve the public
              good.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="supported__btns">
      <div class="about-content">
        <btn
          class="center-text no-arrow ctas-button"
          url="../../ecosystem/contributors"
        >
          VIEW ALL CONTRIBUTORS</btn
        >
        <btn
          class="center-text no-arrow ctas-button"
          url="../../ecosystem/partners"
        >
          VIEW ALL PARTNERS</btn
        >
      </div>
    </section>

    <section class="about-secret-network-mission spacer-s">
      <div class="about-content">
        <div class="about-secret-network-mission__header">
          <h4 class="about-secret-network__eyebrow">OUR MISSION</h4>
          <h2 class="">Privacy is a human right <span>& necessity</span></h2>
        </div>
        <p class="">
          We believe the decentralized web—powered by blockchain technology—has
          the potential to empower creators, business owners, and individuals
          like never before. But to get there, we need privacy.
          <br />
          <br />
          While transparency in blockchain serves an important purpose, total
          openness is not sustainable. And it will, ironically, cripple our
          ability to express ourselves, connect with others, and our capacity
          for creativity and innovation.
          <br />
          <br />
          Now that Web3 is still in full development we have a chance to turn
          this around and create a web that’s truly empowering.
        </p>
      </div>
    </section>
  </div>
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
          url: "/about/secret-tokens-bridges",
        },
        {
          imageUrl: "/img/about-secret-network/learn-defi-img.svg",
          eyebrow: "SECRET DEFI",
          title: "Stay safe while spending, saving, and trading",
          description:
            "DeFi apps built with Secret’s privacy-preserving smart contracts provide MEV-resistance by default and protect its users from hackers and front-runners. This includes exchanges, market makers, lending protocols, and more. ",
          url: "/about/secret-finance",
        },
        {
          imageUrl: "/img/about-secret-network/nft-purple-img.svg",
          eyebrow: "SECRET NFTS",
          title: "Fully own all of your creative work",
          description:
            "With Secret NFTs’ private metadata and ownership, creators can control who can access their content and in what way, protect the identity of their fans, and create art and entertainment not possible elsewhere.",
          url: "/about/secret-nfts",
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

      technology: [
        {
          imageUrl: "/img/about-secret-network/chip-icon.svg",
          title: "TEEs for computing over encrypted data",
          description: `Trusted Execution Environments (TEEs) function like a "black box"
              for data processing, and enable nodes to verify transactions within
              a block without accessing data that’s inside.
              
              Every validator on Secret Network runs their code inside a TEE so no
              one—not even the nodes operating on the network—can access the
              information being decrypted and processed.   `,
        },
        {
          imageUrl: "/img/about-secret-network/key-icon.svg",
          title: "Viewing keys for access control",
          description: `Since data is encrypted and private by default, Secret Network users
              have viewing keys to access their sensitive data.
              ${""}
              Viewing keys can be shared with third parties like auditors,
              wallets, and explorers. They allow users to maintain control over
              their data and decide what is shared—and with who. `,
        },
      ],

      vision: [
        {
          imageUrl: "/img/about-secret-network/cosmos-blue-icon.svg",
          title: "Cosmos IBC-enabled",
          description: `Secret Network is built using CosmWasm, enabling it to run on multiple chains using IBC and interact with the Cosmos ecosystem. `,
        },
        {
          imageUrl: "/img/about-secret-network/private-public-blue-icon.svg",
          title: "Private data, public ledger",
          description: `While data is private, Secret’s code and native coin (SCRT) are public—making it permissionless and providing complete auditability of the blockchain.`,
        },
        {
          imageUrl: "/img/about-secret-network/delegated-blue-icon.svg",
          title: "Delegated Proof-of-Stake consensus",
          description: `With DPoS, Secret can process close to 10,000 transactions per second with a block time of only 6-7 seconds. It makes the blockchain more environmentally friendly, and allows any token holder to participate in governance.`,
        },
        {
          imageUrl: "/img/about-secret-network/consensus-blue-icon.svg",
          title: "Independent consensus layer",
          description: `With its own set of validators + requirements, Secret Network can optimize for privacy and performance, while maintaining the flexibility to upgrade and improve continuously.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.about-secret-network {
  &-hero,
  .about-content,
  &-cases {
    max-width: 1200px;
    padding: 16px;
    margin: auto;
  }

  &-page {
    .content {
      width: 100%;

      .box {
        padding: 0;
      }
    }
  }

  .about-content {
    padding: 96px 16px;
  }

  h1 {
    font-size: 54px;
    line-height: 60px;
    font-family: var(--f-default-headers-font);
    @include respond-to("<=xs") {
      font-size: 40px;
      line-height: 46px;
    }
  }

  h2 {
    font-size: 36px;
    line-height: 42px;
    font-family: var(--f-default-headers-font);

    @include respond-to("<=s") {
      font-size: 36px;
      line-height: 46px;
    }
  }

  &__eyebrow {
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 0;
    font-family: var(--f-default-text-font);
    letter-spacing: 1px;
    margin-bottom: 0;

    @include respond-to("<=s") {
      font-size: var(--f-h5-text-size);
    }
  }

  h5 {
    font-family: var(--f-default-headers-font);
    margin-bottom: 0;
  }

  &__btn {
    padding: 14px !important;
    margin: 0;
    margin-right: 0 !important;

    max-width: 349px !important;
    min-width: 160px;

    justify-content: center;

    @include respond-to("<=m") {
      max-width: 100% !important;
    }

    .btn-text {
      font-size: 20px;
      line-height: 20px;
      font-weight: 700;
      letter-spacing: 1px;

      @include respond-to("<=s") {
        font-size: 16px;
      }
    }
  }
}

.about-secret-network-hero {
  padding: var(--f-gutter-xxxl) 16px 120px 16px;
  display: grid;
  grid-template-columns: 600px 1fr;
  gap: 26px;

  @include respond-to("<=l") {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to("<=m") {
    grid-template-columns: 1fr;
    padding: 60px var(--f-gutter);
    gap: 54px;
  }

  &__content {
    max-width: 504px;
    display: grid;
    row-gap: var(--f-gutter);
    margin: auto;

    @include respond-to("<=s") {
      padding: var(--f-gutter);
    }
    &__header {
      & h4 {
        color: var(--color-ver2-primary-turquoise);
      }
      & h1 {
        margin: 0;
      }
    }

    & p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      margin: 0;
    }

    &__list {
      display: grid;
      row-gap: 10px;

      & .list-item {
        display: flex;
        gap: 10px;
        align-items: center;

        & p {
          font-size: var(--paragraph-font-size-big);
          line-height: var(--paragraph-line-height-big);
          margin-bottom: 0;
        }
      }

      & .list-icon {
        width: 24px;
        height: 24px;
        padding: 2px;
      }
    }
  }

  &__img {
    align-self: center;

    @include respond-to("<=m") {
      display: none;
    }

    img {
      margin: auto;
      object-fit: contain;
    }
  }
}

.about-secret-network-essential {
  background-color: var(--color-neutral-dark-mode-02);

  & .about-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;
    margin: auto;

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
      grid-template-rows: content 1fr;
      gap: 0;
    }

    @include respond-to("<=s") {
      padding: 96px var(--f-gutter);
    }
  }

  &__img {
    img {
      align-self: center;
      max-width: 550px;
      max-height: 550px;
      margin: auto;

      @include respond-to("<=m") {
        order: 1;
      }

      @include respond-to("<=s") {
        max-width: 400px !important;
      }
    }
  }

  &__intro {
    padding: 16px;
    align-self: center;
    margin: auto;
    display: grid;
    gap: var(--f-gutter);

    @include respond-to("<=m") {
      max-width: 504px;
      margin: auto;
      order: 2;
    }
    &__header {
      display: grid;
      gap: 0;
      & h4 {
        color: var(--color-ver2-secondary-cream);
      }
    }

    .intro__title {
      margin-bottom: 6px;
    }

    .intro__p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      margin-bottom: 0;
    }
  }
}

.about-secret-network-cases {
  h4,
  h5 {
    color: var(--color-ver2-primary-orange);
  }
  &__title {
    display: grid;
    gap: var(--f-gutter-xxs);
  }

  p {
    font-size: var(--paragraph-font-size-big);
    line-height: var(--paragraph-line-height-big);
  }
  &__header {
    border-bottom: solid 1px var(--color-neutral-dark-mode-04);
    padding: 42px var(--f-gutter);

    p {
      max-width: 800px;
    }

    @include respond-to("<=s") {
      max-width: 504px;
      margin: auto;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(354px, 1fr));
    gap: 54px;

    padding: 42px 0;
    align-items: baseline;

    @include respond-to(">=xxl") {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 36px;
    }

    @include respond-to("<=m") {
      grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
      gap: 36px;

      &__topic {
        padding: var(--f-gutter);

        img {
          margin: auto;
          height: 200px !important;
        }
      }
    }

    @include respond-to("<=s") {
      max-width: 504px;
      margin: auto;
    }

    &__topic {
      display: grid;
      gap: var(--f-gutter);
      padding: var(--f-gutter);
      align-self: stretch;
      align-content: baseline;

      h3 {
        margin-bottom: 0;
      }

      img {
        margin: auto;
        height: 300px;
        padding: var(--f-gutter);
      }
    }
  }
}

.tech-n-vision {
  .about-content {
    display: grid;
    gap: 26px;
  }

  &__header {
    display: grid;
    gap: 64px;
    padding: 42px var(--f-gutter);

    @include respond-to("<=s") {
      grid-template-columns: 1fr;

      max-width: 504px;
      margin: auto;
    }

    .header-left {
      display: grid;
      gap: 16px;

      @include respond-to("<=s") {
        order: 2;
      }

      p {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        margin-bottom: 0;
      }
    }

    .header-right {
      align-self: center;
      margin: auto;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: var(--f-gutter);
    align-items: baseline;

    @include respond-to("<=s") {
      grid-template-columns: 1fr;

      max-width: 504px;
      margin: auto;
    }

    &__item {
      display: grid;
      gap: 16px;
      padding: var(--f-gutter);

      h4 {
        margin-bottom: 10px;
      }
    }
  }
}

.about-secret-network-technology {
  background-color: var(--color-neutral-dark-mode-02);

  &__header {
    @include respond-to(">=m") {
      grid-template-columns: 2fr 1fr;
      gap: 32px;
    }
    .header-left {
      .header {
        & h4 {
          color: var(--color-ver2-primary-red);
        }
      }

      .logos {
        display: flex;
        gap: 64px;

        .logos__item {
          display: flex;
          align-items: center;
          gap: 10px;

          img {
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
    }
  }

  &__content {
    &__item {
      p {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
      }
    }
  }
}

.about-secret-network-vision {
  &__header {
    @include respond-to(">=m") {
      grid-template-columns: 3fr 2fr;
    }

    .header-left {
      align-content: center;

      .header {
        h4 {
          color: var(--color-ver2-primary-blue);
        }
      }
    }
  }

  &__content {
    &__item {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }
  }
}

.about-secret-network-supported {
  background-color: var(--color-neutral-dark-mode-01);

  .about-content {
    display: grid;
    gap: 10px;
    grid-template-columns: 232px 1fr;
    padding: 64px var(--f-gutter);

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }
  }

  .supported-header {
    padding: var(--f-gutter);
    text-align: center;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    border-left: solid 1px var(--color-neutral-dark-mode-04);
    padding-left: 26px;
    align-items: baseline;

    @include respond-to("<=m") {
      border-left: none;
      padding-left: 0;
    }

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      max-width: 504px;
      margin: auto;
    }

    &__cont {
      padding: var(--f-gutter);
      display: grid;
      gap: 16px;

      .by__img {
        height: 64px;

        img {
          height: 100%;
        }
      }
    }
  }
}

.supported__btns {
  background-color: rgba(8, 10, 12, 1);

  .about-content {
    padding: 26px var(--f-gutter);
    display: flex;
    gap: 26px;
    justify-content: center;

    @include respond-to("<=s") {
      flex-direction: column;
      max-width: 504px;
      margin: auto;
    }

    .btn {
      margin-top: 0;
      margin-right: 0;
    }
  }
}

.about-secret-network-mission {
  background-color: var(--color-neutral-dark-mode-02);

  .about-content {
    max-width: 800px;
    display: grid;

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      max-width: 504px;
      margin: auto;
    }
  }

  &__header {
    text-align: center;
    padding: var(--f-gutter);

    h4 {
      color: var(--color-ver2-primary-purple);
    }

    h2 {
      display: grid;

      @include respond-to("<=s") {
        display: inline;
      }
    }
  }

  p {
    font-size: 26px;
    line-height: 39px;
    padding: var(--f-gutter);

    @include respond-to("<=s") {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
    }
  }
}
</style>
