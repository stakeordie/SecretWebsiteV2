<template>
  <section class="about-secret-network-possibilities">
      <div class="about-secret-network-possibilities__header">
        <h3 class="about-secret-network-possibilities__header__title">
            The possibilities Secret Contracts unlock
        </h3>
        <p class="about-secret-network-possibilities__header__p">
          A Secret’s smart contracts e.g. “Secret Contracts” are private-by-default. Input, output, and state are
          encrypted and can’t be viewed by others, unless they’re given access. This opens up use cases that aren’t
          possible on public-by-default blockchains.
        </p>
      </div>
      <div class="about-secret-network-possibilities__content" >
        <div class="about-secret-network-possibilities__content__item" v-for="(item, index) in reasons" :key="index">
            <img :src="item.imageUrl" alt=""  class="about-secret-network-possibilities__content__item__icon" />
            <h4 class="about-secret-network-possibilities__content__item__name">{{ item.title }}</h4>
            <p class="about-secret-network-possibilities__content__item__p">
              {{ item.description}}
            </p>
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
          imageUrl: "/img/about-secret-network/secret-tokens-icon.svg",
          title: "Secret Tokens",
          description: "Explore the possibilities of customizable privacy and build groundbreaking apps in areas ranging from finance to gaming.",
        },
        {
          imageUrl: "/img/about-secret-network/defi-icon.svg",
          title: "DeFi",
          description: "With over $400M in funding and grants available to any developer to build on Secret Network, no idea is too big.",
        },
        {
         imageUrl: "/img/about-secret-network/nfts-icon.svg",
          title: "NFTs",
          description:"Build towards a better web by creating decentralized solutions that protect & empower users.",
        },
        {
          imageUrl: "/img/about-secret-network/gaming-icon.svg",
          title: "Games",
          description:"With over $400M in funding and grants available to any developer to build on Secret Network, no idea is too big.",
        },
        {
          imageUrl: "/img/about-secret-network/daos-icon.svg",
          title: "DAOs",
          description:"With Cosmos IBC & bridges to 4+ ecosystems (and counting), apps built on Secret Network can be used by billions of users all across Web3. ",
        },
        
      ],
    };
  },
}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.about-secret-network-possibilities{
    display: grid;
    row-gap: var(--f-gutter-l);
    text-align: center;
    //padding-bottom: var(--f-gutter-l) ;
    
    @include respond-to ("<=s"){
      padding: var(--f-gutter);
      row-gap: var(--f-gutter);
    }

    &__header{
      max-width: 800px;
      padding: 10px;
      margin: auto;

      &__title{
        text-align: center;
        padding: 0;
        font-size: 36px;
        line-height: 40px;
       
       @include respond-to ("<=s"){
        font-size: var(--f-h3-text-size);
      }
        
      }
      &__p{
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
      }
    }
    


    

    &__content{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 24px;
        align-items: baseline;
       
       @include respond-to ("<=s"){
          grid-gap: var(--f-gutter);
          
        }

        @include respond-to("<=m"){
            grid-template-columns: repeat(3, 1fr);
            margin: auto;
            
            //padding: var(--f-gutter);

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
            row-gap: 0;
            

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
            padding: 26px 16px;

            @include respond-to("<=s"){
            padding: 16px;
          }

           @include respond-to("<=xs"){
            max-width: 310px;
          }

            &__icon{
                margin: auto;
                padding: 8px;
                width: 96px;
                height: 96px;
            }

            &__p{
              text-align: left;

            }

            
        }
    }
}

</style>