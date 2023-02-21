<template>
  <column class="new-home__bg logo-carousel">
    <block>
      <div class="logo-carousel__container">
        <h6>Supported by</h6>
        <infinite-slide-bar duration="150s">
          <div
            v-for="(investor, index) in secretInvestors"
            :key="index"
            class="card-secret-agent"
          >
            <img
              :src="investor.image"
              :alt="altName(investor.image)"
              loading="lazy"
            />
          </div>
        </infinite-slide-bar>
      </div>
    </block>
  </column>
</template>

<script>
import { uppercaseAllFirstLetter } from "../utils";
export default {
  data() {
    return {
      secretInvestors: [
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
        { image: "/img/investor-GalaxyDigital.png" },
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
  methods: {
    altName(image) {
      const title = image.split("/")[2].split(".")[0];
      return uppercaseAllFirstLetter(title).split("-").join(" ");
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
.logo-carousel__container {
  max-width: 100%;
  overflow: hidden;

  h6 {
    color: var(--color-neutral-dark-mode-05);
    margin-bottom: 24px;
    text-align: center;
  }
  .vifnslb {
    &-container {
      width: 100%;
      overflow: hidden;
    }

    &-bar {
      gap: 96px;
      margin-right: 96px;
      overflow: hidden;
      display: flex;

      @include respond-to("<=m") {
        gap: 64px;
        margin-right: 64px;
      }

      & img {
        height: 48px;
      }
    }
  }
}
.logo-carousel {
  padding: 26px 0 42px 0;

  & h4 {
    font-size: 16px;
    color: var(--color-neutral-dark-mode-05);
    margin: 0;
    text-align: center;
  }
}
</style>
