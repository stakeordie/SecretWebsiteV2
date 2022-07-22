<template>
  <!-- <section :class="aboutGetStarted" class="about-get-started">
    <div class="about-get-started__left">
      <h6>Get Started</h6>
      <h2>About Secret (SCRT)</h2>
      <p>
        Secret (SCRT) is a cryptocurrency and the native coin of the Secret
        Network blockchain. Just like Ethereum (ETH) and Bitcoin (BTC), you hold
        your Secret (SCRT) in a wallet and spend it when you want to use Secret
        Network.
      </p>
      <nav>
        <a href="#purchase">Buy SCRT</a>
        <span>•</span>
        <a href="#store">Store SCRT</a>
        <span>•</span>
        <a href="#stake-scrt">Stake SCRT</a>
        <span>•</span>
        <a href="#scrt-governance">SCRT Governance</a>
        <span>•</span>
        <a href="#apps">SCRT Apps</a>
      </nav>
    </div>
    <div class="about-get-started__right">
      <img src="@/assets/illustration-logo-scrt-3d.svg" alt="" />
    </div>
  </section> -->
  <section>
    <div class="about-get-started" v-for="(element, index) in aboutGetStarted" :key="index">
      <div class="about-get-started__left">
        <h6>{{element.subtitle}}</h6>
        <h2>{{element.title}}</h2>
        <p>
          {{element.message}}
        </p>
        <nav>
          <a :href="`#${element.anchorBuyScrt[0].url}`">{{element.anchorBuyScrt[0].Title}}</a>
          <span>•</span>
          <a :href="`#${element.anchorStoreScrt[0].url}`">{{element.anchorStoreScrt[0].Title}}</a>
          <span>•</span>
          <a :href="`#${element.anchorStakeScrt[0].url}`">{{element.anchorStakeScrt[0].Title}}</a>
          <span>•</span>
          <a :href="`#${element.anchorScrtGovernance[0].url}`">{{element.anchorScrtGovernance[0].Title}}</a>
          <span>•</span>
          <a :href="`#${element.anchorScrtApps[0].url}`">{{element.anchorScrtApps[0].Title}}</a>
        </nav>
      </div>
      <div class="about-get-started__right">
        <img :src="element.image[0].url" :alt="element.title">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      swirlSpecialIsOn: false,
    };
  },
  computed: {
    aboutGetStarted() {
      const content = this.$static.aboutScrt.edges.map((it) => it.node.aboutScrtGetStarted);
      return content;
    },
  },
};
</script>

<static-query>
query {
  aboutScrt: allStrapiAboutScrt {
    edges {
      node {
        aboutScrtGetStarted: about_scrt_get_started{
          id
          subtitle
          title
          message
          image {
            url
          }
          anchorBuyScrt: anchor_buy_scrt{
            id
            Title: title
            url
          }
          anchorStoreScrt: anchor_store_scrt{
            id
            Title: title
            url
          }
          anchorStakeScrt: anchor_stake_scrt{
            id
            Title: title
            url
          }
          anchorScrtApps: anchor_scrt_apps{
            id
            Title: title
            url
          }
          anchorScrtGovernance: anchor_scrt_governance{
            id
            Title: title
            url
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.about-get-started {
  display: grid;
  grid-template-columns: 66% 1fr;
  @include respond-to("<=m") {
    grid-template-columns: 1fr;
    gap: var(--f-gutter-xl);
  }
  align-items: center;
  padding-top: 36px;
  padding-top: 56px;
  // padding-left:0;
  // padding-left:0;
  &__left {
    display: grid;
    gap: 8px;
    @include respond-to("<=m") {
      order: 2;
    }
    * {
      margin: 0;
    }
    h6 {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: var(--color-highkey-secondary-yellow);
      text-transform: uppercase;
    }
    h2 {
      font-weight: 600;
      font-size: 36px;
      line-height: 48px;
      font-family: var(--f-default-headers-font);
    }
    p {
      font-size: 20px;
      line-height: 28px;
      max-width: 768px;
    }
    nav {
      display: grid;
      grid-auto-flow: column;
      gap: var(--f-gutter);
      width: max-content;
      @include respond-to("<=m") {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
      }
    }
  }
  &__right {
    display: grid;
    justify-content: center;
  }
}
</style>
