<template>
  <section class="about-wallets__wrapper" :class="aboutScrtWallets">
    <div class="about-wallets__wrapper__loop"
      v-for="(element, index)  in aboutScrtWallets"
      :key="index"
    >
      <h6>{{element.subtitle}}</h6>
      <h3>{{element.title}}</h3>
      <p>{{element.message}}</p>
      <h5>{{element.options}}</h5>
      <!-- <h5>{{element.whatWalletUseCard[0].id}}</h5> -->
      <!-- methods -->
      <section class="about-wallets__wrapper__loop__collection">
        <a href="" target="blank" rel="noopener noreferrer"  class="about-wallets__wrapper__loop__collection__wallet" v-for="(wallet, index)  in aboutScrtWallets[0].whatWalletUseCard"
        :key="index">
          <img :src="wallet.image.url" :alt="wallet.title">
          <h6>{{wallet.title}}</h6> 
          <p class="recommended">{{wallet.note}}</p> 
        </a>
      </section>
      <p class="about-wallets__wrapper__loop__note">{{element.note}}</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    aboutScrtWallets() {
      const content = this.$static.aboutScrtWallets.edges.map(it => it.node.walletsToUse[0]);
      // console.log(content);
      return content;
    }
  }
}
</script>

<static-query>

query {
  aboutScrtWallets: allStrapiAboutScrt {
    edges {
      node {
				wallet_to_use {
          subtitle
          title
          message
          options
          note
          whatWalletUseCard: what_wallet_use_card {
            id
            image {
              url
            }
            title
            note
          }
        }
      }
    }
  } 
}

</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.about-wallets__wrapper {
  display: grid;
  gap: var(--f-gutter);

  // &__collection {
  //   display: grid;
  //   gap: var(--f-gutter);
  //   grid-template-columns: repeat(4, 1fr);
  //   @include respond-to("<=m") {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  //   justify-items: stretch;
  //   align-items: stretch;
  //   // max-height: 174px;
  //   * {margin: 0}
  //   &__wallet {
  //     padding: 25px;
  //     background: var(--color-neutral-dark-mode-03);
  //     display: grid;
  //     row-gap: var(--f-gutter);
  //     align-items: center;
  //     justify-items: center;
  //     justify-content: center;
  //     border-radius: 10px;
  //     transition: 0.2s ease;
  //     position: relative;
  //     *{margin: 0;}
  //     h6 {
  //       color: white !important;
  //       font-weight: 600;
  //       line-height: 24px;
  //       font-family: var(--f-default-headers-font);
  //       font-size: 16px !important;
  //     }
  //     p {
  //       font-size: 16px !important;
  //       position: absolute;
  //        left: 50%;
  //       bottom: -20%;
  //       transform: translate(-50%,-50%);
  //     }
  //     &:hover {
  //       transform: var(--card-hover-transform);
  //       box-shadow: var(--card-hover-shadow) var(--accent-gray);
  //     }
  //   }
  // }
  &__loop {
    display: grid;
    gap: var(--f-gutter-xs);
    &__collection {
    display: grid;
    gap: var(--f-gutter);
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: var(--f-gutter-s);
    @include respond-to("<=m") {
      grid-template-columns: repeat(2, 1fr);
    }
    justify-items: stretch;
    align-items: stretch;
    // max-height: 174px;
    * {margin: 0}
    &__wallet {
      padding: 25px;
      background: var(--color-neutral-dark-mode-03);
      display: grid;
      row-gap: var(--f-gutter);
      align-items: center;
      justify-items: center;
      justify-content: center;
      border-radius: 10px;
      transition: 0.2s ease;
      position: relative;
      *{margin: 0;}
      h6 {
        color: white !important;
        font-weight: 600;
        line-height: 24px;
        font-family: var(--f-default-headers-font);
        font-size: 16px !important;
      }
      p {
        font-size: 16px !important;
        position: absolute;
         left: 50%;
        bottom: -20%;
        transform: translate(-50%,-50%);
      }
      &:hover {
        transform: var(--card-hover-transform);
        box-shadow: var(--card-hover-shadow) var(--accent-gray);
      }
    }
  }
    &__note {
    color: #748BA5;
    font-size: 16px !important;
    text-align: center;
    padding-top: var(--f-gutter-s);
  }
  }
}
</style>