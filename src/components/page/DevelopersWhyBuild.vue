<template>
  <section class="page-developer">
    <h1 class="page-developer__title">{{ sectionTitle }}</h1>
    <div
      class="page-developer__reasons"
      v-for="(item, index) in reasons"
      :key="index"
    >
      <div class="page-developer__reasons__reason">
        <img :src="item.imageUrl" :alt="item.title" loading="lazy"/>
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
          imageUrl: "/temp/icon-features-rocket.svg",
          title: "Be a pioneer",
          description:
            "Explore the possibilities of customizable privacy and build groundbreaking apps in areas ranging from finance to gaming.",
        },
        {
          imageUrl: "/temp/icon-features-rocket.svg",
          title: "Make an impact",
          description:
            "Build towards a better web by creating decentralized solutions that protect & empower users.",
        },
        {
          imageUrl: "/temp/icon-features-rocket.svg",
          title: "Built-in Interoperability",
          description:
            "With Cosmos IBC & bridges to 4+ ecosystems (and counting), apps built on Secret Network can be used by billions of users all across Web3. ",
        },
        {
          imageUrl: "/temp/icon-features-rocket.svg",
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
</style>
