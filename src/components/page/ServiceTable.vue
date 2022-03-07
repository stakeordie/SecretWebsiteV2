<template>
  <section class="service-status">
    <div class="service-status__tabs">
      <button class="service-status__tabs__tab" >CEXes</button>
      <button class="service-status__tabs__tab" >DEXes</button>
      <button class="service-status__tabs__tab" >Wallets</button>
      <button class="service-status__tabs__tab" >Bridges</button>
      <button class="service-status__tabs__tab" >Websites</button>
      <button class="service-status__tabs__tab" >Bots</button>
    </div>

    <div class="service-status__table">
      <ul class="service-status__table__columns">
        <li class="row-service">EXCHANGE</li>
        <li class="row-status">DEPOSIT </li>
        <li class="row-status">WITHDRAWS</li>
        <li class="row-status">TRADING</li>
        <li class="row-status">Last updated</li>
      </ul>

      <ul class="service-status__table__row"  v-for="(item, index) in material" :key="index">
        <li class="service-status__table__row__item">
          <img class="item-img" :src="item.imageUrl" alt=""  />
          <div class="item-info">
            <h6>{{ item.service }}</h6> 
          <a :href="item.url" class="item-link">{{ item.urlService }}</a>
          </div>
        </li>
        <li class="service-status__table__row__status">{{ item.status1 }}<div class="status-heading">Deposit</div></li>
        <li class="service-status__table__row__status">{{ item.status2 }}<div class="status-heading">Widthraw</div></li>
        <li class="service-status__table__row__status">{{ item.status3 }}<div class="status-heading">Trading</div></li>
        <li class="service-status__table__row__update">{{ item.time }}<div class="status-heading">Last updated</div></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      material: [
        {
          imageUrl: "temp/services/apeswap.svg",
          service: "Apeswap",
          urlService: "www.apeswap.finance",
          url: "https://www.apeswap.finance",

          status1: "ACTIVE",
          status2:"ACTIVE",
          status3: "ACTIVE",
          time: "23:59 12/12/2021"
        },
        {
          imageUrl: "temp/services/secret-swap.svg",
          service: "SecretSwap",
          urlService: "www.secretswap.io",
          url: "https://www.secretswap.io",

          status1: "ACTIVE",
          status2:"ACTIVE",
          status3: "ACTIVE",
          time: "23:59 12/12/2021"
        },
        {
          imageUrl: "temp/services/sienna-swap.svg",
          service: "SiennaSwap",
          urlService: "www.sienna.network",
          url: "https://www.sienna.network",

          status1: "ACTIVE",
          status2:"ACTIVE",
          status3: "ACTIVE",
          time: "23:59 12/12/2021"
        },
        {
          imageUrl: "temp/services/uniswap-uni-logo.svg",
          service: "UniSwap",
          urlService: "www.sushi.com",
          url: "https://www.sushi.com",

          status1: "ACTIVE",
          status2:"ACTIVE",
          status3: "ACTIVE",
          time: "23:59 12/12/2021"
        },
        {
          imageUrl: "temp/services/sushi-swap.svg",
          service: "SushiSwap",
          urlService: "www.uniswap.org",
          url: "https://www.uniswap.org",

          status1: "ACTIVE",
          status2:"ACTIVE",
          status3: "ACTIVE",
          time: "23:59 12/12/2021"
        },
      ]
    }
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.service-status{


  &__tabs{
    display: inline-block;
    margin-bottom: 16px;
    

    &__tab{
      cursor: pointer;
      background-color: transparent;
      color: var(--color-neutral-dark-mode-05);
      font-weight: 600;
      font-size: var(--f-h5-text-size);
      padding: 10px 16px;
      border-radius: 10px;
       margin: 0;

      &:hover{
        background: transparent;
      }

      &:focus{
        background: var(--color-neutral-dark-mode-03);
        color: var( --color-analog-primary-white);
      }
    }

    
  }


    &__table{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0;
        border-radius: 10px;
        overflow: hidden;

        &__columns{
            display: grid;
            grid-template-columns: repeat(5,1fr);
            grid-gap: 4px;
            background: var(--color-neutral-dark-mode-03);
            margin: 0;
            padding: 0;
            
             @include respond-to("<=s"){
                 
                  grid-template-columns: 1fr;        
              }
            

            li{
              color: var(--color-neutral-dark-mode-05);
              text-transform: uppercase;
              font-size: var( --f-h6-text-size);
              font-weight: 600;
              padding: var(--f-gutter) var(--f-gutter-l);
              margin-bottom: 0;
              
            }

            .row-service{
              @include respond-to("<=s"){
                         
              }
            }

            .row-status{
              @include respond-to("<=s"){
                  display: none;          
              }

            }
        }
         &__row{
            display: grid;
            grid-template-columns: repeat(5,1fr);
            grid-gap: 4px;
            background: var(--color-neutral-dark-mode-04);
            margin: 0;
            padding: 0;
            border-top: 1px solid var(--color-analog-secondary-gray);
            

            @include respond-to("<=xs"){
              grid-template-columns: 1fr;
              
            }

            li{
              padding: var(--f-gutter) var(--f-gutter-l);
              margin-bottom: 0;
             

            }
            
            &__item{
              display: grid;
              grid-template-columns: 42px 1fr;
              gap: 16px;


              .item-img{
                width: 42px;
                height: 42px;
              }

              h6{
                font-size: var( --f-h6-text-size);
              font-weight: 600;
              margin-bottom: 0;
              }
              

              a{
                font-size: 12px;
                font-weight: 400;
                font-family: var(--f-default-text-font);
                line-height: 0;
                color: var(--color-analog-tertiary-blue);
              }
            }
            &__status{
              text-transform: uppercase;
              font-size: var( --f-h6-text-size);
              font-weight: 700;
              color: var(--color-analog-secondary-green);
              align-self: center;

               @include respond-to ("<=xs"){
                transform: translateX(58px);
                
              }

            }

            &__update{
              font-size: var(--f-default-text-size);
              font-weight: 200;
              color: var(--color-neutral-dark-mode-05);
              align-self: center;

              @include respond-to ("<=xs"){
                transform: translateX(58px);
                
              }
              
            }
            
            .status-heading{
              font-size: 12px;
              font-weight: 100;
              text-transform: none;
              color: var(--color-neutral-dark-mode-05);
                
                @include respond-to(">=m"){
                  display: none;
                }
              }

        }
    }
}

</style>