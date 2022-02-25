<template>
  <section class="page-developer-resources">
    <h6 class="page-developer-resources__title">Resources</h6>
    <div class="page-developer-resources__cards">
      <div
        class="page-developer-resources__cards__card"
        v-for="(item, index) in material"
        :key="index"
      >
        <img :src="item.imageUrl" alt="" />
        <div class="page-developer-resources__cards__card__content">
          <h6>{{ item.title }}</h6>
          <p>{{ item.description }}</p>
          <btn class="link-arrow" :url="item.url">{{ item.urlTitle }}</btn>
        </div>
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
          imageUrl: "/temp/icon-resources-book.svg",
          title: "Tutorials",
          description:
            "View this easy step-by-step tutorial made by our partner Figment.",
          urlTitle: "View tutorials",
          url: "https://learn.figment.io/protocols/secret",
        },
        {
          imageUrl: "/temp/icon-resources-check.svg",
          title: "Awesome Secret",
          description:
            "A living overview of all Secret Apps, tools, guides, and resources! ",
          urlTitle: "View tutorials",
          url: "https://github.com/SecretFoundation/awesome-secret",
        },
        {
          imageUrl: "/temp/icon-resources-documentation.svg",
          title: "Documentation",
          description:
            "Read the official documentation on Secret contracts, clients, protocols, and more. ",
          urlTitle: "View docs",
          url: "https://docs.scrt.network/",
        },
        {
          imageUrl: "/temp/icon-resources-github.svg",
          title: "Github",
          description:
            "View the source code that powers the Secret Network blockchain.",
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
  margin: 56px 0;
  &__title {
    font-family: montserrat;
    text-transform: uppercase;
    font-weight: 100;
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

      &__content {
        margin-top: 10px;

        h6{
          font-size: var(--f-h4-text-size);
          font-family: var(--f-default-headers-font);
        }
        p{
          font-size: var(--f-default-text-size);
        }

        .link-arrow {
          padding: 0;
          margin-top: 0%;
          span {
            color: var(--color-highkey-secondary-blue) !important;
          }
        }
      }
    }
  }
}
</style>