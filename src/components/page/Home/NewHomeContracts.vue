<template>
  <section class="new-home-contracts">
    <div class="new-home-contracts__header">
      <h3 class="new-home-contracts__header-h3">
        We made smart contracts private
      </h3>
      <p class="new-home-contracts__header-p">
        Secret contracts encrypt input, output, and state—hiding data even from
        the nodes on the network. So you can:
      </p>
    </div>
    <div class="new-home-contracts__features">
      <div
        class="new-home-contracts__features__feature"
        v-for="(item, index) in reasons"
        :key="index"
      >
        <div class="feature-cont__description">
          <img :src="item.imageUrl" :alt="item.btn" loading="lazy" />
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
        <btn class="text-center no-arrow" :url="item.btnUrl">
          {{ item.btn }}
        </btn>
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
          imageUrl: "/img/home/icon-home-exchange.svg",
          title: "Stay safe while spending, saving, and trading",
          description:
            "Control access to your assets and data with Secret Tokens and Apps, while avoiding hacks and front-running. ",
          btn: "ABOUT SECRET DEFI",
          btnUrl: "../about/secret-finance",
        },
        {
          imageUrl: "/img/home/icon-home-creativity.svg",
          title: "Take full control of your creativity",
          description:
            "Selectively reveal content and ownership with Secret NFTs to control access, create hidden features, and make art and entertainment not possible elsewhere. ",
          btn: "ABOUT SECRET NFTS",
          btnUrl: "../about/secret-nfts",
        },
        {
          imageUrl: "/img/home/icon-home-explore.svg",
          title: "Explore and expand  the frontiers of Web3",
          description:
            "Enter the new design space customizable privacy opens up, and build groundbreaking apps in areas ranging from finance to communication to gaming.",
          btn: "START BUILDING",
          btnUrl: "../developers",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
.new-home-contracts {
  text-align: center;
  padding: 64px 0;
  @include respond-to("<=s") {
    padding: 64px var(--f-gutter);
  }
  &__header {
    padding-bottom: 56px;
    & h5 {
      color: var(--color-neutral-dark-mode-05);
      padding-bottom: 0;
      margin-bottom: 0;
      text-transform: uppercase;
    }
    & h3 {
      margin-bottom: 10px;
    }
    &-p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      max-width: 600px;
      margin: auto;
    }
  }
  &__features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
    padding-bottom: 48px;
    width: 100%;
    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      gap: 0;
    }
    &__feature {
      padding: 12px;
      border-radius: 10px;
      @include respond-to("m") {
        padding: var(--f-gutter-l) 0;
      }
      @include respond-to("s") {
        padding: var(--f-gutter) var(--f-gutter-xxxl);
      }

      .feature-cont {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 10px;
        // height: 360px;

        @include respond-to("m") {
          height: 390px;
        }
        @include respond-to("<=s") {
          grid-template-rows: 3fr 1fr;
          height: auto;
        }
      }
      .feature-cont__description {
        display: grid;
        grid-template-rows: auto;
        gap: 10px;
        height: 370px;
        align-content: baseline;
        padding-bottom: 16px;
        @include respond-to("m") {
          height: 390px;
        }
        @include respond-to("<=s") {
          grid-template-rows: 3fr 1fr;
          height: auto;
        }
        & img {
          margin: auto;
          margin-bottom: 16px;
          width: auto;
          height: 150px;
        }
        & h4 {
          color: #d4dce3;
          font-family: montserrat;
          letter-spacing: 0;
          margin-bottom: 0;
          @include respond-to("<=m") {
            font-size: 22px;
          }
        }
        & p {
          color: var(--color-neutral-dark-mode-05);
          font-family: var(--f-default-text-font);
          font-size: var(--f-default-text-size);
          letter-spacing: 0;
          margin-bottom: 0;
        }
      }
      & a {
        align-self: flex-end;
        //padding: 12px 0;
        width: 100%;
        font-weight: 700;
        letter-spacing: 1px;
        padding: 10px 0;
        justify-self: center;
        margin-right: 0;
        @include respond-to("<=s") {
          align-self: flex-start;
        }
      }

      & a {
        margin-right: 0 !important;
      }
    }
  }
  & .btn-bigger {
    padding: 10px 0 !important;
    width: 200px !important;
    font-size: 18px !important;
    margin: 0 !important;
    @include respond-to("<=s") {
      width: 100% !important;
      margin: 10px 0;
    }
  }
}
</style>
