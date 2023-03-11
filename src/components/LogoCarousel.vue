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
import { uppercaseAllFirstLetter } from "@/utils";
export default {
  data() {
    return {
      secretInvestors: [
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
        { image: "/img/investors/investor-GalaxyDigital.png" },
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
