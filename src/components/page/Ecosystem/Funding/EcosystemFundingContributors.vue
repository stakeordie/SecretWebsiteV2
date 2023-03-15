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
        { image: "/img/investors/investor-Alameda.png" },
        { image: "/img/investors/investor-Arca.png" },
        { image: "/img/investors/investor-Arkstream.png" },
        { image: "/img/investors/investor-Arrington.png" },
        { image: "/img/investors/investor-Bison.png" },
        { image: "/img/investors/investor-Blacktower.png" },
        { image: "/img/investors/investor-Coinfund.png" },
        { image: "/img/investors/investor-Defiance.png" },
        { image: "/img/investors/investor-Dragonly.png" },
        { image: "/img/investors/investor-Fenbushi.png" },
        { image: "/img/investors/investor-Figment.png" },
        { image: "/img/investors/investor-Hartman.png" },
        { image: "/img/investors/investor-Hashed.png" },
        { image: "/img/investors/investor-HashkeyGroup.png" },
        { image: "/img/investors/investor-Huobi.png" },
        { image: "/img/investors/investor-Iconium.png" },
        { image: "/img/investors/investor-Kucoin.png" },
        { image: "/img/investors/investor-Magnus.png" },
        { image: "/img/investors/investor-NGC.png" },
        { image: "/img/investors/investor-Sanctor.png" },
        { image: "/img/investors/investor-SCRTLabs.png" },
        { image: "/img/investors/investor-Shima.png" },
        { image: "/img/investors/investor-Skynet.png" },
        { image: "/img/investors/investor-Skyvision.png" },
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
