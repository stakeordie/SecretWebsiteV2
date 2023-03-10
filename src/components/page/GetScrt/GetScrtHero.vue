<template>
  <section class="get-scrt__hero">
    <div class="get-scrt__hero__content">
      <div class="get-scrt__hero__content__info">
        <h5>GET SCRT</h5>
        <h1>How to buy & store Secret</h1>
        <p>
          Get your hands on some SCRT using direct pay, exchanges, or bridging
          over your assets, and learn what wallet to get.
        </p>
      </div>
      <div class="get-scrt__hero__content__price-box get-scrt__price-box">
        <div class="price-title">
          <img
            src="/img/icons/getscrt-icon2.svg"
            alt="Secret Network logo"
            loading="lazy"
          />
          <h3>SCRT price</h3>
        </div>
        <div class="price-select">
          <!-- BORRADOR -->
          <div class="price-select-btn">
            <v-select
              v-model="selected"
              placeholder="USD"
              :options="['cad', 'cny', 'eur', 'gbp', 'jpy', 'mxn', 'usd']"
            />
          </div>
          <h1>
            {{
              selected === ""
                ? "$" + Number(scrtData.usd).toFixed(2)
                : new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currencyDisplay: "narrowSymbol",
                    currency: selected
                  }).format(scrtData[selected])
            }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VSelect from "vue-select";

export default {
  components: {
    VSelect
  },
  data() {
    return {
      coinGeckoResponse: "",
      scrtData: "",
      selected: ""
    };
  },
  methods: {
    getScrtValue() {
      let requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch("https://api.coingecko.com/api/v3/coins/secret", requestOptions)
        .then(response => response.text())
        .then(result => {
          this.coinGeckoResponse = JSON.parse(result);
          this.scrtData = this.coinGeckoResponse.market_data.current_price;
        })
        .catch(error => console.log("error", error));
    }
  },
  mounted() {
    this.getScrtValue();
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.get-scrt__hero {
  padding: var(--f-gutter-xxxl) 0;

  @include respond-to("<=s") {
    padding: var(--f-gutter-xxl) var(--f-gutter);
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 36px;

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    &__info {
      display: grid;
      gap: 8px;
      align-self: center;

      & h5 {
        color: var(--color-analog-tertiary-yellow);
        margin-bottom: 0;
      }

      & h1 {
        margin-bottom: 0;

        @include respond-to("<=s") {
          font-size: 48px;
          line-height: var(--f-h2-line-height);
        }
      }

      & p {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
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

      .price-title {
        display: flex;
        justify-content: center;
        align-items: center;

        & img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin-right: 10px;
          justify-self: center;
        }

        .price-title {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
        }

        & h3 {
          margin-bottom: 0;

          @include respond-to("<=s") {
            font-size: 24px;
          }
        }
      }

      .price-select {
        display: flex;
        justify-content: center;
        margin-top: 16px;

        &-btn {
          margin-right: 16px;
          width: 127px;

          & .vs--open {
            background: rgba(198, 77, 21, 1);
            border-radius: 26px 26px 0 0;
          }

          & .v-select {
            transform: translateY(4px);

            & .vs__dropdown-toggle {
              border: none;
              border-radius: 26px;
              overflow: hidden;
              background-color: rgba(235, 128, 69, 1);
              align-content: center;
              width: 127px;
              height: 60px;
              padding: 10px 10px 10px 20px;
              margin: auto 0;
              cursor: pointer;
              display: flex;

              &::after {
                display: flex;
                content: "";
                min-width: 24px;
                height: auto;
                background-image: url("/img/icons/icon-chevron-down.svg");
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
              }

              & .vs__actions {
                opacity: 0;
                display: none;
              }

              & .vs__selected-options {
                justify-content: center;
                align-content: center;
                padding: 0;

                position: relative;

                & .vs__selected {
                  align-self: center;

                  font-family: var(--f-default-headers-font);
                  font-weight: 700;
                  font-size: 24px;
                  color: var(--color-neutral-dark-mode-06);
                  text-transform: uppercase;
                  padding: 0;
                  margin: 0;
                  position: absolute;
                }

                & .vs--select {
                  font-family: var(--f-default-headers-font);
                  font-weight: 700;
                  font-size: 24px;
                  color: var(--color-neutral-dark-mode-06);
                  text-transform: uppercase;
                }

                & .vs__search,
                & .vs__search:focus,
                & .vs__search:target,
                & .vs__search:active {
                  background-color: transparent;
                  border: none;
                  font-family: var(--f-default-headers-font);
                  font-weight: 700;
                  font-size: 24px;
                  color: var(--color-neutral-dark-mode-06);
                  text-transform: uppercase;
                  padding: 0;
                  margin-top: 0;
                  text-align: center;
                  text-decoration: none;
                  caret-color: transparent;
                }
              }

              & .vs__actions {
                padding: 0;

                & .vs__clear {
                  display: none;
                }

                & .vs__open-indicator {
                  fill: #fff;
                }
              }
            }

            & .vs__dropdown-menu {
              background: rgba(198, 77, 21, 1);
              border-radius: 0 0 26px 26px;
              min-width: 127px;
              max-width: 127px;
              overflow: scroll;
              max-height: 180px;

              &::-webkit-scrollbar {
                display: none;
              }

              & .vs__dropdown-option {
                font-family: var(--f-default-headers-font);
                font-weight: 700;
                font-size: 24px;
                color: var(--color-neutral-dark-mode-06);
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 10px 10px 20px;
                margin: auto 0;

                &::after {
                  display: flex;
                  transform: translateX(8px);
                  content: "";
                  width: 16.82px;
                  height: 12px;
                  margin: 6px 3.6px;
                  background-image: url("/img/icons/check-light-orange.svg");
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: contain;
                  opacity: 0;
                }
              }

              & .vs__dropdown-option--selected {
                color: rgba(251, 201, 152, 1);

                &::after {
                  opacity: 1;
                }
              }

              & .vs__dropdown-option--highlight {
                background-color: var(--color-analog-secondary-orange);
              }
            }
          }
        }

        & h1 {
          margin: 0;
          font-size: 54px;
          width: 148px;
        }
      }
    }
  }
}
</style>
