<template>
  <section class="page-get-scrt__ctas">
    <div class="page-get-scrt__ctas__cards">
      <div
        class="page-get-scrt__ctas__cards__card"
        v-for="(item, index) in material"
        :key="index"
      >
        <img
          class="page-get-scrt__ctas__cards__card__img"
          :src="item.imageUrl"
          alt=""
        />
        <h4 class="page-get-scrt__ctas__cards__card__h4">{{ item.title }}</h4>
        <p class="page-get-scrt__ctas__cards__card__p">
          {{ item.description }}
        </p>

        <btn class="center-text no-arrow ctas-button" :url="item.url">{{
          item.urlTitle
        }}</btn>
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
          imageUrl: "/img/developers/icon-funding-developing.svg",
          title: "Build on Secret",
          description:
            "Start building privacy-preserving dApps with Secret smart contracts. ",
          urlTitle: "START BUILDING",
          url: "../developers",
        },
        {
          imageUrl: "/img/developers/icon-funding-community-yellow.svg",
          title: "Join the Community",
          description:
            "Become a Secret Agent and advance a better, more empowering web.",
          urlTitle: "GET INVOLVED",
          url: "../get-involved/become-secret-agent",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-get-scrt__ctas {
  padding: 64px 0;

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px;

    @include respond-to("<=m") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
    }

    &__card {
      padding: 16px;

      &__img {
        margin-bottom: 16px;
      }

      &.cta-button {
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
}
</style>
