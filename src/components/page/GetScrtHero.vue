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
          <img src="../../assets/getscrt-icon2.svg" alt="" />
          <h3>SCRT price</h3>
        </div>
        <!-- <h1>{{ scrtData.usd }}</h1> -->
        <div class="price-select">
          <!-- BORRADOR -->
          <div class="price-select-btn">
            <v-select  v-model="selected" :options="['usd', 'cad', 'eur', 'mxn']"></v-select>
          </div>
          <h1>
            {{
              selected === ""
                ? '$'+scrtData.usd
                : new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currencyDisplay: "symbol",
                    currency: selected,
                  }).format(scrtData[selected])
            }}
            <!-- {{ selected === "" ? scrtData.usd : scrtData[selected].toLocaleString(undefined, { style: 'currency', currency: selected }) }} -->
            <!-- {{ selected === "" ? "usd" : selected }} -->
          </h1>
          <!-- <div class="custom-select">
            
            <select
              style="text-transform: uppercase"
              class="standard-select"
              v-model="selected"
            >
              <option>usd</option>
              <option>cad</option>
              <option>eur</option>
              <option>mxn</option>
            </select>
          </div> -->
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
      scrtData: "",
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
    padding: var(--f-gutter-xxl) var(--f-gutter);
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
      gap: 16px;
    }

    &__info {
      display: grid;
      gap: 8px;
      align-self: center;

      @include respond-to("<=s") {
        //order: 2;
      }

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

      @include respond-to("<=s") {
        //order: 1;
      }

      .price-title {
        display: flex;
        justify-content: center;
        align-items: center;

        & img {
          width: 42px;
          height: 42px;
          //background: #fff;
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
            //line-height: var(--f-h1-line-height);
          }
        }
      }

      .price-select {
        display: flex;
        //align-items: center;
        justify-content: center;
        margin-top: 16px;

         &-btn{
            margin-right: 26px;
            
            & .vs--open{
                    background: rgba(198, 77, 21, 1);   
                    border-radius: 26px 26px  0 0 ;  
                  }
            
            & .v-select{
                      

              & .vs__dropdown-toggle{
                border: none;

                border-radius: 26px;
                overflow: hidden;
                background-color: var(--color-analog-secondary-orange);
                
                align-content: center;


                min-width: 127px;
                height: 60px;

                padding: 16px;

                & .vs__selected-options{
                  justify-content: center;
                  align-content: center;
                  padding: 0;

                  

                  & .vs__selected{
                    align-self: center;

                    font-family: var(--f-default-headers-font);
                    font-weight: 700;
                    font-size: 24px;
                    color: var(--color-neutral-dark-mode-06);
                    text-transform: uppercase;

                    padding: 0;
                    margin: 0;
                    margin-right: 16px;
                  }

                  & .vs--select{
                    font-family: var(--f-default-headers-font);
                    font-weight: 700;
                    font-size: 24px;
                    color: var(--color-neutral-dark-mode-06);
                    text-transform: uppercase;
                  }

                  

                  & .vs__search{
                    display: none;


                  }
                }

                & .vs__actions{
                  padding: 0;

                  & .vs__clear{
                    display: none;
                  }

                  & .vs__open-indicator{
                    fill: #fff;
                  }
                }
              }

              & .vs__dropdown-menu{
               background: rgba(198, 77, 21, 1);   
              border-radius:  0 0 26px 26px; 

              min-width: 127px;

              overflow: scroll;
              max-height: 180px;

              & .vs__dropdown-option{
                font-family: var(--f-default-headers-font);
                    font-weight: 700;
                    font-size: 24px;
                    color: var(--color-neutral-dark-mode-06);
                    text-transform: uppercase;
                }

                & .vs__dropdown-option--selected{
                  color: rgba(251, 201, 152, 1);
                  
                  &::after{
                    //position: absolute;
                    display: inline-block;
                    transform: translateY(3px) translateX(8px);
                    //top: 12px;
                    //right: 12px;
                    content: '' ;
                    width: 24px;
                    height: 24px;
                    background-image: url(../../assets/check-light-orange.svg);
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;

                    //align-self: center;
                  }
                }

                & .vs__dropdown-option--highlight{
                  background-color: var(--color-analog-secondary-orange);
                }
              }
            }
          }

          & h1{
            margin: 0;
            font-size: 54px;
          }




        // & h1 {
        //   font-family: Montserrat;
        //   font-weight: 600;
        //   font-size: 48px;
        //   text-transform: uppercase;
        //   margin-bottom: 0;

        //   @include respond-to("<=s") {
        //     font-size: 40px;
        //     //line-height: var(--f-h1-line-height);
        //   }
        // }

        // & select {
        //   background: transparent;
        //   border: none;
        //   width: 30px;
        //   //width: 250px;
        //   height: 30px;
        //   transform: translateX(-6px) translateY(0px);
        //   text-transform: uppercase;
        //   box-shadow: none;

        //   cursor: pointer;

        //   &:focus {
        //     outline: none;
        //   }
        // }

        // & .custom-select {
        //   height: 20px;
        //   width: 20px;
        //   align-self: center;

         




        //   position: relative;
        //   top: -4px;
        //   right: -15px;

        //   @include respond-to("<=s") {
        //     top: -3px;
        //     right: -10px;
        //   }

        //   &:hover {
        //     &::after {
        //       background-color: var(--color-neutral-dark-mode-04);
        //     }
        //   }

        //   &::after {
        //     content: "";
        //     display: table-cell;
        //     text-align: center;

        //     width: 25px;
        //     height: 25px;
        //     padding: 2px;
        //     background-image: url(../../assets/get-scrt/icon-repeat-no-bg.svg);
        //     background-repeat: no-repeat;
        //     background-size: 18px;
        //     background-position: center;
        //     background-color: var(--color-neutral-dark-mode-02);
        //     border-radius: 50%;
        //     position: absolute;
        //     top: 0;
        //     right: 0;

        //     pointer-events: none;
        //   }

        //   @include respond-to("<=s") {
        //     height: 28px;
        //     width: 28px;

        //     &::after {
        //       content: "";
        //       width: 28px;
        //       height: 28px;
        //       background-size: 20px;
        //       //padding: 1px;
        //     }
        //   }
        // }

        
        
      }
    }
  }
}
</style>
