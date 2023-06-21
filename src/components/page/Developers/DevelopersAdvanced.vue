<template>
  <section class="page-developer-advanced">
    <h6 class="page-developer-advanced__title">Advanced resources</h6>
    <div class="page-developer-advanced__card-list">
      <div
        v-for="(item, index) in material"
        :key="index"
        class="page-developer-advanced__cards__box"
      >
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
          title: "Node Running",
          description:
            "The full guide to run your own node, become a Secret validator, and earn rewards while securing the network.",
          urlTitle: "View guide",
          url: "https://docs.scrt.network/secret-network-documentation/node-runners",
        },
        {
          imageUrl: "/img/developers/icon-features-file.svg",
          title: "IBC Relayers",
          description:
            "Learn how to set up and run an IBC relayer to facilitate communication with the wider Cosmos ecosystem.",
          urlTitle: "View template",
          url: "https://docs.scrt.network/secret-network-documentation/node-runners/ibc-relayers",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.page-developer-advanced {
  padding: calc(26px - 16px) 0px calc(64px - 16px) 0px;
  display: flex;
  flex-direction: column;

  @include respond-to("<=m") {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  &__title {
    padding: var(--f-gutter) 0;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-neutral-dark-mode-05);
    line-height: 16px;
    font-size: 18px;
    margin: 0px;
  }

  &__card-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 26px;
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
