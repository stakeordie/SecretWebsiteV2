<template>
  <section class="page-developer-resources">
    <h6 class="page-developer-resources__title">
      Resources
    </h6>
    <div class="page-developer-resources__cards">
      <a
        v-for="(item, index) in material"
        :key="index"
        class="page-developer-resources__cards__card"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="item.imageUrl" :alt="item.title" loading="lazy" />
        <div class="page-developer-resources__cards__card__content">
          <h6>{{ item.title }}</h6>
          <p>{{ item.description }}</p>
          <btn class="link-arrow" :url="item.url">{{ item.urlTitle }}</btn>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      material: [
        {
          imageUrl: "/img/developers/icon-resources-book.svg",
          title: "Tutorials",
          description: `Get started with our smart contract tutorials and community-created guides.`,
          urlTitle: "View tutorials",
          url: `https://docs.scrt.network/secret-network-documentation/development/secret-by-example`,
        },
        {
          imageUrl: "/img/developers/icon-resources-check.svg",
          title: "Ecosystem Overview",
          description: `A living overview of all Secret Apps, tools, guides, and resources!`,
          urlTitle: "View tutorials",
          url: `https://docs.scrt.network/secret-network-documentation/ecosystem-overview`,
        },
        {
          imageUrl: "/img/developers/icon-resources-documentation.svg",
          title: "Documentation",
          description: `Read the official documentation on Secret contracts, clients, protocols, and more. `,
          urlTitle: "View docs",
          url: "https://docs.scrt.network/",
        },
        {
          imageUrl: "/img/developers/icon-resources-github.svg",
          title: "Github",
          description: `View the source code that powers the Secret Network blockchain.`,
          urlTitle: "View repo",
          url: "https://github.com/scrtlabs/SecretNetwork",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developer-resources {
  padding: calc(64px - 16px) 0px calc(64px - 16px) 0px;
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 26px;

    @include respond-to("<=m") {
      grid-template-columns: 1fr 1fr;
    }

    @include respond-to("<=xs") {
      grid-template-columns: 1fr;
    }

    &__card {
      background: var(--color-neutral-dark-mode-03);
      padding: var(--f-gutter-l);
      border-radius: 10px;
      transition: 0.5s;

      &:hover {
        background: var(--color-neutral-dark-mode-04);
      }

      &__content {
        margin-top: 10px;

        h6 {
          font-size: var(--f-h4-text-size);
          font-family: var(--f-default-headers-font);
          color: var(--color-analog-primary-white);
        }
        p {
          font-size: var(--f-default-text-size);
        }

        .link-arrow {
          padding: 0;
          margin-top: 0%;
        }
      }
    }
  }
}
</style>
