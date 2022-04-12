<template>
  <section class="get-scrt__hero">
    <div class="get-scrt__hero__content">
      <div class="get-scrt__hero__content__info">
        <h5>Get SCRT</h5>
        <h1>How to buy & store Secret</h1>
        <p>
          Get your hands on some SCRT using direct pay, exchanges, or bridging
          over your assets, and learn what wallet to get.
        </p>
      </div>
      <div class="get-scrt__hero__content__price-box get-scrt__price-box">
        <div class="price-title">
          <img src="../../assets/getscrt-icon.svg" alt="" />
          <h3>SCRT price</h3>
        </div>
        <!-- <h1>{{ scrtData.usd }}</h1> -->
        <h1>{{ selected === '' ? scrtData.usd : scrtData[selected] }} {{ selected === '' ? 'usd' : selected }}</h1>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>usd</option>
          <option>cad</option>
          <option>eur</option>
          <option>mxn</option>
        </select>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      coinGeckoResponse: "",
      scrtData: '',
      selected: "",
    };
  },
  methods: {
    getScrtValue() {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("https://api.coingecko.com/api/v3/coins/secret", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          this.coinGeckoResponse = JSON.parse(result);
          this.scrtData = this.coinGeckoResponse.market_data.current_price;
          // console.log(this.coinGeckoResponse.market_data.current_price.usd);
        })
        .catch((error) => console.log("error", error));
      // this.scrtData = this.coinGeckoResponse.fromEentries(it => {
      //       return it.market_data
      //   })
    },
  },
  mounted() {
    this.getScrtValue();
    
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.get-scrt__hero {
  padding: var(--f-gutter-xxxl) 0;

  @include respond-to("<=s") {
    padding: var(--f-gutter-xxxl) var(--f-gutter);
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 36px;

    @include respond-to("<=l") {
      //grid-template-columns: 1fr 1fr;
    }

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
    }

    &__info {
      display: grid;
      gap: 16px;
      align-self: center;

      @include respond-to("<=s") {
        //order: 2;
      }

      & h5 {
        color: var(--color-analog-tertiary-yellow);
        margin-bottom: 0;
      }

      &__info {
        display: grid;
        gap: 16px;
        align-self: center;

        & h5 {
          color: var(--color-analog-tertiary-yellow);
          margin-bottom: 0;
        }

        & h1 {
          margin-bottom: 0;
          line-height: 60px;
        }

        &__price-box {
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-self: center;
          align-content: center;
          color: var(--color-neutral-dark-mode-01);

          @include respond-to("<=s") {
            //order: 1;
          }

          .price-title {
            display: flex;
            justify-content: center;
            align-items: center;

            & img {
              width: 48px;
              height: 48px;
              background: #fff;
              border-radius: 50%;
              margin-right: 10px;
            }

            .price-title {
              display: flex;
              justify-content: center;
              align-items: center;

              & h1 {
                font-family: Montserrat;
                font-weight: 600;
                font-size: 54px;
                margin-bottom: 0;
              }
            }

            & h3 {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
