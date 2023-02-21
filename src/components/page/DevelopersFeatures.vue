<template>
  <section class="page-developer__features">
    <h1 class="page-developer__features__title">{{ sectionTitle }}</h1>
    <div class="page-developer__features__reasons">
      <div
        class="page-developer__features__reasons__reason"
        v-for="(item, index) in reasons"
        :key="index"
      >
        <img :src="item.imageUrl" :alt="item.title" loading="lazy" />
        <h6>{{ item.title }}</h6>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sectionTitle: "Why Build on Secret Network?",
      reasons: [
        {
          imageUrl: "/img/developers/icon-features-rocket.svg",
          title: "Be a pioneer",
          description:
            "Explore the possibilities of customizable privacy and build groundbreaking apps in areas ranging from finance to gaming.",
        },
        {
          imageUrl: "/img/developers/icon-features-protect.svg",
          title: "Make an impact",
          description:
            "Build towards a better web by creating decentralized solutions that protect & empower users.",
        },
        {
          imageUrl: "/img/developers/icon-features-decentralized.svg",
          title: "Built-in Interoperability",
          description:
            "With Cosmos IBC & bridges to 4+ ecosystems (and counting), apps built on Secret Network can be used by billions of users all across Web3. ",
        },
        {
          imageUrl: "/img/developers/icon-features-idea.svg",
          title: "Get serious funding",
          description:
            "With over $400M in funding and grants available to any developer to build on Secret Network, no idea is too big.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.page-developer__features {
  display: grid;
  grid-gap: 28px;
  text-align: center;
  margin-top: 44px;
  margin-bottom: 56px;

  &__title {
    font-size: var(--f-h3-text-size);
    font-family: var(--f-default-headers-font);
    line-height: 30px;
    // padding: var(--f-gutter);
  }

  &__reasons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 26px;

    vertical-align: top;

    @include respond-to("<=m") {
      margin: auto;
      grid-template-columns: 1fr 1fr;
    }

    @include respond-to("<=xs") {
      margin: auto;
      grid-template-columns: 1fr;
    }

    &__reason {
      padding: var(--f-gutter);

      h6 {
        font-size: var(--f-h4-text-size);
        line-height: 30px;
        padding-top: var(--f-gutter);
      }

      p {
        font-size: 16px;
        text-align: left;

        @include respond-to("<=s") {
          text-align: center;
        }
      }

      img {
        margin: auto;
        height: 100px;
      }
    }
  }
}
</style>
