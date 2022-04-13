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
        <div class="price-select">
          <h1>{{ selected === '' ? scrtData.usd : scrtData[selected] }} {{ selected === '' ? 'usd' : selected }}</h1>
          <div class="custom-select">
            
            <select id="brow" class="standard-select" v-model="selected">
              <!-- <input list="brow"> -->
              <option hidden >Please select one</option>
              <option>usd</option>
              <option>cad</option>
              <option>eur</option>
              <option>mxn</option>
            </select>
          </div>
        </div>
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
        padding-bottom: 10px;

        & img {
          width: 42px;
          height: 42px;
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

      .price-select{
          display: flex;
          align-items: center;
          justify-content: center;

          & select{
            background: transparent;
            border: none;

            &:focus{
              outline: none;
            }
          }

          & .custom-select{
            height: 20px;
            width: 20px;
            align-self: center;
            
            position: relative;
            top: -8px;
            right: -6px;

            &::after{
              content: "";
              display: table-cell;
              text-align: center;

              width: 20px;
              height: 20px;
              padding: 2px;
              background-image: url(../../assets/get-scrt/icon-repeat-no-bg.svg);
              background-repeat: no-repeat;
              background-size: 15px;
              background-position: center;
              background-color: var(--color-neutral-dark-mode-02);
              border-radius: 50%;
              position: absolute;
              top: 0;
              right: 0;

              pointer-events: none;
            }
          }
      }

      
    }

  }
}
</style>
