<template>
  <section class="page-ecosystem__app-verticals">
      <h3 class="page-ecosystem__app-verticals__title">
          Get Grants to Build
      </h3>
      <div class="page-ecosystem__app-verticals__content" >
        <div class="page-ecosystem__app-verticals__content__item" v-for="(item, index) in reasons" :key="index">
            <img :src="item.imageUrl" alt=""  class="page-ecosystem__app-verticals__content__item__icon" />
            <h4 class="page-ecosystem__app-verticals__content__item__name">{{ item.title }}</h4>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    data() {
    return {
      reasons: [
        {
          imageUrl: "../img/funding/icon-appverticals-secret-app.svg",
          title: "Secret Apps",
        },
        {
          imageUrl: "../img/funding/icon-appverticals-secret-nfts.svg",
          title: "Secret NFTs",
        },
        {
          imageUrl: "../img/funding/icon-appverticals-defi.svg",
          title: "DeFi",
        },
        {
          imageUrl: "../img/funding/icon-appverticals-infrastructure.svg",
          title: "Infrastructure",
        },
        {
          imageUrl: "../img/funding/icon-appverticals-tooling.svg",
          title: "Tooling",
        },
        
      ],
    };
  },
}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.page-ecosystem__app-verticals{
    display: grid;
    row-gap: var(--f-gutter-l);
    text-align: center;
    padding-bottom: var(--f-gutter-l) ;
    


    &__title{
        text-align: center;
        padding: 0;
        
    }

    &__content{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 24px;
        align-items: baseline;

        @include respond-to("<=s"){
            grid-template-columns: repeat(3, 1fr);
            margin: auto;

            &__item{

                &:nth-child(1),
                &:nth-child(2){
                    transform: translateX(60%);
                }

                &:nth-child(3),
                &:nth-child(4),
                &:nth-child(5){
                grid-row-start: 2;
                }

            }
        }

        @include respond-to("<=xs"){
            grid-template-columns: 1fr;
            row-gap: 24px;

            &__item{

                &:nth-child(1),
                &:nth-child(2){
                    transform: translateX(0);
                }

                &:nth-child(3),
                &:nth-child(4),
                &:nth-child(5){
                grid-row-start:auto
                }

            }
        }

        &__item{
            display: grid;
            row-gap: 10px;

            &__icon{
                margin: auto;
                padding: 8px;
                width: 96px;
                height: 96px;
            }

            
        }
    }
}

</style>