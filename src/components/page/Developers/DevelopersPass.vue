<template>
  <section class="page-developer-pass">
    <div class="page-developer-pass__title">
      <h3>Privacy as a Service</h3>
      <p>Leverage Secret’s privacy features in your CosmWasm contracts.</p>
    </div>

    <div class="page-developer-pass__card-list">
      <div v-for="(item, index) in material" :key="index">
        <developer-resource-card :cardInfo="item" />
      </div>
    </div>
  </section>
</template>

<script>
import DeveloperResourceCard from "@/components/dynamic/cards/DeveloperResourceCard.vue";

export default {
  components: { DeveloperResourceCard },
  data() {
    return {
      material: [
        {
          imageUrl: "/img/developers/icon-features-file.svg",
          title: "Privacy as a Service (PaaS)",
          description:
            "A technical deep-dive into providing privacy or added functionality to dApps in other ecosystems by leveraging Secret Contracts.",
          urlTitle: "View docs",
          url: "https://docs.scrt.network/secret-network-documentation/development/secret-contract-fundamentals/privacy-as-a-service-paas",
        },
        {
          imageUrl: "/img/developers/icon-features-file.svg",
          title: "Secret VRF",
          description:
            "An example of how to use Secret VRF to fetch random numbers via IBC, as well as a development playground for applications.",
          urlTitle: "View docs",
          url: "https://docs.scrt.network/secret-network-documentation/development/development-concepts/randomness-api/cross-chain-ibc-randomness",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.page-developer-pass {
  padding: calc(26px - 16px) 0px calc(64px - 16px) 0px;
  display: flex;
  flex-direction: column;

  @include respond-to("<=m") {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  &__title {
    padding: var(--f-gutter) 0;

    h3 {
      font-weight: 600;
      color: var(--color-neutral-dark-mode-06);
      @include respond-to(">=s") {
        font-size: var(--f-h3-text-size);
      }
    }

    p {
      margin-bottom: 0px;
      font-size: var(--paragraph-font-size-big);
    }
  }

  &__card-list {
    display: grid;
    grid-gap: 26px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 16px 0px;

    @include respond-to("<=m") {
      grid-template-columns: 1fr 1fr;
      padding: 16px 0px;
    }

    @include respond-to("<=xs") {
      grid-template-columns: 1fr;
    }
  }
}
</style>
