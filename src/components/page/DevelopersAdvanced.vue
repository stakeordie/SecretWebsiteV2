<template>
  <section class="page-developer-advanced">
    <h6 class="page-developer-advanced__title">Advanced resources</h6>
    <div class="page-developer-advanced__cards">
      <div
        class="page-developer-advanced__cards__box"
        v-for="(item, index) in material"
        :key="index">
        <a :href="item.url" class="page-developer-advanced__cards__box__card">
          <img :src="item.imageUrl" alt="" />
          <div class="page-developer-advanced__cards__box__card__content">
            <h6>{{ item.title }}</h6>
            <p>{{ item.description }}</p>
            <btn class="link-arrow" :url="item.url">{{ item.urlTitle }}</btn>
          </div>
        </a>
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
          imageUrl: "/temp/icon-features-file.svg",
          title: "Node Running",
          description:
            "The full guide to run your own node, become a Secret validator, and earn rewards while securing the network.",
          urlTitle: "View guide",
          url: "https://docs.scrt.network/node-guides/run-full-node-mainnet.html",
        },
        {
          imageUrl: "/temp/icon-features-file.svg",
          title: "IBC Relayers",
          description:
            "Learn how to set up and run an IBC relayer to facilitate communication with the wider Cosmos ecosystem.",
          urlTitle: "View template",
          url: "https://docs.scrt.network/relayers/setting-up-hermes.html",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developer-advanced {
  margin: 72px 0;

  &__title {
    font-family: montserrat;
    text-transform: uppercase;
    font-weight: 500;
    font-size: var(--f-h5-text-size);
    color: var(--color-neutral-dark-mode-05);
    line-height: 24px;
    padding: var(--f-gutter) 0;

    @include respond-to("<=s") {
      font-size: var(--f-h6-text-size);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 26px;

    @include respond-to("<=m") {
      grid-template-columns: 1fr 1fr;
    }

    @include respond-to("<=xs") {
      grid-template-columns: 1fr;
    }
    &__box {
      &__card {
        display: grid;
        grid-template-columns: 24px 1fr;
        grid-gap: 10px;
        border-radius: 10px;
        padding: var(--f-gutter);

        &:hover {
          background: var(--color-neutral-dark-mode-04);
        }

        &__content {
          h6 {
            font-size: var(--f-h5-text-size);
            font-family: var(--f-default-headers-font);
            color: white;
          }
          p {
            font-size: var(--f-default-text-size);
          }

          .link-arrow {
            padding: 0;
            margin-top: 0%;
            span {
              color: var(--color-developers-blue-02) !important;
            }
          }
        }
      }
    }
  }
}
</style>