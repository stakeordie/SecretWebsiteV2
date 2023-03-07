<template>
  <section class="page-ecosystem__contributors">
    <div class="page-ecosystem__contributors__title">
      <h5 class="page-ecosystem__contributors__title__h5">FUND CONTRIBUTORS</h5>
      <h3 class="page-ecosystem__contributors__title__h3">
        Backed by top industry investors
      </h3>
    </div>
    <div class="page-ecosystem__contributors__imgs">
      <img
        v-for="(item, index) in reasons"
        :key="index"
        :src="item.image"
        alt="Contributor logo"
        class="page-ecosystem__contributors__img"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reasons: [
        { image: "/img/investor-Alameda.png" },
        { image: "/img/investor-Arca.png" },
        { image: "/img/investor-Arkstream.png" },
        { image: "/img/investor-Arrington.png" },
        { image: "/img/investor-Bison.png" },
        { image: "/img/investor-Blacktower.png" },
        { image: "/img/investor-Coinfund.png" },
        { image: "/img/investor-Defiance.png" },
        { image: "/img/investor-Dragonly.png" },
        { image: "/img/investor-Fenbushi.png" },
        { image: "/img/investor-Figment.png" },
        { image: "/img/investor-Hartman.png" },
        { image: "/img/investor-Hashed.png" },
        { image: "/img/investor-HashkeyGroup.png" },
        { image: "/img/investor-Huobi.png" },
        { image: "/img/investor-Iconium.png" },
        { image: "/img/investor-Kucoin.png" },
        { image: "/img/investor-Magnus.png" },
        { image: "/img/investor-NGC.png" },
        { image: "/img/investor-Sanctor.png" },
        { image: "/img/investor-SCRTLabs.png" },
        { image: "/img/investor-Shima.png" },
        { image: "/img/investor-Skynet.png" },
        { image: "/img/investor-Skyvision.png" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.page-ecosystem__contributors {
  display: grid;
  row-gap: 36px;
  text-align: center;
  padding-bottom: var(--f-gutter-xl);

  &__title {
    text-align: center;

    &__h5 {
      color: var(--color-newBrand-blue-01);
    }
  }

  &__imgs {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 48px;
    row-gap: 64px;
    margin: auto;

    &__img {
      width: 130px;
      height: 64px;
      margin: auto auto;
    }
    & img {
      margin: auto;
    }

    @include respond-to("<=m") {
      grid-template-columns: repeat(4, 1fr);
    }

    @include respond-to("<=s") {
      grid-template-columns: repeat(3, 1fr);
    }

    @include respond-to("<=s") {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
