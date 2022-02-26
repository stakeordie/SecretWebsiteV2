<template>
  <section class="page-developer-call">
    <div
      class="page-developer-call__content"
      v-for="(item, index) in material"
      :key="index"
    >
      <div class="page-developer-call__content__img">
        <img :src="item.imageUrl" alt="" />
      </div>
      <div class="page-developer-call__content__info">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <btn class="lcenter-text no-arrow" :url="item.url">{{
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
          imageUrl: "/temp/developers-get-started.svg",
          title: "Get started",
          description:
            "Install a wallet, get SCRT, and stake it to earn rewards while securing the network. ",
          urlTitle: "Get scrt",
          url: "google.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developer-call {
  margin: 42px 0;

  &__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 102px;

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      grid-gap: 0px;
    }

    &__info {
      margin: auto 0;

      @include respond-to("<=s") {
        padding: var(--f-gutter);
      }

      p {
        font-size: var(--paragraph-font-size-big);
      }
    }

    &__img {
      @include respond-to("<=s") {
        margin: auto;
      }
    }
  }
}
</style>